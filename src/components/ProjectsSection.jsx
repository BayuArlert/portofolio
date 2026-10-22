import { useState } from 'react';
import { Star, ExternalLink, Github, X } from 'lucide-react';

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
    technologies: ['Octoparse', 'Custom Tool', 'Web Scraping', 'Data Extraction'],
    accentColor: '#2563eb',
    image: '/images/project-gmaps-scraper.jpg',
    images: [
      { label: 'Scraper Dashboard', url: '/images/project-gmaps-scraper.jpg' },
    ],
    isService: true,
    size: 'normal',
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
        className="relative bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] max-w-4xl w-full overflow-hidden"
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

        <div className="p-8">
          <h3 className="text-3xl font-black mb-3">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-5">{project.description}</p>

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
                href="https://www.linkedin.com/in/agung-bayu-131a47295/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-black text-sm font-bold text-white shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: project.accentColor }}
              >
                💼 Inquire Scraping Service
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

  return (
    <section id="projects" className="py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute w-32 h-32 bg-[#e91e63] rounded-full border-4 border-black top-20 right-10 lg:z-auto -z-10" />
      <div className="absolute w-20 h-20 bg-[#2196f3] rounded-full border-4 border-black top-32 left-32 lg:z-auto -z-10" />
      <div className="absolute w-16 h-16 bg-[#a8f0dc] rounded-full border-4 border-black top-20 left-64 lg:z-auto -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Star className="w-5 h-5 text-yellow-500" />
            Featured Work
            <span className="text-xl">⚡</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-4">
            <span className="gradient-text">Creative Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Click any card to explore details, live demo, and source code.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GalleryCard
              key={project.id}
              project={project}
              onClick={setSelected}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm font-medium">
            More projects in progress — stay tuned 🚀
          </p>
        </div>
      </div>

      <Lightbox key={selected?.id} project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ProjectsSection;
