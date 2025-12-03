import React from 'react';
import { Layout, Smartphone, Code, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Layout,
    title: 'Web Design',
    description: 'Creating beautiful, user-friendly websites that engage your audience and drive results.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Development',
    description: 'Building seamless experiences across all devices, from desktop to mobile.',
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored digital solutions designed specifically for your business needs.',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Developing cohesive visual identities that reflect your brand values.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[var(--color-gray-dark)]">Services</h2>
          <p className="text-[var(--color-gray-medium)] max-w-2xl mx-auto">
            Comprehensive digital design services to help your business thrive online
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-lg border border-[var(--color-gray-light)] hover:border-[var(--color-green)] transition-colors group"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-[var(--color-gray-light)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--color-green)] transition-colors"
              >
                <service.icon className="text-[var(--color-gray-dark)] group-hover:text-white transition-colors" size={24} />
              </motion.div>
              <h3 className="mb-3 text-[var(--color-gray-dark)]">{service.title}</h3>
              <p className="text-[var(--color-gray-medium)]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}