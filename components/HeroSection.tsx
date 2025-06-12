import GrainOverlay from './GrainOverlay';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-sovira-paper">
      {/* Hero content container */}
      <div className="flex-1 flex items-center justify-center pt-0 pb-12">
        <GrainOverlay />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Tagline with Spectral accent */}
            <p className="font-spectral italic text-sovira-neutral text-lg md:text-xl mb-3">
              Your brand deserves more than a theme
            </p>

            {/* Main headline - conversion psychology: clear value prop */}
            <h1 className="font-neue-haas text-h3 md:text-h2 lg:text-h1 font-bold text-sovira-black mb-5">
              <div className="mb-1">
                Launch in{' '}
                <span className="text-sovira-black relative inline-block px-2">
                  14 days
                  {/* Strong multi-layered chartreuse glow effect */}
                  <span className="absolute inset-0 -inset-x-4 -inset-y-2 blur-3xl bg-sovira-chartreuse opacity-25 -z-10" />
                  <span className="absolute inset-0 -inset-x-2 -inset-y-1 blur-xl bg-sovira-chartreuse opacity-40 -z-10" />
                  <span className="absolute inset-0 blur-md bg-sovira-chartreuse opacity-30 -z-10" />
                </span>
              </div>
              <div>
                From vision to revenue.
              </div>
            </h1>

            {/* Sub-headline - addressing pain points */}
            <p className="font-neue-haas text-xl md:text-2xl text-sovira-graphite mb-6 max-w-3xl mx-auto">
              <span className="block md:inline">Premium Shopify storefronts for momentum fashion & wellness brands.</span>
              <span className="block mt-1 text-sovira-neutral">Fast. Beautiful. Built to convert.</span>
            </p>

            {/* Primary CTA - single, clear action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://calendar.app.google/H2rgeWTpMBDyQzNE6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
              >
                Book Discovery Call
                {/* Arrow animation on hover */}
                <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Trust indicators - social proof */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sovira-neutral text-sm">
              <div className="flex items-center gap-2">
                <span className="text-sovira-chartreuse-readable">✓</span>
                <span>90-Day Performance Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sovira-chartreuse-readable">✓</span>
                <span>€1M+ brands trust us</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sovira-chartreuse-readable">✓</span>
                <span>LCP &lt; 2.5s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to section */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-sovira-graphite rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sovira-graphite rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
} 