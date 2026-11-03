import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificateSection from './components/CertificateSection';
import PageLoader from './components/PageLoader';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [is3DReady, setIs3DReady] = useState(false);

  // ── Lenis smooth scroll ──
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* ── Neo-Brutalist Cyber Cursor (Hanya aktif di desktop) ── */}
      <CustomCursor />

      {loading && (
        <PageLoader
          is3DReady={is3DReady}
          onComplete={() => setLoading(false)}
        />
      )}
      <HeroSection on3DLoaded={() => setIs3DReady(true)} startTyping={!loading} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      <CertificateSection />
    </div>
  );
}

export default App;
