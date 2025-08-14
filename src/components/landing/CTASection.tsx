import React from 'react';
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const CTASection: React.FC = () => {
  const benefits = [
    {
      icon: SparklesIcon,
      title: 'Premium Experience',
      description: 'Access to top-rated professionals'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Safe',
      description: 'Protected payments and verified profiles'
    },
    {
      icon: ClockIcon,
      title: 'Save Time',
      description: 'Book appointments in under 2 minutes'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied clients who found their perfect professional through ProBooking. 
            Start your journey today and experience the difference.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-xl mb-4 transform hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl flex items-center space-x-3">
            <span>Find Professionals Now</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200 flex items-center space-x-3">
            <span>Learn More</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-white/80 mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Mock company logos */}
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">LOGO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;