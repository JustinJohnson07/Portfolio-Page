import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Download } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from './mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Interested in collaboration, have a project in mind, or just want to chat? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get In Touch</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you're looking for strategic consultation, team leadership, 
                or operational expertise, I'm here to help drive your success.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600">{personalInfo.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <p className="text-slate-600">{personalInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">Location</p>
                  <p className="text-slate-600">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-8">
              <Button
                onClick={() => window.open(personalInfo.linkedin, '_blank')}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                onClick={() => window.open(personalInfo.resumeLink, '_blank')}
                variant="outline"
                size="lg"
                className="flex-1"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                    placeholder="Tell me about your project, collaboration opportunity, or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;