import React from 'react';
import { Mail, Phone, Linkedin, Download } from 'lucide-react';
import { personalInfo } from './mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">JJ</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{personalInfo.name}</h3>
                <p className="text-slate-400 text-sm">Client Solutions & Strategy Expert</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Driving client growth, solving risk challenges, and scaling operations 
              with strategic expertise and proven results across diverse industries.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <div className="space-y-3">
              <a 
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Built with React & FastAPI</span>
              <span>•</span>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;