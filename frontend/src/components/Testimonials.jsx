import React from 'react';
import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';
import { testimonials } from './mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            What Colleagues Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Testimonials from team members, managers, and collaborators across different organizations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-slate-300 group-hover:text-slate-400 transition-colors" />
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          className="w-4 h-4 fill-current text-yellow-400" 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-slate-700 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Information */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{testimonial.author}</p>
                        <p className="text-sm text-slate-600">{testimonial.role}</p>
                        <p className="text-sm font-medium text-slate-700">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm always interested in connecting with professionals who value strategic thinking, 
              collaborative problem-solving, and results-driven execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Let's Connect
              </button>
              <button 
                onClick={() => window.open('https://linkedin.com/in/justin-johnson', '_blank')}
                className="border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
              >
                View LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;