import React, { useState } from 'react';
import { Mail, Phone, Send, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export function Contact() {
  const [state, handleFormspreeSubmit] = useForm("xdkqdgrq");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormspreeSubmit(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-24 px-6 contact-section">
      <div className="max-w-6xl mx-auto relative z-10">
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

        <div className="contact-stack">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-banner">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 contact-icon-container rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="contact-icon" size={20} />
                </div>
                <div>
                  <h4 className="mb-1 contact-info-label">Email</h4>
                  <a href="mailto:owen.cotter@novaformadesigns.com" className="contact-info-link transition-colors text-sm break-all">
                    owen.cotter@novaformadesigns.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
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

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="contact-form-wrapper"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 contact-form-container text-center"
              >
                <div className="w-16 h-16 bg-[#75dddd]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-[#2a9d8f]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5 bg-white p-10 rounded-2xl shadow-xl border border-gray-200 contact-form-container"
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
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
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
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
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
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-8 py-4 contact-submit-button rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  <Send size={20} className="contact-submit-icon" />
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}