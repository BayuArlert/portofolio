import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificateSection from './components/CertificateSection';
import PageLoader from './components/PageLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [is3DReady, setIs3DReady] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {loading && (
        <PageLoader 
          is3DReady={is3DReady} 
          onComplete={() => setLoading(false)} 
        />
      )}
      <HeroSection on3DLoaded={() => setIs3DReady(true)} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      <CertificateSection />
    </div>
  );
}

export default App;
