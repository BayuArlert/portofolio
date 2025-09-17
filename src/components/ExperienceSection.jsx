import { Briefcase, ExternalLink } from 'lucide-react';
import { ExperienceCard } from './ui/brutalist-card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Code Fest - Hackathon',
      company: 'TechStart Solutions',
      period: 'Jan 2023 – Present',
      location: 'San Francisco, CA',
      description: 'Lead development of scalable web applications using React and Node.js, managing a team of 3 junior developers and implementing best practices for code quality.',
      achievements: [
        'Led team of 3 developers',
        'Delivered 5 major features',
        'Reduced bug reports by 40%'
      ],
      color: 'bg-[#00bcd4]'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc',
      period: 'Mar 2021 – Dec 2022',
      location: 'Austin, TX',
      description: 'Built responsive web applications using React and modern JavaScript frameworks, collaborating with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 10+ responsive websites',
        'Improved load times by 35%',
        'Collaborated with 5 designers'
      ],
      color: 'bg-[#2196f3]'
    },
    {
      title: 'Junior Web Developer',
      company: 'Creative Web Studio',
      period: 'Jun 2019 – Feb 2021',
      location: 'Remote',
      description: 'Developed and maintained client websites using HTML, CSS, JavaScript, and WordPress, gaining experience in full project lifecycle.',
      achievements: [
        'Delivered 15+ client projects',
        'Learned full-stack development',
        'Maintained 99% uptime'
      ],
      color: 'bg-[#4caf50]'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 bg-[#ff9800] rounded-full border-4 border-black top-10 left-10 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#9c27b0] rounded-full border-4 border-black bottom-10 right-20 lg:z-auto -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Briefcase className="w-5 h-5 text-[#2196f3]" />
            Professional Journey
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Building the future, one project at a time
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-32 bg-gray-300 z-0"></div>
                )}
                
                <div className="flex gap-8 relative z-10">
                  {/* Timeline dot */}
                  <div className={`w-16 h-16 ${exp.color} border-4 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_#000000]`}>
                    <Briefcase className="w-8 h-8 text-white" />
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

