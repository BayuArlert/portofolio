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

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ExperienceSection /> */}
      <CertificateSection />
    </div>
  );
}

export default App;
