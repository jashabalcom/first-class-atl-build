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
import { toast } from "sonner";
import { Store, Utensils, Briefcase, Building2, Wrench, PlusCircle, Phone, Check } from "lucide-react";
import { formatPhoneNumber, unformatPhoneNumber } from "@/lib/phone-formatter";
import { submitLead } from "@/lib/lead-submission";
import { Link } from "react-router-dom";

// A2P Compliant: SMS consent is OPTIONAL - not required to submit
const commercialSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().min(10, "Phone number must be 10 digits"),
  projectType: z.string().min(1, "Please select a project type"),
  companyName: z.string().trim().max(200, "Company name must be less than 200 characters").optional(),
  businessType: z.string().trim().max(100, "Business type must be less than 100 characters").optional(),
  squareFootage: z.string().optional(),
  city: z.string().trim().max(100, "City must be less than 100 characters").optional(),
  timeline: z.string().trim().max(100, "Timeline must be less than 100 characters").optional(),
  message: z.string().trim().min(10, "Please provide at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  marketingSmsConsent: z.boolean().optional().default(false),
  nonMarketingSmsConsent: z.boolean().optional().default(false),
});

type CommercialFormData = z.infer<typeof commercialSchema>;

// Commercial project types
const commercialProjectTypes = [
  { id: "retail", title: "Retail Build-Out", icon: Store },
  { id: "restaurant", title: "Restaurant Fit-Out", icon: Utensils },
  { id: "office", title: "Office Renovation", icon: Briefcase },
  { id: "tenant", title: "Tenant Improvement", icon: Building2 },
  { id: "facilities", title: "Facilities Management", icon: Wrench },
  { id: "other", title: "Other Commercial", icon: PlusCircle },
];

const STORAGE_KEY = "commercial-form-progress";

interface MultiStepCommercialFormProps {
  showCity?: boolean;
  showTimeline?: boolean;
}

export function MultiStepCommercialForm({ showCity = true, showTimeline = true }: MultiStepCommercialFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const steps = ["Business Info", "Project Details", "Description", "Review"];

  const form = useForm<CommercialFormData>({
    resolver: zodResolver(commercialSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      companyName: "",
      businessType: "",
      squareFootage: "",
      city: "",
      timeline: "",
      message: "",
      marketingSmsConsent: false,
      nonMarketingSmsConsent: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = form;

  const watchedFields = watch();

  // Load saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        Object.keys(data).forEach((key) => {
          setValue(key as keyof CommercialFormData, data[key]);
        });
      } catch (error) {
        console.error("Failed to load saved form data:", error);
      }
    }
  }, [setValue]);

  // Auto-save progress
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const formData = watch();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [watchedFields, watch]);

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      setCurrentStep(currentStep + 1);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof CommercialFormData)[] = [];

    switch (currentStep) {
      case 0: // Business Info
        fieldsToValidate = ["name", "email", "phone"];
        if (watchedFields.companyName) fieldsToValidate.push("companyName");
        break;
      case 1: // Project Details
        fieldsToValidate = ["projectType"];
        if (watchedFields.businessType) fieldsToValidate.push("businessType");
        if (watchedFields.city) fieldsToValidate.push("city");
        break;
      case 2: // Description
        fieldsToValidate = ["message"];
        if (watchedFields.timeline) fieldsToValidate.push("timeline");
        break;
      case 3: // Review
        return true;
    }

    return await trigger(fieldsToValidate);
  };

  const onSubmit = async (data: CommercialFormData) => {
    try {
      const result = await submitLead({
        name: data.name,
        email: data.email,
        phone: unformatPhoneNumber(data.phone),
        projectType: data.projectType,
        companyName: data.companyName,
        businessType: data.businessType,
        squareFootage: data.squareFootage,
        city: data.city,
        timeline: data.timeline,
        message: data.message,
        formSource: 'commercial',
        marketingSmsConsent: data.marketingSmsConsent,
        nonMarketingSmsConsent: data.nonMarketingSmsConsent,
        consentTimestamp: new Date().toISOString(),
      });

      if (!result.success) {
        toast.error(result.error || "Failed to send request. Please try again or call us at 678-671-6336.");
        return;
      }

      localStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Failed to send request. Please try again or call us at 678-671-6336.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Business Info
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Tell Us About Your Business</h2>
            <p className="text-center text-muted-foreground mb-8">
              Let's start with your contact information
            </p>

            <FloatingInput
              label="Company Name (Optional)"
              {...register("companyName")}
              error={errors.companyName?.message}
            />

            <FloatingInput
              label="Your Name *"
              {...register("name")}
              error={errors.name?.message}
            />

            <FloatingInput
              label="Email Address *"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />

            <FloatingInput
              label="Phone Number *"
              type="tel"
              {...register("phone")}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setValue("phone", formatted);
              }}
              error={errors.phone?.message}
            />
          </div>
        );

      case 1: // Project Details
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Project Details</h2>
            <p className="text-center text-muted-foreground mb-8">
              What type of commercial project do you need?
            </p>

            <div>
              <label className="block text-sm font-medium mb-3">
                Select Project Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {commercialProjectTypes.map((type) => (
                  <ProjectTypeCard
                    key={type.id}
                    icon={type.icon}
                    title={type.title}
                    value={type.id}
                    selected={watchedFields.projectType === type.id}
                    onClick={() => setValue("projectType", type.id)}
                  />
                ))}
              </div>
              {errors.projectType && (
                <p className="text-sm text-destructive mt-2">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            <FloatingInput
              label="Business Type (Optional)"
              placeholder="e.g., Retail, Healthcare, Corporate Office"
              {...register("businessType")}
              error={errors.businessType?.message}
            />

            <FloatingInput
              label="Approximate Square Footage (Optional)"
              placeholder="e.g., 2,500 sq ft"
              {...register("squareFootage")}
            />

            {showCity && (
              <FloatingInput
                label="Project Location / City (Optional)"
                {...register("city")}
                error={errors.city?.message}
              />
            )}
          </div>
        );

      case 2: // Description
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Project Description</h2>
            <p className="text-center text-muted-foreground mb-8">
              Tell us more about your commercial project
            </p>

            {showTimeline && (
              <FloatingInput
                label="Project Urgency / Timeline (Optional)"
                placeholder="e.g., ASAP, 2-3 months, Planning phase"
                {...register("timeline")}
                error={errors.timeline?.message}
              />
            )}

            <FloatingTextarea
              label="Project Details *"
              rows={6}
              showCharCount
              maxLength={1000}
              {...register("message")}
              error={errors.message?.message}
            />

            <p className="text-xs text-muted-foreground">
              Please include details about your vision, any specific requirements, code compliance needs, and timeline considerations.
            </p>
          </div>
        );

      case 3: // Review
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Review Your Information</h2>
            <p className="text-center text-muted-foreground mb-8">
              Please review your details before submitting
            </p>

            <div className="space-y-4 bg-muted/50 rounded-lg p-6">
              {watchedFields.companyName && (
                <div>
                  <p className="text-sm text-muted-foreground">Company Name</p>
                  <p className="font-medium">{watchedFields.companyName}</p>
                </div>
              )}

              <div>
                <p className="text-sm text-muted-foreground">Your Name</p>
                <p className="font-medium">{watchedFields.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{watchedFields.email}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{watchedFields.phone}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Project Type</p>
                <p className="font-medium">
                  {commercialProjectTypes.find((t) => t.id === watchedFields.projectType)?.title}
                </p>
              </div>

              {watchedFields.businessType && (
                <div>
                  <p className="text-sm text-muted-foreground">Business Type</p>
                  <p className="font-medium">{watchedFields.businessType}</p>
                </div>
              )}

              {watchedFields.squareFootage && (
                <div>
                  <p className="text-sm text-muted-foreground">Square Footage</p>
                  <p className="font-medium">{watchedFields.squareFootage}</p>
                </div>
              )}

              {showCity && watchedFields.city && (
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{watchedFields.city}</p>
                </div>
              )}

              {showTimeline && watchedFields.timeline && (
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium">{watchedFields.timeline}</p>
                </div>
              )}

              <div>
                <p className="text-sm text-muted-foreground">Project Details</p>
                <p className="font-medium whitespace-pre-wrap">{watchedFields.message}</p>
              </div>
            </div>

            {/* A2P Compliant: Two separate OPTIONAL consent checkboxes */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">SMS Communication Preferences (Optional)</h4>
              <p className="text-xs text-muted-foreground">
                Choose which types of text messages you'd like to receive. These are optional.
              </p>
            </div>
            <SMSConsentCheckboxes
              marketingConsent={watchedFields.marketingSmsConsent || false}
              nonMarketingConsent={watchedFields.nonMarketingSmsConsent || false}
              onMarketingChange={(checked) => setValue("marketingSmsConsent", checked)}
              onNonMarketingChange={(checked) => setValue("nonMarketingSmsConsent", checked)}
            />
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
            Thank You for Your Commercial Inquiry!
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've received your commercial project details. A dedicated project manager will contact you 
            within one business day to discuss your requirements and schedule a site assessment.
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-foreground mb-3">What Happens Next?</h3>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>We'll review your commercial project requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>A dedicated project manager will contact you within one business day</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Schedule your free site assessment and consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Receive a detailed, transparent proposal with timeline</span>
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
        <div className="flex gap-4 pt-6">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              className="flex-1"
            >
              Previous
            </Button>
          )}

          {currentStep < steps.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1"
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              className="flex-1"
            >
              Submit Request
            </Button>
          )}
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
      </form>
        </>
      )}
    </div>
  );
}
