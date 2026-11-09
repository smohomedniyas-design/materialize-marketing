import React from 'react';
import { HeroClean } from '@/components/HeroClean';
import { ClientMarquee } from '@/components/ClientMarquee';
import { ServicesClean } from '@/components/ServicesClean';
import { ProcessClean } from '@/components/ProcessClean';
import { WorkClean } from '@/components/WorkClean';
import { PricingClean } from '@/components/PricingClean';
import { OnlineScoreAudit } from '@/components/OnlineScoreAudit';
import { ContactClean } from '@/components/ContactClean';

export default function HomePage() {
  return (
    <>
      {/* 1. Welcoming, High-Trust Skol-Style Hero */}
      <HeroClean />

      {/* 2. Client Trust Marquee Bar */}
      <ClientMarquee />

      {/* 3. The 4 Core Small-Business Marketing Pillars */}
      <ServicesClean />

      {/* 4. Streamlined 3-Step "No Stress" Roadmap */}
      <ProcessClean />

      {/* 5. Real Client Success Results & Case Studies */}
      <WorkClean />

      {/* 6. Transparent Flat Pricing ($25/mo Hosting & Growth Tiers) + FAQs */}
      <PricingClean />

      {/* 7. Free 5-Minute Marketing Audit & Online Score Diagnostic */}
      <OnlineScoreAudit />

      {/* 8. Direct Consultation Booking & Agency Contact Form */}
      <ContactClean />
    </>
  );
}