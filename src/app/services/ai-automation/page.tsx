import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SERVICES } from '@/data/siteData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  PhoneCall, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: '24/7 AI Voice & Receptionist Agents - Materialize Marketing',
  description:
    'Never miss a customer phone call again. Conversational AI voice agents answer calls 24/7, answer common questions, qualify leads, and book appointments directly on your calendar.',
};

export default function AiAutomationServicePage() {
  const service = SERVICES.find((s) => s.slug === 'ai-automation')!;

  const aiPillars = [
    {
      icon: PhoneCall,
      title: 'Sub-2-Second Call Answering',
      desc: 'When an inbound client calls your business after hours, on weekends, or while you are on a job site, your AI receptionist answers instantly with a warm, human-like voice.',
    },
    {
      icon: Bot,
      title: 'Trained on Your Exact Business FAQs',
      desc: 'We train the AI model on your specific services, pricing ranges, service areas, hours, and business policies so it answers accurately without hallucinations.',
    },
    {
      icon: Calendar,
      title: 'Live Calendar Appointment Booking',
      desc: 'Connected directly to Google Calendar or Calendly, your AI agent checks open appointment slots in real time and books consultations while the caller is still on the line.',
    },
    {
      icon: Clock,
      title: 'Instant SMS & Email Notifications',
      desc: 'The second the call concludes, the caller receives an automated SMS confirmation, and your team gets an email with the complete call transcript, audio recording, and summary.',
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
              Discipline 09 · 24/7 Automation
            </span>
            <h1 className="font-display text-4xl font-black tracking-tight sm:text-5xl md:text-6xl mt-2">
              24/7 AI Voice &amp; <span className="text-lime">Receptionist Agents</span>
            </h1>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Every missed phone call is money handed directly to your competitors.
              Our smart conversational AI voice agents answer inbound phone calls around the clock, answer questions, and book appointments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact?type=AI+Voice+Agents" className="btn-primary">
                Deploy Your AI Receptionist
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/pricing" className="btn-ghost">
                View Pricing ($199 + $49/mo)
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
                <span className="eyebrow text-ink/50">Stop Losing Inbound Revenue</span>
                <h2 className="section-h2 mt-3 text-3xl md:text-4xl">
                  Over 62% of Small Business Phone Calls Go to Voicemail.
                </h2>
                <p className="mt-4 text-base text-ink/70 leading-relaxed">
                  When a customer has an emergency or wants to hire a professional, they do not leave voicemails — they hang up
                  and call the next business on Google. Our AI phone agents eliminate voicemail forever. Your business answers
                  promptly, professionally, and books appointments 24 hours a day, 365 days a year.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                {aiPillars.map((p, i) => {
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

              {/* Live Demo Callout */}
              <div className="p-6 md:p-8 rounded-2xl bg-ink text-white border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-lime shrink-0" />
                  <h3 className="font-display font-bold text-xl">Hear It in Action on a Live Demo Call</h3>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Want to hear how human and intelligent our conversational voice agents sound? Call our agency line at{' '}
                  <strong className="text-white">(469) 215-7794</strong> or schedule a live interactive demonstration.
                </p>
                <div className="pt-2">
                  <a href="tel:4692157794" className="btn-primary !text-xs !py-2.5 inline-flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5" /> Call (469) 215-7794 Now
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-7 shadow-lg">
                <h3 className="font-display font-extrabold text-xl">AI Receptionist Setup</h3>
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
                    href="/contact?type=AI+Voice+Agents"
                    className="btn-ink w-full !text-sm text-center"
                  >
                    Deploy AI Phone Agent
                  </Link>
                  <p className="text-[11px] text-center text-ink/50">
                    Live in 3-5 days with full prompt training and calendar sync.
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

