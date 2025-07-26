import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { projects } from './mock';

const Projects = () => {
  const getProjectIcon = (category) => {
    const iconMap = {
      'Process Optimization': Users,
      'Business Development': TrendingUp,
      'Risk Management': Shield
    };
    const IconComponent = iconMap[category] || TrendingUp;
    return <IconComponent className="w-8 h-8" />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'Process Optimization': 'bg-blue-50 text-blue-600 border-blue-200',
      'Business Development': 'bg-green-50 text-green-600 border-green-200',
      'Risk Management': 'bg-red-50 text-red-600 border-red-200'
    };
    return colorMap[category] || 'bg-slate-50 text-slate-600 border-slate-200';
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Key Projects & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transformative initiatives that delivered measurable results and drove organizational success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className={`p-4 rounded-2xl ${getCategoryColor(project.category)} border`}>
                      {getProjectIcon(project.category)}
                    </div>
                    <Badge variant="outline" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Impact</p>
                        <p className="text-lg font-semibold text-slate-900 mt-1">{project.impact}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievement Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { metric: "155%", label: "Revenue Growth Rate" },
            { metric: "35+", label: "Team Members Trained" },
            { metric: "100%", label: "SLA Adherence" },
            { metric: "4", label: "Major Process Improvements" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light text-slate-900 mb-2">{stat.metric}</div>
              <div className="text-sm text-slate-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;