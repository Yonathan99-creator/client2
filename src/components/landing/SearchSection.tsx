import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  MapPinIcon, 
  FunnelIcon,
  StarIcon,
  ClockIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'medical', name: 'Medical' },
    { id: 'legal', name: 'Legal' },
    { id: 'financial', name: 'Financial' },
    { id: 'beauty', name: 'Beauty & Wellness' },
    { id: 'education', name: 'Education' },
    { id: 'technology', name: 'Technology' },
  ];

  const featuredProfessionals = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      responseTime: '< 1 hour',
      price: '$150/session'
    },
    {
      id: 2,
      name: 'Mike Wilson',
      specialty: 'Corporate Lawyer',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      responseTime: '< 2 hours',
      price: '$200/hour'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      specialty: 'Financial Advisor',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      responseTime: '< 30 min',
      price: '$120/session'
    },
    {
      id: 4,
      name: 'Emma Rodriguez',
      specialty: 'Dermatologist',
      rating: 4.7,
      reviews: 203,
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      responseTime: '< 1 hour',
      price: '$180/session'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" id="professionals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your Perfect Professional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Search through thousands of verified professionals and book your appointment instantly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="md:col-span-2 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for professionals, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>
            
            <div className="relative">
              <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
              />
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Search
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Professionals */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Professionals
            </h3>
            <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
              <FunnelIcon className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProfessionals.map((professional, index) => (
              <div
                key={professional.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {professional.verified && (
                    <div className="absolute top-3 right-3">
                      <CheckBadgeIcon className="w-6 h-6 text-blue-500" />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-2 py-1">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {professional.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {professional.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {professional.specialty}
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {professional.rating}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({professional.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <ClockIcon className="w-4 h-4" />
                    <span>Responds {professional.responseTime}</span>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg">
              <span>View All Professionals</span>
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;