import React, { useState } from 'react';
import { 
  Users, 
  CreditCard, 
  Star, 
  Calendar,
  ArrowRight,
  Search,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

interface ModuleCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  image: string;
  gradient: string;
  href: string;
}

const ModuleCards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const modules: ModuleCard[] = [
    {
      id: 'professionals',
      title: 'Find Professionals',
      description: 'Discover qualified professionals in your area with verified credentials and authentic reviews.',
      icon: Users,
      features: [
        'Verified professional profiles',
        'Advanced filtering system',
        'Real-time availability',
        'Portfolio showcases',
        'Specialty matching'
      ],
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500',
      href: '#professionals'
    },
    {
      id: 'payments',
      title: 'Secure Payments',
      description: 'Safe and convenient payment processing with multiple options and instant transaction receipts.',
      icon: CreditCard,
      features: [
        'Multiple payment methods',
        'Bank-level security',
        'Instant receipts',
        'Refund protection',
        'Transparent pricing'
      ],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500',
      href: '#payments'
    },
    {
      id: 'reviews',
      title: 'Reviews & Ratings',
      description: 'Read authentic reviews and ratings from verified clients to make informed decisions.',
      icon: Star,
      features: [
        'Verified client reviews',
        'Detailed rating system',
        'Photo testimonials',
        'Professional responses',
        'Review analytics'
      ],
      image: 'https://images.pexels.com/photos/6168061/pexels-photo-6168061.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-yellow-500 to-orange-500',
      href: '#reviews'
    },
    {
      id: 'appointments',
      title: 'Easy Scheduling',
      description: 'Book appointments instantly with real-time availability and automated confirmations.',
      icon: Calendar,
      features: [
        'Real-time scheduling',
        'Automated reminders',
        'Easy rescheduling',
        'Calendar integration',
        'Time zone support'
      ],
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 to-pink-500',
      href: '#appointments'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-all duration-500" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Modules</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive tools and features designed to make booking professional services effortless and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(module.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-80`}></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute top-6 right-6 transform transition-all duration-300 ${
                  hoveredCard === module.id ? 'translate-x-0 opacity-100 scale-110' : 'translate-x-4 opacity-0'
                }`}>
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {module.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.gradient} group-hover:scale-125 transition-transform duration-300`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Explore Button */}
                <div className={`transform transition-all duration-300 ${
                  hoveredCard === module.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <a
                    href={module.href}
                    className={`group/btn w-full px-6 py-3 bg-gradient-to-r ${module.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-2xl`}
                  >
                    <span>Explore Module</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-800">
          {[
            { icon: Search, title: 'Smart Search', desc: 'AI-powered matching' },
            { icon: Shield, title: 'Secure Platform', desc: 'Bank-level security' },
            { icon: Clock, title: '24/7 Support', desc: 'Always available' },
            { icon: CheckCircle, title: 'Quality Assured', desc: 'Verified professionals' }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleCards;