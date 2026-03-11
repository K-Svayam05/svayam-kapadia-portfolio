
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 'nasdaq',
      title: 'Cloud Engineering Intern',
      company: 'Nasdaq',
      link: '#',
      period: 'Jan. 2026 – Present',
      location: 'Mumbai, India (Hybrid)',
      description: [
        'Completed 8 weeks of intensive cloud infrastructure training, mastering Oracle Cloud (OCI) and Kubernetes.',
        'Worked with foundational Ansible and Git automation workflows to support Fortune 500 FinTech environments.',
      ]
    },
    {
      id: 'nomura',
      title: 'Software Development Engineering Intern',
      company: 'Nomura',
      link: '#',
      period: 'Jun. 2025 – Dec. 2025',
      location: 'Mumbai, India',
      badge: 'Pre-Placement Offer Received',
      description: [
        'Architected a Retrieval-Augmented Generation (RAG) chatbot leveraging internal LLM APIs, automating real-time metadata curation and reducing risk analysis turnaround time by 40%.',
        'Designed a normalized SQL database schema for robust data lineage tracking, resolving 100% of data consistency bottlenecks across complex upstream and downstream dependencies.',
        'Modernized legacy CI/CD pipelines via Jenkins and optimized Python automation scripts, slashing technical debt by 25% and accelerating pipeline execution runtime by 35%.',
      ]
    },
    {
      id: 'stealth',
      title: 'Software Development Intern',
      company: 'Stealth Startup',
      link: '#',
      period: 'Dec. 2024 – Jun. 2025',
      location: 'Remote',
      description: [
        'Engineered scalable full-stack features utilizing modern web frameworks, boosting mobile user engagement by 25%.',
        'Reduced frontend application load times by 15% through performance optimization and modern tooling.',
      ]
    },
  ];

  const [activeTab, setActiveTab] = useState('nasdaq');

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-gold/10 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans">
            <span className="text-neon-emerald font-mono mr-2">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-emerald to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="nasdaq" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid md:grid-cols-3 grid-cols-1 gap-2 bg-card/50 p-2 mb-8 rounded-lg">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.id}
                  value={exp.id}
                  className="interactive-element font-sans data-[state=active]:bg-neon-emerald/20 data-[state=active]:text-neon-emerald cursor-pointer"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="bg-card/20 p-6 rounded-lg border border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold flex flex-wrap items-center gap-2 font-sans text-foreground">
                      {exp.title} 
                      <span className="text-neon-emerald">@</span>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-element text-neon-emerald hover:underline"
                      >
                        {exp.company}
                      </a>
                    </h3>
                    {'badge' in exp && exp.badge && (
                      <span className="inline-block mt-1 px-3 py-1 bg-neon-gold/20 text-neon-gold text-xs font-mono rounded-full border border-neon-gold/30">
                        {exp.badge}
                      </span>
                    )}
                    <p className="text-muted-foreground font-mono text-sm mt-1">
                      {exp.period} | {exp.location}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <AnimatedText
                        key={i}
                        as="li"
                        text={point}
                        className="flex items-start font-sans"
                        delay={i * 200}
                      >
                        <span className="text-neon-emerald inline-block mr-3 mt-1.5">▹</span>
                      </AnimatedText>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
