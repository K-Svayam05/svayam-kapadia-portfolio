import React, { useEffect, useState } from 'react';
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="interactive-element flex items-center">
          <div className="relative">
            <span className="text-2xl font-mono font-bold text-glow">SK</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-purple rounded-full"></span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="interactive-element relative group text-sm font-medium font-sans text-gray-300 hover:text-white transition-colors duration-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          {/* Resume dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="interactive-element px-4 py-2 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue/10 transition-all duration-300 font-sans flex items-center gap-1">
              Resume <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-tech-800/95 backdrop-blur-md border-neon-blue/30">
              <DropdownMenuItem asChild>
                <a 
                  href="https://drive.google.com/file/d/1uqmrHSmFx5B9jYL-ne-cA9YfUHo7svJX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Software Engineer
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a 
                  href="https://drive.google.com/file/d/14ShgDopO1KW1K8mFStmiwdGv-rlAqDY1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Quant Engineer
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden interactive-element"
          aria-label="Toggle menu"
        >
          <Menu className="text-white" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed right-0 top-0 w-64 h-screen bg-tech-800/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out p-5 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end">
            <button 
              onClick={toggleMobileMenu} 
              className="interactive-element"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 mt-10">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                onClick={toggleMobileMenu}
                className="interactive-element font-sans text-gray-300 hover:text-white hover:pl-2 transition-all duration-300"
              >
                <span className="text-neon-blue mr-2">0{index + 1}.</span> {item.label}
              </a>
            ))}
            
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm">Download Resume:</p>
              <a 
                href="https://drive.google.com/file/d/1uqmrHSmFx5B9jYL-ne-cA9YfUHo7svJX/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
                className="interactive-element block text-center px-4 py-2 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue/10 transition-all duration-300 font-sans"
              >
                Software Engineer
              </a>
              <a 
                href="https://drive.google.com/file/d/14ShgDopO1KW1K8mFStmiwdGv-rlAqDY1/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu}
                className="interactive-element block text-center px-4 py-2 border border-neon-purple text-neon-purple rounded hover:bg-neon-purple/10 transition-all duration-300 font-sans"
              >
                Quant Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
