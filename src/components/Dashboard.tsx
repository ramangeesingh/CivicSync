import React, { useState } from 'react';
import { ArrowLeft, Filter, Calendar, MapPin, Eye, MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'dashboard' | 'public-map';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const complaints = [
    {
      id: 'CIV-2024-001',
      title: 'Large pothole on MG Road',
      category: 'Road & Transport',
      subcategory: 'Pothole',
      location: 'MG Road, Sector 14, Near City Mall',
      status: 'In Progress',
      priority: 'high',
      dateSubmitted: '2024-01-15',
      lastUpdate: '2024-01-18',
      description: 'Large pothole causing traffic issues and vehicle damage',
      updates: 3,
      views: 24
    },
    {
      id: 'CIV-2024-002',
      title: 'Street light not working',
      category: 'Electricity',
      subcategory: 'Street Light',
      location: 'Park Street, Block A, Sector 12',
      status: 'Resolved',
      priority: 'medium',
      dateSubmitted: '2024-01-10',
      lastUpdate: '2024-01-16',
      description: 'Street light pole #45 has been non-functional for a week',
      updates: 2,
      views: 12
    },
    {
      id: 'CIV-2024-003',
      title: 'Garbage overflow at market area',
      category: 'Garbage & Cleanliness',
      subcategory: 'Overflowing Bin',
      location: 'Central Market, Zone 3',
      status: 'Pending',
      priority: 'high',
      dateSubmitted: '2024-01-20',
      lastUpdate: '2024-01-20',
      description: 'Multiple garbage bins overflowing, attracting stray animals',
      updates: 0,
      views: 8
    },
    {
      id: 'CIV-2024-004',
      title: 'Water leak in residential area',
      category: 'Water & Sanitation',
      subcategory: 'Water Leak',
      location: 'Green Valley Colony, Sector 18',
      status: 'In Progress',
      priority: 'medium',
      dateSubmitted: '2024-01-12',
      lastUpdate: '2024-01-19',
      description: 'Continuous water leak from main pipeline causing road damage',
      updates: 1,
      views: 16
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-red-600" />;
    }
  };

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    if (filter === 'all') return true;
    return complaint.status.toLowerCase().replace(' ', '-') === filter;
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Complaints Dashboard</h1>
        <p className="text-gray-600">Track and manage all your submitted civic complaints</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">4</span>
          </div>
          <p className="text-sm text-gray-600">Total Complaints</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-yellow-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">2</span>
          </div>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">1</span>
          </div>
          <p className="text-sm text-gray-600">Resolved</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">1</span>
          </div>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="date">Date Submitted</option>
              <option value="priority">Priority</option>
              <option value="status">Status</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {filteredComplaints.map((complaint) => (
          <div key={complaint.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{complaint.title}</h3>
                    <p className="text-sm text-gray-600">{complaint.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                      {getStatusIcon(complaint.status)}
                      <span className="ml-1">{complaint.status}</span>
                    </span>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium capitalize ${getPriorityColor(complaint.priority)}`}>
                      {complaint.priority}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{complaint.location}</span>
                </div>
                
                <p className="text-gray-700 mb-3">{complaint.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>Submitted: {complaint.dateSubmitted}</span>
                    <span>Last Update: {complaint.lastUpdate}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{complaint.views} views</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>{complaint.updates} updates</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 lg:ml-6">
                <button className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                  Track Progress
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredComplaints.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or file a new complaint</p>
          <button
            onClick={() => onNavigate('file-complaint')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            File New Complaint
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;