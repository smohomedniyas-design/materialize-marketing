import React from 'react';
import { HeroBespoke } from '@/components/HeroBespoke';
import { ClientMarquee } from '@/components/ClientMarquee';
import { ServicesMatrix } from '@/components/ServicesMatrix';
import { FreeMarketingGuideBanner } from '@/components/FreeMarketingGuideBanner';
import { ProcessClean } from '@/components/ProcessClean';
import { WorkClean } from '@/components/WorkClean';
import { PricingClean } from '@/components/PricingClean';
import { OnlineScoreAudit } from '@/components/OnlineScoreAudit';
import { ContactClean } from '@/components/ContactClean';

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic 3D Ambient Video Hero with Progress Indicators & Editorial Headline */}
      <HeroBespoke />

      {/* 2. Sleek Midnight Client Proof Marquee Bar */}
      <ClientMarquee />

      {/* 3. Comprehensive Skol-Style 8-Service Matrix with Category Filters */}
      <ServicesMatrix />

      {/* 4. Skol-Style Free Marketing Guide & Playbook for Small Business Owners */}
      <div id="free-guide">
        <FreeMarketingGuideBanner />
      </div>

      {/* 5. Streamlined 3-Step "No Stress" Roadmap */}
      <ProcessClean />

      {/* 6. Real Client Success Results & Case Studies */}
      <WorkClean />

      {/* 7. Transparent Flat Pricing ($25/mo Hosting & Growth Tiers) + FAQs */}
      <PricingClean />

      {/* 8. Free 5-Minute Marketing Audit & Online Score Diagnostic */}
      <OnlineScoreAudit />

      {/* 9. Direct Consultation Booking & Texas Studio Contact */}
      <ContactClean />
    </>
  );
}