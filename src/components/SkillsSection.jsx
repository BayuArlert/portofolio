import { useState, useRef, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Code2, 
  Layout, 
  Server, 
  Bot, 
  Wrench, 
  BrainCircuit, 
  Cpu, 
  ScanEye, 
  BarChart3, 
  GitBranch, 
  Workflow, 
  Terminal,
  Rocket,
  Clock,
  Briefcase
} from "lucide-react";
import { SkillCard, FeatureCard } from "./ui/brutalist-card";

/* Brand Logos */
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-9 h-9">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextIcon = () => (
  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-xs border border-gray-700 shadow-sm">
    ▲
  </div>
);

const TSIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-[#3178c6] text-white flex items-center justify-center font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000]">
    TS
  </div>
);

const JSIcon = () => (
  <div className="w-8 h-8 rounded-lg bg-[#f7df1e] text-black flex items-center justify-center font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000]">
    JS
  </div>
);

const TailwindIcon = () => (
  <svg className="w-8 h-8 text-[#06b6d4]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z"/>
  </svg>
);

const BootstrapIcon = () => (
  <div className="w-8 h-8 rounded-xl bg-[#7952B3] text-white flex items-center justify-center font-black text-sm border-2 border-black shadow-[2px_2px_0px_#000]">
    B
  </div>
);

const FramerIcon = () => (
  <svg className="w-7 h-7 text-[#0055FF]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
  </svg>
);

const PHPIcon = () => (
  <div className="w-10 h-6 rounded-full bg-[#777BB4] text-white flex items-center justify-center font-black text-[11px] border-2 border-black shadow-[2px_2px_0px_#000]">
    PHP
  </div>
);

const PythonIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.927 0c-3.036 0-5.127.382-6.505 1.055-1.923.94-2.296 2.476-2.296 4.846v3.542h8.924v1.18H3.126C1.408 10.623 0 12.186 0 15.01c0 2.825 1.34 4.387 3.058 4.387h1.758v-2.482c0-2.023 1.748-3.771 3.771-3.771h5.882c1.644 0 2.977-1.333 2.977-2.977V4.846c0-2.37-.373-3.906-2.296-4.846C13.772.382 12.824 0 11.927 0zm-2.58 2.01c.642 0 1.163.52 1.163 1.163 0 .642-.52 1.163-1.163 1.163-.642 0-1.163-.52-1.163-1.163 0-.642.52-1.163 1.163-1.163z"/>
    <path fill="#FFD43B" d="M12.073 24c3.036 0 5.127-.382 6.505-1.055 1.923-.94 2.296-2.476 2.296-4.846v-3.542h-8.924v-1.18h8.924c1.718 0 3.126-1.563 3.126-4.387 0-2.825-1.34-4.387-3.058-4.387h-1.758v2.482c0 2.023-1.748 3.771-3.771 3.771H9.531c-1.644 0-2.977 1.333-2.977 2.977v5.325c0 2.37.373 3.906 2.296 4.846 1.378.673 2.326 1.055 3.223 1.055zm2.58-2.01c-.642 0-1.163-.52-1.163-1.163 0-.642.52-1.163 1.163-1.163.642 0 1.163.52 1.163 1.163 0 .642-.52 1.163-1.163 1.163z"/>
  </svg>
);

const NodeIcon = () => (
  <div className="w-9 h-9 rounded-xl bg-[#339933] text-white flex items-center justify-center font-bold text-xs border-2 border-black shadow-[2px_2px_0px_#000]">
    Node
  </div>
);

const LaravelIcon = () => (
  <svg className="w-8 h-8 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.5 14.25l-4.5 2.6v-5.2l4.5-2.6v5.2zm-9 5.2l-4.5 2.6v-5.2l4.5-2.6v5.2zm-4.5-7.8l-4.5 2.6V9.05l4.5-2.6v5.2zm9 0l-4.5 2.6V9.05l4.5-2.6v5.2zm-9-5.2L4.5 9.05V3.85L9 1.25v5.2zm9 0l-4.5 2.6V3.85l4.5-2.6v5.2z"/>
  </svg>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const tabsRef = useRef({});
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const activeEl = tabsRef.current[activeTab];
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  const tabs = [
    { id: "frontend", label: "Frontend", icon: <Layout className="w-4 h-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="w-4 h-4" /> },
    { id: "ai", label: "AI & ML", icon: <Bot className="w-4 h-4" /> },
    { id: "devops", label: "DevOps & Tools", icon: <Wrench className="w-4 h-4" /> },
  ];

  const goToPreviousTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const previousIndex =
      currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[previousIndex].id);
  };

  const goToNextTab = () => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(tabs[nextIndex].id);
  };

  // === SKILLS ===
  const skills = {
    frontend: [
      {
        icon: <ReactIcon />,
        name: "React",
        level: "Expert",
        levelColor: "bg-[#e91e63]",
        description: "Component architecture & state management",
        stars: 5,
      },
      {
        icon: <NextIcon />,
        name: "Next.js",
        level: "Advanced",
        levelColor: "bg-[#00bcd4]",
        description: "Full-stack React framework mastery",
        stars: 4,
      },
      {
        icon: <TSIcon />,
        name: "TypeScript",
        level: "Advanced",
        levelColor: "bg-[#00bcd4]",
        description: "Type-safe development practices",
        stars: 4,
      },
      {
        icon: <JSIcon />,
        name: "JavaScript (ES6+)",
        level: "Expert",
        levelColor: "bg-[#e91e63]",
        description: "Modern, clean, and maintainable code",
        stars: 5,
      },
      {
        icon: <TailwindIcon />,
        name: "Tailwind CSS",
        level: "Expert",
        levelColor: "bg-[#e91e63]",
        description: "Utility-first styling approach",
        stars: 5,
      },
      {
        icon: <BootstrapIcon />,
        name: "Bootstrap",
        level: "Advanced",
        levelColor: "bg-[#7952B3]",
        description: "Responsive front-end framework",
        stars: 4,
      },
      {
        icon: <FramerIcon />,
        name: "Framer Motion",
        level: "Proficient",
        levelColor: "bg-[#2196f3]",
        description: "Smooth animations & interactions",
        stars: 3,
      },
    ],
    backend: [
      {
        icon: <PHPIcon />,
        name: "PHP",
        level: "Advanced",
        levelColor: "bg-[#8892BF]",
        description: "Server-side scripting & web development",
        stars: 4,
      },
      {
        icon: <PythonIcon />,
        name: "Python",
        level: "Expert",
        levelColor: "bg-[#306998]",
        description: "Versatile scripting & data processing",
        stars: 5,
      },
      {
        icon: <NodeIcon />,
        name: "Node.js",
        level: "Advanced",
        levelColor: "bg-[#68A063]",
        description: "Scalable network applications",
        stars: 4,
      },
      {
        icon: <LaravelIcon />,
        name: "Laravel",
        level: "Advanced",
        levelColor: "bg-[#FF2D20]",
        description: "PHP web application framework",
        stars: 4,
      },
    ],
    ai: [
      {
        icon: <BrainCircuit className="w-8 h-8 text-[#FFC107]" />,
        name: "Machine Learning",
        level: "Upper Intermediate",
        levelColor: "bg-[#FFC107]",
        description: "Membangun & melatih model dari data",
        stars: 3,
      },
      {
        icon: <Cpu className="w-8 h-8 text-[#FF5722]" />,
        name: "Deep Learning",
        level: "Upper Intermediate",
        levelColor: "bg-[#FF5722]",
        description: "Jaringan saraf tiruan (TensorFlow, PyTorch)",
        stars: 3,
      },
      {
        icon: <ScanEye className="w-8 h-8 text-[#9C27B0]" />,
        name: "Computer Vision",
        level: "Upper Intermediate",
        levelColor: "bg-[#9C27B0]",
        description: "Interpretasi gambar & video",
        stars: 3,
      },
      {
        icon: <BarChart3 className="w-8 h-8 text-[#4CAF50]" />,
        name: "Data Science/Analytics",
        level: "Upper Intermediate",
        levelColor: "bg-[#4CAF50]",
        description: "Analisis & interpretasi data",
        stars: 3,
      },
    ],
    devops: [
      {
        icon: <GitBranch className="w-8 h-8 text-[#2196F3]" />,
        name: "Version Control",
        level: "Intermediate",
        levelColor: "bg-[#2196F3]",
        description: "Git & GitHub workflow",
        stars: 5,
      },
      {
        icon: <Workflow className="w-8 h-8 text-[#FF9800]" />,
        name: "CI/CD Tools",
        level: "Intermediate",
        levelColor: "bg-[#FF9800]",
        description: "Automated build, test, deploy",
        stars: 4,
      },
      {
        icon: <Terminal className="w-8 h-8 text-[#607D8B]" />,
        name: "Scripting",
        level: "Intermediate",
        levelColor: "bg-[#607D8B]",
        description: "Automation with Bash/Python",
        stars: 4,
      },
    ],
  };

  // === FEATURES ===
  const features = [
    {
      icon: <Rocket className="w-9 h-9 text-[#00bcd4] mx-auto" />,
      title: "Full-Stack Development",
      description: "MERN stack, Next.js, TypeScript, Laravel",
    },
    {
      icon: <Clock className="w-9 h-9 text-[#2196f3] mx-auto" />,
      title: "Professional Experience",
      description: "Internships, freelance, and open-source work",
    },
    {
      icon: <Briefcase className="w-9 h-9 text-[#e91e63] mx-auto" />,
      title: "Impactful Projects",
      description: "Platforms serving thousands of users",
    },
    {
      icon: <Wrench className="w-9 h-9 text-[#9c27b0] mx-auto" />,
      title: "Modern Tools",
      description: "Git, Docker, AWS, CI/CD workflows",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-[#faf9f6] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-5 py-2.5 font-bold shadow-[4px_4px_0px_0px_#000000] mb-6 sm:mb-8">
            <Code2 className="w-5 h-5 text-[#00bcd4]" />
            TECH SKILLS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="text-black">SKILLS </span>
            <span className="gradient-text">SHOWCASE</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-2 font-medium">
            Crafting beautiful, interactive, and high-performance digital experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 px-6 py-4">
          <div
            className="flex gap-1 sm:gap-2 bg-white border-4 border-black rounded-2xl 
                  p-1 sm:p-2 shadow-[6px_6px_0px_0px_#000000] 
                  max-w-full overflow-visible"
          >
            {/* Prev Button */}
            <button
              onClick={goToPreviousTab}
              className="relative z-20 border-4 border-black rounded-2xl font-bold transition-all duration-200 
                 shadow-[4px_4px_0px_0px_#000000] 
                 hover:shadow-[6px_6px_0px_0px_#000000] 
                 hover:translate-x-[-1px] hover:translate-y-[-1px] 
                 p-2 sm:p-3 bg-white hover:bg-gray-50 
                 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Previous tab"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Tab List */}
            <div
              className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0 
                    px-2 py-2 -mx-2 -my-2"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  ref={(el) => (tabsRef.current[tab.id] = el)}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-black 
                  transition-all duration-200 flex-shrink-0 
                  min-w-[80px] sm:min-w-auto text-sm sm:text-base 
                  min-h-[44px] flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#00bcd4] text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000]"
                      : "bg-transparent text-gray-700 border-4 border-transparent hover:border-gray-300"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNextTab}
              className="relative z-20 border-4 border-black rounded-2xl font-bold transition-all duration-200 
                 shadow-[4px_4px_0px_0px_#000000] 
                 hover:shadow-[6px_6px_0px_0px_#000000] 
                 hover:translate-x-[-1px] hover:translate-y-[-1px] 
                 p-2 sm:p-3 bg-white hover:bg-gray-50 
                 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Next tab"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-20">
          {(skills[activeTab] ?? []).map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
