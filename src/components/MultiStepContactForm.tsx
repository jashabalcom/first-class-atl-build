import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { ProjectTypeCard } from "@/components/ui/project-type-card";
import { FormStepIndicator } from "@/components/ui/form-step-indicator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/phone-formatter";
import { submitToGHLWebhook } from "@/lib/ghl-webhook";
import { Shield, Lock, Clock, ArrowLeft, ArrowRight, Check, Phone, Hammer, Bath, Home, PlusCircle, Building2, Wrench } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(14, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  city: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { id: "kitchen", title: "Kitchen Remodel", icon: Hammer },
  { id: "bathroom", title: "Bathroom Remodel", icon: Bath },
  { id: "basement", title: "Basement Finish", icon: Home },
  { id: "addition", title: "Home Addition", icon: PlusCircle },
  { id: "whole-home", title: "Whole Home Remodel", icon: Building2 },
  { id: "other", title: "Other Project", icon: Wrench },
];

const STORAGE_KEY = "residential-form-progress";

interface MultiStepContactFormProps {
  showCity?: boolean;
  showTimeline?: boolean;
}

export function MultiStepContactForm({ showCity = true, showTimeline = true }: MultiStepContactFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const steps = ["Basic Info", "Project Details", "Description", "Review"];

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
    },
    mode: "onChange",
  });

  const { handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = form;
  const formValues = watch();

  // Load saved progress on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        Object.keys(parsed).forEach((key) => {
          setValue(key as keyof ContactFormData, parsed[key]);
        });
        toast.info("We restored your previous form progress");
      } catch (e) {
        console.error("Failed to restore form data:", e);
      }
    }
  }, [setValue]);

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

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const nameParts = data.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const tags = ['Website-Lead', 'MultiStep-Form'];
      if (data.projectType) {
        tags.push(data.projectType);
      }
      if (data.timeline) {
        tags.push(`Timeline-${data.timeline}`);
      }

      const customFields = [
        { key: 'project_type', value: data.projectType },
        { key: 'message', value: data.message },
        { key: 'form_source', value: 'multistep' }
      ];

      if (data.city) {
        customFields.push({ key: 'city', value: data.city });
      }
      if (data.timeline) {
        customFields.push({ key: 'timeline', value: data.timeline });
      }

      await submitToGHLWebhook({
        webhookUrl: import.meta.env.VITE_GHL_WEBHOOK_CONTACT,
        data: {
          firstName,
          lastName,
          email: data.email,
          phone: data.phone || '',
          tags,
          customFields,
        }
      });

      localStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error('MultiStep form webhook submission error:', error);
      toast.error("Failed to send request. Please try again or call us at 678-671-6336.");
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

            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Your information is secure and will never be shared with third parties.</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={formRef} className="w-full max-w-3xl mx-auto">
      {isSubmitted ? (
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
          <FormStepIndicator steps={steps} currentStep={currentStep} completedSteps={completedSteps} />

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

          {currentStep < steps.length - 1 ? (
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

        {/* Alternative Contact */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">Prefer to talk? Call us now</p>
          <a
            href="tel:+16786716336"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            <Phone className="h-4 w-4" />
            (678) 671-6336
          </a>
        </div>
      </form>
      </>
      )}
    </div>
  );
}
