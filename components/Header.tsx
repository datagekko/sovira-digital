export default function Header() {
  return (
    <header className="relative z-50 w-full">
      <div className="glass backdrop-blur-md bg-sovira-paper/80 border-b border-sovira-paper/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl">
          <div className="flex items-center justify-between py-4">
            {/* Logo: Grid icon + SOVIRA wordmark */}
            <div className="flex items-center gap-3">
              {/* Grid icon - thin line, 2px stroke, rounded joins */}
              <div className="w-8 h-8 flex items-center justify-center">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-sovira-black"
                >
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* 3x3 grid pattern */}
                    <rect x="3" y="3" width="5" height="5" rx="1" />
                    <rect x="10" y="3" width="5" height="5" rx="1" />
                    <rect x="17" y="3" width="5" height="5" rx="1" />
                    <rect x="3" y="10" width="5" height="5" rx="1" />
                    <rect x="10" y="10" width="5" height="5" rx="1" />
                    <rect x="17" y="10" width="5" height="5" rx="1" />
                    <rect x="3" y="17" width="5" height="5" rx="1" />
                    <rect x="10" y="17" width="5" height="5" rx="1" />
                    <rect x="17" y="17" width="5" height="5" rx="1" />
                  </g>
                </svg>
              </div>
              
              {/* SOVIRA wordmark */}
              <h1 className="font-neue-haas font-bold text-xl text-sovira-black tracking-wide">
                SOVIRA
              </h1>
            </div>

            {/* CTA Button */}
            <a 
              href="https://calendar.app.google/H2rgeWTpMBDyQzNE6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-sm rounded-sm hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
            >
              Book Free Discover Call
              {/* Arrow animation on hover */}
              <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 