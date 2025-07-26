import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from './mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <MapPin className="w-4 h-4 mr-2" />
              {personalInfo.location}
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 leading-tight tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-4xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-600">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{personalInfo.email}</span>
            </a>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center space-x-2 hover:text-slate-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{personalInfo.phone}</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => window.open(personalInfo.resumeLink, '_blank')}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Animated geometric element */}
          <div className="pt-16 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 border border-slate-200 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-slate-300 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;