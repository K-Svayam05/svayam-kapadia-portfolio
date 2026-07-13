
import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-3/5">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans">
                <span className="text-neon-emerald font-mono mr-2">01.</span> About Me
              </h2>
              <div className="h-px bg-gradient-to-r from-neon-emerald to-transparent flex-grow ml-4"></div>
            </div>

            <AnimatedText
              text="Software Engineer at Nomura Financial Services Group specializing in Cloud, AI/ML, and Quantitative Development for Financial Technology."
              className="mb-4 text-lg font-sans"
              highlight={true}
              highlightWords={["Nomura", "Quantitative Development"]}
              delay={300}
            />
            
            <AnimatedText 
              text="Hands-on experience across cloud infrastructure, backend systems, and quantitative research — delivering measurable impact through RAG-based automation, HFT and market-regime modeling, and enterprise cloud deployments."
              className="mb-4 font-sans"
              highlight={true}
              highlightWords={["RAG-based automation", "HFT"]}
              delay={500}
            />
            
            <AnimatedText 
              text="Seeking full-time Software Engineering, Front-Office Technology, and Quantitative Developer roles at global investment banks. Long-term vision: launch my own AI-driven fintech venture."
              className="mb-4 font-sans"
              highlight={true}
              highlightWords={["Quantitative Developer", "AI-driven fintech venture"]}
              delay={700}
            />
            
            <AnimatedText
              text="Marvell M-STEM Scholar, All India Rank 4 on Naukri EROH, National Winner of SIH 2024, and a Gold-level Quantitative Researcher at WorldQuant BRAIN."
              className="font-sans"
              highlight={false}
              delay={900}
            />
            
            <div className="mt-6 reveal" style={{ transitionDelay: '1100ms' }}>
              <h3 className="text-lg font-mono text-neon-emerald mb-3">Education</h3>
              <div className="p-4 bg-card/50 border border-border rounded-lg neon-border card-hover">
                <h4 className="font-bold font-sans text-foreground">Indian Institute of Information Technology (IIIT), Pune</h4>
                <p className="text-muted-foreground font-sans">Bachelor of Technology in Computer Science and Engineering</p>
                <div className="flex justify-between mt-2 font-sans">
                  <span className="text-neon-green">9.45 CGPA</span>
                  <span className="text-muted-foreground">Nov. 2022 – May 2026</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-10 md:mt-20">
            <div className={`relative mx-auto w-64 h-64 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="absolute inset-0 bg-tech-700/30 rounded-lg"></div>
              <div className="absolute inset-4 border-2 border-neon-emerald rounded-lg transform rotate-6 opacity-40"></div>
              
              <div className="absolute inset-0 bg-tech-800 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-tech-900 to-tech-700 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gradient font-sans">SK</span>
                </div>
                
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
                <pre className="absolute bottom-4 left-4 text-[0.6rem] text-neon-emerald opacity-50 font-mono">
                  <code>
                    {`const engineer = {
  role: "SWE @ Nomura",
  stack: ["Cloud", "AI/ML", "Quant"],
  alpha: Infinity
};`}
                  </code>
                </pre>
              </div>
              
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-br-lg border-r-2 border-b-2 border-neon-gold"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-tr-lg border-t-2 border-r-2 border-neon-green"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
