
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import './About.css';
import owenProfile from '../assets/dogs_and_me.png';

const highlights = [
  'Client-focused approach',
  'Modern design principles',
  'Clean, maintainable code',
  'Responsive & accessible',
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
              <strong>Founded by Owen Cotter</strong>, Nova Forma Designs offers UK-based web design and development, dedicated to helping businesses establish a powerful online presence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="about-text mb-4"
            >
              I specialise in creating tailored web experiences that help businesses connect with their audiences. From startups looking for their first website to established companies seeking a digital refresh, I deliver solutions that drive real results.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="about-text mb-4"
            >
              With a focus on clean design, modern technology, and user-centred thinking, I transform ideas into impactful digital solutions. Every project I undertake reflects my commitment to quality craftsmanship and attention to detail.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="about-text mb-8"
            >
              My approach combines creative design with technical expertise, ensuring your website not only looks stunning but also performs flawlessly across all devices. I believe in building lasting partnerships with my clients, providing ongoing support and guidance as your business grows.</motion.p>
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
                <p className="text-white/80 text-sm">Founder & Lead Developer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}