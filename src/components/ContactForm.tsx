import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingTextarea } from "@/components/ui/floating-textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { formatPhoneNumber, unformatPhoneNumber } from "@/lib/phone-formatter";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().optional().refine(
    (val) => !val || unformatPhoneNumber(val).length === 10,
    "Please enter a valid 10-digit phone number"
  ),
  city: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().optional(),
  message: z.string().trim().min(10, "Please provide at least 10 characters").max(1000, "Message must be less than 1000 characters"),
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
    },
  });

  const phoneValue = watch("phone");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Thanks—We Received Your Request",
        description: "A project specialist will contact you within one business day to discuss next steps.",
      });

      // Reset form
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground text-lg">{subheading}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-sm">Project Type *</Label>
              <Select
                {...register("projectType")}
                onValueChange={(value) => setValue("projectType", value, { shouldValidate: true, shouldDirty: true })}
              >
                <SelectTrigger id="projectType" className={errors.projectType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                  <SelectItem value="bathroom">Bathroom Remodeling</SelectItem>
                  <SelectItem value="basement">Basement Finishing</SelectItem>
                  <SelectItem value="addition">Home Addition</SelectItem>
                  <SelectItem value="whole-home">Whole-Home Renovation</SelectItem>
                  <SelectItem value="commercial">Commercial Build-Out</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-xs text-destructive animate-fade-in">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {showTimeline && (
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-sm">Ideal Timeline</Label>
                <Select
                  {...register("timeline")}
                  onValueChange={(value) => setValue("timeline", value, { shouldValidate: true, shouldDirty: true })}
                >
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1-3months">1-3 months</SelectItem>
                    <SelectItem value="3-6months">3-6 months</SelectItem>
                    <SelectItem value="6plus">6+ months</SelectItem>
                    <SelectItem value="planning">Just planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          <FloatingTextarea
            label="Tell us about your project *"
            {...register("message")}
            error={errors.message?.message}
            success={touchedFields.message && !errors.message && dirtyFields.message}
            rows={5}
            maxLength={1000}
            showCharCount
          />

          <div className="space-y-4">
            <Button 
              type="submit" 
              variant="cta" 
              size="lg" 
              className="w-full transition-all" 
              disabled={isSubmitting}
            >
              <span className={isSubmitting ? "animate-pulse" : ""}>
                {isSubmitting ? "Sending..." : buttonText}
              </span>
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Your information is confidential. No spam—ever.
            </p>
            
            <p className="text-sm text-center">
              Prefer to talk now?{" "}
              <a href="tel:678-671-6336" className="text-accent font-semibold hover:underline">
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
