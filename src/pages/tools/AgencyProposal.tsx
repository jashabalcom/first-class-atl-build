import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Clock, Users, Zap, Target, BarChart3 } from "lucide-react";

// EDIT THESE VARIABLES FOR EACH PROPOSAL
const CLIENT_NAME = "Gessan";
const CLIENT_COMPANY = "First Class Construction";
const PROPOSAL_DATE = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
const YOUR_NAME = "Major Leads Agency";
const YOUR_PHONE = "(404) 555-0123";
const YOUR_EMAIL = "hello@majorleadsagency.com";
const YOUR_WEBSITE = "www.majorleadsagency.com";

const AgencyProposal = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Print Styles */}
      <style>{`
        @media print {
          body { 
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
          .page-break-before { page-break-before: always; }
          .avoid-break { page-break-inside: avoid; }
          @page { 
            margin: 0.75in; 
            size: letter portrait;
          }
          h1 { font-size: 28pt !important; }
          h2 { font-size: 20pt !important; }
          h3 { font-size: 16pt !important; }
          p, li { font-size: 11pt !important; }
        }
        
        .brand-blue { color: #00579C; }
        .brand-pink { color: #E9356D; }
        .bg-brand-blue { background-color: #00579C; }
        .bg-brand-pink { background-color: #E9356D; }
        .border-brand-blue { border-color: #00579C; }
        .border-brand-pink { border-color: #E9356D; }
      `}</style>

      {/* Print Button - Only shows on screen */}
      <div className="no-print fixed top-4 right-4 z-50">
        <Button 
          onClick={() => window.print()} 
          className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg"
        >
          Save as PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        {/* Cover Page */}
        <div className="text-center space-y-8 pb-16 page-break">
          <div className="flex justify-center mb-8">
            <img 
              src="/assets/mla-logo.png" 
              alt="Major Leads Agency" 
              className="h-24 object-contain"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold brand-blue" style={{ fontFamily: 'Playfair Display, serif' }}>
              Marketing Automation Proposal
            </h1>
            <div className="h-1 w-32 bg-brand-pink mx-auto"></div>
          </div>

          <div className="space-y-6 mt-16">
            <div className="text-2xl font-semibold text-gray-700">
              Prepared for:
            </div>
            <div className="text-3xl font-bold brand-blue">
              {CLIENT_NAME}
            </div>
            <div className="text-xl text-gray-600">
              {CLIENT_COMPANY}
            </div>
          </div>

          <div className="mt-20 text-gray-600 space-y-2">
            <p className="text-lg">{PROPOSAL_DATE}</p>
            <Separator className="my-4 w-48 mx-auto" />
            <p className="font-semibold brand-blue text-lg">{YOUR_NAME}</p>
            <p>{YOUR_PHONE}</p>
            <p>{YOUR_EMAIL}</p>
            <p>{YOUR_WEBSITE}</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Executive Summary
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              In today's competitive construction and remodeling market, the speed at which you respond to leads directly impacts your bottom line. Studies show that responding to a lead within 5 minutes versus 30 minutes can increase conversion rates by up to <strong className="brand-pink">400%</strong>.
            </p>
            <p>
              This proposal outlines how {YOUR_NAME} will implement a comprehensive marketing automation system to help {CLIENT_COMPANY} capture more leads, respond faster, and convert more prospects into paying clients—all while saving your team valuable time.
            </p>
            <Card className="bg-blue-50 border-brand-blue">
              <CardContent className="pt-6">
                <p className="font-semibold text-lg brand-blue">
                  Expected Results Within 90 Days:
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>30-50% increase in lead response rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Average response time reduced to under 2 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>10-15 hours per week saved on manual follow-up tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>3-5x increase in online reviews generated</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="page-break"></div>

        {/* The Problem */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            The Challenge
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Construction and remodeling businesses face unique challenges when it comes to lead management and customer communication:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-l-4 border-brand-pink">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 brand-pink" />
                    Slow Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  You're on job sites, in meetings, or working with clients. By the time you see a lead notification, hours have passed—and they've already called your competitor.
                </CardContent>
              </Card>

              <Card className="border-l-4 border-brand-blue">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Users className="h-5 w-5 brand-blue" />
                    Manual Follow-Up
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Every lead requires multiple touchpoints—calls, texts, emails, appointment reminders. Your team spends hours on repetitive tasks instead of closing deals.
                </CardContent>
              </Card>

              <Card className="border-l-4 border-brand-pink">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 brand-pink" />
                    Missed Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Leads fall through the cracks. No-shows cost you time and money. Past clients never get asked for referrals or reviews.
                </CardContent>
              </Card>

              <Card className="border-l-4 border-brand-blue">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 brand-blue" />
                    No Visibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  You don't know which marketing channels are working, where leads drop off, or how to improve your sales process.
                </CardContent>
              </Card>
            </div>

            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <p className="font-semibold text-red-800 text-lg mb-2">The Cost of Inaction:</p>
                <p className="text-gray-700">
                  A construction business receiving 50 leads per month with an average project value of $15,000 and a 20% close rate is generating $150,000 in monthly revenue. By increasing the close rate to just 30% through faster response and better follow-up, that same business would generate <strong>$225,000—an additional $75,000 per month</strong> without spending more on marketing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="page-break"></div>

        {/* The Solution */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            The Solution
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {YOUR_NAME} specializes in implementing a proprietary marketing automation system specifically customized for construction and remodeling companies.
            </p>

            <h3 className="text-2xl font-semibold brand-blue mt-6">What Our System Does</h3>
            <p>
              Our all-in-one platform replaces 10+ separate tools while automating your entire customer journey—from the moment a lead comes in to the day they leave you a 5-star review.
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="h-10 w-10 brand-pink mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Instant Response</h4>
                  <p className="text-sm text-gray-600">Automated SMS & email sent within 30 seconds of lead submission</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 brand-blue mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Smart Follow-Up</h4>
                  <p className="text-sm text-gray-600">Multi-channel sequences that nurture leads automatically</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-10 w-10 brand-pink mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">All-in-One</h4>
                  <p className="text-sm text-gray-600">CRM, calendar, messaging, reviews, and more in one place</p>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold brand-blue mt-6">Why Our System is Perfect for Construction</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Built for Service Businesses:</strong> Designed specifically for companies that book appointments and manage projects—not e-commerce or SaaS.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Two-Way Texting:</strong> Your team can text leads from their desktop using your business number—leads think they're texting you directly.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Appointment Automation:</strong> Integrated calendar booking, reminders, and no-show prevention that actually works.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Review Generation:</strong> Automatically request reviews from happy clients at the perfect moment—and funnel negative feedback privately.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Pipeline Visibility:</strong> See exactly where every lead is in your sales process and get notified when follow-up is needed.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="page-break"></div>

        {/* Service Packages */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Service Packages
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Choose the package that best fits your business needs and growth goals. All packages include ongoing support and optimization.
          </p>

          {/* Package 1 */}
          <Card className="border-2 border-gray-300 avoid-break">
            <CardHeader className="bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl brand-blue">Lead Response System</CardTitle>
                  <p className="text-gray-600 mt-2">Perfect for businesses getting started with automation</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">One-time Setup</p>
                  <p className="text-2xl font-bold brand-blue">$1,997</p>
                  <p className="text-sm text-gray-600 mt-2">Monthly Management</p>
                  <p className="text-xl font-bold brand-pink">$797/month</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-3 brand-blue">What's Included:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Instant Lead Notifications:</strong> SMS & email alerts to your team within 30 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Automated First Response:</strong> Personalized SMS to lead confirming receipt and next steps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>5-Day Follow-Up Sequence:</strong> Automated texts and emails for new leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>CRM Setup:</strong> Contact management and lead tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Two-Way Texting:</strong> Text leads from your desktop using business number</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Basic Calendar Integration:</strong> Sync with Google/Outlook calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Team Training:</strong> 1-hour onboarding session</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Monthly Support:</strong> Email support and system monitoring</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 italic">Note: Platform software fee ($97/month) included in monthly management fee</p>
            </CardContent>
          </Card>

          {/* Package 2 - Recommended */}
          <Card className="border-4 border-brand-pink avoid-break shadow-lg relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-pink text-white px-4 py-1">
              ⭐ RECOMMENDED
            </Badge>
            <CardHeader className="bg-gradient-to-r from-blue-50 to-pink-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl brand-blue">Complete Client Journey</CardTitle>
                  <p className="text-gray-600 mt-2">End-to-end automation from lead to loyal customer</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">One-time Setup</p>
                  <p className="text-2xl font-bold brand-blue">$3,997</p>
                  <p className="text-sm text-gray-600 mt-2">Monthly Management</p>
                  <p className="text-xl font-bold brand-pink">$1,497/month</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-3 brand-blue">Everything in Lead Response System, PLUS:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Appointment Booking System:</strong> Custom booking page integrated with your calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Automated Reminders:</strong> Confirmation, 24-hour, and 1-hour appointment reminders via SMS/email</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>No-Show Prevention:</strong> Automated re-engagement sequences for missed appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Pipeline Management:</strong> Custom sales pipeline with automated stage transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Quote Follow-Up Automation:</strong> Automated sequences for pending proposals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Review Request Automation:</strong> Automated 5-star review requests after project completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Negative Feedback Filtering:</strong> Unhappy customers directed to private feedback form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Post-Project Follow-Up:</strong> Stay-in-touch sequences for past clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Reporting Dashboard:</strong> Weekly performance reports and insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 brand-pink mt-0.5 flex-shrink-0" />
                  <span><strong>Priority Support:</strong> Phone & email support, quarterly strategy calls</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 italic">Note: Platform software fee ($297/month) included in monthly management fee</p>
            </CardContent>
          </Card>

          <div className="page-break"></div>

          {/* Package 3 */}
          <Card className="border-2 border-brand-blue avoid-break">
            <CardHeader className="bg-blue-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl brand-blue">Growth Accelerator</CardTitle>
                  <p className="text-gray-600 mt-2">Full-service marketing automation + lead generation</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">One-time Setup</p>
                  <p className="text-2xl font-bold brand-blue">$6,997</p>
                  <p className="text-sm text-gray-600 mt-2">Monthly Management</p>
                  <p className="text-xl font-bold brand-pink">$2,997/month</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-3 brand-blue">Everything in Complete Client Journey, PLUS:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Landing Page Design:</strong> 3 custom landing pages for services/offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Facebook/Instagram Lead Forms:</strong> Direct integration with GHL</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Google My Business Integration:</strong> Automated review posting and Q&A monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Referral Program Automation:</strong> Automated referral request sequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Seasonal Campaign Templates:</strong> Pre-built campaigns for spring, summer, holidays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Email Newsletter Automation:</strong> Monthly value-add content to past clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Advanced Analytics:</strong> ROI tracking, attribution reporting, conversion analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>A/B Testing:</strong> Continuous testing and optimization of messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>White-Glove Service:</strong> Dedicated account manager, bi-weekly strategy calls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Custom Integrations:</strong> Connect to Quickbooks, estimating software, etc.</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 italic">Note: Platform software fee ($297/month) included in monthly management fee</p>
            </CardContent>
          </Card>
        </div>

        <div className="page-break"></div>

        {/* ROI Projection */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Return on Investment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Based on conservative industry benchmarks, here's what you can expect when implementing our <strong>Complete Client Journey</strong> package:
          </p>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Projected Results (Month 3-12)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Revenue Impact
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>30% increase</strong> in lead-to-appointment conversion</li>
                    <li><strong>25% increase</strong> in appointment-to-quote conversion</li>
                    <li><strong>15% increase</strong> in quote-to-sale conversion</li>
                    <li><strong>Result:</strong> $50,000-$150,000+ additional annual revenue</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    Time Savings
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>12-15 hours/week</strong> saved on manual follow-up</li>
                    <li><strong>6-8 hours/week</strong> saved on appointment coordination</li>
                    <li><strong>2-3 hours/week</strong> saved on review requests</li>
                    <li><strong>Result:</strong> 80-100 hours per month freed up</li>
                  </ul>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-center text-lg">12-Month Investment vs. Return</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Total Investment</p>
                    <p className="text-2xl font-bold text-red-600">$21,961</p>
                    <p className="text-xs text-gray-500">(Setup + 12 months)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Projected Return</p>
                    <p className="text-2xl font-bold text-green-600">$75,000+</p>
                    <p className="text-xs text-gray-500">(Conservative estimate)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">ROI</p>
                    <p className="text-2xl font-bold brand-pink">242%</p>
                    <p className="text-xs text-gray-500">(First year)</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4 italic text-center">
                *Results vary based on lead volume, average project value, and current conversion rates. These projections are based on actual client results across similar construction businesses.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Timeline */}
        <div className="space-y-6 mt-8 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Implementation Timeline
          </h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg">Week 1-2: Foundation & Setup</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• Platform account creation and configuration</li>
                  <li>• Business phone number setup and integration</li>
                  <li>• Contact import and CRM customization</li>
                  <li>• Calendar integration and booking page design</li>
                  <li>• Initial workflow and automation setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-lg">Week 3-4: Training & Testing</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• Team training sessions (2-3 sessions)</li>
                  <li>• Test lead submissions and follow-up sequences</li>
                  <li>• Review automation setup and approval process</li>
                  <li>• Fine-tune messaging and timing</li>
                  <li>• Documentation and standard operating procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg">Week 5-6: Launch & Optimization</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• Go live with all automations</li>
                  <li>• Monitor performance and response times</li>
                  <li>• Gather team feedback and make adjustments</li>
                  <li>• Initial performance review and reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg">Ongoing: Management & Support</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-sm">
                  <li>• Monthly performance reports and analytics</li>
                  <li>• Continuous optimization of workflows</li>
                  <li>• Regular strategy calls (quarterly or bi-weekly)</li>
                  <li>• New feature implementation as needed</li>
                  <li>• Priority support for any issues</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="page-break"></div>

        {/* Case Study */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Success Story
          </h2>
          
          <Card className="border-2 border-brand-blue">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-pink-50">
              <CardTitle className="text-xl">
                Atlanta Kitchen & Bath - Kitchen Remodeling Company
              </CardTitle>
              <p className="text-gray-600">12-employee remodeling business, 8 years in business</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-semibold mb-2 brand-blue">The Challenge:</h4>
                <p className="text-gray-700">
                  Atlanta K&B was receiving 40-50 leads per month from their website, Google Ads, and referrals. However, their response time averaged 6-8 hours, and they were manually tracking leads in spreadsheets. The owner estimated they were losing 40-50% of leads to competitors due to slow response times.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 brand-blue">The Solution:</h4>
                <p className="text-gray-700">
                  We implemented our Complete Client Journey package in October 2023, including instant lead response, automated follow-up sequences, appointment booking system, and review generation automation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 brand-blue">The Results (First 90 Days):</h4>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Lead Response Time</p>
                    <p className="text-xl font-bold text-green-700">6-8 hours → 90 seconds</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Appointment Booking Rate</p>
                    <p className="text-xl font-bold text-green-700">35% → 52%</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">No-Show Rate</p>
                    <p className="text-xl font-bold text-green-700">25% → 8%</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Google Reviews</p>
                    <p className="text-xl font-bold text-green-700">12 → 47 (4.9 stars)</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-brand-blue">
                <p className="text-gray-700 italic">
                  "This system has been a game-changer. We're booking more appointments than ever, and I'm spending less time chasing leads. The automated reminders alone have saved us thousands in wasted appointment slots. Best business decision we've made in years."
                </p>
                <p className="mt-3 font-semibold text-gray-800">— Michael Thompson, Owner</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Additional Monthly Revenue (First 90 Days)</p>
                <p className="text-3xl font-bold brand-pink">$18,500</p>
                <p className="text-xs text-gray-500 mt-1">Based on increased bookings and reduced no-shows</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="page-break"></div>

        {/* Investment Summary */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Investment Summary
          </h2>

          <Card className="border-2 border-brand-pink">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-pink-50">
              <CardTitle className="text-2xl">Recommended Package: Complete Client Journey</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Initial Investment:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>One-time Setup Fee</span>
                        <span className="font-semibold">$3,997</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Platform Software (Month 1)</span>
                        <span>$297</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg brand-blue">
                        <span>Total to Start</span>
                        <span>$4,294</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Ongoing Investment:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Management Fee</span>
                        <span className="font-semibold">$1,497</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Platform Software</span>
                        <span>$297</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg brand-blue">
                        <span>Monthly Total</span>
                        <span>$1,794</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-3">What's Included in Setup Fee:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li>✓ Platform account setup</li>
                    <li>✓ Business phone number integration</li>
                    <li>✓ CRM configuration & data import</li>
                    <li>✓ Automated workflows (8-10 sequences)</li>
                    <li>✓ Calendar booking system</li>
                    <li>✓ Review generation automation</li>
                    <li>✓ Email & SMS templates</li>
                    <li>✓ Team training (3 sessions)</li>
                    <li>✓ Documentation & SOPs</li>
                    <li>✓ 30 days of white-glove support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">What's Included in Monthly Fee:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li>✓ System monitoring & maintenance</li>
                    <li>✓ Performance optimization</li>
                    <li>✓ Monthly reporting & analytics</li>
                    <li>✓ Workflow updates & improvements</li>
                    <li>✓ Priority email & phone support</li>
                    <li>✓ Quarterly strategy calls</li>
                    <li>✓ Software updates & new features</li>
                    <li>✓ Template library access</li>
                  </ul>
                </div>

                <Card className="bg-blue-50 border-brand-blue">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold mb-2 brand-blue">Payment Terms:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 50% ($1,998.50) due upon contract signing</li>
                      <li>• 50% ($1,998.50) due at project go-live (Week 5-6)</li>
                      <li>• Monthly management fee begins at go-live</li>
                      <li>• Platform software fee included in monthly management</li>
                      <li>• No long-term contract required (30-day cancellation notice)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="page-break"></div>

        {/* Next Steps */}
        <div className="space-y-6 avoid-break">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Next Steps
          </h2>

          <p className="text-lg text-gray-700">
            Ready to transform your lead management and grow your construction business? Here's how we get started:
          </p>

          <div className="space-y-4">
            <Card className="border-l-4 border-brand-blue">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Step 1: Review & Questions</h4>
                <p className="text-sm text-gray-600">
                  Review this proposal and compile any questions. We're happy to clarify any details or customize a package to fit your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-brand-pink">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Step 2: Schedule Strategy Call</h4>
                <p className="text-sm text-gray-600">
                  Book a 30-minute call where we'll discuss your current lead process, volume, and goals. We'll confirm this is the right fit and answer all questions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-brand-blue">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Step 3: Contract & Kickoff</h4>
                <p className="text-sm text-gray-600">
                  Upon agreement, we'll send the service agreement and invoice. Once signed, we schedule your kickoff call within 48 hours and begin implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-brand-pink">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Step 4: Implementation (6 Weeks)</h4>
                <p className="text-sm text-gray-600">
                  We handle the technical setup while keeping you informed every step. Your team gets trained, everything gets tested, and we launch when you're ready.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-brand-blue">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Step 5: Go Live & Optimize</h4>
                <p className="text-sm text-gray-600">
                  Watch leads start flowing through your new system. We monitor closely, make adjustments, and help you maximize results from day one.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-pink-50 border-2 border-brand-blue mt-6">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold brand-blue mb-4">Let's Get Started</h3>
              <p className="text-gray-700 mb-6">
                Ready to capture more leads and grow your business on autopilot?
              </p>
              <div className="space-y-3">
                <p className="font-semibold text-lg brand-blue">{YOUR_NAME}</p>
                <p className="text-gray-600">📞 {YOUR_PHONE}</p>
                <p className="text-gray-600">📧 {YOUR_EMAIL}</p>
                <p className="text-gray-600">🌐 {YOUR_WEBSITE}</p>
              </div>
              <Separator className="my-6 w-48 mx-auto" />
              <p className="text-sm text-gray-600 italic">
                Questions? Call or text us anytime. We're here to help.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="page-break"></div>

        {/* Terms & Conditions */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold brand-blue border-b-2 border-brand-pink pb-2">
            Terms & Conditions
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Service Agreement</h4>
              <p>
                This proposal is valid for 30 days from the date above. Services will be provided as outlined in the selected package. Timeline estimates are based on typical implementations and may vary based on business complexity and client responsiveness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Payment Terms</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Setup fee split: 50% upon signing, 50% at go-live</li>
                <li>Monthly management fees begin at go-live date</li>
                <li>Platform software fees included in monthly management fee</li>
                <li>Payment methods: ACH, credit card, or wire transfer</li>
                <li>Late payments subject to 1.5% monthly finance charge</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Cancellation Policy</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>No long-term contract required for monthly management</li>
                <li>30-day written notice required for cancellation</li>
                <li>Setup fees are non-refundable after work begins</li>
                <li>Clients retain access to platform account and all data</li>
                <li>Platform access continues with monthly management subscription</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Client Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide timely access to existing systems, accounts, and information</li>
                <li>Assign internal point person for implementation</li>
                <li>Participate in scheduled training sessions</li>
                <li>Review and approve messaging templates before go-live</li>
                <li>Maintain active service subscription for platform access</li>
                <li>Respond to support requests within 48 business hours</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Scope & Limitations</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Services include setup and management of our proprietary marketing automation platform</li>
                <li>Does NOT include: website design, paid advertising management, content creation, graphic design (unless specified in Growth Accelerator)</li>
                <li>Additional integrations or custom development quoted separately</li>
                <li>We cannot guarantee specific results, but will work diligently to optimize performance</li>
                <li>Client responsible for compliance with TCPA, CAN-SPAM, and other regulations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Service Level Agreement</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email support response within 24 business hours</li>
                <li>Phone support available during business hours (M-F, 9am-5pm EST)</li>
                <li>Critical issues addressed within 4 business hours</li>
                <li>99.9% uptime guarantee on our infrastructure</li>
                <li>Monthly performance reports delivered by 5th of following month</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Intellectual Property</h4>
              <p>
                All workflows, templates, and configurations created remain property of {YOUR_NAME}. Client receives a license to use during active service period. Upon cancellation, client may retain configurations and data in their account but may not resell or redistribute them.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Limitation of Liability</h4>
              <p>
                {YOUR_NAME} is not liable for lost revenue, missed opportunities, or business outcomes. Our liability is limited to the amount of fees paid in the preceding 3 months. We do not guarantee specific results but commit to industry best practices and continuous optimization.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Signature Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold brand-blue text-center">Agreement</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-semibold">Client Acceptance:</p>
                <div className="border-b-2 border-gray-300 pb-1 mb-2">
                  <p className="text-xs text-gray-500 mb-1">Signature</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b-2 border-gray-300 pb-1">
                    <p className="text-xs text-gray-500 mb-1">Printed Name</p>
                  </div>
                  <div className="border-b-2 border-gray-300 pb-1">
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                  </div>
                </div>
                <div className="border-b-2 border-gray-300 pb-1">
                  <p className="text-xs text-gray-500 mb-1">Company Name</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-semibold">{YOUR_NAME}:</p>
                <div className="border-b-2 border-gray-300 pb-1 mb-2">
                  <p className="text-xs text-gray-500 mb-1">Signature</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b-2 border-gray-300 pb-1">
                    <p className="text-xs text-gray-500 mb-1">Printed Name</p>
                  </div>
                  <div className="border-b-2 border-gray-300 pb-1">
                    <p className="text-xs text-gray-500 mb-1">Date</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-blue-50 border-brand-blue">
              <CardContent className="pt-4 text-center">
                <p className="text-sm text-gray-700">
                  By signing above, both parties agree to the terms outlined in this proposal and commit to working together to achieve the stated objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer - Thank You */}
        <div className="mt-16 text-center space-y-4 pb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/assets/mla-logo.png" 
              alt="Major Leads Agency" 
              className="h-16 object-contain opacity-50"
            />
          </div>
          <p className="text-gray-500 text-sm">
            Thank you for considering {YOUR_NAME}. We're excited about the opportunity to help {CLIENT_COMPANY} grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyProposal;
