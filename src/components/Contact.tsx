import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, Check, MessageCircle, Zap, TrendingUp, Crown, Sparkles } from 'lucide-react';
import * as Select from '@radix-ui/react-select';
import { motion } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export function Contact() {
  const [state, handleFormspreeSubmit] = useForm("xdkqdgrq");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'General Enquiry',
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

  const handlePlanChange = (value: string) => {
    setFormData({
      ...formData,
      plan: value,
    });
  };

  // Reset form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: 'General Enquiry',
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

                <div className="grid grid-cols-1 gap-5">
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
                      className="w-full px-4 py-3 mb-6 border rounded-lg contact-form-input transition-all"
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                  <div className="mt-8">
                    <label htmlFor="plan" className="block mb-2 mt-8 contact-form-label text-sm">
                      Interested Plan
                    </label>
                    <Select.Root value={formData.plan} onValueChange={handlePlanChange}>
                      <Select.Trigger className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl text-left flex items-center justify-between outline-none focus:ring-2 focus:ring-[#75dddd]/20 transition-all shadow-sm hover:border-gray-300 group">
                        <div className="flex items-center gap-3">
                          <Select.Value placeholder="Select a plan" />
                        </div>
                        <Select.Icon>
                          <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Content
                          className="overflow-hidden bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 z-50 animate-in fade-in zoom-in-95 duration-200"
                          style={{ width: 'var(--radix-select-trigger-width)' }}
                          position="popper"
                          sideOffset={8}
                        >
                          <Select.Viewport className="p-4">
                            {[
                              { value: "General Enquiry", icon: MessageCircle, label: "General Enquiry" },
                              { value: "Forma Start", icon: Zap, label: "Forma Start (£300–£600)" },
                              { value: "Forma Grow", icon: TrendingUp, label: "Forma Grow (£700–£1,200)" },
                              { value: "Forma Pro", icon: Crown, label: "Forma Pro (£1,200–£2,000)" },
                              { value: "Custom Project", icon: Sparkles, label: "Custom Project" }
                            ].map((item) => (
                              <Select.Item
                                key={item.value}
                                value={item.value}
                                className="flex items-center gap-4 h-16 px-6 py-4 text-sm text-gray-600 rounded-xl select-none outline-none cursor-pointer transition-colors data-[highlighted]:bg-gray-50 data-[highlighted]:text-gray-900 data-[state=checked]:bg-[#75dddd]/10 data-[state=checked]:text-[#2a9d8f]"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-500">
                                  <item.icon size={16} />
                                </div>
                                <span className="flex-1"><Select.ItemText>{item.label}</Select.ItemText></span>
                                <Select.ItemIndicator className="flex-shrink-0 inline-flex items-center justify-center text-[#2a9d8f] ml-2">
                                  <Check className="h-4 w-4" />
                                </Select.ItemIndicator>
                              </Select.Item>
                            ))}
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                    {/* Hidden input to send plan value to Formspree */}
                    <input type="hidden" name="plan" value={formData.plan} />
                  </div>
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