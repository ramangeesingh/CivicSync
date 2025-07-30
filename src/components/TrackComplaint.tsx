import React, { useState } from 'react';
import { ArrowLeft, Filter, Calendar, MapPin, Eye, MessageCircle, Clock, CheckCircle, AlertCircle, Search, Bell, Download } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'track-complaint' | 'how-it-works' | 'about';

interface TrackComplaintProps {
  onNavigate: (page: Page) => void;
}

const TrackComplaint: React.FC<TrackComplaintProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');

  const complaints = [
    {
      id: 'CIV-2024-001',
      title: 'Large pothole on MG Road causing traffic issues',
      category: 'Road & Transport',
      subcategory: 'Pothole',
      location: 'MG Road, Sector 14, Near City Mall, Bangalore',
      status: 'In Progress',
      priority: 'high',
      dateSubmitted: '2024-01-15',
      lastUpdate: '2024-01-18',
      expectedResolution: '2024-01-25',
      description: 'Large pothole causing traffic issues and vehicle damage. Multiple vehicles have been damaged.',
      updates: [
        { date: '2024-01-18', message: 'Complaint forwarded to Road Maintenance Department', status: 'info' },
        { date: '2024-01-16', message: 'Site inspection completed by municipal engineer', status: 'success' },
        { date: '2024-01-15', message: 'Complaint registered and assigned ID CIV-2024-001', status: 'info' }
      ],
      assignedTo: 'Bangalore Municipal Corporation - Road Dept.',
      views: 156,
      upvotes: 24
    },
    {
      id: 'CIV-2024-002',
      title: 'Street light not working at Park Street junction',
      category: 'Electricity',
      subcategory: 'Street Light',
      location: 'Park Street, Block A, Sector 12, New Delhi',
      status: 'Resolved',
      priority: 'medium',
      dateSubmitted: '2024-01-10',
      lastUpdate: '2024-01-16',
      expectedResolution: '2024-01-20',
      description: 'Street light pole #45 has been non-functional for a week, causing safety concerns.',
      updates: [
        { date: '2024-01-16', message: 'Issue resolved - New LED light installed and tested', status: 'success' },
        { date: '2024-01-14', message: 'Electrician dispatched to replace faulty bulb', status: 'info' },
        { date: '2024-01-12', message: 'Complaint verified by field inspector', status: 'info' },
        { date: '2024-01-10', message: 'Complaint registered successfully', status: 'info' }
      ],
      assignedTo: 'Delhi Electricity Board',
      views: 89,
      upvotes: 12
    },
    {
      id: 'CIV-2024-003',
      title: 'Garbage overflow at Central Market area',
      category: 'Garbage & Cleanliness',
      subcategory: 'Overflowing Bin',
      location: 'Central Market, Zone 3, Mumbai',
      status: 'Pending',
      priority: 'high',
      dateSubmitted: '2024-01-20',
      lastUpdate: '2024-01-20',
      expectedResolution: '2024-01-27',
      description: 'Multiple garbage bins overflowing for 3 days, attracting stray animals and creating health hazards.',
      updates: [
        { date: '2024-01-20', message: 'Complaint registered and under review', status: 'info' }
      ],
      assignedTo: 'Mumbai Municipal Corporation - Waste Management',
      views: 234,
      upvotes: 45
    },
    {
      id: 'CIV-2024-004',
      title: 'Water leak in Green Valley residential area',
      category: 'Water & Sanitation',
      subcategory: 'Water Leak',
      location: 'Green Valley Colony, Sector 18, Gurgaon',
      status: 'In Progress',
      priority: 'medium',
      dateSubmitted: '2024-01-12',
      lastUpdate: '2024-01-19',
      expectedResolution: '2024-01-26',
      description: 'Continuous water leak from main pipeline causing road damage and water wastage.',
      updates: [
        { date: '2024-01-19', message: 'Repair work scheduled for next week', status: 'info' },
        { date: '2024-01-15', message: 'Pipeline inspection completed, repair materials ordered', status: 'info' },
        { date: '2024-01-12', message: 'Complaint registered and assigned to water department', status: 'info' }
      ],
      assignedTo: 'Gurgaon Water Supply Department',
      views: 123,
      upvotes: 18
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'In Progress':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const filteredComplaints = complaints.filter(complaint => {
    const matchesFilter = filter === 'all' || complaint.status.toLowerCase().replace(' ', '-') === filter;
    const matchesSearch = complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Complaints</h1>
            <p className="text-xl text-gray-600">Monitor the progress of your civic complaints and stay updated</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">4</span>
            </div>
            <p className="text-gray-600 font-medium">Total Complaints</p>
            <p className="text-sm text-green-600 font-semibold">+2 this month</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">2</span>
            </div>
            <p className="text-gray-600 font-medium">In Progress</p>
            <p className="text-sm text-blue-600 font-semibold">Avg. 5 days</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">1</span>
            </div>
            <p className="text-gray-600 font-medium">Resolved</p>
            <p className="text-sm text-green-600 font-semibold">6 days avg.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <AlertCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">1</span>
            </div>
            <p className="text-gray-600 font-medium">Pending</p>
            <p className="text-sm text-red-600 font-semibold">Needs attention</p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-4 top-4" />
                <input
                  type="text"
                  placeholder="Search by complaint ID, title, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium text-gray-700">Filter:</span>
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">Sort by Date</option>
                <option value="priority">Sort by Priority</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-6">
          {filteredComplaints.map((complaint) => (
            <div key={complaint.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0 lg:pr-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{complaint.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span className="font-semibold text-blue-600">{complaint.id}</span>
                          <span>•</span>
                          <span>{complaint.category}</span>
                          <span>•</span>
                          <span>{complaint.subcategory}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(complaint.status)}`}>
                          {getStatusIcon(complaint.status)}
                          <span className="ml-2">{complaint.status}</span>
                        </span>
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium capitalize border ${getPriorityColor(complaint.priority)}`}>
                          {complaint.priority}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{complaint.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{complaint.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Submitted:</span>
                        <span className="ml-2 text-gray-600">{complaint.dateSubmitted}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Last Update:</span>
                        <span className="ml-2 text-gray-600">{complaint.lastUpdate}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Expected Resolution:</span>
                        <span className="ml-2 text-gray-600">{complaint.expectedResolution}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Assigned To:</span>
                        <span className="ml-2 text-gray-600">{complaint.assignedTo}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3 lg:w-48">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{complaint.views} views</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>{complaint.upvotes} upvotes</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors">
                        Download Report
                      </button>
                    </div>
                  </div>
                </div>

                {/* Progress Timeline */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Progress Timeline
                  </h4>
                  <div className="space-y-3">
                    {complaint.updates.map((update, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          update.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-gray-900 font-medium">{update.message}</p>
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredComplaints.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No complaints found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchTerm ? 'Try adjusting your search terms or filters' : 'You haven\'t filed any complaints yet'}
            </p>
            <button
              onClick={() => onNavigate('file-complaint')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-colors"
            >
              File Your First Complaint
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackComplaint;