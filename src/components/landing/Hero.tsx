import React from 'react';
import { Calendar, Users, Star, Play, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: Users, value: '15K+', label: 'Professionals' },
    { icon: Calendar, value: '125K+', label: 'Appointments' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-pink-400/40 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mb-6 animate-bounce-in">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-blue-800 dark:text-blue-300 font-medium">Welcome to the Future of Booking</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Book Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Perfect
              </span>
              Professional
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in-up animation-delay-300">
              Connect with top-rated professionals and book appointments seamlessly. 
              Experience the future of professional services booking with ProBooking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-500">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-blue-600 flex items-center justify-center space-x-2">
                <span>Find Professionals</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in-up animation-delay-700">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face" alt="User" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    15K+
                  </div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">Happy clients</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional consultation"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500 border-4 border-white/20"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Available Now</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">4.9 Rating</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl transform scale-105 animate-pulse"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-in-up animation-delay-1000">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl group"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;