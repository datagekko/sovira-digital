'use client';

import { useState } from 'react';

export default function RevShareAccelerator() {
  // reasoning: Performance-based pricing reduces perceived risk
  // Interactive calculator demonstrates value alignment
  
  const [showCalculator, setShowCalculator] = useState(false);
  const [baseline, setBaseline] = useState(300000);
  const [projected, setProjected] = useState(420000);

  const incremental = projected - baseline;
  const soviraShare = incremental * 0.2;
  const clientKeeps = incremental * 0.8;

  return (
    <section className="py-20 md:py-32 bg-sovira-paper relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sovira-chartreuse/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-neue-haas text-sovira-chartreuse-readable font-bold mb-4 tracking-wider">
            Path 2
          </p>
          <h2 className="font-neue-haas text-4xl md:text-6xl font-bold text-sovira-black mb-6">
            Rev-Share Accelerator
          </h2>
          <p className="font-neue-haas text-2xl md:text-3xl text-sovira-graphite max-w-3xl mx-auto">
            We profit from the lift we deliver, not retainers.
          </p>
        </div>

        {/* Main offer structure */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left: Pricing structure */}
          <div>
            <h3 className="font-neue-haas text-2xl font-bold text-sovira-black mb-6">
              How it works
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sovira-chartreuse rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sovira-black font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-neue-haas font-bold text-lg mb-2">Base retainer</h4>
                  <p className="text-sovira-graphite">€1,500/month covers our operational baseline</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sovira-chartreuse rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sovira-black font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-neue-haas font-bold text-lg mb-2">Performance share</h4>
                  <p className="text-sovira-graphite">20% of revenue above agreed baseline (cap negotiable)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sovira-chartreuse rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sovira-black font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-neue-haas font-bold text-lg mb-2">Risk protection</h4>
                  <p className="text-sovira-graphite">Exit clause if we miss baseline 3 consecutive months</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-sovira-black/5 rounded-sm">
              <p className="text-sm text-sovira-neutral mb-2">6-month minimum term</p>
              <p className="text-sm text-sovira-neutral">Performance kill-switch included</p>
            </div>
          </div>

          {/* Right: Calculator */}
          <div>
            <h3 className="font-neue-haas text-2xl font-bold text-sovira-black mb-6">
              Quick math example
            </h3>
            
            <div className="glass backdrop-blur-glass bg-sovira-paper/50 rounded-sm p-8">
              {!showCalculator ? (
                <div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sovira-graphite">Your baseline</span>
                      <span className="font-neue-haas font-bold">€300k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sovira-graphite">We grow you to</span>
                      <span className="font-neue-haas font-bold">€420k</span>
                    </div>
                    <div className="h-px bg-sovira-neutral/20" />
                    <div className="flex justify-between items-center">
                      <span className="text-sovira-graphite">Incremental revenue</span>
                      <span className="font-neue-haas font-bold text-sovira-chartreuse-readable">€120k</span>
                    </div>
                  </div>

                  <div className="bg-sovira-chartreuse/10 rounded-sm p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sovira-graphite">Our share (20%)</span>
                      <span className="font-neue-haas font-bold">€24k</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sovira-graphite font-medium">You keep (80%)</span>
                      <span className="font-neue-haas font-bold text-xl text-sovira-chartreuse-readable">€96k</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCalculator(true)}
                    className="w-full py-3 bg-sovira-black text-sovira-paper font-neue-haas font-bold rounded-sm hover:bg-sovira-graphite transition-all duration-150"
                  >
                    Try with your numbers
                  </button>
                </div>
              ) : (
                <div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sovira-graphite text-sm mb-2 block">
                        Your current monthly revenue
                      </label>
                      <input
                        type="number"
                        value={baseline}
                        onChange={(e) => setBaseline(Number(e.target.value))}
                        className="w-full px-4 py-3 bg-sovira-paper border border-sovira-neutral/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-sovira-chartreuse/60"
                      />
                    </div>
                    <div>
                      <label className="text-sovira-graphite text-sm mb-2 block">
                        Projected monthly revenue
                      </label>
                      <input
                        type="number"
                        value={projected}
                        onChange={(e) => setProjected(Number(e.target.value))}
                        className="w-full px-4 py-3 bg-sovira-paper border border-sovira-neutral/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-sovira-chartreuse/60"
                      />
                    </div>
                  </div>

                  <div className="bg-sovira-chartreuse/10 rounded-sm p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sovira-graphite">Incremental revenue</span>
                      <span className="font-neue-haas font-bold">€{incremental.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sovira-graphite">Our share (20%)</span>
                      <span className="font-neue-haas font-bold">€{soviraShare.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sovira-graphite font-medium">You keep (80%)</span>
                      <span className="font-neue-haas font-bold text-xl text-sovira-chartreuse-readable">
                        €{clientKeeps.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCalculator(false)}
                    className="w-full py-3 bg-sovira-graphite text-sovira-paper font-neue-haas rounded-sm hover:bg-sovira-black transition-all duration-150"
                  >
                    Back to example
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="bg-sovira-black text-sovira-paper rounded-sm p-12">
          <h3 className="font-neue-haas text-2xl font-bold mb-8 text-center">
            What's included
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Performance Marketing',
                items: ['Meta/TikTok ads', 'Creative testing', 'Audience optimization'],
              },
              {
                title: 'Continuous CRO',
                items: ['A/B testing', 'Conversion analysis', 'UX improvements'],
              },
              {
                title: 'Growth Infrastructure',
                items: ['Email/SMS automation', 'Quarterly refreshes', 'Board reporting'],
              },
            ].map((category, index) => (
              <div key={index}>
                <h4 className="font-neue-haas font-bold text-lg mb-4 text-sovira-chartreuse">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-sovira-chartreuse mt-0.5">•</span>
                      <span className="text-sovira-paper/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sovira-paper/70 mb-4">Entry requirements:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-sovira-paper/10 rounded-full">≥ €10k/month revenue</span>
              <span className="px-4 py-2 bg-sovira-paper/10 rounded-full">≥ 60% margins</span>
              <span className="px-4 py-2 bg-sovira-paper/10 rounded-full">48h approval time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 