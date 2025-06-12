import HeroSection from '@/components/HeroSection';
import ProofSection from '@/components/ProofSection';
import BrandReadySprint from '@/components/BrandReadySprint';
import RevShareAccelerator from '@/components/RevShareAccelerator';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';

export default function Home() {
  // reasoning: Landing page follows conversion-optimized flow
  // Hero → Social Proof → Offers → Comparison → Final CTA
  
  return (
    <>
      {/* Hero with primary value prop */}
      <HeroSection />
      
      {/* Social proof to build trust */}
      <ProofSection />
      
      {/* Offer sections with clear pricing */}
      <div id="offers">
        <BrandReadySprint />
        <RevShareAccelerator />
      </div>
      
      {/* Comparison to highlight advantages */}
      <ComparisonTable />
      
      {/* Final CTA with urgency */}
      <CTASection />
    </>
  );
}
