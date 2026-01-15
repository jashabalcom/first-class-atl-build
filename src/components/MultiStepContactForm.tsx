import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { ProjectTypeCard } from "@/components/ui/project-type-card";
import { FormStepIndicator } from "@/components/ui/form-step-indicator";
import { SMSConsentCheckboxes } from "@/components/ui/sms-consent-checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/phone-formatter";
import { submitLead, getFormTimestamp } from "@/lib/lead-submission";
import { AIRecommendations } from "@/components/AIRecommendations";
import { FormQualifier } from "@/components/FormQualifier";
import { GamifiedProgressBar } from "@/components/GamifiedProgressBar";
import VoiceRecorder from "@/components/VoiceRecorder";
import { Shield, Lock, Clock, ArrowLeft, ArrowRight, Check, Phone, Hammer, Bath, Home, PlusCircle, Building2, Wrench, SkipForward, Sparkles, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";

// A2P Compliant: SMS consent is OPTIONAL - not required to submit
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(14, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  city: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  marketingSmsConsent: z.boolean().optional().default(false),
  nonMarketingSmsConsent: z.boolean().optional().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { id: "kitchen", title: "Kitchen Remodel", icon: Hammer },
  { id: "bathroom", title: "Bathroom Remodel", icon: Bath },
  { id: "basement", title: "Basement Finish", icon: Home },
  { id: "addition", title: "Home Addition", icon: PlusCircle },
  { id: "whole-home", title: "Home Remodel", icon: Building2 },
  { id: "other", title: "Other Project", icon: Wrench },
];

const STORAGE_KEY = "residential-form-progress";

interface MultiStepContactFormProps {
  showCity?: boolean;
  showTimeline?: boolean;
  skipQualifier?: boolean;
}

export function MultiStepContactForm({ showCity = true, showTimeline = true, skipQualifier = false }: MultiStepContactFormProps) {
  const [showQualifier, setShowQualifier] = useState(!skipQualifier);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recsComplete, setRecsComplete] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  // Anti-spam: honeypot fields and timestamp
  const [honeypotWebsite, setHoneypotWebsite] = useState('');
  const [honeypotGotcha, setHoneypotGotcha] = useState('');
  const [formTimestamp] = useState(() => getFormTimestamp());

  const steps = ["Basic Info", "Project Details", "Description", "AI Insights", "Review"];

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      city: "",
      timeline: "",
      message: "",
      marketingSmsConsent: false,
      nonMarketingSmsConsent: false,
    },
    mode: "onChange",
  });

  const { handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = form;
  const formValues = watch();

  // Load saved progress on mount - only if meaningful data exists
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Only restore if there's actual meaningful user-entered data
        const hasMeaningfulData = parsed.name || parsed.email || parsed.phone || parsed.message;
        
        if (hasMeaningfulData) {
          Object.keys(parsed).forEach((key) => {
            setValue(key as keyof ContactFormData, parsed[key]);
          });
          // Skip qualifier if we have saved data
          setShowQualifier(false);
          toast.info("We restored your previous form progress");
        }
      } catch (e) {
        console.error("Failed to restore form data:", e);
      }
    }
  }, [setValue]);

  const handleQualifierComplete = (projectType: string, timeline: string) => {
    setValue("projectType", projectType);
    setValue("timeline", timeline);
    setShowQualifier(false);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Auto-save on form changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formValues]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted, { shouldValidate: true });
  };

  const validateCurrentStep = async (): Promise<boolean> => {
    let fieldsToValidate: (keyof ContactFormData)[] = [];

    if (currentStep === 0) {
      fieldsToValidate = ["name", "email", "phone"];
    } else if (currentStep === 1) {
      fieldsToValidate = ["projectType"];
      if (showCity) fieldsToValidate.push("city");
      if (showTimeline) fieldsToValidate.push("timeline");
    } else if (currentStep === 2) {
      fieldsToValidate = ["message"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    
    if (isValid) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      toast.error("Please fill in all required fields correctly");
    }
  };

  const handleSkipRecs = () => {
    setCompletedSteps([...completedSteps, currentStep]);
    setCurrentStep(currentStep + 1);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = async (data: ContactFormData) => {
    console.log('[MultiStepForm] Submitting form data...');
    try {
      const result = await submitLead({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        projectType: data.projectType,
        city: data.city,
        timeline: data.timeline,
        message: data.message,
        formSource: 'multistep',
        marketingSmsConsent: data.marketingSmsConsent,
        nonMarketingSmsConsent: data.nonMarketingSmsConsent,
        consentTimestamp: new Date().toISOString(),
        // Anti-spam fields
        website: honeypotWebsite,
        _gotcha: honeypotGotcha,
        _timestamp: formTimestamp,
      });

      console.log('[MultiStepForm] Submission result:', result);

      if (result.success) {
        localStorage.removeItem(STORAGE_KEY);
        setIsSubmitted(true);
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.error('[MultiStepForm] Submission failed:', result.error);
        // Show the specific error message from the backend
        toast.error(result.error || "Failed to send request. Please try again or call us at 678-671-6336.");
      }
    } catch (error) {
      console.error('[MultiStepForm] Exception during submission:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`${errorMessage}. Please try again or call us at 678-671-6336.`);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Let's Get Started</h3>
              <p className="text-muted-foreground">Tell us how to reach you</p>
            </div>
            
            <FloatingInput
              label="Your Name *"
              value={formValues.name}
              onChange={(e) => setValue("name", e.target.value, { shouldValidate: true })}
              error={errors.name?.message}
            />

            <FloatingInput
              label="Email Address *"
              type="email"
              value={formValues.email}
              onChange={(e) => setValue("email", e.target.value, { shouldValidate: true })}
              error={errors.email?.message}
            />

            <FloatingInput
              label="Phone Number *"
              type="tel"
              value={formValues.phone}
              onChange={handlePhoneChange}
              error={errors.phone?.message}
              placeholder="(555) 555-5555"
            />

            {/* A2P Compliant: SMS consent immediately after phone number */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-3">
                SMS Text Message Preferences (Optional)
              </p>
              <SMSConsentCheckboxes
                marketingConsent={formValues.marketingSmsConsent || false}
                nonMarketingConsent={formValues.nonMarketingSmsConsent || false}
                onMarketingChange={(checked) => setValue("marketingSmsConsent", checked)}
                onNonMarketingChange={(checked) => setValue("nonMarketingSmsConsent", checked)}
              />
            </div>
            
            {/* Honeypot fields - hidden from humans, visible to bots */}
            <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
              <input
                type="text"
                name="website"
                value={honeypotWebsite}
                onChange={(e) => setHoneypotWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="text"
                name="_gotcha"
                value={honeypotGotcha}
                onChange={(e) => setHoneypotGotcha(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Project Details</h3>
              <p className="text-muted-foreground">What type of project are you planning?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-4">
                Project Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <ProjectTypeCard
                    key={type.id}
                    icon={type.icon}
                    title={type.title}
                    value={type.id}
                    selected={formValues.projectType === type.id}
                    onClick={() => setValue("projectType", type.id, { shouldValidate: true })}
                  />
                ))}
              </div>
              {errors.projectType && (
                <p className="text-sm text-destructive mt-2 animate-fade-in">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {showCity && (
              <FloatingInput
                label="City or Zip Code"
                value={formValues.city || ""}
                onChange={(e) => setValue("city", e.target.value, { shouldValidate: true })}
                error={errors.city?.message}
              />
            )}

            {showTimeline && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Timeline
                </label>
                <Select
                  value={formValues.timeline}
                  onValueChange={(value) => setValue("timeline", value, { shouldValidate: true })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="When would you like to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="1-3-months">1-3 Months</SelectItem>
                    <SelectItem value="3-6-months">3-6 Months</SelectItem>
                    <SelectItem value="6-12-months">6-12 Months</SelectItem>
                    <SelectItem value="planning">Just Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Tell Us More</h3>
              <p className="text-muted-foreground">Describe your project vision</p>
            </div>

            {/* Voice Recorder */}
            <VoiceRecorder
              projectType={projectTypes.find(t => t.id === formValues.projectType)?.title || formValues.projectType}
              onTranscription={(text) => setValue("message", text, { shouldValidate: true })}
              className="mb-4"
            />

            <div className="relative">
              <div className="absolute inset-x-0 top-0 flex justify-center -translate-y-1/2">
                <span className="bg-background px-3 text-xs text-muted-foreground">or type below</span>
              </div>
            </div>

            <FloatingTextarea
              label="Project Description *"
              value={formValues.message}
              onChange={(e) => setValue("message", e.target.value, { shouldValidate: true })}
              error={errors.message?.message}
              showCharCount
              rows={6}
              placeholder="Tell us about your project goals, style preferences, budget range, or any specific requirements..."
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Personalized Insights</h3>
              <p className="text-muted-foreground">Ideas to prepare for your consultation</p>
            </div>

            <AIRecommendations
              projectType={projectTypes.find(t => t.id === formValues.projectType)?.title || formValues.projectType}
              message={formValues.message}
              city={formValues.city}
              timeline={formValues.timeline}
              onComplete={() => setRecsComplete(true)}
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Review Your Request</h3>
              <p className="text-muted-foreground">Everything look good?</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Contact Info</h4>
                <p className="text-foreground">{formValues.name}</p>
                <p className="text-foreground">{formValues.email}</p>
                <p className="text-foreground">{formValues.phone}</p>
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Project Details</h4>
                <p className="text-foreground">
                  {projectTypes.find((t) => t.id === formValues.projectType)?.title}
                </p>
                {showCity && formValues.city && (
                  <p className="text-foreground">Location: {formValues.city}</p>
                )}
                {showTimeline && formValues.timeline && (
                  <p className="text-foreground">Timeline: {formValues.timeline}</p>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-1">Description</h4>
                <p className="text-foreground whitespace-pre-wrap">{formValues.message}</p>
              </div>
            </div>

            {/* SMS Preferences Summary */}
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-1">SMS Preferences</h4>
              <p className="text-foreground text-sm">
                {formValues.marketingSmsConsent ? "✓ Marketing messages" : "✗ No marketing messages"}
              </p>
              <p className="text-foreground text-sm">
                {formValues.nonMarketingSmsConsent ? "✓ Project updates/service messages" : "✗ No service messages"}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={formRef} className="w-full max-w-3xl mx-auto">
      {showQualifier ? (
        <FormQualifier onComplete={handleQualifierComplete} />
      ) : isSubmitted ? (
        <div className="text-center space-y-6 py-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Thank You for Your Request!
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've received your project details and will review them carefully. 
            A member of our team will reach out to you within 24 hours to discuss your vision.
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-foreground mb-3">What Happens Next?</h3>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>We'll review your project details</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>A project manager will contact you within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Schedule your free in-home consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Receive your detailed, transparent quote</span>
              </li>
            </ul>
          </div>

          {/* Room Visualizer CTA */}
          <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Wand2 className="h-5 w-5 text-accent" />
              <span className="font-semibold text-foreground">While You Wait...</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Try our FREE AI Room Visualizer to see what your remodel could look like!
            </p>
            <a
              href="/room-visualizer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              Try Room Visualizer
            </a>
          </div>
          
          <div className="pt-6">
            <p className="text-sm text-muted-foreground mb-3">
              Need immediate assistance?
            </p>
            <a
              href="tel:+16786716336"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-lg"
            >
              <Phone className="h-5 w-5" />
              (678) 671-6336
            </a>
          </div>
        </div>
      ) : (
        <>
          {/* Gamified Progress Bar */}
          <GamifiedProgressBar 
            currentStep={currentStep} 
            totalSteps={steps.length} 
            completedSteps={completedSteps} 
          />

          {/* AI Teaser Banner */}
          <div className="mb-6 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 rounded-xl p-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">
                  ✨ Complete this form to unlock <span className="text-accent font-semibold">FREE AI Design Insights</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Get personalized recommendations for your {formValues.projectType ? projectTypes.find(t => t.id === formValues.projectType)?.title?.toLowerCase() : 'project'}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-border">
              {currentStep > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
              ) : (
                <div />
              )}

              {currentStep === 3 ? (
                <div className="flex gap-2 ml-auto">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleSkipRecs}
                    className="gap-2 text-muted-foreground"
                  >
                    <SkipForward className="h-4 w-4" />
                    Skip
                  </Button>
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="gap-2"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ) : currentStep < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="gap-2 ml-auto"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gap-2 ml-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" />
                      Submit Request
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xs text-muted-foreground">Secure & Private</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-xs text-muted-foreground">24hr Response</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <span className="text-xs text-muted-foreground">No Spam Ever</span>
              </div>
            </div>

            {/* Footer Links */}
            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our{" "}
              <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">
                Terms of Service
              </Link>.
            </p>

            {/* Alternative Contact */}
            <div className="text-center pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Prefer to talk? Call us now</p>
              <a
                href="tel:+16786716336"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
              >
                <Phone className="h-5 w-5" />
                (678) 671-6336
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
