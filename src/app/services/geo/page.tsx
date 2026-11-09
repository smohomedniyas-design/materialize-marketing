import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  Database, 
  Network, 
  Search, 
  CheckCheck 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) & AI Search - Materialize Marketing',
  description:
    'Get your business cited and recommended by ChatGPT, Gemini, Perplexity, and Claude. Structured schema graphs, entity optimization, and 2026 AI search authority.',
};

export default function GeoServicePage() {
  const service = SERVICES.find((s) => s.slug === 'geo')!;

  const geoPillars = [
    {
      icon: Network,
      title: 'Machine-Readable Business Authority',
      desc: 'We format your business information into structured data code that AI models read effortlessly, defining your exact services, staff credentials, local address, and verified reviews.',
    },
    {
      icon: Database,
      title: 'Trusted AI Citation Networks',
      desc: 'ChatGPT and Gemini pull recommendations from high-authority local and national databases. We establish your business footprint across certified directories so AI models trust your information.',
    },
    {
      icon: Bot,
      title: 'Conversational Voice & AI Prompts',
      desc: 'Customers ask AI assistants full sentences like "Who is the most reliable contractor in Prosper?". We optimize your website content to directly answer the exact questions local customers ask AI tools.',
    },
    {
      icon: Sparkles,
      title: 'Continuous AI Search Verification',
      desc: 'We regularly test and benchmark how ChatGPT, Google Gemini, Perplexity, and Apple Intelligence answer questions about your industry and city, ensuring your brand stays recommended first.',
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
              Discipline 04 · The 2026 AI Search Frontier
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              Generative Engine Optimization <span className="text-lime">(GEO)</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Customers are no longer just clicking blue Google links — they are asking ChatGPT, Perplexity, and Gemini for the best business in town.
              We build the semantic authority and entity data required for AI engines to recommend your company first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=GEO+AI+Search" className="btn-primary">
                Optimize Your Brand for AI
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                Included in Growth Retainers
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
                <span className="eyebrow text-ink/50">Next-Generation Discovery</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  When Someone Asks AI for a Recommendation, Does It Name You?
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  Generative Engine Optimization (GEO) is the evolution of traditional SEO. Large Language Models do not
                  read meta keywords; they evaluate entity consistency, brand authority graphs, and contextual consensus.
                  We transform your website into an authoritative knowledge source that AI agents trust and quote.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {geoPillars.map((p, i) => {
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

              {/* Comparison Box */}
              <div className="p-6 md:p-8 rounded-2xl bg-sand/60 border border-ink/10 space-y-4">
                <h3 className="font-display font-bold text-xl">Traditional SEO vs. Generative Engine Optimization</h3>
                <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="p-4 rounded-xl bg-white border border-ink/10">
                    <p className="font-extrabold text-ink uppercase tracking-wider mb-2">Traditional SEO (2015-2024)</p>
                    <ul className="space-y-1.5 text-ink/70">
                      <li>• Keyword density and backlinks</li>
                      <li>• Blue link ranking on page 1</li>
                      <li>• Generic blog post volume</li>
                      <li>• Manual clicks to find answers</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-ink text-white border border-lime/30">
                    <p className="font-extrabold text-lime uppercase tracking-wider mb-2">GEO with Materialize (2026+)</p>
                    <ul className="space-y-1.5 text-white/80">
                      <li>• Machine-readable semantic entity graph</li>
                      <li>• Direct answer citation in ChatGPT &amp; Gemini</li>
                      <li>• Fact-verified authority and brand consensus</li>
                      <li>• 1-click customer recommendation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">GEO Implementation</h3>
                <p className="text-xs text-ink/50 mt-1">{service.startingPrice}</p>

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
                    href="/contact?type=GEO+AI+Search"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Inquire About GEO Setup
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    Automatically bundled with our Full Growth Partner retainers.
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

