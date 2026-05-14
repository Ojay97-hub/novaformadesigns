
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import './About.css';
import owenProfile from '../assets/dogs_and_me.png';

const highlights = [
  'Personal, careful service',
  'Clean, practical design',
  'Responsive, accessible websites',
  'Honest support as your site grows',
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 about-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-6 about-title">About</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="about-text mb-4"
            >
              <strong>Founded by Owen Cotter</strong>, Nova Forma Designs is my UK-based web design and development business, helping small businesses, local organisations, and independent projects build a clear, professional online presence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="about-text mb-4"
            >
              I am at the early stage of my design and development career, which means every project matters deeply to me. My focus is on creating websites that are clean, easy to use, responsive across devices, and tailored to the needs of the people behind the business.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="about-text mb-4"
            >
              So far, my work has included a website for a local village hall, giving me hands-on experience in turning real requirements into a practical, accessible website. As I continue to grow, I bring a careful, honest, and detail-focused approach to every client I work with.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="about-text mb-8"
            >
              I believe good websites do not need to be overcomplicated. They need to look professional, communicate clearly, and make it easier for people to find, trust, and contact you. That is the kind of work I aim to create.</motion.p>
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{
                    x: 10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <CheckCircle2 className="about-check-icon shrink-0" size={24} />
                  </motion.div>
                  <span className="about-highlight-text">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={owenProfile}
                alt="Owen Cotter - Founder of Nova Forma Designs"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6"
              >
                <h3 className="text-white text-xl font-semibold mb-1">Owen Cotter</h3>
                <p className="text-white/80 text-sm">Founder, Web Designer & Developer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
