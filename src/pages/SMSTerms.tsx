import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { MessageSquare, Phone, Mail, CheckSquare, XCircle, HelpCircle, Shield } from "lucide-react";

const SMSTerms = () => {
  return (
    <>
      <Helmet>
        <title>SMS Terms & Conditions | First Class Construction Group</title>
        <meta 
          name="description" 
          content="SMS/Text message terms and opt-in information for First Class Construction Group. Learn about message types, frequency, and how to opt out." 
        />
        <link rel="canonical" href="https://www.fcconstruct.com/sms-terms" />
      </Helmet>
      <Header />
      
      <main className="min-h-screen py-12 md:py-16 bg-background">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">SMS Communications</span>
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              SMS/Text Message Terms
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Information about text message communications from First Class Construction Group
            </p>
          </div>

          {/* Business Identity */}
          <section className="bg-card border rounded-xl p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="font-playfair text-xl font-bold mb-2">Business Identity</h2>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">First Class Construction Group</strong> is a licensed general contractor 
                  serving Metro Atlanta for residential renovations and commercial build-outs.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <a href="tel:678-671-6336" className="flex items-center gap-2 text-accent hover:underline">
                    <Phone className="h-4 w-4" />
                    678-671-6336
                  </a>
                  <a href="mailto:info@fcconstruct.com" className="flex items-center gap-2 text-accent hover:underline">
                    <Mail className="h-4 w-4" />
                    info@fcconstruct.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Message Types */}
          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-bold mb-6">Message Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Marketing Messages */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Marketing Messages</h3>
                    <span className="text-xs text-muted-foreground uppercase">Optional</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Promotional offers, seasonal discounts, and special renovation deals.
                </p>
                <p className="text-sm">
                  <strong>Frequency:</strong> Up to 4 messages per month
                </p>
              </div>

              {/* Non-Marketing Messages */}
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Non-Marketing Messages</h3>
                    <span className="text-xs text-muted-foreground uppercase">Optional</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Estimates, project updates, appointment reminders, scheduling confirmations, invoices, 
                  and customer service communications.
                </p>
                <p className="text-sm">
                  <strong>Frequency:</strong> Varies based on project activity
                </p>
              </div>
            </div>
          </section>

          {/* How to Opt-In */}
          <section className="bg-muted/30 rounded-xl p-6 md:p-8 mb-8">
            <h2 className="font-playfair text-2xl font-bold mb-6">How to Opt-In</h2>
            <p className="text-muted-foreground mb-6">
              Customers opt in by completing forms on our website and checking the appropriate consent checkbox(es). 
              <strong className="text-foreground"> Both checkboxes are optional</strong> — you can submit forms without consenting to SMS.
            </p>
            
            {/* Visual Checkbox Examples */}
            <div className="space-y-4">
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckSquare className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    I agree to receive <strong>marketing text messages</strong> (e.g., promotions, seasonal offers) 
                    from First Class Construction Group at the phone number provided. Consent is not a condition of purchase. 
                    Msg & data rates may apply. Msg frequency varies. Reply STOP to cancel, HELP for help.
                  </p>
                </div>
              </div>
              <div className="bg-card border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckSquare className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    I agree to receive <strong>non-marketing text messages</strong> (e.g., estimates, project updates, 
                    scheduling, customer service) from First Class Construction Group at the phone number provided. 
                    Msg & data rates may apply. Msg frequency varies. Reply STOP to cancel, HELP for help.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Opt-Out & Help */}
          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-bold mb-6">Opt-Out & Help</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <XCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-semibold">To Stop Messages</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Text <strong className="text-foreground">STOP</strong> to cancel at any time. 
                  You will receive a confirmation message and no further texts will be sent.
                </p>
              </div>

              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <HelpCircle className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">For Assistance</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Text <strong className="text-foreground">HELP</strong> for assistance, or contact us directly at{" "}
                  <a href="mailto:info@fcconstruct.com" className="text-accent hover:underline">info@fcconstruct.com</a> or{" "}
                  <a href="tel:678-671-6336" className="text-accent hover:underline">678-671-6336</a>.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-card border rounded-xl p-6 md:p-8 mb-8">
            <h2 className="font-playfair text-2xl font-bold mb-4">Additional Information</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Message and data rates may apply depending on your mobile carrier and plan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Carriers are not liable for delayed or undelivered messages.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>
                  <strong className="text-foreground">No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.</strong> All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                <span>Consent to receive text messages is not a condition of purchase or service.</span>
              </li>
            </ul>
          </section>

          {/* Links */}
          <section className="text-center">
            <p className="text-muted-foreground mb-4">
              For more information, please review our policies:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/privacy-policy" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SMSTerms;
