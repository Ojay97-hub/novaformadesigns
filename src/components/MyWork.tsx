import { ExternalLink, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import './MyWork.css';

const projects = [
  {
    category: 'Academic Work',
    icon: GraduationCap,
    title: 'Portfolio Website',
    description:
      'My academic portfolio showcasing projects, coursework, and the journey that shaped my approach to web design and development.',
    href: 'https://ojay97-hub.github.io/portfolio-website-2.0/',
    cta: 'View My Portfolio',
  },
  {
    category: 'Real-World Project',
    icon: Briefcase,
    title: 'Penmaen & Nicholaston Village Hall',
    description:
      'A live website built for a community village hall in Gower, designed to help locals find bookings, events, and information about the venue.',
    href: 'https://www.penmaenandnicholastonvh.co.uk/',
    cta: 'Visit Live Site',
  },
];

export function MyWork() {
  return (
    <section id="work" className="py-24 px-6 work-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 work-title">My Work</h2>
          <p className="work-subtitle max-w-2xl mx-auto">
            A look at projects I&rsquo;ve delivered &mdash; from academic foundations to real-world clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="work-card group"
            >
              <div className="work-card-header">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="work-icon-container"
                >
                  <project.icon className="work-icon" size={24} />
                </motion.div>
                <span className="work-category">{project.category}</span>
              </div>

              <h3 className="work-card-title">{project.title}</h3>
              <p className="work-card-description">{project.description}</p>

              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="work-card-button"
              >
                {project.cta}
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
