import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Users, Target, Award, Globe, Heart, Shield } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'track-complaint' | 'how-it-works' | 'about';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const stats = [
    { label: 'Cities Covered', value: '500+', icon: Globe },
    { label: 'Issues Resolved', value: '2.4M+', icon: Award },
    { label: 'Active Citizens', value: '1.8M+', icon: Users },
    { label: 'Success Rate', value: '84%', icon: Target }
  ];

  const team = [
    {
      name: 'Ramangee Singh',
      role: 'Founder',
      bio: 'Engineering student building impactful civic-tech projects',
      avatar: '👩‍💼'
    },
    {
      name: 'Prince Kumar',
      role: 'CTO',
      bio: 'IT student and full stack developer passionate about civic solutions',
      avatar: '👨‍💻'
    },
    {
      name: 'Himanshu Shekhar',
      role: 'Head of Operations',
      bio: 'Second-year IT student managing team operations and backend integrations',
      avatar: '👨‍💼'
    },
    {
      name: 'Kaushik',
      role: 'Head of Partnerships',
      bio: 'Second-year engineering student handling outreach and collaborations',
      avatar: '👨‍💼'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Citizen First',
      description: 'Every decision we make prioritizes the needs and experience of citizens'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Open processes, clear communication, and accountable governance'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building stronger communities through collective civic engagement'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous improvement in service delivery and user experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CivicSync</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering citizens to build better communities through technology-driven civic engagement. 
            We bridge the gap between citizens and local authorities for faster, more effective governance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                 Our mission is to build a transparent, simple, and powerful platform where every citizen can raise issues
                and track their resolutions easily. We believe when people have access to the right tools, real change happens.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Since starting this journey, we have helped resolve over 2.4 million civic issues across 500+ cities, proving
                that technology can truly make governance responsive and effective for everyone.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Direct connection between citizens and authorities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time tracking and transparency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Data-driven insights for better governance</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital India Initiative</h3>
                  <p className="text-gray-600">
                    Proud partner in India's digital transformation, making governance more accessible to all citizens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals working to transform civic engagement</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">support@civicsync.gov.in</p>
                      <p className="text-gray-600">partnerships@civicsync.gov.in</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">1800-0000-00</p>
                      <p className="text-gray-600">Call us anytime, we're here 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        CivicSync Technologies Pvt. Ltd.<br />
                        Digital India Building, Sector 44<br />
                        Kharar, Mohali 14031
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-blue-100 mb-6">
                  Interested in partnering with us or joining our team? We're always looking for passionate individuals and organizations.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                    Career Opportunities
                  </button>
                  <button className="w-full bg-transparent border-2 border-white text-white py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Partnership Inquiries
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;