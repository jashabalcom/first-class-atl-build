
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SMSConsentCheckboxes } from "@/components/ui/sms-consent-checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { submitLead, getFormTimestamp } from "@/lib/lead-submission";
import { formatPhoneNumber, unformatPhoneNumber } from "@/lib/phone-formatter";
import { Label } from "@/components/ui/label";
import { ProjectTypeCard } from "@/components/ui/project-type-card";
import { Home, Droplet, Layers, Plus, Building2, Store, Shield, Lock, Clock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// A2P Compliant: SMS consent is OPTIONAL - not required to submit
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional().refine(
    (val) => !val || val.length === 0 || unformatPhoneNumber(val).length === 10,
    "Please enter a valid 10-digit phone number"
  ),
  city: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().optional(),
  message: z.string().trim().min(10, "Please provide at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  marketingSmsConsent: z.boolean().optional().default(false),
  nonMarketingSmsConsent: z.boolean().optional().default(false),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  showCity?: boolean;
  showTimeline?: boolean;
}

const ContactForm = ({ 
  heading = "Let's Build Something Great",
  subheading = "Request your free consultation today.",
  buttonText = "Request My Consultation",
  showCity = false,
  showTimeline = false
}: ContactFormProps) => {
  const { toast } = useToast();
  
  // Anti-spam: honeypot fields and timestamp
  const [honeypotWebsite, setHoneypotWebsite] = useState('');
  const [honeypotGotcha, setHoneypotGotcha] = useState('');
  const [formTimestamp] = useState(() => getFormTimestamp());

  const projectTypes = [
    { value: "kitchen", label: "Kitchen Remodeling", icon: Home },
    { value: "bathroom", label: "Bathroom Remodeling", icon: Droplet },
    { value: "basement", label: "Basement Finishing", icon: Layers },
    { value: "addition", label: "Home Addition", icon: Plus },
    { value: "whole-home", label: "Home Renovation", icon: Building2 },
    { value: "commercial", label: "Commercial Build-Out", icon: Store },
  ];
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields, dirtyFields },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      projectType: "",
      timeline: "",
      message: "",
      marketingSmsConsent: false,
      nonMarketingSmsConsent: false,
    },
  });

  const phoneValue = watch("phone");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await submitLead({
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        projectType: data.projectType,
        city: data.city,
        timeline: data.timeline,
        message: data.message,
        formSource: 'contact',
        marketingSmsConsent: data.marketingSmsConsent,
        nonMarketingSmsConsent: data.nonMarketingSmsConsent,
        consentTimestamp: new Date().toISOString(),
        // Anti-spam fields
        website: honeypotWebsite,
        _gotcha: honeypotGotcha,
        _timestamp: formTimestamp,
      });

      if (result.success) {
        toast({
          title: "Thanks—We Received Your Request",
          description: "A project specialist will contact you within one business day to discuss next steps.",
        });
        reset();
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Something went wrong. Please try again or call us at 678-671-6336.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us at 678-671-6336.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact-form" className="py-12 md:py-16 lg:py-24 bg-muted/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">{heading}</h2>
          <p className="text-muted-foreground text-base md:text-lg">{subheading}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingInput
              label="Name *"
              {...register("name")}
              error={errors.name?.message}
              success={touchedFields.name && !errors.name && dirtyFields.name}
              maxLength={100}
            />

            <FloatingInput
              label="Email *"
              type="email"
              {...register("email")}
              error={errors.email?.message}
              success={touchedFields.email && !errors.email && dirtyFields.email}
              maxLength={255}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingInput
              label="Phone"
              type="tel"
              value={phoneValue}
              onChange={handlePhoneChange}
              error={errors.phone?.message}
              success={touchedFields.phone && !errors.phone && dirtyFields.phone}
              placeholder="(555) 555-5555"
            />

            {showCity && (
              <FloatingInput
                label="City/Neighborhood"
                {...register("city")}
                error={errors.city?.message}
                success={touchedFields.city && !errors.city && dirtyFields.city}
              />
            )}
          </div>

          {/* A2P Compliant: SMS consent immediately after phone number */}
          <div className="pt-2">
            <p className="text-sm font-medium text-foreground mb-3">
              SMS Text Message Preferences (Optional)
            </p>
            <SMSConsentCheckboxes
              marketingConsent={watch("marketingSmsConsent") || false}
              nonMarketingConsent={watch("nonMarketingSmsConsent") || false}
              onMarketingChange={(checked) => setValue("marketingSmsConsent", checked)}
              onNonMarketingChange={(checked) => setValue("nonMarketingSmsConsent", checked)}
            />
          </div>

          {/* Project Type Cards */}
          <div className="space-y-3">
            <Label className="text-sm">Project Type *</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {projectTypes.map((type) => (
                <ProjectTypeCard
                  key={type.value}
                  icon={type.icon}
                  title={type.label}
                  value={type.value}
                  selected={watch("projectType") === type.value}
                  onClick={() => setValue("projectType", type.value, { shouldValidate: true, shouldDirty: true, shouldTouch: true })}
                />
              ))}
            </div>
            {errors.projectType && (
              <p className="text-xs text-destructive animate-fade-in flex items-center gap-1">
                <span className="text-base">⚠</span>
                {errors.projectType.message}
              </p>
            )}
          </div>

          {/* Timeline Dropdown */}
          {showTimeline && (
            <div className="space-y-2">
              <Label htmlFor="timeline" className="text-sm">Ideal Timeline</Label>
              <Select
                {...register("timeline")}
                onValueChange={(value) => setValue("timeline", value, { shouldValidate: true, shouldDirty: true })}
              >
                <SelectTrigger id="timeline" className="bg-background">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="1-3months">1-3 months</SelectItem>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="6plus">6+ months</SelectItem>
                  <SelectItem value="planning">Just planning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <FloatingTextarea
            label="Tell us about your project *"
            {...register("message")}
            error={errors.message?.message}
            success={touchedFields.message && !errors.message && dirtyFields.message}
            rows={5}
            maxLength={1000}
            showCharCount
          />


          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-4 border-y bg-muted/20">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="hidden sm:inline">Licensed & Insured</span>
              <span className="sm:hidden">Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Lock className="h-4 w-4 text-blue-600" />
              <span className="hidden sm:inline">Secure & Private</span>
              <span className="sm:hidden">Secure</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-accent" />
              <span>24hr Response</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              type="submit" 
              variant="cta" 
              size="lg" 
              className="w-full transition-all hover:scale-[1.02] active:scale-[0.98]" 
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? "animate-pulse" : ""}>
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : (
                  buttonText
                )}
              </span>
            </Button>
            
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
            
            <p className="text-sm text-center">
              Prefer to talk now?{" "}
              <a href="tel:678-671-6336" className="text-accent font-semibold hover:underline transition-all hover:scale-105 inline-block">
                Call 678-671-6336
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
