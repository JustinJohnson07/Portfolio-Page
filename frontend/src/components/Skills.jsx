import React from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { TrendingUp, Users, Shield, Target, BarChart, Cog } from 'lucide-react';
import { skills } from './mock';

const Skills = () => {
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'Account Management & Client Retention': Users,
      'Revenue Growth & Strategic Sales': TrendingUp,
      'CRM Tools (Salesforce, Looker, Workday)': BarChart,
      'Risk Assessment & Compliance': Shield,
      'Market Research & Trend Analysis': Target,
      'Cross-Functional Team Leadership': Users,
      'Fraud Detection & Credit Risk': Shield,
      'Operational Efficiency': Cog
    };
    
    const IconComponent = iconMap[skillName] || Target;
    return <IconComponent className="w-6 h-6" />;
  };

  const getSkillCategory = (skillName) => {
    if (skillName.includes('Management') || skillName.includes('Leadership')) return 'Management';
    if (skillName.includes('Revenue') || skillName.includes('Sales')) return 'Sales';
    if (skillName.includes('Risk') || skillName.includes('Compliance') || skillName.includes('Fraud')) return 'Risk';
    if (skillName.includes('CRM') || skillName.includes('Tools')) return 'Technical';
    return 'Analysis';
  };

  const categories = ['Management', 'Sales', 'Risk', 'Technical', 'Analysis'];
  const categoryColors = {
    'Management': 'bg-blue-500',
    'Sales': 'bg-green-500',
    'Risk': 'bg-red-500',
    'Technical': 'bg-purple-500',
    'Analysis': 'bg-orange-500'
  };

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Core Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set developed through years of experience in client solutions, 
            risk management, and operational excellence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-slate-100 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                      <span className="text-sm font-medium text-slate-600">{skill.level}%</span>
                    </div>
                    <div className="space-y-2">
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <div className="flex justify-between items-center">
                        <span className={`inline-block w-3 h-3 rounded-full ${categoryColors[getSkillCategory(skill.name)]}`}></span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide">
                          {getSkillCategory(skill.name)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Categories Legend */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <span className={`w-4 h-4 rounded-full ${categoryColors[category]}`}></span>
              <span className="text-sm font-medium text-slate-700">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;