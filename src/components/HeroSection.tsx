import React, { useEffect, useRef } from 'react';
import { FileText, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/file/d/1p6LyEghu_GSFw7zzPduPoylKZIA3HlLi/view?usp=sharing';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = 0, my = 0;
    let ticking = false;

    const apply = () => {
      ticking = false;
      const hero = heroRef.current;
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = (mx - rect.left) / rect.width - 0.5;
      const y = (my - rect.top) / rect.height - 0.5;
      const mvX = x * 16;
      const mvY = y * 16;

      hero.querySelectorAll<HTMLElement>('[data-speed]').forEach((el) => {
        const s = parseFloat(el.dataset.speed || '1');
        el.style.transform = `translate3d(${mvX * s}px, ${mvY * s}px, 0)`;
      });

      const robot = robotRef.current;
      if (robot) {
        const rBox = robot.getBoundingClientRect();
        const cx = rBox.left + rBox.width / 2;
        const cy = rBox.top + rBox.height / 2;
        const rotY = ((mx - cx) / window.innerWidth) * 34;
        const rotX = ((my - cy) / window.innerHeight) * -18;

        const head = robot.querySelector<HTMLElement>('.robot-head');
        if (head) head.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        const body = robot.querySelector<HTMLElement>('.robot-body');
        if (body) body.style.transform = `rotateY(${rotY * 0.2}deg) rotateX(${rotX * 0.1}deg)`;

        const eyeX = ((mx - cx) / window.innerWidth) * 6;
        const eyeY = ((my - cy) / window.innerHeight) * 4;
        robot.querySelectorAll<HTMLElement>('.robot-eye').forEach((eye) => {
          eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const stats = [
    { k: '9.45', v: 'CGPA · IIIT Pune' },
    { k: 'AIR 4', v: 'Naukri EROH 2025' },
    { k: 'SIH', v: 'National Winner 2024' },
    { k: 'M-STEM', v: 'Marvell Scholar' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-20 pb-16 overflow-hidden"
      ref={heroRef}
    >
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div
        className="absolute top-1/3 -left-20 w-72 h-72 bg-neon-emerald/20 rounded-full filter blur-[80px] animate-blob"
        data-speed="3"
      ></div>
      <div
        className="absolute top-2/3 -right-20 w-72 h-72 bg-neon-gold/20 rounded-full filter blur-[80px] animate-blob animation-delay-2000"
        data-speed="2"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h3 className="text-neon-emerald font-mono text-sm md:text-base tracking-wider animate-text-reveal mb-3">
            Hi, I'm
          </h3>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-text-reveal mb-4"
            style={{ animationDelay: '150ms' }}
          >
            <span className="text-foreground">Svayam </span>
            <span className="text-gradient">Kapadia</span>
          </h1>

          <h2
            className="text-xl md:text-3xl font-semibold text-muted-foreground animate-text-reveal mb-5"
            style={{ animationDelay: '300ms' }}
          >
            Software Engineer @ <span className="text-neon-gold">Nomura</span> —
            Cloud, AI/ML & Quant for FinTech
          </h2>

          <p
            className="text-muted-foreground max-w-2xl text-base md:text-lg mb-8 animate-text-reveal"
            style={{ animationDelay: '450ms' }}
          >
            I build production systems at the intersection of{' '}
            <span className="text-neon-emerald font-medium">cloud infrastructure</span>,{' '}
            <span className="text-neon-emerald font-medium">generative AI</span>, and{' '}
            <span className="text-neon-emerald font-medium">quantitative finance</span> —
            from RAG-powered risk automation to HFT and market-regime modeling.
          </p>

          {/* Stat highlights — the recruiter-scannable line */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-2xl animate-text-reveal"
            style={{ animationDelay: '600ms' }}
          >
            {stats.map((s) => (
              <div
                key={s.k}
                className="rounded-md border border-neon-emerald/25 bg-card/30 px-3 py-2 backdrop-blur-sm"
              >
                <div className="text-neon-emerald font-mono text-lg md:text-xl font-bold leading-none">
                  {s.k}
                </div>
                <div className="text-[11px] md:text-xs text-muted-foreground mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex flex-wrap items-center gap-3 md:gap-4 animate-text-reveal"
            style={{ animationDelay: '750ms' }}
          >
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-element inline-flex items-center gap-2 px-6 py-3 bg-neon-emerald text-background font-semibold rounded hover:bg-neon-emerald/90 transition-all duration-300 hover:shadow-[0_0_24px_rgba(16,185,129,0.55)]"
            >
              <FileText size={18} />
              Download Résumé
            </a>
            <a
              href="#projects"
              className="interactive-element inline-flex items-center gap-2 px-6 py-3 border border-neon-emerald text-neon-emerald rounded hover:bg-neon-emerald/10 transition-all duration-300"
            >
              See selected work <ArrowRight size={16} />
            </a>

            <div className="flex items-center gap-2 md:ml-2">
              <a
                href="https://github.com/K-Svayam05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="interactive-element p-2 text-muted-foreground hover:text-neon-emerald transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/svayam-kapadia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="interactive-element p-2 text-muted-foreground hover:text-neon-emerald transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:svayamkapadia.work@gmail.com"
                aria-label="Email"
                className="interactive-element p-2 text-muted-foreground hover:text-neon-emerald transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3D robot — kept, but with lighter eye classes */}
      <div
        ref={robotRef}
        className="hidden lg:flex absolute right-10 lg:right-20 top-1/3 transform -translate-y-1/2 items-center justify-center pointer-events-none"
        style={{ perspective: '1000px' }}
        data-speed="-1.2"
        aria-hidden="true"
      >
        <div className="robot-container relative" style={{ transformStyle: 'preserve-3d' }}>
          <div
            className="robot-body w-32 h-44 bg-gradient-to-b from-tech-700 to-tech-900 rounded-lg border-2 border-neon-emerald/60 flex flex-col items-center relative overflow-visible transition-transform duration-200 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow:
                '0 0 30px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(16, 185, 129, 0.1)',
            }}
          >
            <div
              className="robot-head w-20 h-24 bg-gradient-to-b from-tech-800 to-tech-900 rounded-t-3xl rounded-b-lg border-2 border-neon-gold/70 -mt-14 relative transition-transform duration-100 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow:
                  '0 0 25px rgba(245, 158, 11, 0.4), inset 0 -5px 15px rgba(0,0,0,0.3)',
              }}
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-1 h-5 bg-gradient-to-t from-neon-emerald to-neon-gold">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-2 top-3 bg-tech-900/80 rounded-xl border border-neon-emerald/30">
                <div className="flex justify-center space-x-4 mt-3">
                  <div className="w-5 h-5 rounded-full bg-tech-800 border-2 border-neon-emerald/50 flex items-center justify-center overflow-hidden">
                    <div className="robot-eye w-2.5 h-2.5 rounded-full bg-neon-emerald"></div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-tech-800 border-2 border-neon-emerald/50 flex items-center justify-center overflow-hidden">
                    <div className="robot-eye w-2.5 h-2.5 rounded-full bg-neon-emerald"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-1 flex flex-col items-center pt-2">
              <div className="w-10 h-10 rounded-full bg-tech-800 border-2 border-neon-emerald/50 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-emerald to-neon-gold animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-neon-emerald/10 blur-2xl rounded-full scale-150"></div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2 font-mono">
          Scroll
        </span>
        <div className="h-10 w-5 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-emerald rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
