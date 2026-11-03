import { Heart, Target, Zap, Bot, Brain, SearchCheck, Rocket } from 'lucide-react';
import { StatCard } from './ui/brutalist-card';
import { motion } from 'framer-motion';
import {
  useScrollAnimation,
  slideLeftVariants,
  slideRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
  scaleInVariants,
  fadeUpVariants,
} from '../hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { icon: <Target className="w-8 h-8 text-[#00bcd4]" />, number: '6+', label: 'Projects Built' },
    { icon: <Zap className="w-8 h-8 text-[#2196f3]" />, number: '2+', label: 'Years Experience' },
    { icon: <Heart className="w-8 h-8 text-[#e91e63]" />, number: '3+', label: 'Open Source Contributions' },
    { icon: <Bot className="w-8 h-8 text-[#9c27b0]" />, number: '5+', label: 'Happy Clients' },
  ];

  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-black" />,
      text: 'High-Velocity Shipping: Rapidly turning ideas into functional apps using modern AI workflows',
    },
    {
      icon: <Brain className="w-5 h-5 text-black" />,
      text: 'Solid Fundamentals: Deep grasp of JavaScript, React lifecycles, state management, and architecture',
    },
    {
      icon: <SearchCheck className="w-5 h-5 text-black" />,
      text: 'Critical Code Auditing: Evaluating, debugging, and refining code for security and maintainability',
    },
    {
      icon: <Rocket className="w-5 h-5 text-black" />,
      text: 'Modern Full-Stack Mastery: Hands-on expertise with React, Node.js, modern databases, and clean UI',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#faf9f6] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* Left side — slide in from left */}
          <motion.div
            ref={sectionRef}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={staggerItemVariants}>
              <div className="inline-flex items-center gap-2 bg-white border-3 sm:border-4 border-black rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#e91e63]" />
                About Me
              </div>
            </motion.div>

            <motion.h2
              variants={staggerItemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
            >
              <span className="gradient-text">Vibe Coding, Anchored in Strong Foundations.</span>
            </motion.h2>

            <motion.div variants={staggerItemVariants} className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                I actively embrace the modern era of software development—leveraging state-of-the-art
                AI to iterate rapidly and ship features at high velocity.
              </p>
              <p>
                However, speed without understanding is fragile. Behind every prompt and generated
                line, I bring a solid foundation in web architecture, data flow, and debugging logic.
                I don't just blindly copy-paste code; I architect, audit, and refine it into robust,
                production-ready applications. Think of AI as the accelerator, and strong core
                engineering as the steering wheel.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={staggerContainerVariants} className="space-y-3 sm:space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00bcd4] border-3 sm:border-4 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000000]">
                    {highlight.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">{highlight.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side — slide in from right */}
          <motion.div
            ref={rightRef}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="space-y-6 sm:space-y-8"
          >
            {/* Avatar */}
            <motion.div variants={scaleInVariants} className="flex justify-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-[#ffecb3] border-4 border-black rounded-3xl p-3 shadow-[6px_6px_0px_0px_#000000] sm:shadow-[8px_8px_0px_0px_#000000] group-hover:shadow-[12px_12px_0px_0px_#000000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/about-developer-avatar.jpg"
                    alt="Agung Bayu Saputra - Developer Illustration"
                    className="w-full h-full object-cover rounded-2xl border-2 border-black"
                  />
                </div>
                {/* Floating badge with bounce */}
                <motion.div
                  className="absolute -bottom-3 -right-2 bg-[#a8f0dc] border-3 border-black rounded-xl px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] text-xs font-black flex items-center gap-1.5"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span>Code & Ship</span>
                  <Rocket className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="text-center">
              <h3 className="text-2xl sm:text-3xl font-black mb-2">Let's Build Together</h3>
              <div className="w-16 h-1 bg-[#00bcd4] mx-auto"></div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-2 gap-3 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={scaleInVariants}>
                  <StatCard icon={stat.icon} number={stat.number} label={stat.label} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
