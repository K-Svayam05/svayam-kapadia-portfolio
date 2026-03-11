import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  link, 
  index 
}: { 
  title: string; 
  description: string; 
  tech: string[]; 
  link: string; 
  index: number; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div 
      ref={cardRef}
      className="interactive-element bg-card/50 border border-border rounded-lg p-6 transition-all duration-300 hover:border-neon-emerald"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDuration: '0.2s' }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neon-emerald/10 text-neon-emerald font-mono">
          0{index + 1}
        </div>
        {link !== '#' && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-neon-emerald">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </a>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2 hover:text-neon-emerald transition-colors duration-300">
        {link !== '#' ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}
      </h3>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((item, i) => (
          <span 
            key={i} 
            className="text-xs px-2 py-1 rounded-full bg-tech-700 text-neon-emerald font-mono"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Neuro-Symbolic Alpha Miner (NSAM)',
      description: 'Autonomous quantitative research agent using RAG-based semantic chunking to extract trading rules from financial PDFs, generating executable backtest code via GPT-4. Features vectorized backtesting & HMM market regime detection with QuantLib and Eigen.',
      tech: ['C++', 'QuantLib', 'Eigen', 'Qt6', 'CMake', 'OpenAI API'],
      link: '#'
    },
    {
      title: 'Optimal Trade Execution Strategy',
      description: 'High-frequency trading algorithm using Lagrange Multipliers to optimize execution schedules for 50,000+ share parent orders. Processes nanosecond tick-level LOB data with Piecewise Power Law models for non-linear liquidity mapping.',
      tech: ['Python', 'Convex Optimization', 'Databento', 'Pandas'],
      link: '#'
    },
    {
      title: 'Svayam - EdTech Chatbot',
      description: 'Full-stack chatbot using Flask backend, React frontend, and PostgreSQL for user profile and chat history management, integrating third-party LLM APIs for advanced NLP capabilities.',
      tech: ['Flask', 'React', 'TypeScript', 'PostgreSQL', 'LLM APIs'],
      link: '#'
    },
    {
      title: 'Travelling Postman (SIH 2024 Winner)',
      description: 'AI-driven distributed mail routing system integrating real-time Weather, News, and Twitter APIs, calculating safety indexes for 1000+ cities with 98% accuracy for India Post.',
      tech: ['Python', 'Next.js', 'PostgreSQL', 'AI/ML'],
      link: 'https://travelling-postman-3hl4.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-emerald/10 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-neon-emerald font-mono mr-2">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-emerald to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedText key={index} text="" className="h-full" delay={index * 200}>
              <ProjectCard 
                title={project.title} 
                description={project.description} 
                tech={project.tech} 
                link={project.link} 
                index={index}
              />
            </AnimatedText>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/K-Svayam05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive-element inline-flex items-center gap-2 px-6 py-3 border border-neon-emerald text-neon-emerald rounded-md hover:bg-neon-emerald/10 transition-all duration-300"
          >
            <span>View More on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
