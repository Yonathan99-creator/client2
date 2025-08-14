import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ModuleCards from './ModuleCards';
import UpcomingAppointments from './UpcomingAppointments';
import Testimonials from './Testimonials';
import Stats from './Stats';
import Footer from './Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <ModuleCards />
      <Stats />
      <UpcomingAppointments />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;