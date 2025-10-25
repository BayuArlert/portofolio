import { Star } from 'lucide-react';
import { ProjectCard } from './ui/brutalist-card';

const ProjectsSection = () => {
  const projects = [
    {
      id: '01',
      title: 'Payment of School Tuition Fees',
      description: 'A web-based application for digitally managing tuition payments. Key features include student data management, bill checking, payment history, proof of payment printing, and financial reports accessible in real time by schools.',
      technologies: ['Laravel', 'Bootstrap', 'MySQL'],
      bgColor: 'bg-gradient-to-br from-purple-500 to-blue-600',
      textColor: 'text-white',
      githubUrl: 'https://github.com/RPL-Esemka-Mussi/SPP-Sekolah_Agung-Bayu-Saputra',
      externalUrl: 'https://spp-payment-demo.vercel.app'
    },
    {
      id: '02',
      title: 'Scanner Image - Phone Number Extraction',
      description: 'An application that can scan images to automatically detect and extract phone numbers using the Gemini API. This project simplifies the process of quickly and accurately retrieving contact data from images.',
      technologies: ['Node.js', 'HTML', 'CSS', 'API Gemini'],
      bgColor: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      textColor: 'text-white',
      githubUrl: 'https://github.com/yourusername/phone-scanner',
      externalUrl: 'https://scanner-img.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-32 h-32 bg-[#e91e63] rounded-full border-4 border-black top-20 right-10 lg:z-auto -z-10"></div>
      <div className="absolute w-20 h-20 bg-[#2196f3] rounded-full border-4 border-black top-32 left-32 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#a8f0dc] rounded-full border-4 border-black top-20 left-25 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Star className="w-5 h-5 text-yellow-500" />
            Featured Work
            <span className="text-xl">⚡</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Creative Projects</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Innovative solutions crafted with passion and precision
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              bgColor={project.bgColor}
              textColor={project.textColor}
              projectId={project.id}
              onExternalClick={() => window.open(project.externalUrl, '_blank')}
              onGithubClick={() => window.open(project.githubUrl, '_blank')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

