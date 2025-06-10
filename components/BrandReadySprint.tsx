'use client';

import { useState } from 'react';

export default function BrandReadySprint() {
  // reasoning: Clear pricing tiers with urgency (timeline) and risk reversal (guarantee)
  // Most popular tier highlighted to guide decision-making
  
  const [selectedTier, setSelectedTier] = useState('fast-track');

  const tiers = [
    {
      id: 'standard',
      name: 'Standard',
      timeline: '≤ 30 days',
      price: '€9,900',
      features: [
        'Custom Shopify 2.0 theme',
        'AI-assisted copywriting',
        'Mobile-first design',
        '90-day conversion monitoring',
        '5 email/SMS flows (Abandoned Cart, Welcome Email, Upselling Flow, Brand Order Confirmation, Transactional Emails)',
        'Founders\' WhatsApp hotline',
      ],
    },
    {
      id: 'fast-track',
      name: 'Fast-Track',
      timeline: '≤ 14 days',
      price: '€12,900',
      popular: true,
      features: [
        'Everything in Standard',
        '14-day development timeline',
        'Priority development queue',
        'Advanced performance optimization',
      ],
    },
    {
      id: 'super-rush',
      name: 'Super-Rush',
      timeline: '≤ 7 days',
      price: '€15,900',
      features: [
        'Everything in Fast-Track',
        '7-day development timeline',
        'White-glove onboarding',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-sovira-black text-sovira-paper relative overflow-hidden">
      {/* Accent gradient background */}
      <div className="absolute inset-0 bg-sovira-gradient-accent opacity-10" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-spectral italic text-sovira-chartreuse text-xl mb-4">
            Path 1
          </p>
          <h2 className="font-neue-haas text-h3 md:text-h2 font-bold mb-6">
            Brand-Ready Sprint
          </h2>
          <p className="font-neue-haas text-2xl md:text-3xl text-sovira-paper/90 max-w-2xl mx-auto">
            vision to income in ≤ 30 days
          </p>
        </div>

        {/* Pricing tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-sm p-8 transition-all duration-300 cursor-pointer group ${
                tier.popular 
                  ? 'bg-sovira-paper text-sovira-black scale-105 shadow-2xl hover:shadow-sovira-chartreuse/30 hover:scale-107 hover:-translate-y-1' 
                  : 'bg-sovira-graphite/20 backdrop-blur-glass hover:bg-sovira-graphite/30 hover:scale-105 hover:-translate-y-1 hover:shadow-lg'
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sovira-chartreuse text-sovira-black px-4 py-1 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-neue-haas text-2xl font-bold mb-2">
                  {tier.name}
                </h3>
                <p className={`text-lg ${tier.popular ? 'text-sovira-neutral' : 'text-sovira-paper/70'}`}>
                  {tier.timeline}
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-neue-haas font-bold mb-2 group-hover:text-sovira-chartreuse transition-colors duration-300">
                  {tier.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={`mt-0.5 group-hover:scale-110 transition-transform duration-200 ${tier.popular ? 'text-sovira-chartreuse-readable' : 'text-sovira-chartreuse'}`}>✓</span>
                    <span className={`text-sm ${tier.popular ? 'text-sovira-graphite' : 'text-sovira-paper/90'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://calendar.app.google/H2rgeWTpMBDyQzNE6"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-sm font-neue-haas font-bold transition-all duration-300 text-center transform group-hover:scale-105 ${
                  tier.popular
                    ? 'bg-sovira-black text-sovira-paper hover:bg-sovira-graphite hover:shadow-sovira-cta'
                    : 'bg-sovira-paper/10 hover:bg-sovira-paper/20 hover:shadow-sovira-cta'
                }`}
              >
                Select {tier.name}
              </a>
            </div>
          ))}
        </div>

        {/* 90-Day Payback Guarantee */}
        <div className="max-w-3xl mx-auto">
          <div className="glass backdrop-blur-glass bg-sovira-paper/10 rounded-sm p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sovira-chartreuse rounded-full mb-6">
              <span className="text-sovira-black text-2xl font-bold">90</span>
            </div>
            <h3 className="font-neue-haas text-2xl md:text-3xl font-bold mb-4">
              90-Day Payback Performance Pledge
            </h3>
            <p className="text-sovira-paper/80 text-lg mb-6">
              If net-new revenue hasn't covered your Sprint fee within 90 days, 
              our senior team works free on CRO tweaks and ad creative until it does.
            </p>
            <p className="text-sovira-neutral text-sm">
              No fine print. No excuses. Just results.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16 text-center">
          <p className="text-sovira-paper/70 mb-4">Requirements to start:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-sovira-paper/10 rounded-full">Brand deck ready</span>
            <span className="px-4 py-2 bg-sovira-paper/10 rounded-full">≤ 100 SKUs</span>
            <span className="px-4 py-2 bg-sovira-paper/10 rounded-full">One feedback round</span>
          </div>
        </div>
      </div>
    </section>
  );
} 