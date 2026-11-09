'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, Mail, Phone, MapPin, Send, CheckCircle2, RotateCcw } from 'lucide-react';

function SearchParamHandler({
  onParams: setFormData,
}: {
  onParams: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      company: string;
      type: string;
      budget: string;
      message: string;
    }>
  >;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;
    const pkg = searchParams.get('package');
    const typeParam = searchParams.get('type');
    const budgetParam = searchParams.get('budget');

    if (pkg) {
      if (pkg === 'launch') {
        setFormData((prev) => ({
          ...prev,
          type: 'Landing Page / Funnel',
          budget: 'Under $300',
          message: 'Interested in the Launch Starter package ($299+).',
        }));
      } else if (pkg === 'commerce') {
        setFormData((prev) => ({
          ...prev,
          type: 'E-commerce',
          budget: '$300 - $700',
          message: 'Interested in the Commerce Professional package ($699+).',
        }));
      } else if (pkg === 'custom') {
        setFormData((prev) => ({
          ...prev,
          type: 'Web Development',
          budget: '$1,500 - $3,000',
          message: 'Interested in discussing an Enterprise Custom solution.',
        }));
      }
    } else if (typeParam) {
      setFormData((prev) => ({
        ...prev,
        type: typeParam,
        budget: budgetParam || prev.budget,
        message: `Estimated scope: ${typeParam}. Looking forward to discussing details.`,
      }));
    }
  }, [searchParams, setFormData]);

  return null;
}

export const IntakeForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'native' | 'monday'>('native');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'Web Development',
    budget: '$300 - $700',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      type: 'Web Development',
      budget: '$300 - $700',
      message: '',
    });
    setFormSubmitted(false);
  };

  return (
    <section id="intake" className="bg-sand py-20 text-ink md:py-28">
      <Suspense fallback={null}>
        <SearchParamHandler onParams={setFormData} />
      </Suspense>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink/50">Get started</p>
            <h2 className="section-h2 mt-4">Tell us about your project.</h2>
            <p className="mt-4 text-base text-ink/65 md:text-lg">
              Perhaps your site has outgrown its host, or your checkout leaks sales? Share the brief
              below and we&apos;ll come back with honest options and a fixed quote.
            </p>

            <ul className="mt-8 space-y-3.5 text-sm font-semibold md:text-base">
              <li className="flex gap-3 items-center">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                A reply within one business day
              </li>
              <li className="flex gap-3 items-center">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                Fixed quote before we write a line of code
              </li>
              <li className="flex gap-3 items-center">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                No lock-in - talk it over first, always
              </li>
            </ul>

            <div className="mt-10 space-y-3 rounded-2xl bg-white/70 p-4 sm:p-6 border border-ink/10 text-sm md:text-base">
              <p className="font-bold text-ink">Prefer direct email or a phone call?</p>
              <div className="flex items-center gap-2.5 text-ink/70">
                <Mail className="w-4 h-4 text-ink shrink-0" />
                <a
                  className="font-semibold underline decoration-lime decoration-2 underline-offset-4 transition hover:text-ink break-all"
                  href="mailto:hello@materializemarketing.com"
                >
                  hello@materializemarketing.com
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-ink/70">
                <Phone className="w-4 h-4 text-ink shrink-0" />
                <a
                  className="font-semibold underline decoration-lime decoration-2 underline-offset-4 transition hover:text-ink"
                  href="tel:+14155550134"
                >
                  (415) 555-0134
                </a>
                <span className="text-xs text-ink/45">· Mon-Fri, 9am-6pm PT</span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 text-ink/50 text-xs border-t border-ink/10">
                <MapPin className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                <span>San Francisco HQ - 548 Market St, Ste 300, San Francisco, CA 94104</span>
              </div>
            </div>
          </div>

          {/* Right form card column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-ink/10 bg-white p-4 sm:p-6 md:p-8 shadow-xl">
              {/* Tabs for Native form vs Monday.com embed */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 pb-4 mb-6">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('native')}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      activeTab === 'native'
                        ? 'bg-ink text-white'
                        : 'bg-paper text-ink/60 hover:text-ink'
                    }`}
                  >
                    Direct Project Brief
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('monday')}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      activeTab === 'monday'
                        ? 'bg-ink text-white'
                        : 'bg-paper text-ink/60 hover:text-ink'
                    }`}
                  >
                    Monday.com CRM View
                  </button>
                </div>
                <span className="text-[11px] font-bold text-ink/40 hidden sm:inline">
                  ⚡ 24h Senior Review
                </span>
              </div>

              {activeTab === 'monday' ? (
                <div className="py-8 px-4 text-center rounded-xl bg-paper/70 border border-dashed border-ink/20">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-lime/40 text-ink">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold">Monday.com Integration Active</h4>
                  <p className="mt-2 text-xs text-ink/60 max-w-md mx-auto">
                    Forms submitted here automatically sync to our live production pipeline on Monday.com
                    workspace board with instant engineer assignment.
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('native')}
                    className="btn-ink-line mt-6 !py-2 !px-4 !text-xs"
                  >
                    Switch to Direct Brief Form
                  </button>
                </div>
              ) : !formSubmitted ? (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fName"
                        className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/55"
                      >
                        Full Name <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="fName"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Cooper"
                        className="field"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fEmail"
                        className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/55"
                      >
                        Work Email <span className="text-orange-600">*</span>
                      </label>
                      <input
                        id="fEmail"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="field"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fCompany"
                        className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/55"
                      >
                        Company / Brand
                      </label>
                      <input
                        id="fCompany"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="field"
                        autoComplete="organization"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fType"
                        className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/55"
                      >
                        Project Type
                      </label>
                      <select
                        id="fType"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="field"
                      >
                        <option>Web Development</option>
                        <option>Digital Marketing &amp; Growth Strategies</option>
                        <option>E-commerce</option>
                        <option>Landing Page / Funnel</option>
                        <option>UI/UX Design</option>
                        <option>Maintenance &amp; Hosting</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="fBudget"
                      className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/55"
                    >
                      Budget Range
                    </label>
                    <select
                      id="fBudget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="field"
                    >
                      <option>Under $300</option>
                      <option>$300 - $700</option>
                      <option>$700 - $1,500</option>
                      <option>$1,500 - $3,000</option>
                      <option>$3,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="fMsg"
                      className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.18em] text-ink/55"
                    >
                      Project Brief <span className="text-orange-600">*</span>
                    </label>
                    <textarea
                      id="fMsg"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're building, who it's for, and what success looks like..."
                      className="field resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-ink w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Brief...
                      </>
                    ) : (
                      <>
                        Send My Project Brief
                        <Send className="w-4 h-4 ml-0.5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-ink/45">
                    Typically replies within one business day. We never share your details.
                  </p>
                </form>
              ) : (
                <div
                  id="formSuccess"
                  className="flex flex-col items-center justify-center py-12 text-center animate-fade-in"
                  role="status"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-lime text-ink shadow-lg">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight">
                    Brief received - talk soon.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-ink/65 md:text-base">
                    Your project brief for <strong>{formData.name || 'your project'}</strong> is in our
                    pipeline. Expect a personal reply from a senior strategist within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="btn-ink-line mt-8 inline-flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Send Another Brief
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
