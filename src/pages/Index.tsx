import React, { useEffect, Suspense, lazy } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import CustomCursor from '../components/CustomCursor';

// Lazy-load below-fold sections so first paint is fast.
const AboutSection = lazy(() => import('../components/AboutSection'));
const ExperienceSection = lazy(() => import('../components/ExperienceSection'));
const ProjectsSection = lazy(() => import('../components/ProjectsSection'));
const SkillsSection = lazy(() => import('../components/SkillsSection'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Footer = lazy(() => import('../components/Footer'));

const SectionFallback = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="h-8 w-40 rounded bg-card/40 animate-pulse mb-6" />
      <div className="h-32 w-full rounded bg-card/20 animate-pulse" />
    </div>
  </div>
);

const Index = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes wave { 0%,100%{transform:rotate(0)} 25%{transform:rotate(20deg)} 50%{transform:rotate(0)} 75%{transform:rotate(15deg)} }
      @keyframes blob { 0%{transform:scale(1)} 50%{transform:scale(1.1)} 100%{transform:scale(1)} }
      .animation-delay-300{animation-delay:300ms}
      .animation-delay-500{animation-delay:500ms}
      .animation-delay-600{animation-delay:600ms}
      .animation-delay-900{animation-delay:900ms}
      .animation-delay-1200{animation-delay:1200ms}
      .animation-delay-2000{animation-delay:2000ms}
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <NavBar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
