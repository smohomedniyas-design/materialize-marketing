import React from 'react';
import { HeroBespoke } from '@/components/HeroBespoke';
import { ClientMarquee } from '@/components/ClientMarquee';
import { WhyMaterialize } from '@/components/WhyMaterialize';
import { ServicesMatrix } from '@/components/ServicesMatrix';
import { WorkClean } from '@/components/WorkClean';
import { TestimonialsClean } from '@/components/TestimonialsClean';
import { PricingClean } from '@/components/PricingClean';
import { TeamClean } from '@/components/TeamClean';
import { FreeMarketingGuideBanner } from '@/components/FreeMarketingGuideBanner';
import { OnlineScoreAudit } from '@/components/OnlineScoreAudit';
import { ContactClean } from '@/components/ContactClean';

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Ambient Video Hero with Direct Call & Audit Actions */}
      <HeroBespoke />

      {/* 2. Sleek Midnight Client Proof Marquee Bar */}
      <ClientMarquee />

      {/* 3. Why Materialize? (Inspired by Skol: 3 Value Pillars + 4 Trust Stats) */}
      <WhyMaterialize />

      {/* 4. Skol-Style 3x3 Services Grid with Highlighted Center 'Free Audit' Card */}
      <ServicesMatrix />

      {/* 5. Real Client Results with Browser Mockups & Real Project Images */}
      <WorkClean />

      {/* 6. Human Client Reviews & 5-Star Testimonials */}
      <TestimonialsClean />

      {/* 7. Transparent Flat Pricing ($299 Setup + $25/mo Hosting & Growth Tiers) */}
      <PricingClean />

      {/* 8. Meet Your Squad (Human Faces & Bios on the Homepage) */}
      <TeamClean />

      {/* 9. Free Marketing Guide & Small Business Playbook */}
      <div id="free-guide">
        <FreeMarketingGuideBanner />
      </div>

      {/* 10. Free 5-Minute Marketing Audit & Online Score Diagnostic */}
      <OnlineScoreAudit />

      {/* 11. Skol-Style Interactive Checkbox Contact Form */}
      <ContactClean />
    </>
  );
}
