import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, Award } from 'lucide-react';
import { personalInfo, experience, education, awards } from './mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A seasoned professional with expertise in client solutions, risk management, 
            and operational excellence across diverse industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Image & Awards */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative">
              <img
                src={personalInfo.headshotUrl}
                alt="Justin Johnson"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Available for hire</span>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Recognition
                </h3>
                <div className="space-y-2">
                  {awards.map((award, index) => (
                    <Badge key={index} variant="secondary" className="block w-full text-left justify-start">
                      {award}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center">
                <Building className="w-6 h-6 mr-3" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-slate-900">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900">{exp.role}</h4>
                          <p className="text-lg text-slate-700 font-medium">{exp.company}</p>
                          {exp.region && (
                            <p className="text-sm text-slate-600">{exp.region}</p>
                          )}
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0">
                          {exp.duration}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-slate-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900">{edu.degree}</h4>
                          <p className="text-slate-700">{edu.institution}</p>
                        </div>
                        <Badge variant="outline">{edu.duration}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;