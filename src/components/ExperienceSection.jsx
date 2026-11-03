import { Briefcase, ExternalLink } from 'lucide-react';
import { ExperienceCard } from './ui/brutalist-card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Code Fest - Hackathon',
      company: 'Arunai Engineering College',
      period: 'Feb 2025',
      location: 'India',
      description: 'Competed and earned certification in software innovation and fast-paced team problem-solving.',
      achievements: [
        'Built full-stack prototype under strict deadlines',
        'Implemented modern UI/UX architecture',
        'Received competitive recognition'
      ],
      color: 'bg-[#00bcd4]'
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden sm:block absolute w-24 h-24 bg-[#ff9800] rounded-full border-4 border-black top-10 left-10 lg:z-auto -z-10"></div>
      <div className="hidden sm:block absolute w-16 h-16 bg-[#9c27b0] rounded-full border-4 border-black bottom-10 right-20 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-4 sm:px-6 py-2 sm:py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-6 sm:mb-8 text-sm sm:text-base">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#2196f3]" />
            Professional Journey
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto px-2">
            Building the future, one project at a time
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="hidden sm:block absolute left-8 top-20 w-1 h-32 bg-gray-300 z-0"></div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 relative z-10">
                  {/* Timeline dot */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${exp.color} border-3 sm:border-4 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]`}>
                    <Briefcase className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Experience card */}
                  <ExperienceCard
                    className="flex-1"
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    location={exp.location}
                    description={exp.description}
                    achievements={exp.achievements}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
