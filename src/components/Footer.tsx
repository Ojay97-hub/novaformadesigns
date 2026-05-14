
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="text-white py-12 px-6 relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
        borderRadius: '2rem 2rem 0 0',
        marginTop: '-2rem',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-white mb-3">nova forma designs</h4>
            <p className="text-white/80">
              Tailoring digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white mb-3">Quick Links</h4>
            <div className="space-y-2">
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToSection('services')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Services
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                About
              </motion.button>
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToSection('contact')}
                className="block text-white/80 hover:text-white transition-colors"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white mb-3">Connect</h4>
            <div className="space-y-2 mb-4">
              <a href="mailto:owen.cotter@novaformadesigns.com" className="block text-white/80 hover:text-white transition-colors">
                owen.cotter@novaformadesigns.com
              </a>
              <a href="tel:+447548290644" className="block text-white/80 hover:text-white transition-colors">
                +44 7548 290644
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <motion.a
                href="https://www.linkedin.com/in/junior-fullstack-webdev-ui-designer-owen-cotter"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nova_forma_designs/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61586746437661"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-white/20 text-center text-white/70"
        >
          <p>&copy; {new Date().getFullYear()} Nova Forma Designs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}