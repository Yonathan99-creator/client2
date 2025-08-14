import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SearchSection from './SearchSection';
import FeatureCards from './FeatureCards';
import StatsSection from './StatsSection';
import UpcomingAppointments from './UpcomingAppointments';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <SearchSection />
      <FeatureCards />
      <StatsSection />
      <UpcomingAppointments />
      <TestimonialsSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">PB</span>
                </div>
                <span className="text-2xl font-bold">ProBooking</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate platform for booking professional services. Connect with experts and schedule appointments seamlessly.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                  <span className="text-sm font-semibold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                  <span className="text-sm font-semibold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors duration-200">
                  <span className="text-sm font-semibold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#professionals" className="hover:text-white transition-colors duration-200">Find Professionals</a></li>
                <li><a href="#payments" className="hover:text-white transition-colors duration-200">Secure Payments</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors duration-200">Reviews & Ratings</a></li>
                <li><a href="#appointments" className="hover:text-white transition-colors duration-200">Easy Scheduling</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#help" className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ProBooking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;