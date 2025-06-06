export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-neue-haas text-h3 mb-4">We lost that page</h2>
      <p className="text-sovira-neutral mb-8">The link you followed doesn&apos;t exist.</p>
      <a
        href="/"
        className="group inline-flex items-center font-neue-haas font-bold text-sovira-black hover:text-sovira-chartreuse-readable"
      >
        Back to homepage
        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
}

