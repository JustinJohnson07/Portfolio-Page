import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from './mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">JJ</span>
            </div>
            <span className="font-semibold text-slate-900">Justin Johnson</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.open(personalInfo.resumeLink, '_blank')}
              className="bg-slate-900 hover:bg-slate-800 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => window.open(personalInfo.resumeLink, '_blank')}
                className="bg-slate-900 hover:bg-slate-800 text-white w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;