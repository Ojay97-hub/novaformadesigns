import React, { useState } from 'react';
import { Check, Compass, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
    color: 'teal',
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
    color: 'green',
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
    color: 'navy',
  },
];

export function Pricing() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const getColorClasses = (color: string, isExpanded: boolean) => {
    if (isExpanded) {
      return 'bg-white border-[var(--color-navy)]';
    }
    switch (color) {
      case 'teal':
        return 'bg-[var(--color-teal)]/20 border-[var(--color-teal)]/30';
      case 'green':
        return 'bg-[var(--color-green)]/20 border-[var(--color-green)]/30';
      case 'navy':
        return 'bg-[var(--color-navy)]/10 border-[var(--color-navy)]/30';
      default:
        return 'bg-white border-[var(--color-gray-light)]';
    }
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-[var(--color-offwhite)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-[var(--color-navy)] rounded-full flex items-center justify-center mb-8"
            >
              <Compass className="text-white" size={32} />
            </motion.div>
            
            <h2 className="mb-6 text-[var(--color-gray-dark)]">Pick your ideal plan</h2>
            <p className="text-[var(--color-gray-medium)] text-lg mb-8">
              Start your journey with a package that fits your needs. It's time to elevate your brand with professional digital design.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[var(--color-green)] flex-shrink-0" />
                <p className="text-[var(--color-gray-medium)]">Transparent pricing, no hidden fees</p>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[var(--color-green)] flex-shrink-0" />
                <p className="text-[var(--color-gray-medium)]">Flexible add-ons to scale with your business</p>
              </div>
              <div className="flex items-center gap-3">
                <Check size={20} className="text-[var(--color-green)] flex-shrink-0" />
                <p className="text-[var(--color-gray-medium)]">Day rates available from £120–£200/day</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[var(--color-navy)] text-white rounded-lg hover:bg-[var(--color-navy-dark)] transition-colors shadow-lg"
            >
              Get Started Today
            </motion.button>
          </motion.div>

          {/* Right Column - Scrolling Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {pricingTiers.map((tier, index) => {
                const isExpanded = expandedCard === index;
                
                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    layout
                    className={`rounded-2xl p-6 border-2 transition-all cursor-pointer ${getColorClasses(tier.color, isExpanded)}`}
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[var(--color-gray-dark)] mb-1">{tier.name}</h3>
                        <p className="text-sm text-[var(--color-gray-medium)]">{tier.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-[var(--color-navy)]">
                          {tier.price}
                        </div>
                      </div>
                    </div>

                    <button 
                      className="flex items-center gap-2 text-sm text-[var(--color-navy)] hover:gap-3 transition-all mb-4"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(isExpanded ? null : index);
                      }}
                    >
                      View plan details
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pt-4 border-t border-[var(--color-gray-light)]"
                        >
                          <div>
                            <h4 className="text-sm mb-3 text-[var(--color-gray-dark)]">
                              Includes:
                            </h4>
                            <ul className="space-y-2">
                              {tier.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-[var(--color-gray-medium)]"
                                >
                                  <Check size={16} className="flex-shrink-0 mt-0.5 text-[var(--color-navy)]" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {tier.addOns.length > 0 && (
                            <div className="pt-4 border-t border-[var(--color-gray-light)]">
                              <h4 className="text-sm mb-3 text-[var(--color-gray-dark)]">
                                Add-ons:
                              </h4>
                              <ul className="space-y-1">
                                {tier.addOns.map((addOn, idx) => (
                                  <li key={idx} className="text-xs text-[var(--color-gray-medium)]">
                                    {addOn}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}