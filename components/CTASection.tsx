export default function CTASection() {
  // reasoning: Final push with urgency (limited slots) and clear action
  // Reinforces key value props one last time

  // Allow phone numbers to be configured via environment variables. Provide
  // sensible defaults so links still work when variables are missing.
  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+18001234567";
  const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || PHONE_NUMBER).replace(/\D/g, "");
  
  return (
    <section className="py-20 md:py-32 bg-sovira-paper relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-sovira-chartreuse/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sovira-chartreuse/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sovira-chartreuse/10 rounded-full mb-8">
            <div className="w-2 h-2 bg-sovira-chartreuse rounded-full animate-pulse" />
            <span className="text-sovira-black font-medium">Only 2 sprint slots left this month</span>
          </div>

          {/* Main CTA headline */}
          <h2 className="font-neue-haas text-h3 md:text-h2 font-bold text-sovira-black mb-6">
            Your competition launches next week.
            <span className="block text-sovira-chartreuse-readable mt-2">What about you?</span>
          </h2>

          {/* Supporting copy */}
          <p className="text-xl text-sovira-graphite mb-12 max-w-2xl mx-auto">
            Join momentum brands who chose speed over excuses. 
            Beautiful stores that convert, live in 14 days or less.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://calendar.app.google/H2rgeWTpMBDyQzNE6"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
            >
              Book Your Sprint Call
              <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
            </a>
            
            <a href="#offers" className="text-sovira-graphite hover:text-sovira-black underline underline-offset-4 font-medium">
              Compare packages
            </a>
          </div>

          {/* Trust reinforcement */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-sovira-neutral">
            <div className="flex items-center gap-2">
              <span className="text-sovira-chartreuse-readable">✓</span>
              <span>90-Day Payback Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sovira-chartreuse-readable">✓</span>
              <span>No deposits required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sovira-chartreuse-readable">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Contact alternatives */}
          <div className="mt-16 pt-16 border-t border-sovira-neutral/20">
            <p className="text-sovira-neutral mb-4">Prefer to chat directly?</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:sprint@sovira.digital" className="text-sovira-black hover:text-sovira-chartreuse-readable transition-colors">
                sprint@sovira.digital
              </a>
              <span className="text-sovira-neutral/40">•</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="text-sovira-black hover:text-sovira-chartreuse-readable transition-colors"
              >
                WhatsApp
              </a>
              <span className="text-sovira-neutral/40">•</span>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-sovira-black hover:text-sovira-chartreuse-readable transition-colors"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 