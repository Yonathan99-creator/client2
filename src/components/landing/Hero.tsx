import React from 'react';
import { ArrowRight, Play, Star, Users, Calendar, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float animation-delay-1000 opacity-60"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-pink-400 rounded-full animate-float animation-delay-2000 opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-yellow-400 rounded-full animate-float animation-delay-3000 opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mb-8 animate-pulse-slow">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-blue-800 dark:text-blue-300 font-medium">Trusted by 50,000+ clients worldwide</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x"> Professional</span>
            <br />
            Book Instantly
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Connect with verified professionals across all industries. From healthcare to legal services, 
            find the expertise you need and book appointments in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center">
                Find Professionals
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group flex items-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-900">
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Verified Professionals</div>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">1M+</div>
              <div className="text-gray-600 dark:text-gray-400">Appointments Booked</div>
            </div>
            
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;