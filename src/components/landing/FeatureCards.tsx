import React, { useState } from 'react';
import { 
  UserGroupIcon, 
  CreditCardIcon, 
  StarIcon, 
  CalendarDaysIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  image: string;
  gradient: string;
}

const FeatureCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features: FeatureCard[] = [
    {
      id: 'professionals',
      title: 'Find Professionals',
      description: 'Discover qualified professionals in your area with verified credentials and real reviews.',
      icon: UserGroupIcon,
      features: [
        'Verified professional profiles',
        'Advanced filtering options',
        'Real-time availability',
        'Portfolio showcases'
      ],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'payments',
      title: 'Secure Payments',
      description: 'Safe and convenient payment processing with multiple payment options and instant receipts.',
      icon: CreditCardIcon,
      features: [
        'Multiple payment methods',
        'Secure transactions',
        'Instant receipts',
        'Refund protection'
      ],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'reviews',
      title: 'Reviews & Ratings',
      description: 'Read authentic reviews and ratings from verified clients to make informed decisions.',
      icon: StarIcon,
      features: [
        'Verified client reviews',
        'Rating system',
        'Photo testimonials',
        'Response from professionals'
      ],
      image: 'https://images.pexels.com/photos/6168061/pexels-photo-6168061.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'appointments',
      title: 'Easy Scheduling',
      description: 'Book appointments instantly with real-time availability and automated confirmations.',
      icon: CalendarDaysIcon,
      features: [
        'Real-time scheduling',
        'Automated reminders',
        'Easy rescheduling',
        'Calendar integration'
      ],
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools and features designed to make booking professional services effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`}></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute top-6 right-6 transform transition-all duration-300 ${
                  hoveredCard === feature.id ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}>
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ArrowRightIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {feature.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore Button */}
                <div className={`transform transition-all duration-300 ${
                  hoveredCard === feature.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button className={`w-full px-6 py-3 bg-gradient-to-r ${feature.gradient} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2`}>
                    <span>Explore Module</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;