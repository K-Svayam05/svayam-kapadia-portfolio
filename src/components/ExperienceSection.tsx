
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 'nomura-ft',
      title: 'Software Engineer',
      company: 'Nomura',
      link: '#',
      period: 'Jun. 2026 – Present',
      location: 'Mumbai, India',
      description: [
        'Promoted to full-time Software Engineer at Nomura Financial Services Group after the SDE internship.',
        'Driving Python automation, Power BI reporting, and applied AI initiatives for front-office analytics with the Technology team.',
      ]
    },
    {
      id: 'nasdaq',
      title: 'Cloud Engineering Intern',
      company: 'Nasdaq',
      link: '#',
      period: 'Jan. 2026 – May 2026',
      location: 'Mumbai, India (Hybrid)',
      badge: 'Internship Extension Offer Received',
      description: [
        'Administered Oracle Cloud Infrastructure (OCI) and Kubernetes environments alongside senior engineers, supporting Fortune 500 FinTech production systems built on Docker, Linux, and Git.',
        'Partnered with the DevOps team to streamline infrastructure provisioning and change management using Ansible and ServiceNow, speeding up CI/CD-driven deployments at enterprise scale.',
      ]
    },
    {
      id: 'nomura-intern',
      title: 'Software Development Engineering Intern',
      company: 'Nomura (Intern)',
      link: '#',
      period: 'Jun. 2025 – Dec. 2025',
      location: 'Mumbai, India',
      badge: 'Pre-Placement Offer Received',
      description: [
        'Developed a Retrieval-Augmented Generation (RAG) chatbot with internal LLM APIs, working closely with the risk team to automate metadata curation and cut risk-analysis turnaround time by 40%.',
        'Designed a normalized SQL schema for data lineage tracking, eliminating recurring consistency issues across upstream and downstream systems.',
        'Modernized legacy CI/CD pipelines in Jenkins with senior engineers, cutting technical debt by 25% and speeding up pipeline execution by 35%.',
      ]
    },
    {
      id: 'billbox',
      title: 'Software Development Intern',
      company: 'Billbox AI',
      link: '#',
      period: 'Dec. 2024 – Jun. 2025',
      location: 'Remote',
      description: [
        'Collaborated with product and design teams to ship full-stack features in React, TypeScript, and Node.js.',
        'Grew mobile engagement by 25% and cut load times by 15%.',
      ]
    },
  ];

  const [activeTab, setActiveTab] = useState('nomura-ft');

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
          <Tabs defaultValue="nomura-ft" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid md:grid-cols-4 grid-cols-2 gap-2 bg-card/50 p-2 mb-8 rounded-lg h-auto">
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
                      <span className="text-neon-emerald">{exp.company}</span>
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
