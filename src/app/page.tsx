import React from 'react';
import { HeroCarousel } from '@/components/HeroCarousel';
import { StatsCounter } from '@/components/StatsCounter';
import { ClientMarquee } from '@/components/ClientMarquee';
import { OnlineScoreAudit } from '@/components/OnlineScoreAudit';
import { ServicesPreview } from '@/components/ServicesPreview';
import { WorkWall } from '@/components/WorkWall';
import { PricingSection } from '@/components/PricingSection';
import { CostEstimator } from '@/components/CostEstimator';
import { FreeMarketingGuideBanner } from '@/components/FreeMarketingGuideBanner';
import { ProcessTimeline } from '@/components/ProcessTimeline';
import { IntakeForm } from '@/components/IntakeForm';
import { CtaBanner } from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 1. Rotating Pillar Hero with Dual Skol-style CTA */}
      <HeroCarousel />

      {/* 2. Trust Stats Bar */}
      <StatsCounter />

      {/* 3. Infinite Client Marquee */}
      <ClientMarquee />

      {/* 4. Skol Marketing Inspired: Free 5-Min Marketing Audit & Online Score Checker */}
      <OnlineScoreAudit />

      {/* 5. Core Disciplines / Services */}
      <ServicesPreview />

      {/* 6. Portfolio / Work Wall with Category Filter Pills and SVG Mockups */}
      <WorkWall />

      {/* 7. Recurring Pricing Packages ($25/mo Launch, $99/mo Commerce, Full Retainers) */}
      <PricingSection />

      {/* 8. Interactive Scope & Cost Calculator Section */}
      <section className="bg-sand/40 py-16 md:py-24 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <CostEstimator />
        </div>
      </section>

      {/* 9. Skol Marketing Inspired: Free Marketing Handbook Lead Magnet */}
      <div id="free-guide">
        <FreeMarketingGuideBanner />
      </div>

      {/* 10. Streamlined 4-Step Milestone Process */}
      <ProcessTimeline />

      {/* 11. Project Intake Form */}
      <IntakeForm />

      {/* 12. Final Call to Action */}
      <CtaBanner />
    </>
  );
}
