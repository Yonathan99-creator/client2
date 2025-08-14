import React from 'react';
import { Calendar, Clock, User, ArrowRight, Video, MapPin, Phone } from 'lucide-react';

const UpcomingAppointments: React.FC = () => {
  const appointments = [
    {
      id: 1,
      professional: 'Dr. Sarah Johnson',
      service: 'Medical Consultation',
      specialty: 'Cardiologist',
      date: 'March 15, 2025',
      time: '10:00 AM',
      duration: '45 min',
      type: 'Video Call',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'confirmed',
      location: 'Online',
      price: '$150'
    },
    {
      id: 2,
      professional: 'Mike Wilson',
      service: 'Legal Consultation',
      specialty: 'Corporate Lawyer',
      date: 'March 16, 2025',
      time: '2:30 PM',
      duration: '60 min',
      type: 'In-Person',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'pending',
      location: 'Downtown Office',
      price: '$200'
    },
    {
      id: 3,
      professional: 'Lisa Chen',
      service: 'Financial Planning',
      specialty: 'Financial Advisor',
      date: 'March 18, 2025',
      time: '11:00 AM',
      duration: '90 min',
      type: 'Phone Call',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'confirmed',
      location: 'Phone',
      price: '$120'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Call':
        return Video;
      case 'Phone Call':
        return Phone;
      case 'In-Person':
        return MapPin;
      default:
        return Calendar;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" id="appointments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Your Upcoming
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Appointments</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay organized with your scheduled appointments. Never miss a meeting with our smart reminder system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appointments.map((appointment, index) => {
            const TypeIcon = getTypeIcon(appointment.type);
            return (
              <div
                key={appointment.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img
                    src={appointment.image}
                    alt={appointment.professional}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getStatusColor(appointment.status)}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                      {appointment.price}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {appointment.professional}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {appointment.specialty}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {appointment.service}
                    </h4>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">{appointment.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">{appointment.time} ({appointment.duration})</span>
                    </div>

                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <TypeIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm">{appointment.type} - {appointment.location}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn">
                      <div className="flex items-center justify-center space-x-2">
                        <User className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span>View Details</span>
                      </div>
                    </button>
                    <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105">
                      Reschedule
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Schedule Your Next Appointment?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Browse through thousands of verified professionals and book your perfect appointment today
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
                View All Appointments
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingAppointments;