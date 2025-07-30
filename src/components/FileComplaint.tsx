import React, { useState } from 'react';
import { MapPin, Upload, Send, ArrowLeft, Camera, AlertCircle, CheckCircle } from 'lucide-react';

type Page = 'home' | 'file-complaint' | 'track-complaint' | 'how-it-works' | 'about';

interface FileComplaintProps {
  onNavigate: (page: Page) => void;
}

const FileComplaint: React.FC<FileComplaintProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    description: '',
    location: '',
    priority: 'medium',
    anonymous: false,
    phone: '',
    email: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = {
    'road-transport': {
      label: 'Roads & Transport',
      icon: '🛣️',
      subcategories: ['Pothole', 'Road Damage', 'Traffic Signal', 'Street Sign', 'Speed Breaker', 'Road Construction']
    },
    'water-sanitation': {
      label: 'Water & Sanitation',
      icon: '💧',
      subcategories: ['Water Leak', 'Sewage Block', 'Water Quality', 'Drainage Issue', 'Manhole Cover', 'Water Supply']
    },
    'electricity': {
      label: 'Electricity',
      icon: '⚡',
      subcategories: ['Street Light', 'Power Outage', 'Loose Wire', 'Transformer Issue', 'Meter Problem', 'Cable Damage']
    },
    'garbage-cleanliness': {
      label: 'Garbage & Cleanliness',
      icon: '🗑️',
      subcategories: ['Garbage Dump', 'Overflowing Bin', 'Street Cleaning', 'Public Toilet', 'Waste Collection', 'Littering']
    },
    'public-safety': {
      label: 'Public Safety',
      icon: '🛡️',
      subcategories: ['Broken Fence', 'Stray Animals', 'Illegal Construction', 'Noise Pollution', 'Public Harassment', 'Unsafe Structure']
    },
    'parks-recreation': {
      label: 'Parks & Recreation',
      icon: '🌳',
      subcategories: ['Park Maintenance', 'Playground Equipment', 'Garden Care', 'Sports Facility', 'Bench Repair', 'Lighting']
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would submit to a backend
    setTimeout(() => {
      onNavigate('track-complaint');
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaint Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Your complaint has been successfully submitted. You'll receive updates on your registered email and phone number.
          </p>
          <div className="bg-blue-50 rounded-2xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-1">Your Complaint ID</p>
            <p className="text-xl font-bold text-blue-600">CIV-2024-{Math.floor(Math.random() * 10000)}</p>
          </div>
          <p className="text-sm text-gray-500">Redirecting to tracking dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">File a Complaint</h1>
            <p className="text-xl text-gray-600">Help us improve your community by reporting civic issues</p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Category Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Issue Category</h2>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(categories).map(([key, category]) => (
                        <div
                          key={key}
                          onClick={() => setFormData({ ...formData, category: key, subcategory: '' })}
                          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                            formData.category === key
                              ? 'border-blue-500 bg-blue-50 shadow-md'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-4xl mb-3">{category.icon}</div>
                            <h3 className="font-semibold text-gray-900">{category.label}</h3>
                          </div>
                        </div>
                      ))}
                    </div>

                    {formData.category && (
                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-4">
                          Select Specific Issue
                        </label>
                        <div className="grid md:grid-cols-3 gap-3">
                          {categories[formData.category as keyof typeof categories].subcategories.map((sub) => (
                            <button
                              key={sub}
                              type="button"
                              onClick={() => setFormData({ ...formData, subcategory: sub })}
                              className={`p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                formData.subcategory === sub
                                  ? 'bg-blue-600 text-white shadow-lg'
                                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                              }`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Location & Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Details</h2>
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        Location *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Enter detailed address or landmark"
                          className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          required
                        />
                        <MapPin className="h-6 w-6 text-gray-400 absolute left-4 top-4" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        Priority Level
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { value: 'low', label: 'Low', color: 'green', desc: 'Can wait' },
                          { value: 'medium', label: 'Medium', color: 'yellow', desc: 'Needs attention' },
                          { value: 'high', label: 'High', color: 'red', desc: 'Urgent' }
                        ].map((priority) => (
                          <label key={priority.value} className="cursor-pointer">
                            <input
                              type="radio"
                              name="priority"
                              value={priority.value}
                              checked={formData.priority === priority.value}
                              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                              className="sr-only"
                            />
                            <div className={`p-4 rounded-2xl border-2 text-center transition-all duration-200 ${
                              formData.priority === priority.value
                                ? `border-${priority.color}-500 bg-${priority.color}-50`
                                : 'border-gray-200 hover:border-gray-300'
                            }`}>
                              <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${
                                priority.color === 'red' ? 'bg-red-500' :
                                priority.color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                              }`}></div>
                              <div className="font-semibold">{priority.label}</div>
                              <div className="text-sm text-gray-600">{priority.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        Description *
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Describe the issue in detail. Include any relevant information that would help authorities understand and resolve the problem."
                        rows={6}
                        className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg resize-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-3">
                        Upload Photos (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                        <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-lg text-gray-600 mb-2">Click to upload photos or drag and drop</p>
                        <p className="text-sm text-gray-500">PNG, JPG up to 10MB each (Max 5 photos)</p>
                        <input type="file" multiple accept="image/*" className="hidden" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                    
                    <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-blue-900 mb-2">Why do we need your contact information?</h3>
                          <ul className="text-blue-800 text-sm space-y-1">
                            <li>• To send you updates about your complaint status</li>
                            <li>• To contact you if authorities need more information</li>
                            <li>• To notify you when the issue is resolved</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={formData.anonymous}
                        onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <label htmlFor="anonymous" className="text-gray-700">
                        Submit this complaint anonymously (your contact info will be kept private)
                      </label>
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Complaint Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-medium">Category:</span> {categories[formData.category as keyof typeof categories]?.label}</div>
                        <div><span className="font-medium">Issue:</span> {formData.subcategory}</div>
                        <div><span className="font-medium">Location:</span> {formData.location}</div>
                        <div><span className="font-medium">Priority:</span> <span className="capitalize">{formData.priority}</span></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 border border-gray-300 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={
                          (currentStep === 1 && (!formData.category || !formData.subcategory)) ||
                          (currentStep === 2 && (!formData.location || !formData.description))
                        }
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold flex items-center space-x-2 transition-colors"
                      >
                        <Send className="h-5 w-5" />
                        <span>Submit Complaint</span>
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map Preview */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Preview</h3>
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-500">Pin your exact location</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Quick Tips</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Be specific about the exact location</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Include nearby landmarks for easy identification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Upload clear photos showing the issue</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Provide detailed description for faster resolution</span>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Having trouble filing your complaint? Our support team is here to help.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileComplaint;