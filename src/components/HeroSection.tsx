
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { Bot } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const moveX = x * 20;
      const moveY = y * 20;
      
      // Apply the movement to elements with data-speed attribute
      Array.from(heroRef.current.querySelectorAll('[data-speed]')).forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || '1');
        
        el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
      
      // Handle robot 3D rotation following cursor
      if (robotRef.current) {
        const robotBox = robotRef.current.getBoundingClientRect();
        const robotCenterX = robotBox.left + robotBox.width / 2;
        const robotCenterY = robotBox.top + robotBox.height / 2;
        
        // Calculate rotation angles based on cursor position
        const rotateY = ((clientX - robotCenterX) / window.innerWidth) * 40;
        const rotateX = ((clientY - robotCenterY) / window.innerHeight) * -20;
        
        // Apply 3D rotation to robot head
        const robotHead = robotRef.current.querySelector('.robot-head') as HTMLElement;
        if (robotHead) {
          robotHead.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
        
        // Move eyes to follow cursor
        const leftEye = robotRef.current.querySelector('.left-eye') as HTMLElement;
        const rightEye = robotRef.current.querySelector('.right-eye') as HTMLElement;
        if (leftEye && rightEye) {
          const eyeMoveX = ((clientX - robotCenterX) / window.innerWidth) * 6;
          const eyeMoveY = ((clientY - robotCenterY) / window.innerHeight) * 4;
          leftEye.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
          rightEye.style.transform = `translate(${eyeMoveX}px, ${eyeMoveY}px)`;
        }
        
        // Subtle body sway
        const robotBody = robotRef.current.querySelector('.robot-body') as HTMLElement;
        if (robotBody) {
          robotBody.style.transform = `rotateY(${rotateY * 0.2}deg) rotateX(${rotateX * 0.1}deg)`;
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-16 overflow-hidden" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-neon-blue/20 rounded-full filter blur-[80px] animate-blob" data-speed="3"></div>
      <div className="absolute top-2/3 -right-20 w-72 h-72 bg-neon-purple/20 rounded-full filter blur-[80px] animate-blob animation-delay-2000" data-speed="2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <h3 className="text-neon-blue font-mono text-lg md:text-xl tracking-wider animate-text-reveal">
              Hi there, my name is
            </h3>
          </div>
          
          <div className="overflow-hidden mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-text-reveal" style={{ animationDelay: '200ms' }}>
              <span className="text-white">Svayam </span>
              <span className="text-gradient">Kapadia</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-6">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 animate-text-reveal" style={{ animationDelay: '400ms' }}>
              I build intelligent digital experiences
            </h2>
          </div>
          
          <AnimatedText 
            text="Software developer passionate about crafting cutting-edge solutions that bridge human needs and technological innovation. Specializing in responsive web applications enhanced with AI capabilities, I transform complex challenges into elegant, user-centric experiences."
            className="text-muted-foreground max-w-xl text-lg mb-8"
            delay={600}
          />
          
          <div className="overflow-hidden">
            <div className="animate-text-reveal" style={{ animationDelay: '800ms' }}>
              <a 
                href="#projects" 
                className="interactive-element mr-4 px-6 py-3 bg-neon-blue text-gray-900 font-medium rounded hover:bg-neon-blue/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(77,159,255,0.5)]"
              >
                View my work
              </a>
              <a 
                href="#contact" 
                className="interactive-element px-6 py-3 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue/10 transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* 3D Humanoid Tech Robot */}
      <div 
        ref={robotRef} 
        className="hidden md:flex absolute right-10 lg:right-20 top-1/3 transform -translate-y-1/2 items-center justify-center"
        style={{ perspective: '1000px' }}
        data-speed="-1.2"
      >
        <div className="robot-container relative" style={{ transformStyle: 'preserve-3d' }}>
          {/* Robot body */}
          <div 
            className="robot-body w-36 h-48 bg-gradient-to-b from-tech-700 to-tech-900 rounded-lg border-2 border-neon-blue/60 flex flex-col items-center relative overflow-visible transition-transform duration-200 ease-out"
            style={{ transformStyle: 'preserve-3d', boxShadow: '0 0 30px rgba(77, 159, 255, 0.3), inset 0 0 20px rgba(77, 159, 255, 0.1)' }}
          >
            {/* Robot head - 3D with perspective */}
            <div 
              className="robot-head w-24 h-28 bg-gradient-to-b from-tech-800 to-tech-900 rounded-t-3xl rounded-b-lg border-2 border-neon-purple/70 -mt-16 relative transition-transform duration-100 ease-out"
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 0 25px rgba(155, 89, 182, 0.4), inset 0 -5px 15px rgba(0,0,0,0.3)'
              }}
            >
              {/* Antenna */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-neon-blue to-neon-purple">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-neon-green rounded-full animate-pulse" style={{ boxShadow: '0 0 10px rgba(51, 255, 87, 0.8)' }}></div>
              </div>
              
              {/* Face plate */}
              <div className="absolute inset-2 top-4 bg-tech-900/80 rounded-xl border border-neon-blue/30" style={{ boxShadow: 'inset 0 0 15px rgba(77, 159, 255, 0.2)' }}>
                {/* Eyes container */}
                <div className="flex justify-center space-x-5 mt-4">
                  <div className="w-6 h-6 rounded-full bg-tech-800 border-2 border-neon-blue/50 flex items-center justify-center overflow-hidden" style={{ boxShadow: 'inset 0 0 8px rgba(77, 159, 255, 0.5)' }}>
                    <div className="left-eye w-3 h-3 rounded-full bg-neon-blue transition-transform duration-75" style={{ boxShadow: '0 0 8px rgba(77, 159, 255, 0.9)' }}></div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-tech-800 border-2 border-neon-blue/50 flex items-center justify-center overflow-hidden" style={{ boxShadow: 'inset 0 0 8px rgba(77, 159, 255, 0.5)' }}>
                    <div className="right-eye w-3 h-3 rounded-full bg-neon-blue transition-transform duration-75" style={{ boxShadow: '0 0 8px rgba(77, 159, 255, 0.9)' }}></div>
                  </div>
                </div>
                
                {/* Mouth/speaker */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 h-2 bg-tech-800 rounded-full overflow-hidden">
                  <div className="flex space-x-0.5 h-full items-center justify-center">
                    <div className="w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
                    <div className="w-1 h-1.5 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '100ms' }}></div>
                    <div className="w-1 h-1 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-1 h-1.5 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-1 h-1 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Side panels for 3D effect */}
              <div className="absolute -left-1 top-4 bottom-4 w-1 bg-gradient-to-b from-neon-purple/40 to-neon-blue/40 rounded-l"></div>
              <div className="absolute -right-1 top-4 bottom-4 w-1 bg-gradient-to-b from-neon-purple/40 to-neon-blue/40 rounded-r"></div>
            </div>
            
            {/* Neck */}
            <div className="w-6 h-3 bg-tech-700 border-x border-neon-blue/30"></div>
            
            {/* Chest */}
            <div className="w-full flex-1 flex flex-col items-center pt-2 relative">
              {/* Core reactor */}
              <div className="w-12 h-12 rounded-full bg-tech-800 border-2 border-neon-blue/50 flex items-center justify-center" style={{ boxShadow: '0 0 20px rgba(77, 159, 255, 0.4)' }}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple animate-pulse" style={{ boxShadow: '0 0 15px rgba(77, 159, 255, 0.8)' }}></div>
              </div>
              
              {/* Status lights */}
              <div className="flex space-x-2 mt-3">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" style={{ boxShadow: '0 0 6px rgba(51, 255, 87, 0.8)' }}></div>
                <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" style={{ animationDelay: '300ms', boxShadow: '0 0 6px rgba(77, 159, 255, 0.8)' }}></div>
                <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" style={{ animationDelay: '600ms', boxShadow: '0 0 6px rgba(155, 89, 182, 0.8)' }}></div>
              </div>
              
              {/* Circuit pattern */}
              <div className="absolute inset-0 opacity-20 bg-circuit-pattern"></div>
            </div>
            
            {/* Arms */}
            <div className="absolute -right-8 top-16 w-10 h-4 bg-gradient-to-r from-tech-800 to-tech-700 rounded-full origin-left animate-[wave_2s_ease-in-out_infinite] border border-neon-blue/50" style={{ boxShadow: '0 0 10px rgba(77, 159, 255, 0.3)' }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-tech-800 rounded-full border border-neon-blue/50"></div>
            </div>
            <div className="absolute -left-8 top-16 w-10 h-4 bg-gradient-to-l from-tech-800 to-tech-700 rounded-full origin-right border border-neon-blue/50" style={{ boxShadow: '0 0 10px rgba(77, 159, 255, 0.3)' }}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-tech-800 rounded-full border border-neon-blue/50"></div>
            </div>
            
            {/* Legs */}
            <div className="absolute -bottom-10 left-5 w-5 h-12 bg-gradient-to-b from-tech-800 to-tech-700 rounded-b-lg border border-neon-blue/50" style={{ boxShadow: '0 0 10px rgba(77, 159, 255, 0.2)' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-3 bg-tech-700 rounded-md border border-neon-blue/30"></div>
            </div>
            <div className="absolute -bottom-10 right-5 w-5 h-12 bg-gradient-to-b from-tech-800 to-tech-700 rounded-b-lg border border-neon-blue/50" style={{ boxShadow: '0 0 10px rgba(77, 159, 255, 0.2)' }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-3 bg-tech-700 rounded-md border border-neon-blue/30"></div>
            </div>
          </div>
          
          {/* Robot glow effect */}
          <div className="absolute inset-0 -z-10 bg-neon-blue/10 blur-2xl rounded-full scale-150"></div>
          
          {/* Shadow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-black/40 rounded-full blur-md"></div>
        </div>
      </div>
      
      {/* Floating shapes */}
      <div className="hidden md:block absolute right-10 bottom-10 w-40 h-40" data-speed="-2">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-0 w-12 h-12 border-2 border-neon-blue/30 rounded-lg transform rotate-45 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-2 border-neon-purple/30 rounded-md animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-8 h-8 bg-neon-green/10 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <div className="h-12 w-6 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
