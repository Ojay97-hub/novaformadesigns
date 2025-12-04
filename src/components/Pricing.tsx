import React, { useState } from 'react';
import { Check, Compass, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './Pricing.css';

const pricingTiers = [
  {
    name: 'Forma Start',
    price: '£300–£600',
    subtitle: 'Perfect for small local businesses and personal brands',
    description: 'Perfect for small local businesses, trades, and personal brands',
    features: [
      '1–3 page site (Home, About, Contact)',
      'Simple clean UI design',
      'Mobile responsive',
      'Basic animations',
      'Contact form',
      '1 revision round',
    ],
    addOns: [
      '+£50–£100: Logo refresh',
      '+£20/month: Hosting & support',
      '+£50: Basic SEO setup',
    ],
    color: '#75dddd',
    accentColor: '#5ec2c2',
  },
  {
    name: 'Forma Grow',
    price: '£700–£1,200',
    subtitle: 'Ideal for small companies and service businesses',
    description: 'Ideal for small companies, creators, events, and service businesses',
    features: [
      '4–7 custom-designed pages',
      'Stronger UI design concept / style guide',
      'Responsive design + micro-interactions',
      'Image optimisation',
      'Blog setup (optional)',
      '2–3 revision rounds',
      'CMS for easy content editing',
    ],
    addOns: [
      '+£150: Brand discovery + moodboard',
      '+£50/page: Additional pages',
      '+£100: Booking system integration',
      '+£150: Basic analytics dashboard',
    ],
    color: '#508991',
    accentColor: '#3d6b72',
  },
  {
    name: 'Forma Pro',
    price: '£1,200–£2,000',
    subtitle: 'For businesses wanting conversion-focused design',
    description: 'For businesses wanting stronger design and conversion-focused flows',
    features: [
      '6–12 pages',
      'Full UI concept with components + style guide',
      'CMS collections',
      'Advanced animations/interactions',
      'Onsite SEO (titles, metadata, URLs)',
      '3–4 revision rounds',
      'Light copywriting support',
      'Performance optimisation',
    ],
    addOns: [
      '+£300–£600: E-commerce store setup',
      '+£200: CRM / email marketing integration',
      '+£300: Custom interactive components',
      '+£50/month: Priority support',
    ],
    color: '#172a3a',
    accentColor: '#0f1c26',
  },
];

export function Pricing() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Pricing Information */}
          <aside className="lg:sticky lg:top-32">
            <motion.header
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-8 shadow-lg"
                aria-hidden="true"
              >
                <Compass className="text-white" size={32} />
              </motion.div>

              <h2 id="pricing-heading" className="mb-6 text-4xl font-bold text-[var(--color-navy)]">Pick your ideal plan</h2>
              <p className="text-lg mb-8 text-[var(--color-gray-dark)] leading-relaxed">
                Start your journey with a package that fits your needs. It's time to elevate your brand with professional digital design.
              </p>

              <ul className="space-y-4 mb-8" role="list">
                <li className="flex items-center gap-3 text-[var(--color-gray-dark)]">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" aria-hidden="true" />
                  </div>
                  <span>Transparent pricing, no hidden fees</span>
                </li>
                <li className="flex items-center gap-3 text-[var(--color-gray-dark)]">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" aria-hidden="true" />
                  </div>
                  <span>Flexible add-ons to scale with your business</span>
                </li>
                <li className="flex items-center gap-3 text-[var(--color-gray-dark)]">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" aria-hidden="true" />
                  </div>
                  <span>Day rates available from £120–£200/day</span>
                </li>
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl pricing-button"
                aria-label="Navigate to contact section to get started"
              >
                Get Started Today
              </motion.button>
            </motion.header>
          </aside>

          {/* Right Column - Pricing Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
              role="list"
              aria-label="Pricing plans"
            >
              {pricingTiers.map((tier, index) => {
                const isExpanded = expandedCard === index;
                const cardId = `pricing-card-${index}`;

                return (
                  <motion.article
                    key={tier.name}
                    id={cardId}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layout
                    className={`rounded-3xl p-10 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden group border border-transparent`}
                    style={{
                      backgroundColor:
                        tier.name === 'Forma Start' ? 'rgba(117, 221, 221, 0.15)' :
                          tier.name === 'Forma Grow' ? 'rgba(117, 221, 221, 0.3)' :
                            'rgba(80, 137, 145, 0.25)'
                    }}
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    role="listitem"
                  >
                    <header className="flex items-start justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-bold mb-3 text-[var(--color-navy)]">
                          {tier.name}
                        </h3>
                        <p className="text-base text-[var(--color-navy)]/80 leading-relaxed max-w-[90%]">
                          {tier.subtitle}
                        </p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div
                          className="font-bold text-2xl text-[var(--color-navy)]"
                          aria-label={`Price: ${tier.price}`}
                        >
                          {tier.price}
                        </div>
                      </div>
                    </header>

                    <button
                      className="flex items-center gap-2 text-base font-medium text-[var(--color-navy)] hover:gap-3 transition-all mb-8"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(isExpanded ? null : index);
                      }}
                      aria-expanded={isExpanded}
                      aria-controls={`${cardId}-details`}
                      aria-label={`${isExpanded ? 'Hide' : 'Show'} details for ${tier.name} plan`}
                    >
                      <span>View plan details</span>
                      <span aria-hidden="true">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.section
                          id={`${cardId}-details`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8 pt-8 border-t border-[var(--color-navy)]/10"
                          aria-labelledby={`${cardId}-includes-heading`}
                        >
                          <div>
                            <h4 id={`${cardId}-includes-heading`} className="text-lg font-bold mb-6 text-[var(--color-navy)]">
                              Includes:
                            </h4>
                            <ul className="space-y-4" role="list">
                              {tier.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-base text-[var(--color-navy)]/90"
                                >
                                  <Check
                                    size={20}
                                    className="shrink-0 mt-0.5 text-[var(--color-navy)]"
                                    aria-hidden="true"
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {tier.addOns.length > 0 && (
                            <div className="pt-8 border-t border-[var(--color-navy)]/10">
                              <h4 id={`${cardId}-addons-heading`} className="text-lg font-bold mb-6 text-[var(--color-navy)]">
                                Add-ons:
                              </h4>
                              <ul className="space-y-3" role="list">
                                {tier.addOns.map((addOn, idx) => (
                                  <li key={idx} className="text-sm flex items-center gap-3 text-[var(--color-navy)]/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-navy)]/40" />
                                    {addOn}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.section>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}