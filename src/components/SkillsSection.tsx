import React from 'react';
import AnimatedText from './AnimatedText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SkillItem = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-tech-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-emerald to-neon-gold rounded-full"
          style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'TypeScript / JavaScript (ES6+)', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'SQL (PostgreSQL, MySQL)', level: 90 },
        { name: 'C', level: 80 },
      ]
    },
    {
      id: 'aiml',
      title: 'AI/ML & Quantitative',
      skills: [
        { name: 'High-Frequency Trading (HFT)', level: 85 },
        { name: 'Generative AI & LLMs', level: 92 },
        { name: 'RAG & Vector Search', level: 90 },
        { name: 'PyTorch & TensorFlow', level: 80 },
        { name: 'Statistical Modeling', level: 85 },
        { name: 'Scikit-learn', level: 88 },
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Docker & Kubernetes', level: 85 },
        { name: 'Ansible & Jenkins CI/CD', level: 82 },
        { name: 'Oracle Cloud (OCI)', level: 80 },
        { name: 'AWS', level: 78 },
        { name: 'Linux Server', level: 88 },
        { name: 'Distributed Systems', level: 82 },
      ]
    },
    {
      id: 'frameworks',
      title: 'Web & Backend',
      skills: [
        { name: 'React.js & Next.js', level: 92 },
        { name: 'Node.js & Express.js', level: 88 },
        { name: 'Flask & FastAPI', level: 85 },
        { name: 'Microservices Architecture', level: 82 },
      ]
    }
  ];

  const achievements = [
    { title: 'National Winner (1st / 20,000+)', description: 'Smart India Hackathon (SIH) 2024' },
    { title: 'All India Rank 4 (Top 0.02%)', description: 'Naukri Campus EROH 2025' },
    { title: 'Gold-Level Quant Researcher', description: 'WorldQuant' },
    { title: 'Global Rank 52', description: 'CodeChef Starters 191' },
    { title: 'Open Source Contributor', description: 'GSSoC \'24 — 5+ repos optimized' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-neon-emerald/10 rounded-full filter blur-[80px] animate-blob"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-neon-emerald font-mono mr-2">04.</span> Skills & Achievements
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-emerald to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-card/50 p-2 mb-8 rounded-lg">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="interactive-element data-[state=active]:bg-neon-emerald/20 data-[state=active]:text-neon-emerald"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="p-1">
                  <div className="bg-card/20 p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6">{category.title}</h3>
                    <div className="grid md:grid-cols-2 gap-x-8">
                      {category.skills.map((skill, index) => (
                        <AnimatedText 
                          key={index} 
                          text="" 
                          delay={index * 100}
                        >
                          <SkillItem name={skill.name} level={skill.level} />
                        </AnimatedText>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div>
            <div className="bg-card/30 p-6 rounded-lg border border-border h-full">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <span className="text-neon-gold mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.21 13.89L7 23l7-4 7 4-1.21-9.11"></path>
                    <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                  </svg>
                </span>
                Achievements
              </h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <AnimatedText 
                    key={index} 
                    text="" 
                    className="flex items-center" 
                    delay={index * 200}
                  >
                    <div className="relative">
                      <div className="flex items-start">
                        <div className="mr-4">
                          <div className="w-3 h-3 rounded-full bg-neon-gold"></div>
                          {index !== achievements.length - 1 && (
                            <div className="w-0.5 h-full bg-gradient-to-b from-neon-gold to-transparent absolute ml-1.5 mt-3"></div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{achievement.title}</h4>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedText>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-bold mb-3 text-foreground">Coding Profiles</h4>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.codechef.com/users/svayam_05" target="_blank" rel="noopener noreferrer"
                    className="interactive-element px-4 py-2 bg-tech-700 rounded-md text-sm hover:bg-neon-emerald/20 hover:text-neon-emerald transition-colors duration-300">
                    CodeChef
                  </a>
                  <a href="https://leetcode.com/u/svayam_05/" target="_blank" rel="noopener noreferrer"
                    className="interactive-element px-4 py-2 bg-tech-700 rounded-md text-sm hover:bg-neon-emerald/20 hover:text-neon-emerald transition-colors duration-300">
                    LeetCode
                  </a>
                  <a href="https://codeforces.com/profile/svayam.005" target="_blank" rel="noopener noreferrer"
                    className="interactive-element px-4 py-2 bg-tech-700 rounded-md text-sm hover:bg-neon-emerald/20 hover:text-neon-emerald transition-colors duration-300">
                    Codeforces
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
            <span className="text-neon-emerald mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h.01"></path>
                <path d="M10 7h7"></path>
                <path d="M7 12h.01"></path>
                <path d="M10 12h7"></path>
                <path d="M7 17h.01"></path>
                <path d="M10 17h3"></path>
              </svg>
            </span>
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              'Advanced Generative AI for Developers (Google Cloud)',
              'Windows Server Administrator (Udemy)',
            ].map((cert, index) => (
              <AnimatedText key={index} text="" delay={index * 100}>
                <div className="bg-card/20 p-4 rounded-lg border border-border">
                  <div className="flex items-start">
                    <div className="min-w-6 h-6 rounded-full bg-neon-emerald/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-emerald">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p className="text-foreground">{cert}</p>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
