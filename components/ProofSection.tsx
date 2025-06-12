export default function ProofSection() {
  // reasoning: Social proof immediately after hero to build trust
  // Metrics and logos validate the bold claims made above
  
  const metrics = [
    { value: '€2.4M', label: 'Revenue generated for clients', suffix: '+' },
    { value: '14', label: 'Average days to launch', suffix: ' days' },
    { value: '2.0', label: 'Average conversion rate', suffix: '%' },
    { value: '2.1', label: 'Average page load speed', suffix: 's' },
  ];

  const clientLogos = [
    { name: 'LIFTERS', logo: '/logos/Lifters Logo black.png', placeholder: false },
    { name: 'PERPLEX', logo: '/logos/PERPLEX-LOGO-SCHUTZRAUM-BLACK.png', placeholder: false },
    { name: 'BRUN', logo: '/logos/LOGO_BRUN.png', placeholder: false },
    { name: 'Your Brand', logo: '/logos/your-logo-placeholder.svg', placeholder: true },
  ];

  return (
    <section id="proof" className="py-20 md:py-32 bg-sovira-paper relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2F2F2F 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-neue-haas text-h3 md:text-h2 font-bold text-sovira-black mb-4">
            Momentum brands choose speed
          </h2>
          <p className="font-spectral italic text-sovira-neutral text-xl">
            And they get results that matter
          </p>
        </div>

        {/* Metrics grid - conversion psychology: specific numbers build credibility */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-150"
            >
              <div className="text-3xl md:text-4xl font-neue-haas font-bold mb-2">
                <span className="text-sovira-chartreuse-readable">{metric.value}</span>
                <span className="text-sovira-black">{metric.suffix}</span>
              </div>
              <p className="text-sovira-neutral text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Client logos section */}
        <div className="relative">
          <div className="text-center mb-12">
            <p className="text-sovira-graphite font-medium">
              Trusted by fashion & wellness brands turning €1M+ annually
            </p>
          </div>

          {/* Logo grid with glassmorphism cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="glass backdrop-blur-glass bg-sovira-paper/30 rounded-sm p-6 flex items-center justify-center h-24 hover:bg-sovira-paper/50 transition-all duration-150"
              >
                {/* Actual logos or placeholders */}
                {logo.logo ? (
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-sovira-neutral/10 rounded-sm flex items-center justify-center">
                    <span className="text-sovira-neutral text-xs">
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Note for implementation */}
          <p className="text-center mt-8 text-sovira-neutral text-sm">
            {/* TODO: Replace with actual client logos */}
          </p>
        </div>

        {/* Testimonial highlight - conversion psychology: peer validation */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="glass backdrop-blur-glass bg-sovira-paper/30 rounded-sm p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl text-sovira-graphite mb-6">
              "Sovira delivered our new store in <span className="text-sovira-chartreuse-readable font-bold">12 days</span>. 
              Our conversion rate jumped 47% in the first month."
            </blockquote>
            <cite className="text-sovira-neutral not-italic">
              <span className="font-medium text-sovira-black">Helen Erichsen</span>
              <span className="block text-sm mt-1">Founder, RAVE Yoga</span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
} 