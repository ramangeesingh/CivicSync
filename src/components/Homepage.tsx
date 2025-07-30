import React from 'react';
import { FileText, Search, MapPin, TrendingUp, Users, CheckCircle, ArrowRight, Star, Shield, Clock, Award } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'track-complaint' | 'how-it-works' | 'about';

interface HomepageProps {
  onNavigate: (page: Page) => void;
}

const Homepage: React.FC<HomepageProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Total Complaints', value: '2,45,678', icon: FileText, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { label: 'Issues Resolved', value: '1,89,432', icon: CheckCircle, color: 'from-green-500 to-green-600', change: '+18%' },
    { label: 'Active Citizens', value: '87,543', icon: Users, color: 'from-purple-500 to-purple-600', change: '+25%' },
    { label: 'Success Rate', value: '84.2%', icon: TrendingUp, color: 'from-orange-500 to-orange-600', change: '+3%' },
  ];

  const categories = [
    { name: 'Roads & Transport', icon: '🛣️', count: '45,234', color: 'bg-blue-100 text-blue-700' },
    { name: 'Water & Sanitation', icon: '💧', count: '32,156', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Electricity', icon: '⚡', count: '28,943', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Garbage & Cleanliness', icon: '🗑️', count: '38,721', color: 'bg-green-100 text-green-700' },
    { name: 'Public Safety', icon: '🛡️', count: '15,892', color: 'bg-red-100 text-red-700' },
    { name: 'Parks & Recreation', icon: '🌳', count: '12,456', color: 'bg-emerald-100 text-emerald-700' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      text: 'CivicSync helped me report a dangerous pothole near my home. It was fixed within 3 days!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      text: 'The platform is so easy to use. I can track all my complaints and see real progress.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Anita Patel',
      location: 'Ahmedabad, Gujarat',
      text: 'Finally, a way to make our voices heard! The local authorities are more responsive now.',
      rating: 5,
      avatar: '👩‍🏫'
    }
  ];

  const recentComplaints = [
    { id: 'CIV-2024-001', type: 'Pothole', location: 'MG Road, Bangalore', status: 'In Progress', priority: 'high' },
    { id: 'CIV-2024-002', type: 'Street Light', location: 'CP, New Delhi', status: 'Resolved', priority: 'medium' },
    { id: 'CIV-2024-003', type: 'Garbage Dump', location: 'Andheri, Mumbai', status: 'Pending', priority: 'high' },
    { id: 'CIV-2024-004', type: 'Water Leak', location: 'Sector 14, Gurgaon', status: 'In Progress', priority: 'medium' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Trusted by 2M+ Citizens</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                One Nation,<br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  One Civic Portal
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Report civic issues, track progress, and build better communities across India. 
                Your voice matters in shaping our cities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('file-complaint')}
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <FileText className="h-6 w-6" />
                  <span>File Complaint</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => onNavigate('track-complaint')}
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Search className="h-6 w-6" />
                  <span>Track Status</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-blue-100">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-green-600 text-sm font-semibold">{stat.change}</div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Issue Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Report various civic issues across different categories and help improve your community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.count} reports
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Real-time Complaint Map
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Explore civic issues reported across India. See what's happening in your area and support community initiatives.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">High Priority Issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Medium Priority Issues</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Resolved Issues</span>
                </div>
              </div>
              
              <button
                onClick={() => onNavigate('track-complaint')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Full Map
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl h-80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                    {/* Simulated Map Pins */}
                    <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                    <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                    <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">Interactive Complaint Map</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <p className="text-xl text-gray-600">Latest complaints and their resolution status</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentComplaints.map((complaint) => (
              <div key={complaint.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{complaint.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    complaint.status === 'Resolved' 
                      ? 'bg-green-100 text-green-800'
                      : complaint.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {complaint.status}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{complaint.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{complaint.location}</p>
                <div className={`w-full h-2 rounded-full ${
                  complaint.priority === 'high' ? 'bg-red-200' : 'bg-yellow-200'
                }`}>
                  <div className={`h-2 rounded-full ${
                    complaint.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  } ${complaint.status === 'Resolved' ? 'w-full' : complaint.status === 'In Progress' ? 'w-2/3' : 'w-1/3'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Citizens Say</h2>
            <p className="text-xl text-gray-600">Real stories from people making a difference</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Award className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join millions of citizens working together to build better communities across India
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('file-complaint')}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:scale-105"
            >
              Start Filing Complaints
            </button>
            <button
              onClick={() => onNavigate('how-it-works')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn How It Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;