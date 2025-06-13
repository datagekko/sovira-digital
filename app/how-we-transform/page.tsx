// temporary comment
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GrainOverlay from "@/components/GrainOverlay";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function HowWeTransformPage() {
  // Discovery call booking URL
  const discoveryCallUrl = "https://calendar.app.google/H2rgeWTpMBDyQzNE6";
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const clientLogos = [
    { name: 'LIFTERS', logo: '/logos/Lifters Logo black.png' },
    { name: 'PERPLEX', logo: '/logos/PERPLEX-LOGO-SCHUTZRAUM-BLACK.png' },
    { name: 'BRUN', logo: '/logos/LOGO_BRUN.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-sovira-paper text-sovira-black">
      <GrainOverlay />
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <motion.section
          className="w-full py-20 md:py-32 lg:py-40 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6">
            <motion.h1
              className="font-neue-haas font-bold text-4xl md:text-6xl lg:text-7xl/none tracking-tighter mb-4"
              variants={fadeIn}
            >
              How We Transform Brands in <span className="text-sovira-black relative inline-block px-2">
                14 Days
                {/* Strong multi-layered chartreuse glow effect */}
                <span className="absolute inset-0 -inset-x-4 -inset-y-2 blur-3xl bg-sovira-chartreuse opacity-25 -z-10" />
                <span className="absolute inset-0 -inset-x-2 -inset-y-1 blur-xl bg-sovira-chartreuse opacity-40 -z-10" />
                <span className="absolute inset-0 blur-md bg-sovira-chartreuse opacity-30 -z-10" />
              </span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[700px] text-sovira-graphite md:text-xl mb-8"
              variants={fadeIn}
            >
              Traditional agencies take 12-16 weeks. Freelancers lack
              reliability. We deliver agency-quality results at startup speed.
            </motion.p>
            <motion.div
              className="w-full max-w-4xl mx-auto my-8 relative"
              variants={fadeIn}
            >
              <div className="relative aspect-video bg-black rounded-lg shadow-2xl overflow-hidden group">
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <p className="text-sovira-paper/50">[PLACEHOLDER: AI time-lapse video]</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-left">
                    <p className="text-sovira-paper font-bold text-lg">Watch us build a product bundle in 3 minutes</p>
                    <p className="text-sovira-paper/80 text-sm">vs. 3 hours of manual work</p>
                </div>
              </div>
               <span className="absolute -inset-2 blur-2xl bg-sovira-chartreuse opacity-20 -z-10" />
            </motion.div>
          </div>
        </motion.section>

        {/* Pain Point Hooks */}
        <motion.section
          className="w-full py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6 space-y-24">
            {/* Hook 1 */}
            <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={fadeIn}>
              <div className="space-y-4">
                <h2 className="font-neue-haas font-bold text-3xl sm:text-4xl tracking-tighter">Stuck in the Template Trap</h2>
                <p className="text-sovira-graphite md:text-lg">
                  Your store looks like every other Dawn clone, failing to capture your brand's unique essence.
                </p>
              </div>
              <Card className="bg-white/50 border-sovira-neutral/20 shadow-lg backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="font-neue-haas font-bold flex justify-between items-center">
                    <span>Case Study: <span className="text-sovira-chartreuse-dark">Perplex</span></span>
                    <img src="/logos/PERPLEX-LOGO-SCHUTZRAUM-BLACK.png" alt="Perplex Logo" className="h-6 filter grayscale" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p><strong className="text-sovira-black">Before:</strong> Generic Shopify template limiting growth.</p>
                  <p><strong className="text-sovira-black">Challenge:</strong> Missing key features (bundles, upsells), poor mobile UX.</p>
                  <p><strong className="text-sovira-black">Process:</strong> Custom 2.0 theme with conversion-optimized sections.</p>
                  <p><strong className="text-sovira-black">Results:</strong> [PLACEHOLDER: X% conversion rate improvement]</p>
                  <Testimonial author="[Perplex Founder]" testimonial="[Testimonial about transformation]" />
                </CardContent>
              </Card>
            </motion.div>

            {/* Hook 2 */}
            <motion.div className="grid md:grid-cols-2 gap-12 items-center" variants={fadeIn}>
               <div className="space-y-4 md:order-2">
                <h2 className="font-neue-haas font-bold text-3xl sm:text-4xl tracking-tighter">Looks Great, Converts Terribly</h2>
                <p className="text-sovira-graphite md:text-lg">
                  A beautiful design is useless if customers aren't buying. We bridge the gap between aesthetics and sales.
                </p>
              </div>
              <Card className="bg-white/50 border-sovira-neutral/20 shadow-lg backdrop-blur-lg md:order-1">
                <CardHeader>
                  <CardTitle className="font-neue-haas font-bold flex justify-between items-center">
                    <span>Case Study: <span className="text-sovira-chartreuse-dark">RAVE</span></span>
                     <img src="/logos/LOGO_BRUN.png" alt="BRUN Logo" className="h-6 filter grayscale" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p><strong className="text-sovira-black">Before:</strong> Stunning Readymag design with cumbersome Shopify backend.</p>
                  <p><strong className="text-sovira-black">Challenge:</strong> Founder spending 10+ hours/week on store management.</p>
                  <p><strong className="text-sovira-black">Process:</strong> Conversion-optimized rebuild with simplified dashboard.</p>
                  <p><strong className="text-sovira-black">Results:</strong> [PLACEHOLDER: X% conversion lift] + founder manages independently.</p>
                  <Testimonial author="[RAVE Founder]" testimonial="[Testimonial about time savings and results]" />
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Hook 3 */}
             <motion.div className="text-center max-w-2xl mx-auto" variants={fadeIn}>
                <h2 className="font-neue-haas font-bold text-3xl sm:text-4xl tracking-tighter">Too Busy Building Your Product?</h2>
                <p className="text-sovira-graphite md:text-lg mt-4">
                  You've perfected your product, but the storefront that sells it is an afterthought. We'll build a world-class store while you focus on what you do best.
                </p>
                <div className="mt-8">
                  <a 
                    href={discoveryCallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm whitespace-nowrap hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                  >
                    Book Discovery Call
                    <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
                  </a>
                </div>
            </motion.div>

          </div>
        </motion.section>

        {/* Behind-the-Scenes Authority Section */}
        <motion.section 
          className="w-full py-20 md:py-32 bg-sovira-black text-sovira-paper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-neue-haas font-bold text-4xl sm:text-5xl tracking-tighter">Our AI-Enhanced Process</h2>
              <p className="max-w-2xl mx-auto text-sovira-paper/70 md:text-xl mt-4">
                See why €1M+ brands choose our systems over unreliable freelancers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeIn} className="p-6 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                <h3 className="font-neue-haas font-bold text-xl mb-2">Cursor AI Design Build</h3>
                <p className="text-sovira-paper/70 text-sm mb-4">Time-lapse of section creation at 10x speed.</p>
                <div className="aspect-video bg-black/50 rounded-md"></div>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                <h3 className="font-neue-haas font-bold text-xl mb-2">Revenue Dashboards</h3>
                <p className="text-sovira-paper/70 text-sm mb-4">Analytics showing concrete revenue improvements.</p>
                <div className="aspect-square bg-black/50 rounded-md"></div>
              </motion.div>
              <motion.div variants={fadeIn} className="p-6 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 shadow-lg">
                <h3 className="font-neue-haas font-bold text-xl mb-2">[AI Demo Placeholder]</h3>
                <p className="text-sovira-paper/70 text-sm mb-4">e.g. AI-powered copywriting or image generation.</p>
                <div className="aspect-video bg-black/50 rounded-md"></div>
              </motion.div>
            </div>
            <motion.div variants={fadeIn} className="mt-12 text-center">
              <a 
                href={discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm whitespace-nowrap hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
              >
                See Our Process in Action
                <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Social Proof Section */}
        <motion.section
          className="w-full py-20 md:py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="container text-center px-4 md:px-6">
              <h2 className="font-neue-haas font-bold text-3xl md:text-4xl tracking-tight mb-12">
                Join a league of high-growth brands
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="glass backdrop-blur-glass bg-sovira-paper/30 rounded-sm p-6 flex items-center justify-center h-24 hover:bg-sovira-paper/50 transition-all duration-150"
                  >
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
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                <Badge variant="outline" className="text-md border-sovira-chartreuse-dark bg-sovira-chartreuse/10 text-sovira-chartreuse-dark">€1M+ Brands Served</Badge>
                <Badge variant="outline" className="text-md border-sovira-chartreuse-dark bg-sovira-chartreuse/10 text-sovira-chartreuse-dark">90-Day Performance Guarantee</Badge>
              </div>
              <div className="mt-12">
                <a 
                  href={discoveryCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm whitespace-nowrap hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                >
                  Join These Brands
                  <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
                </a>
              </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section 
          className="w-full py-20 md:py-32 border-t border-sovira-neutral/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="container text-center px-4 md:px-6">
            <motion.h2 variants={fadeIn} className="font-neue-haas font-bold text-4xl md:text-5xl tracking-tighter">
              Start Your 14-Day Transformation
            </motion.h2>
            <motion.p variants={fadeIn} className="mx-auto max-w-xl text-sovira-graphite md:text-xl mt-4 mb-8">
              See if you're a fit for our Brand-Ready Sprint. No obligation, just a path to faster growth.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a 
                href={discoveryCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex px-8 py-4 bg-sovira-black text-sovira-paper font-neue-haas font-bold text-lg rounded-sm whitespace-nowrap hover:shadow-sovira-cta hover:-translate-y-px active:translate-y-0 transition-all duration-150"
              >
                Book Discovery Call
                <span className="inline-block ml-2 transition-transform duration-150 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

interface TestimonialProps {
  author: string;
  testimonial: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ author, testimonial }) => (
  <div className="border-t border-sovira-neutral/20 pt-4 mt-4">
    <blockquote className="text-sm italic text-sovira-graphite">
      “{testimonial}”
    </blockquote>
    <p className="mt-2 text-xs font-semibold text-right">— {author}</p>
  </div>
);
