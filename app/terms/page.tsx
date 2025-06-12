import React from 'react';
import GrainOverlay from '@/components/GrainOverlay';

export default function TermsPage() {
  return (
    <main className="pt-10 pb-16 bg-sovira-paper min-h-screen relative">
      <GrainOverlay />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative">
        <h1 className="font-neue-haas font-bold text-4xl md:text-5xl text-sovira-black mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-sovira-graphite">
          <p className="lead text-xl mb-8">
            Welcome to Sovira Digital. These terms and conditions outline the rules and regulations for using our website and services.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Acceptance of Terms</h2>
          <p>
            By accessing this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use our website.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Services</h2>
          <p>
            Sovira Digital provides Shopify development services for fashion and wellness brands. We offer rapid implementation of high-converting, premium Shopify stores within a 14-day timeframe.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Intellectual Property</h2>
          <p>
            Unless otherwise stated, Sovira Digital and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">90-Day Payback Guarantee</h2>
          <p>
            Our 90-Day Payback Guarantee is subject to specific terms and conditions. The guarantee applies only to clients who follow our recommended implementation strategies and maintain consistent marketing efforts. Full details are provided during the onboarding process.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Project Timeline</h2>
          <p>
            While we strive to deliver projects within 14 days, this timeline depends on prompt client feedback and approvals. Delays in client communication may extend project timelines.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Sovira Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the European Union, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms and conditions.
          </p>
          
          <h2 className="font-neue-haas font-bold text-2xl text-sovira-black mt-10 mb-4">Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@sovira.digital" className="text-sovira-chartreuse-readable hover:underline">info@sovira.digital</a>.
          </p>
          
          <p className="text-sm text-sovira-neutral mt-10">Last Updated: May 2025</p>
        </div>
      </div>
    </main>
  );
} 