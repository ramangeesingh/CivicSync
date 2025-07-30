import React, { useState } from 'react';
import { ArrowLeft, MapPin, Filter, ThumbsUp, Eye, Calendar, Search } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'dashboard' | 'public-map';

interface PublicMapProps {
  onNavigate: (page: Page) => void;
}

const PublicMap: React.FC<PublicMapProps> = ({ onNavigate }) => {
  const [selectedComplaint, setSelectedComplaint] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const publicComplaints = [
    {
      id: 'CIV-2024-001',
      title: 'Large pothole on MG Road',
      category: 'Road & Transport',
      location: 'MG Road, Sector 14',
      coordinates: { lat: 28.5355, lng: 77.3910 },
      status: 'In Progress',
      priority: 'high',
      dateSubmitted: '2024-01-15',
      upvotes: 24,
      views: 156,
      description: 'Large pothole causing traffic issues and vehicle damage'
    },
    {
      id: 'CIV-2024-005',
      title: 'Broken streetlight at junction',
      category: 'Electricity',
      location: 'Central Square Junction',
      coordinates: { lat: 28.5365, lng: 77.3920 },
      status: 'Pending',
      priority: 'medium',
      dateSubmitted: '2024-01-18',
      upvotes: 12,
      views: 89,
      description: 'Main streetlight at busy junction not working, safety concern'
    },
    {
      id: 'CIV-2024-006',
      title: 'Garbage dump near school',
      category: 'Garbage & Cleanliness',
      location: 'Green Park School Area',
      coordinates: { lat: 28.5345, lng: 77.3900 },
      status: 'In Progress',
      priority: 'high',
      dateSubmitted: '2024-01-20',
      upvotes: 45,
      views: 234,
      description: 'Illegal garbage dumping near primary school affecting children\'s health'
    },
    {
      id: 'CIV-2024-007',
      title: 'Water logging during rain',
      category: 'Water & Sanitation',
      location: 'Market Street',
      coordinates: { lat: 28.5375, lng: 77.3930 },
      status: 'Resolved',
      priority: 'medium',
      dateSubmitted: '2024-01-10',
      upvotes: 18,
      views: 123,
      description: 'Poor drainage causing severe water logging during monsoon'
    }
  ];

  const categories = ['all', 'Road & Transport', 'Electricity', 'Garbage & Cleanliness', 'Water & Sanitation', 'Public Safety'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const getPinColor = (priority: string, status: string) => {
    if (status === 'Resolved') return 'text-green-600';
    if (priority === 'high') return 'text-red-600';
    if (priority === 'medium') return 'text-yellow-600';
    return 'text-blue-600';
  };

  const filteredComplaints = publicComplaints.filter(complaint => {
    const matchesSearch = complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || complaint.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Public Complaints Map</h1>
        <p className="text-gray-600">View and support civic complaints in your community</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search complaints by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interactive Map</h3>
            <div className="bg-gray-100 rounded-lg h-96 relative overflow-hidden">
              {/* Simulated Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                {filteredComplaints.map((complaint) => (
                  <div
                    key={complaint.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                      selectedComplaint === complaint.id ? 'scale-125 z-10' : 'z-0'
                    }`}
                    style={{
                      left: `${((complaint.coordinates.lng - 77.3900) * 1000) + 50}%`,
                      top: `${((28.5360 - complaint.coordinates.lat) * 1000) + 50}%`
                    }}
                    onClick={() => setSelectedComplaint(complaint.id)}
                  >
                    <div className="relative">
                      <MapPin className={`h-8 w-8 ${getPinColor(complaint.priority, complaint.status)} drop-shadow-lg`} />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {complaint.upvotes > 20 ? '!' : complaint.upvotes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
                <div className="space-y-2 text-xs">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span>High Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-600" />
                    <span>Medium Priority</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span>Resolved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Nearby Complaints ({filteredComplaints.length})
          </h3>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredComplaints.map((complaint) => (
              <div
                key={complaint.id}
                className={`bg-white rounded-lg p-4 shadow-sm border cursor-pointer transition-all ${
                  selectedComplaint === complaint.id
                    ? 'border-blue-500 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedComplaint(complaint.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900 text-sm">{complaint.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                    {complaint.status}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-gray-600 mb-2">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{complaint.location}</span>
                </div>
                
                <p className="text-xs text-gray-700 mb-3 line-clamp-2">{complaint.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      <span>{complaint.upvotes}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      <span>{complaint.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{complaint.dateSubmitted}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-3 rounded text-xs font-medium transition-colors flex items-center justify-center space-x-1">
                    <ThumbsUp className="h-3 w-3" />
                    <span>Support This Issue</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredComplaints.length === 0 && (
            <div className="text-center py-8">
              <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No complaints found matching your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicMap;