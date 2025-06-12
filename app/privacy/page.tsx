import React from 'react';
import GrainOverlay from '@/components/GrainOverlay';

export default function PrivacyPage() {
  return (
    <main className="pt-10 pb-16 bg-sovira-paper min-h-screen relative">
      <GrainOverlay />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative">
        <h1 className="font-neue-haas font-bold text-4xl md:text-5xl text-sovira-black mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-sovira-graphite">
          <p className="lead text-xl mb-8">
            Your privacy is important to Sovira Digital. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Information We Collect</h2>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, company, and other details you provide via lead forms or when booking a call.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, and actions taken on our site (collected via Google Analytics).</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your experience and analyze site usage.</li>
          </ul>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide our services.</li>
            <li>To send marketing emails and updates (with your consent; you can unsubscribe at any time).</li>
            <li>To analyze website usage and improve our offerings (using Google Analytics).</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Google Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as your IP address, browser type, referring/exit pages, and device information. This data is used in aggregate to improve our website and services. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-sovira-chartreuse-readable hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Lead Forms & Marketing Emails</h2>
          <p>
            When you submit a lead form or book a discovery call, we collect the information you provide to contact you about our services. If you opt in, we may send you marketing emails. You can unsubscribe at any time using the link in our emails.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Cookies</h2>
          <p>
            Cookies are small files stored on your device to help us remember your preferences and understand how you use our site. You can control cookies through your browser settings, but disabling cookies may affect your experience.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@sovira.digital" className="text-sovira-chartreuse-readable hover:underline">info@sovira.digital</a>.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="font-neue-haas font-bold text-2xl md:text-3xl text-sovira-black mt-10 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@sovira.digital" className="text-sovira-chartreuse-readable hover:underline">info@sovira.digital</a>.
          </p>

          <p className="text-sm text-sovira-neutral mt-10">Last Updated: May 2025</p>
        </div>
      </div>
    </main>
  );
} 