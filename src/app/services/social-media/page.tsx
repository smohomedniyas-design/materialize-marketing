import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Share2, 
  Calendar, 
  MessageSquare, 
  Palette, 
  CheckCheck, 
  Sparkles 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Hands-Free Social Media Management (Organic) - Materialize Marketing',
  description:
    '12 to 16 custom branded posts, Reels, and carousels per month with zero effort from your team. We write the copy, edit graphics and video, and schedule across Instagram, Facebook & LinkedIn.',
};

export default function SocialMediaServicePage() {
  const service = SERVICES.find((s) => s.slug === 'social-media')!;

  const managementPillars = [
    {
      icon: Palette,
      title: '12-16 Custom Branded Assets / Mo',
      desc: 'Our creative squad designs high-quality Canva and Photoshop templates customized with your fonts, hex colors, and logo. Includes educational carousels, customer spotlights, and promotions.',
    },
    {
      icon: Calendar,
      title: 'Full Monthly Content Calendar',
      desc: 'Never wonder what to post. We build your entire editorial calendar 1 week in advance, with all imagery and written captions ready for your quick review and 1-click approval.',
    },
    {
      icon: Share2,
      title: 'Multi-Channel Automated Publishing',
      desc: 'We schedule and cross-post your approved content across Instagram, Facebook Business, LinkedIn, and TikTok at optimal local engagement hours for maximum reach.',
    },
    {
      icon: MessageSquare,
      title: 'Active Community & Comment Care',
      desc: 'Our support squad monitors incoming post comments, answers routine business inquiries, and tags your team for urgent customer requests during business hours.',
    },
  ];

  return (
    <div className="pt-28 md:pt-36">
      {/* Hero Header */}
      <section className="bg-ink text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
          </Link>
          <div className="max-w-3xl">
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-white/50">
              Discipline 07 · Organic Growth
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Hands-Free <span className="text-lime">Social Media Management</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              You run your company; our creative team handles your social presence.
              We produce custom graphics, edit Reels, write engaging captions, and schedule posts every single week.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=Social+Media+Management" className="btn-primary">
                Take Social Off Your Plate
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Retainer Options ($497/mo)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="bg-paper py-20 text-ink">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="eyebrow text-ink/50">Consistent Social Authority</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  Stay Top-of-Mind Without Spending Hours in Canva.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Most small business owners start strong on Instagram and Facebook, then get busy and post nothing for 3 months.
                  An inactive social profile signals to prospects that your business might be closed or unpolished.
                  Materialize Marketing ensures your feeds stay vibrant, fresh, and professional every single week.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {managementPillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="p-6 rounded-2xl border border-ink/10 bg-white">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-ink mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-extrabold text-lg">{p.title}</h3>
                      <p className="text-xs text-ink/65 mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Workflow Breakdown */}
              <div className="p-6 md:p-8 rounded-2xl bg-sand/60 border border-ink/10 space-y-3">
                <h3 className="font-display font-bold text-xl">How Our Done-For-You Process Works</h3>
                <div className="space-y-2 text-xs text-ink/75">
                  <p><strong>Step 1:</strong> You share photos, project snapshots, or raw video clips via our shared Google Drive / Slack folder.</p>
                  <p><strong>Step 2:</strong> Our creative squad edits the imagery, color grades photos, writes engaging local captions, and formats 12-16 posts.</p>
                  <p><strong>Step 3:</strong> You review the monthly calendar preview and approve with 1 click.</p>
                  <p><strong>Step 4:</strong> We schedule and publish everything automatically while you focus on running your business.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">Social Media Retainer</h3>
                <p className="text-xs text-ink/50 mt-1">Starting at {service.startingPrice}</p>

                <div className="mt-6 space-y-3">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/80">
                      <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10 space-y-3">
                  <Link
                    href="/contact?type=Social+Media+Management"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Start Social Retainer
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    Includes 12 to 16 custom assets produced and scheduled every month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
