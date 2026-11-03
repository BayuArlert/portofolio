import { Suspense, useState, useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Volume2, VolumeX, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
} from '../hooks/useScrollAnimation';

const HeroSection = ({ on3DLoaded, startTyping = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splineInteractive, setSplineInteractive] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Audio playback error:', err));
    }
  };

  const handleSplineLoad = (spline) => {
    try {
      if (spline._camera?.controls) {
        spline._camera.controls.enabled = true;
      }
    } catch (_) {}

    setTimeout(() => setSplineInteractive(true), 600);

    if (on3DLoaded) on3DLoaded();
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleExternalPortfolio = () => scrollToSection('skills');

  return (
    <section className="relative min-h-screen bg-[#faf9f6] overflow-hidden">
      {/* Neo-Brutalist Decorative Circles */}
      <div className="absolute w-20 sm:w-32 h-20 sm:h-32 bg-[#00bcd4] rounded-full border-4 border-black top-6 sm:top-10 right-4 sm:right-10 -z-10 shadow-[4px_4px_0px_0px_#000000]" />
      <div className="hidden sm:block absolute w-14 sm:w-20 h-14 sm:h-20 bg-[#2196f3] rounded-full border-4 border-black top-24 sm:top-32 right-20 sm:right-32 -z-10 shadow-[3px_3px_0px_0px_#000000]" />
      <div className="hidden md:block absolute w-12 sm:w-16 h-12 sm:h-16 bg-[#e91e63] rounded-full border-4 border-black top-16 sm:top-20 right-40 sm:right-56 -z-10 shadow-[3px_3px_0px_0px_#000000]" />
      <div className="hidden sm:block absolute w-16 sm:w-20 h-16 sm:h-20 bg-[#ff9800] rounded-full border-4 border-black bottom-10 left-6 sm:left-12 -z-10 shadow-[3px_3px_0px_0px_#000000]" />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:pt-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-screen">

          {/* Left side — animated content */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={startTyping ? 'visible' : 'hidden'}
            className="space-y-6 sm:space-y-8"
          >
            {/* Location badge */}
            <motion.div variants={staggerItemVariants}>
              <div className="inline-flex items-center gap-2 bg-[#a8f0dc] border-3 sm:border-4 border-black rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000]">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 sm:w-5 sm:h-5" />
                Available Worldwide
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={staggerItemVariants} className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight min-h-[1.2em]">
                {startTyping ? (
                  <TypeAnimation
                    sequence={[
                      350,
                      'Agung Bayu Saputra',
                      1000,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={0}
                    cursor={true}
                    className="gradient-text"
                  />
                ) : (
                  <span className="opacity-0">Agung Bayu Saputra</span>
                )}
              </h1>

              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#00bcd4]">
                AI-Powered Builder | Vibe Coding with Rock-Solid Fundamentals
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={staggerItemVariants}
              className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl leading-relaxed"
            >
              Building high-velocity web solutions by embracing modern AI workflows without
              compromising core engineering principles. Fast execution, architectural clarity,
              and real-world results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#00bcd4] text-white border-3 sm:border-4 border-black rounded-xl sm:rounded-2xl font-bold transition-all duration-200 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto text-center cursor-pointer"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white text-[#2196f3] border-3 sm:border-4 border-[#2196f3] rounded-xl sm:rounded-2xl font-bold transition-all duration-200 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto text-center cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={handleExternalPortfolio}
                className="bg-[#ff9800] text-white border-3 sm:border-4 border-black rounded-xl sm:rounded-2xl font-bold transition-all duration-200 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg w-full sm:w-auto text-center cursor-pointer"
              >
                Main Portfolio
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItemVariants} className="flex gap-3 sm:gap-4">
              <a
                href="https://github.com/BayuArlert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 border-3 sm:border-4 border-black rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-200 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#9c27b0]"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/agung-bayu-131a47295/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 border-3 sm:border-4 border-black rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-200 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#00bcd4]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </a>
              <a
                href="https://www.instagram.com/by.u_arlert/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-16 sm:h-16 border-3 sm:border-4 border-black rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-200 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#e91e63]"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side — 3D Spline Room (interactive orbit enabled) */}
          <div className="w-full h-[320px] sm:h-[460px] lg:h-[680px] relative flex items-center justify-center overflow-hidden">
            {/* Audio element */}
            <audio ref={audioRef} src="/audio/chill-lofi.mp3" loop preload="auto" />

            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-[#00bcd4] border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm font-bold text-gray-500">Loading 3D Room...</span>
                  </div>
                </div>
              }
            >
              {/* Scaled 3D Room Box */}
              <div className="w-[480px] sm:w-[640px] lg:w-full h-[480px] sm:h-[560px] lg:h-full scale-[0.65] sm:scale-[0.80] lg:scale-100 origin-center flex-shrink-0 relative">
                <Spline
                  scene="https://prod.spline.design/wUBM6zWlm4o2qfc4/scene.splinecode"
                  onLoad={handleSplineLoad}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </Suspense>

            {/* Drag to Explore hint — fades in after 3D loads */}
            <motion.div
              className="absolute top-3 left-1/2 -translate-x-1/2 sm:top-4 z-20 pointer-events-none"
              initial={{ opacity: 0, y: -8 }}
              animate={splineInteractive ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-black rounded-full px-3 py-1.5 shadow-[3px_3px_0px_0px_#000000] text-xs font-black"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <MousePointer2 className="w-3.5 h-3.5 text-[#00bcd4]" />
                <span>Drag to Explore</span>
              </motion.div>
            </motion.div>

            {/* Speaker Widget */}
            <div className="absolute bottom-1 right-1 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleAudio}
                className="group bg-white/95 backdrop-blur-md border-2 sm:border-3 border-black rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-2.5 shadow-[3px_3px_0px_0px_#000000] sm:shadow-[4px_4px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 text-xs sm:text-sm font-black cursor-pointer"
                title="Klik untuk nyalakan/matikan backsound santai"
              >
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center border-2 border-black transition-colors ${
                    isPlaying ? 'bg-[#00bcd4] text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {isPlaying ? (
                    <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                  ) : (
                    <VolumeX className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </div>

                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-extrabold">
                    Room Speaker
                  </span>
                  <span className="text-[10px] sm:text-xs font-black text-black">
                    {isPlaying ? 'Chill Lo-Fi: ON' : 'Sound: OFF'}
                  </span>
                </div>

                {isPlaying && (
                  <div className="flex items-end gap-0.5 sm:gap-1 h-3 sm:h-3.5 ml-0.5">
                    <span className="w-0.5 sm:w-1 bg-[#00bcd4] rounded-full animate-bounce [animation-duration:0.6s] h-3 sm:h-3.5" />
                    <span className="w-0.5 sm:w-1 bg-[#2196f3] rounded-full animate-bounce [animation-duration:0.8s] h-2 sm:h-2.5" />
                    <span className="w-0.5 sm:w-1 bg-[#e91e63] rounded-full animate-bounce [animation-duration:0.5s] h-2.5 sm:h-3" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
