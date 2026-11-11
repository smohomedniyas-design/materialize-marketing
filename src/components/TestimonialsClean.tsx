'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsClean: React.FC = () => {
  const reviews = [
    {
      name: 'Matthew G.',
      role: 'Owner, Commercial Services',
      location: 'Dallas-Fort Worth, TX',
      quote:
        'Our company went with Materialize when we needed a professional new look for our website. Since then, we have enjoyed first-rate web development, excellent customer service, and expedient troubleshooting to any request. They treat our business like their own.',
      stars: 5,
    },
    {
      name: 'Adam H.',
      role: 'Founder, Streetwear & Apparel',
      location: 'Phoenix, AZ',
      quote:
        'The team at Materialize was great to work with. They engineered our custom storefront, helped with ad creative, and optimized our 1-click checkout. Since we launched, our online sales have grown by over 45% and the site has never crashed during traffic spikes.',
      stars: 5,
    },
    {
      name: 'Carrie R.',
      role: 'Managing Partner, Advisory & Wealth',
      location: 'Prosper, TX',
      quote:
        'As a business leader, I am so grateful for their responsiveness. They take care of our web updates, hosting, and digital strategy with zero friction. Whenever we need something updated, a real human answers our call and it is handled the same day.',
      stars: 5,
    },
    {
      name: 'Brad E.',
      role: 'Director, Transportation & Concierge',
      location: 'Scottsdale, AZ',
      quote:
        'Materialize is truly the real deal! Everyone on the team is customer-service oriented and exceptionally tech-savvy. They explain the entire process in simple, plain English without any confusing technical jargon.',
      stars: 5,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 text-ink border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow justify-center text-ink/50">Client Experiences</p>
          <h2 className="section-h2 mt-3">
            Real Feedback from Real Business Owners.
          </h2>
          <p className="mt-3 text-base text-ink/70">
            Hear why founders, contractors, and local business leaders partner with Materialize Marketing for their digital growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-sand/20 p-8 sm:p-9 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-ink/70">5.0 Star Review</span>
                </div>

                <Quote className="w-8 h-8 text-lime-800/20 mb-3" />

                <p className="text-sm sm:text-base text-ink/80 leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-base text-ink flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-700" />
                  </h4>
                  <p className="text-xs text-ink/60">{rev.role}</p>
                </div>
                <span className="text-xs font-semibold text-ink/50 bg-white px-3 py-1 rounded-full border border-ink/10">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

