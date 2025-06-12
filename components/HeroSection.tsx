import GrainOverlay from './GrainOverlay';

export default function HeroSection() {
  // Reserve 64px for header, 56px for scroll indicator
  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden bg-sovira-paper">
      {/* Hero content container */}
      <div className="flex-1 flex items-center justify-center">
        <GrainOverlay />
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
            {/* Medium headline */}
            <p className="font-neue-haas font-medium text-sovira-neutral text-lg md:text-2xl mb-2 md:mb-3">
              Your brand deserves more than a theme.
            </p>
            {/* Main headline */}
            <h1 className="font-neue-haas font-bold text-sovira-black mb-3 md:mb-4 leading-tight text-[48px] md:text-[96px]">
              Ready to sell in<br />
              <span className="text-sovira-black relative inline-block px-2">
                14 days
                {/* Strong multi-layered chartreuse glow effect */}
                <span className="absolute inset-0 -inset-x-4 -inset-y-2 blur-3xl bg-sovira-chartreuse opacity-25 -z-10" />
                <span className="absolute inset-0 -inset-x-2 -inset-y-1 blur-xl bg-sovira-chartreuse opacity-40 -z-10" />
                <span className="absolute inset-0 blur-md bg-sovira-chartreuse opacity-30 -z-10" />
              </span>
            </h1>
            {/* Sub-headline */}
            <p className="font-neue-haas text-base md:text-xl text-sovira-graphite mb-4 md:mb-5 max-w-2xl mx-auto">
              Premium Shopify storefronts<br className="md:hidden" /> for momentum fashion & wellness brands.
            </p>
            {/* Primary CTA - single, clear action */}
            <div className="flex flex-col gap-4 justify-center items-center mb-4 md:mb-6 w-full">
              <a 
                href="https://calendar.app.google/H2rgeWTpMBDyQzNE6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm whitespace-nowrap hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
              >
                Book Discovery Call
                {/* Arrow animation on hover */}
                <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </div>
            {/* Trust indicators - social proof */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-sovira-neutral text-sm mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sovira-chartreuse-readable">✓</span>
                <span>€1M+ brands trust us</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sovira-chartreuse-readable">✓</span>
                <span>90-day performance pledge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="flex justify-center items-start h-10 md:h-12 relative z-20 mt-0 mb-4 md:mb-6">
        <div className="w-6 h-10 border-2 border-sovira-graphite rounded-full flex justify-center items-start animate-bounce">
          <div className="w-1 h-3 bg-sovira-graphite rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
} 