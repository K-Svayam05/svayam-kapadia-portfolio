import React from 'react';
import AnimatedText from './AnimatedText';

const AboutSection = () => {
  const focus = [
    'Front-Office & Quant Developer roles',
    'AI/ML Engineer for Financial Systems',
    'Cloud/Platform Engineering at scale',
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans">
            <span className="text-neon-emerald font-mono mr-2">01.</span> About
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-emerald to-transparent flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-4">
            <AnimatedText
              text="Software Engineer at Nomura Financial Services Group, working across Cloud, AI/ML, and Quantitative Development for global financial technology."
              className="text-lg text-foreground"
              highlight
              highlightWords={['Nomura', 'Quantitative']}
            />
            <AnimatedText
              text="I've shipped RAG-based risk automation, modernized Jenkins CI/CD pipelines, and administered OCI + Kubernetes for Fortune-500 FinTech systems — earning a PPO from Nomura and an extension offer from Nasdaq along the way."
              className="text-muted-foreground"
              highlight
              highlightWords={['RAG', 'PPO', 'Nasdaq']}
              delay={150}
            />
            <AnimatedText
              text="Actively seeking full-time Software Engineering, Front-Office Technology, and Quant Developer roles at global investment banks. Long-term: build my own AI-driven fintech venture."
              className="text-muted-foreground"
              highlight
              highlightWords={['Front-Office Technology', 'Quant Developer', 'AI-driven fintech']}
              delay={300}
            />

            <div className="pt-4">
              <h3 className="text-sm font-mono text-neon-emerald mb-3 uppercase tracking-wider">
                Currently open to
              </h3>
              <div className="flex flex-wrap gap-2">
                {focus.map((f) => (
                  <span
                    key={f}
                    className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-neon-emerald/30 bg-neon-emerald/5 text-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="p-5 bg-card/50 border border-border rounded-lg neon-border">
              <div className="text-xs font-mono text-neon-emerald uppercase tracking-wider mb-2">
                Education
              </div>
              <h4 className="font-bold font-sans text-foreground leading-snug">
                IIIT Pune
              </h4>
              <p className="text-sm text-muted-foreground">
                B.Tech, Computer Science & Engineering
              </p>
              <div className="flex justify-between mt-3 text-sm">
                <span className="text-neon-green font-mono">9.45 CGPA</span>
                <span className="text-muted-foreground font-mono">2022 – 2026</span>
              </div>
            </div>

            <div className="p-5 bg-card/50 border border-border rounded-lg">
              <div className="text-xs font-mono text-neon-gold uppercase tracking-wider mb-2">
                Recognition
              </div>
              <ul className="text-sm text-foreground space-y-1.5">
                <li>Marvell M-STEM Scholar (2026)</li>
                <li>AIR 4 · Naukri EROH 2025 <span className="text-muted-foreground">(Top 0.02%)</span></li>
                <li>National Winner · SIH 2024</li>
                <li>Gold-Level Quant Researcher · WorldQuant BRAIN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
