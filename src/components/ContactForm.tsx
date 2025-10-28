import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

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
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Thanks—We Received Your Request",
        description: "A project specialist will contact you within one business day to discuss next steps.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        projectType: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-muted-foreground text-lg">{subheading}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                maxLength={255}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            {showCity && (
              <div className="space-y-2">
                <Label htmlFor="city">City/Neighborhood</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger id="projectType">
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
            </div>

            {showTimeline && (
              <div className="space-y-2">
                <Label htmlFor="timeline">Ideal Timeline</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
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

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your project *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              required
              maxLength={1000}
            />
          </div>

          <div className="space-y-4">
            <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : buttonText}
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
