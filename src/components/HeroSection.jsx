import { Suspense, lazy, useState, useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Volume2, VolumeX, Music } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Backsound tipis & santai (20% volume)
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.2;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error('Audio playback error:', err));
    }
  };

  const handleSplineLoad = (spline) => {
    // Disable orbit/drag controls so camera stays fixed
    try {
      if (spline._camera?.controls) {
        spline._camera.controls.enabled = false;
      }
      const controls = spline.findObjectByName?.('Camera');
      if (controls?.controls) controls.controls.enabled = false;
    } catch (_) {}
  };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleExternalPortfolio = () => {
    // This could link to an external portfolio or open a modal
    // For now, we'll scroll to the skills section to showcase abilities
    scrollToSection('skills');
  };

  return (
    <section className="relative min-h-screen bg-[#faf9f6] overflow-hidden">
      <div className="container mx-auto px-6 py-12 lg:pt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-[#a8f0dc] border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000]">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5" />
              Available Worldwide
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                <TypeAnimation
                  sequence={[
                    'Agung Bayu Saputra',
                    1000, // wait 1s before blinking
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={0} // Do not repeat
                  cursor={true} // Show blinking cursor
                  className="gradient-text"
                />
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-[#00bcd4]">
                AI-Powered Builder | Vibe Coding with Rock-Solid Fundamentals
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed">
              Building high-velocity web solutions by embracing modern AI workflows without compromising core engineering principles. Fast execution, architectural clarity, and real-world results.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#00bcd4] text-white border-4 border-black rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-white text-[#2196f3] border-4 border-[#2196f3] rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto"
              >
                View Projects
              </button>
              <button 
                onClick={handleExternalPortfolio}
                className="bg-[#ff9800] text-white border-4 border-black rounded-2xl font-bold transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] px-8 py-4 text-lg w-full sm:w-auto"
              >
                Main Portfolio
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/BayuArlert" className="w-16 h-16 border-4 border-black rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#9c27b0]">
                <FontAwesomeIcon icon={faGithub} className="w-8 h-8 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/agung-bayu-131a47295/" className="w-16 h-16 border-4 border-black rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#00bcd4]">
                <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 text-white" />
              </a>
              <a href="https://www.instagram.com/by.u_arlert/" className="w-16 h-16 border-4 border-red rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] bg-[#e91e63]">
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
          
          {/* Right side - 3D Spline Room (canvas, transparan, menyatu) */}
          <div className="w-full h-[500px] lg:h-[680px] relative overflow-hidden rounded-3xl">
            {/* Audio element for relaxing chill lo-fi */}
            <audio
              ref={audioRef}
              src="/audio/chill-lofi.mp3"
              loop
              preload="auto"
            />

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
              <Spline
                scene="https://prod.spline.design/wUBM6zWlm4o2qfc4/scene.splinecode"
                onLoad={handleSplineLoad}
                style={{ width: '100%', height: '100%' }}
              />
              {/* Transparent overlay — blok drag/orbit agar kamera tetap fix */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 10,
                  cursor: 'default',
                }}
              />
            </Suspense>

            {/* Interactive Speaker Widget (Bottom Right) */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleAudio}
                className="group bg-white/95 backdrop-blur-md border-3 border-black rounded-2xl px-4 py-2.5 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 text-sm font-black cursor-pointer"
                title="Klik untuk nyalakan/matikan backsound santai"
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border-2 border-black transition-colors ${isPlaying ? 'bg-[#00bcd4] text-white' : 'bg-gray-100 text-gray-700'}`}>
                  {isPlaying ? (
                    <Volume2 className="w-4 h-4 animate-pulse" />
                  ) : (
                    <VolumeX className="w-4 h-4" />
                  )}
                </div>

                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-extrabold">Room Speaker</span>
                  <span className="text-xs font-black text-black">
                    {isPlaying ? 'Chill Lo-Fi: ON' : 'Sound: OFF'}
                  </span>
                </div>

                {isPlaying && (
                  <div className="flex items-end gap-1 h-3.5 ml-1">
                    <span className="w-1 bg-[#00bcd4] rounded-full animate-bounce [animation-duration:0.6s] h-3.5" />
                    <span className="w-1 bg-[#2196f3] rounded-full animate-bounce [animation-duration:0.8s] h-2.5" />
                    <span className="w-1 bg-[#e91e63] rounded-full animate-bounce [animation-duration:0.5s] h-3" />
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

