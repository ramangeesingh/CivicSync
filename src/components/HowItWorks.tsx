import React from 'react';
import { ArrowLeft, FileText, Search, CheckCircle, MapPin, Bell, Users, Shield, Clock, Award } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'track-complaint' | 'how-it-works' | 'about';

interface HowItWorksProps {
  onNavigate: (page: Page) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: 1,
      title: 'Report the Issue',
      description: 'Select the category, add location details, upload photos, and describe the civic issue you want to report.',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      features: ['Choose from 6+ categories', 'Pin exact location on map', 'Upload multiple photos', 'Set priority level']
    },
    {
      number: 2,
      title: 'Get Complaint ID',
      description: 'Receive a unique complaint ID and confirmation. Your issue is immediately forwarded to relevant authorities.',
      icon: Bell,
      color: 'from-green-500 to-green-600',
      features: ['Unique tracking ID', 'Email & SMS confirmation', 'Auto-forwarded to authorities', 'Estimated resolution time']
    },
    {
      number: 3,
      title: 'Track Progress',
      description: 'Monitor real-time updates, view progress timeline, and receive notifications about your complaint status.',
      icon: Search,
      color: 'from-purple-500 to-purple-600',
      features: ['Real-time status updates', 'Progress timeline', 'SMS & email notifications', 'Authority contact details']
    },
    {
      number: 4,
      title: 'Issue Resolved',
      description: 'Get notified when your issue is resolved. Rate the service and help improve the system for everyone.',
      icon: CheckCircle,
      color: 'from-orange-500 to-orange-600',
      features: ['Resolution confirmation', 'Before/after photos', 'Service rating', 'Community feedback']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your personal information is protected with enterprise-grade security.',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Issues are forwarded to authorities within minutes of submission.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Citizens can support and upvote issues to increase visibility.',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Over 84% success rate in resolving reported civic issues.',
      color: 'text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to resolve a complaint?',
      answer: 'Resolution time varies by issue type and priority. High-priority issues are typically addressed within 3-5 days, while medium and low priority issues may take 7-14 days.'
    },
    {
      question: 'Can I file a complaint anonymously?',
      answer: 'Yes, you can choose to file complaints anonymously. However, providing contact information helps authorities reach you for clarifications and updates.'
    },
    {
      question: 'What happens after I submit a complaint?',
      answer: 'Your complaint is immediately assigned a unique ID and forwarded to the relevant local authority. You\'ll receive confirmation via email and SMS with tracking details.'
    },
    {
      question: 'Can I track multiple complaints?',
      answer: 'Yes, you can track all your complaints from your dashboard. Each complaint has its own timeline and status updates.'
    },
    {
      question: 'What if my complaint is not resolved?',
      answer: 'If your complaint remains unresolved beyond the expected timeframe, you can escalate it to higher authorities through our platform.'
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
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How CivicSync Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, transparent process to report civic issues and track their resolution. 
            Join millions of citizens making their communities better.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={step.number} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg mr-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Step {step.number}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 shadow-2xl`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-64 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Icon className="h-20 w-20 mx-auto mb-4 opacity-80" />
                        <div className="text-6xl font-bold opacity-20">{step.number}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CivicSync?</h2>
            <p className="text-xl text-gray-600">Built with citizens in mind, designed for maximum impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of citizens who are already making a difference in their communities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('file-complaint')}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105"
            >
              File Your First Complaint
            </button>
            <button
              onClick={() => onNavigate('track-complaint')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Track Existing Complaint
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about using CivicSync</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you make the most of CivicSync
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
            >
              Contact Support
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-2xl font-semibold transition-colors">
              View Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;