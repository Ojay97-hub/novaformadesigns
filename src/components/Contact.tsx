import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import './Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`New enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:owen.cotter@novaformadesigns.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 contact-section">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 contact-title">Get in Touch</h2>
          <p className="contact-subtitle max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how I can help bring your vision to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-8 contact-info-title">Contact Information</h3>
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 contact-icon-container rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="contact-icon" size={20} />
                </div>
                <div>
                  <h4 className="mb-1 contact-info-label">Email</h4>
                  <a href="mailto:owen.cotter@novaformadesigns.com" className="contact-info-link transition-colors text-sm">
                    owen.cotter@novaformadesigns.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 contact-icon-container rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="contact-icon" size={20} />
                </div>
                <div>
                  <h4 className="mb-1 contact-info-label">Phone</h4>
                  <a href="tel:+447548290644" className="contact-info-link transition-colors text-sm">
                    +44 7548 290644
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 contact-icon-container rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="contact-icon" size={20} />
                </div>
                <div>
                  <h4 className="mb-1 contact-info-label">Location</h4>
                  <p className="contact-info-link text-sm">
                    United Kingdom
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-5 bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
            >
              <div>
                <label htmlFor="name" className="block mb-2 contact-form-label text-sm">
                  Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg contact-form-input transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 contact-form-label text-sm">
                  Email *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg contact-form-input transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 contact-form-label text-sm">
                  Phone
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg contact-form-input transition-all"
                  placeholder="+44 7XXX XXXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 contact-form-label text-sm">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg contact-form-input resize-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 contact-submit-button rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Send Message
                <Send size={20} className="contact-submit-icon" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}