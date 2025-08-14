import React, { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Calendar, 
  Star, 
  Clock,
  CheckCircle,
  Trophy
} from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    professionals: 0,
    appointments: 0,
    rating: 0,
    responseTime: 0,
    satisfaction: 0,
    awards: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const finalStats = {
    professionals: 15000,
    appointments: 125000,
    rating: 4.9,
    responseTime: 15,
    satisfaction: 98,
    awards: 25
  };

  const stats = [
    {
      icon: Users,
      value: animatedStats.professionals.toLocaleString() + '+',
      label: 'Verified Professionals',
      description: 'Across all specialties',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Calendar,
      value: animatedStats.appointments.toLocaleString() + '+',
      label: 'Successful Appointments',
      description: 'Booked this year',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Star,
      value: animatedStats.rating.toFixed(1),
      label: 'Average Rating',
      description: 'From client reviews',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: Clock,
      value: `${animatedStats.responseTime}min`,
      label: 'Average Response Time',
      description: 'Professional replies',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: CheckCircle,
      value: `${animatedStats.satisfaction}%`,
      label: 'Client Satisfaction',
      description: 'Would recommend us',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: Trophy,
      value: `${animatedStats.awards}+`,
      label: 'Industry Awards',
      description: 'Recognition received',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setAnimatedStats({
        professionals: Math.floor(finalStats.professionals * easeOutQuart),
        appointments: Math.floor(finalStats.appointments * easeOutQuart),
        rating: finalStats.rating * easeOutQuart,
        responseTime: Math.floor(finalStats.responseTime * easeOutQuart),
        satisfaction: Math.floor(finalStats.satisfaction * easeOutQuart),
        awards: Math.floor(finalStats.awards * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform connects clients with top-rated professionals, delivering exceptional results every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative ${stat.bgColor} rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;