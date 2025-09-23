import { Heart, Target, Zap, Bot } from 'lucide-react';
import { StatCard, EmojiCard } from './ui/brutalist-card';

const AboutSection = () => {
  const stats = [
    {
      icon: <Target className="w-8 h-8 text-[#00bcd4]" />,
      number: "5+",
      label: "Projects Built"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#2196f3]" />,
      number: "2+",
      label: "Years Experience"
    },
    {
      icon: <Heart className="w-8 h-8 text-[#e91e63]" />,
      number: "3+",
      label: "Open Source Contributions"
    },
    {
      icon: <Bot className="w-8 h-8 text-[#9c27b0]" />,
      number: "5+",
      label: "Happy Clients"
    }
  ];

  const highlights = [
    {
      icon: "⚛️",
      text: "Expert in React, Next.js, Node.js, and modern full-stack development"
    },
    {
      icon: "⚡",
      text: "Proficient with MySQL, MongoDB, PostgreSQL, Firebase, and cloud platforms"
    },
    {
      icon: "🚀",
      text: "Experience building scalable applications for diverse industries"
    },
    {
      icon: "🌟",
      text: "Committed to best practices, clean code, and continuous learning"
    }
  ];

  return (
    <section id="about" className="py-10 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000]">
              <Heart className="w-5 h-5 text-[#e91e63]" />
              About Me
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              A passionate full-stack developer with expertise in modern web technologies 
              and a strong focus on creating scalable, user-friendly applications. Experienced 
              in building end-to-end solutions that deliver exceptional user experiences and 
              drive business success through innovative technology.
            </p>
            
            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00bcd4] border-4 border-black rounded-full flex items-center justify-center text-xl">
                    {highlight.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Stats and emoji */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <EmojiCard emoji="👨‍💻" />
            </div>
            
            <div className="text-center">
              <h3 className="text-3xl font-black mb-2">Let's Build Together</h3>
              <div className="w-16 h-1 bg-[#00bcd4] mx-auto"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

