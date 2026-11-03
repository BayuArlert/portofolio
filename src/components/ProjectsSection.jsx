import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useScrollAnimation,
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
  scaleInVariants,
} from '../hooks/useScrollAnimation';
import { Star, ExternalLink, Github, X, Briefcase, Sparkles, Rocket } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'School Tuition Payment',
    description:
      'A web-based application for digitally managing tuition payments. Features include student data management, bill checking, payment history, proof of payment printing, and real-time financial reports.',
    technologies: ['Laravel', 'Bootstrap', 'MySQL'],
    accentColor: '#9c27b0',
    image: '/images/project-spp.jpg',
    githubUrl: 'https://github.com/RPL-Esemka-Mussi/SPP-Sekolah_Agung-Bayu-Saputra',
    externalUrl: 'https://spp-payment-demo.vercel.app',
    size: 'large',
  },
  {
    id: '02',
    title: 'Scanner Image – Phone Extractor',
    description:
      'Scan images to automatically detect and extract phone numbers using the Gemini API. Simplifies retrieving contact data from photos quickly and accurately.',
    technologies: ['JavaScript', 'Vite', 'Gemini API'],
    accentColor: '#00bcd4',
    image: '/images/project-scanner.png',
    githubUrl: 'https://github.com/BayuArlert/scanner-img',
    externalUrl: 'https://scanner-img.vercel.app/',
    size: 'normal',
  },
  {
    id: '03',
    title: 'Barbershop Management',
    description:
      'Full-featured barbershop booking & management system. Handles appointment scheduling, barber staff management, customer queue, and revenue analytics in one dashboard.',
    technologies: ['Laravel', 'React', 'MySQL'],
    accentColor: '#ff9800',
    image: '/images/project-barber-2.png',
    images: [
      { label: 'Dashboard', url: '/images/project-barber-2.png' },
      { label: 'Login Page', url: '/images/project-barber-1.png' },
    ],
    githubUrl: 'https://github.com/BayuArlert',
    externalUrl: '#',
    size: 'normal',
  },
  {
    id: '04',
    title: 'Clinic Management System',
    description:
      'A comprehensive clinic management platform covering patient registration, doctor scheduling, medical records, and appointment booking — built for real healthcare workflows.',
    technologies: ['Laravel', 'React', 'MySQL'],
    accentColor: '#db5c79',
    image: '/images/project-clinic-2.png',
    images: [
      { label: 'Dashboard', url: '/images/project-clinic-2.png' },
      { label: 'Login Page', url: '/images/project-clinic-1.png' },
    ],
    githubUrl: 'https://github.com/BayuArlert',
    externalUrl: '#',
    size: 'large',
  },
  {
    id: '05',
    title: 'Google Maps & Web Data Scraper',
    description:
      'Automated web scraping and lead generation service for Google Maps and target websites. Capable of extracting structured business leads (names, ratings, contact numbers, addresses, websites) and exporting clean datasets for market analysis.',
    technologies: ['Web Scraping', 'Data Extraction', 'Lead Gen', 'Automation'],
    accentColor: '#2563eb',
    image: '/images/project-gmaps-scraper.jpg',
    images: [
      { label: 'Scraper Dashboard', url: '/images/project-gmaps-scraper.jpg' },
    ],
    isService: true,
    size: 'normal',
  },
  {
    id: '06',
    title: 'Job Portal & Directory Scraper (Octoparse)',
    description:
      'Automated multi-page web scraping workflow built in Octoparse for job portals and enterprise directories (e.g. SurabayaKarir, Loker Jakarta, Educational Institutions). Handles complex pagination loops, dynamic scrolling, nested item extraction, and structured export to Excel/CSV.',
    technologies: ['Octoparse', 'Workflow Automation', 'Web Scraping', 'Data Extraction'],
    accentColor: '#0284c7',
    image: '/images/scrape_octoparse.png',
    images: [
      { label: 'Octoparse Workflow & Extraction', url: '/images/scrape_octoparse.png' },
    ],
    isService: true,
    size: 'large',
  },
];

/* ─── Lightbox Modal ─── */
const Lightbox = ({ project, onClose }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!project) return null;

  const currentImage =
    project.images && project.images[activeImgIndex]
      ? project.images[activeImgIndex].url
      : project.image;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000] max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 sm:h-96 overflow-hidden bg-gray-900">
          <img
            key={currentImage}
            src={currentImage}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Screenshot Switcher (if multiple images exist) */}
          {project.images && project.images.length > 1 && (
            <div className="absolute top-4 left-4 z-10 flex gap-2 bg-black/70 backdrop-blur-md p-1 rounded-xl border border-white/20">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeImgIndex === idx
                      ? 'bg-white text-black shadow-md scale-105'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          )}

          <div
            className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-black text-white border-2 border-white z-10"
            style={{ backgroundColor: project.accentColor }}
          >
            {project.id}
          </div>
        </div>

        <div className="p-4 sm:p-8">
          <h3 className="text-xl sm:text-3xl font-black mb-2 sm:mb-3 pr-8">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-bold border-2 border-black"
                style={{ backgroundColor: `${project.accentColor}22`, color: project.accentColor }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap items-center">
            {project.isService ? (
              <a
                href="https://api.whatsapp.com/send/?phone=6285643116008&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-black text-sm font-bold text-white shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: project.accentColor }}
              >
                <Briefcase className="w-4 h-4" />
                Inquire Scraping Service
              </a>
            ) : (
              <>
                {project.externalUrl && project.externalUrl !== '#' && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-black text-sm font-bold text-white shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white rounded-xl border-2 border-black text-sm font-bold shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Gallery Card ─── */
const GalleryCard = ({ project, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl border-4 border-black overflow-hidden cursor-pointer
        shadow-[6px_6px_0px_0px_#000000] hover:shadow-[10px_10px_0px_0px_#000000]
        hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300
        ${project.size === 'large' ? 'md:col-span-2' : ''}`}
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover object-top transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundColor: `${project.accentColor}dd` }}
        >
          <span className="text-white font-black text-lg">
            {project.isService ? 'Service Details' : 'View Details'}
          </span>
          {!project.isService && (
            <div className="flex gap-3">
              {project.externalUrl && project.externalUrl !== '#' && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-5 h-5" style={{ color: project.accentColor }} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
                >
                  <Github className="w-5 h-5 text-gray-800" />
                </a>
              )}
            </div>
          )}
        </div>
        {/* ID badge */}
        <div
          className="absolute top-3 left-3 w-9 h-9 rounded-full border-2 border-white flex items-center justify-center shadow text-white text-xs font-black z-10"
          style={{ backgroundColor: project.accentColor }}
        >
          {project.id}
        </div>
      </div>

      {/* Card footer */}
      <div className="bg-white p-4">
        <h3 className="font-black text-lg leading-tight mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-xs font-bold border border-black"
              style={{ backgroundColor: `${project.accentColor}18`, color: project.accentColor }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 rounded-full text-xs font-bold border border-gray-300 text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── Section ─── */
const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="projects" className="py-12 sm:py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute w-16 h-16 sm:w-32 sm:h-32 bg-[#e91e63] rounded-full border-4 border-black top-20 right-4 sm:right-10 lg:z-auto -z-10" />
      <div className="hidden sm:block absolute w-20 h-20 bg-[#2196f3] rounded-full border-4 border-black top-32 left-32 lg:z-auto -z-10" />
      <div className="hidden sm:block absolute w-16 h-16 bg-[#a8f0dc] rounded-full border-4 border-black top-20 left-64 lg:z-auto -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="text-center mb-10 sm:mb-14"
        >
          <motion.div variants={staggerItemVariants} className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-4 sm:px-6 py-2 sm:py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-6 sm:mb-8 text-sm sm:text-base">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            Featured Work
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
          </motion.div>
          <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-5xl lg:text-7xl font-black mb-3 sm:mb-4">
            <span className="gradient-text">Creative Projects</span>
          </motion.h2>
          <motion.p variants={staggerItemVariants} className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto px-2">
            Click any card to explore details, live demo, and source code.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <GalleryCard
                project={project}
                onClick={setSelected}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm font-medium flex items-center justify-center gap-1.5">
            More projects in progress — stay tuned
            <Rocket className="w-4 h-4 text-gray-500" />
          </p>
        </motion.div>
      </div>

      <Lightbox key={selected?.id} project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;
