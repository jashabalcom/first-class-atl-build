import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | First Class Construction Group</title>
        <meta name="description" content="Privacy Policy for First Class Construction Group. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow bg-background">
        <div className="container py-12 md:py-16">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p className="text-sm text-muted-foreground">Last Updated: January 14, 2025</p>
            
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">1. Introduction</h2>
              <p>
                First Class Construction Group ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fcconstruct.com or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-primary">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Project details and preferences</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-primary">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you project estimates and related communications</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized transactions</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">4. SMS/Text Message Communications</h2>
              <p>
                First Class Construction Group offers two types of SMS text message communications:
              </p>
              
              <h3 className="text-xl font-semibold text-primary">Non-Marketing Messages (Customer Care)</h3>
              <p>
                If you opt in, you may receive non-marketing text messages about estimates, project updates, 
                invoices, scheduling, and customer service communications.
              </p>
              
              <h3 className="text-xl font-semibold text-primary">Marketing Messages</h3>
              <p>
                If you separately opt in, you may receive marketing text messages about promotions, 
                special offers, and company news.
              </p>
              
              <h3 className="text-xl font-semibold text-primary">Message Details</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Message frequency may vary based on your project activity</li>
                <li>Message and data rates may apply</li>
                <li>You may opt out at any time by replying STOP to any message</li>
                <li>Reply HELP for assistance</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
              </ul>
              
              <div className="bg-muted/50 p-4 rounded-lg border border-border mt-4">
                <h3 className="text-lg font-semibold text-primary mb-2">SMS Privacy Notice</h3>
                <p className="text-sm">
                  <strong>No mobile information will be shared with third parties/affiliates for 
                  marketing/promotional purposes.</strong> Information sharing to subcontractors in 
                  support services, such as customer service, is permitted. All other use case categories 
                  exclude text messaging originator opt-in data and consent; this information will not be 
                  shared with any third parties.
                </p>
              </div>
              
              <p>
                Your consent to receive SMS messages is not a condition of purchasing any goods or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">5. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. Cookies are small data files stored on your device that help us improve your experience.
              </p>
              <h3 className="text-xl font-semibold text-primary">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">6. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Business partners for project fulfillment</li>
                <li>Legal authorities when required by law</li>
                <li>Successors in the event of a merger or acquisition</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">8. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">9. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-semibold text-primary">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
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

export default PrivacyPolicy;
