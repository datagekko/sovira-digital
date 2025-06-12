export default function Footer() {
  return (
    <footer className="py-12 bg-sovira-black text-sovira-paper">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div>
            <h3 className="font-neue-haas font-bold text-xl mb-2">SOVIRA DIGITAL</h3>
            <p className="text-sovira-paper/60 text-sm">Fast. Beautiful. Built to Convert.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/privacy" className="text-sovira-paper/60 hover:text-sovira-chartreuse transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-sovira-paper/60 hover:text-sovira-chartreuse transition-colors">
              Terms
            </a>
            <a href="#" className="text-sovira-paper/60 hover:text-sovira-chartreuse transition-colors">
              Work
            </a>
            <a href="#" className="text-sovira-paper/60 hover:text-sovira-chartreuse transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sovira-paper/40 text-sm">
            © 2025 Sovira Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 