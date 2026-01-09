import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | First Class Construction Group</title>
        <meta name="description" content="Terms of Service for First Class Construction Group. Read our terms and conditions for using our website and services." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container py-12 md:py-16">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">Last Updated: January 6, 2025</p>
            
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website fcconstruct.com ("Site") operated by First Class Construction Group ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">2. Use of Our Website</h2>
              <p>You agree to use our Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the Site</li>
                <li>Use the Site to transmit harmful code or interfere with its operation</li>
                <li>Use any automated system to access the Site without our permission</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">3. Services Description</h2>
              <p>
                First Class Construction Group provides residential renovation and commercial construction services in the Metro Atlanta area. Information on our Site regarding services, pricing, and availability is subject to change without notice.
              </p>
              <p>
                Any estimates provided through our Site are preliminary and subject to change based on actual project assessment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">4. Communications Consent</h2>
              <p>
                By submitting your contact information through our forms, you consent to receive communications from us regarding your inquiry, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email communications about your project</li>
                <li>Phone calls to discuss your project needs</li>
                <li>SMS/text messages if you have opted in</li>
              </ul>
              <p>
                You may opt out of marketing communications at any time by following the unsubscribe instructions or contacting us directly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">5. SMS/Text Message Terms</h2>
              <p>
                By using our website and submitting your information, you agree to receive SMS/text messages 
                from FC Construct for service-related communications as described in our Privacy Policy.
              </p>
              <p>If you opt in to receive SMS/text messages from us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You consent to receive automated and non-automated SMS text messages related to estimates, project updates, invoices, and customer service</li>
                <li>Message frequency may vary</li>
                <li>Message and data rates may apply</li>
                <li>Reply STOP to cancel at any time</li>
                <li>Reply HELP for assistance</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
              </ul>
              <p>
                By opting in, you confirm that the phone number provided is yours and that you are authorized 
                to receive SMS text messages at that number.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">6. Intellectual Property</h2>
              <p>
                All content on this Site, including text, graphics, logos, images, and software, is the property of First Class Construction Group or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">7. User Submissions</h2>
              <p>
                Any information, photos, or content you submit through our Site may be used by us for business purposes, including marketing and promotional activities, unless otherwise specified.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">8. Disclaimer of Warranties</h2>
              <p>
                THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">9. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, FIRST CLASS CONSTRUCTION GROUP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SITE.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless First Class Construction Group, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Site or violation of these Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">11. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. We are not responsible for the content or practices of these external sites. Your use of third-party websites is at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Georgia.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">15. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
              <ul className="list-none space-y-2">
                <li><strong>Phone:</strong> 678-671-6336</li>
                <li><strong>Email:</strong> info@fcconstruct.com</li>
                <li><strong>Address:</strong> Metro Atlanta Area, Georgia</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
