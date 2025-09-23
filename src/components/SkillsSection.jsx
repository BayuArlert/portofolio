import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SkillCard, FeatureCard } from "./ui/brutalist-card";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const tabsRef = useRef({}); // simpan ref per tab
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // skip scroll saat load pertama
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
    { id: "frontend", label: "🎨 Frontend", emoji: "🎨" },
    { id: "backend", label: "⚡ Backend", emoji: "⚡" },
    { id: "ai", label: "🤖 AI", emoji: "🤖" },
    { id: "devops", label: "🛠️ DevOps", emoji: "🛠️" },
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
        icon: "⚛️",
        name: "React",
        level: "Expert",
        levelColor: "bg-[#e91e63]",
        description: "Component architecture & state management",
        stars: 5,
      },
      {
        icon: "▲",
        name: "Next.js",
        level: "Advanced",
        levelColor: "bg-[#00bcd4]",
        description: "Full-stack React framework mastery",
        stars: 4,
      },
      {
        icon: "🔷",
        name: "TypeScript",
        level: "Advanced",
        levelColor: "bg-[#00bcd4]",
        description: "Type-safe development practices",
        stars: 4,
      },
      {
        icon: "📜",
        name: "JavaScript (ES6+)",
        level: "Expert",
        levelColor: "bg-[#e91e63]",
        description: "Modern, clean, and maintainable code",
        stars: 5,
      },
      {
        icon: "🎨",
        name: "Tailwind CSS",
        level: "Expert",
        levelColor: "bg-[#e91e63]",
        description: "Utility-first styling approach",
        stars: 5,
      },
      {
        icon: "🅱️",
        name: "Bootstrap",
        level: "Advanced",
        levelColor: "bg-[#7952B3]",
        description: "Responsive front-end framework",
        stars: 4,
      },
      {
        icon: "🌊",
        name: "Framer Motion",
        level: "Proficient",
        levelColor: "bg-[#2196f3]",
        description: "Smooth animations & interactions",
        stars: 3,
      },
    ],
    backend: [
      {
        icon: "🐘",
        name: "PHP",
        level: "Advanced",
        levelColor: "bg-[#8892BF]",
        description: "Server-side scripting & web development",
        stars: 4,
      },
      {
        icon: "🐍",
        name: "Python",
        level: "Expert",
        levelColor: "bg-[#306998]",
        description: "Versatile scripting & data processing",
        stars: 5,
      },
      {
        icon: "🟢",
        name: "Node.js",
        level: "Advanced",
        levelColor: "bg-[#68A063]",
        description: "Scalable network applications",
        stars: 4,
      },
      {
        icon: "⚙️",
        name: "Laravel",
        level: "Advanced",
        levelColor: "bg-[#FF2D20]",
        description: "PHP web application framework",
        stars: 4,
      },
    ],
    ai: [
      {
        icon: "🧠",
        name: "Machine Learning",
        level: "Upper Intermediate",
        levelColor: "bg-[#FFC107]",
        description: "Membangun & melatih model dari data",
        stars: 3,
      },
      {
        icon: "🤖",
        name: "Deep Learning",
        level: "Upper Intermediate",
        levelColor: "bg-[#FF5722]",
        description: "Jaringan saraf tiruan (TensorFlow, PyTorch)",
        stars: 3,
      },
      {
        icon: "👁️",
        name: "Computer Vision",
        level: "Upper Intermediate",
        levelColor: "bg-[#9C27B0]",
        description: "Interpretasi gambar & video",
        stars: 3,
      },
      {
        icon: "📊",
        name: "Data Science/Analytics",
        level: "Upper Intermediate",
        levelColor: "bg-[#4CAF50]",
        description: "Analisis & interpretasi data",
        stars: 3,
      },
    ],
    devops: [
      {
        icon: "🐙",
        name: "Version Control",
        level: "Intermediate",
        levelColor: "bg-[#2196F3]",
        description: "Git & GitHub workflow",
        stars: 5,
      },
      {
        icon: "🚀",
        name: "CI/CD Tools",
        level: "Intermediate",
        levelColor: "bg-[#FF9800]",
        description: "Automated build, test, deploy",
        stars: 4,
      },
      {
        icon: "📝",
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
      icon: "🚀",
      title: "Full-Stack Development",
      description: "MERN stack, Next.js, TypeScript, Laravel",
    },
    {
      icon: "⏰",
      title: "Professional Experience",
      description: "Internships, freelance, and open-source work",
    },
    {
      icon: "💼",
      title: "Impactful Projects",
      description: "Platforms serving thousands of users",
    },
    {
      icon: "🤖",
      title: "Modern Tools",
      description: "Git, Docker, AWS, CI/CD workflows",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-[#faf9f6] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute w-20 h-20 bg-[#ff9800] rounded-full border-4 border-black top-30 left-20 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#2196f3] rounded-full border-4 border-black top-70 right-20 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-4 sm:px-6 py-2 sm:py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-6 sm:mb-8">
            <span className="text-xl sm:text-2xl">😎</span>
            TECH SKILLS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="text-black">SKILLS </span>
            <span className="gradient-text">SHOWCASE</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-2">
            Crafting beautiful, interactive user experiences
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
                 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-bold 
                  transition-all duration-200 flex-shrink-0 
                  min-w-[80px] sm:min-w-auto text-sm sm:text-base 
                  min-h-[44px] flex items-center justify-center ${
                    activeTab === tab.id
                      ? "bg-[#00bcd4] text-white border-4 border-black shadow-[4px_4px_0px_0px_#000000]"
                      : "bg-transparent text-gray-700 border-4 border-transparent hover:border-gray-300"
                  }`}
                >
                  <span className="sm:hidden text-lg">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
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
                 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
