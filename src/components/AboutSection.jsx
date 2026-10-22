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
      icon: "⚡",
      text: "High-Velocity Shipping: Rapidly turning ideas into functional apps using modern AI workflows"
    },
    {
      icon: "🧠",
      text: "Solid Fundamentals: Deep grasp of JavaScript, React lifecycles, state management, and architecture"
    },
    {
      icon: "🔍",
      text: "Critical Code Auditing: Evaluating, debugging, and refining code for security and maintainability"
    },
    {
      icon: "🚀",
      text: "Modern Full-Stack Mastery: Hands-on expertise with React, Node.js, modern databases, and clean UI"
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
            
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              <span className="gradient-text">Vibe Coding, Anchored in Strong Foundations.</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                I actively embrace the modern era of software development—leveraging state-of-the-art AI to iterate rapidly and ship features at high velocity.
              </p>
              <p>
                However, speed without understanding is fragile. Behind every prompt and generated line, I bring a solid foundation in web architecture, data flow, and debugging logic. I don't just blindly copy-paste code; I architect, audit, and refine it into robust, production-ready applications. Think of AI as the accelerator, and strong core engineering as the steering wheel.
              </p>
            </div>
            
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

