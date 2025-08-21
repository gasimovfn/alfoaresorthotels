import React from 'react';
import { Crown, Users, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Crown className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About AlfoareResortHotels
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Curating exceptional casino hotel experiences worldwide with a commitment to luxury, heritage, and world-class hospitality.
          </p>
        </div>
      </section>

      <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-16">Our Story</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded with a passion for luxury hospitality and gaming excellence, AlfoareResortHotels has been connecting discerning travelers with the finest casino resort experiences worldwide for over a decade.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              From the ancient splendor of historic cities to breathtaking coastal destinations, we specialize in properties that offer more than just gaming – they provide a gateway to local culture, cuisine, and unparalleled luxury.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our carefully curated selection ensures that every property meets our exacting standards for service, amenities, and authentic hospitality.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Luxury resort architecture and sunset"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full p-6 w-20 h-20 mx-auto mb-4">
              <Crown className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Luxury Focus</h3>
            <p className="text-slate-600 text-sm">Exclusively premium casino resorts with royal-level service</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-full p-6 w-20 h-20 mx-auto mb-4">
              <Users className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Personal Service</h3>
            <p className="text-slate-600 text-sm">Dedicated concierge support for every booking</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full p-6 w-20 h-20 mx-auto mb-4">
              <Award className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Assured</h3>
            <p className="text-slate-600 text-sm">Rigorously vetted properties meeting our high standards</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full p-6 w-20 h-20 mx-auto mb-4">
              <Globe className="w-8 h-8 text-white mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Global Reach</h3>
            <p className="text-slate-600 text-sm">Deep connection to authentic local culture and hospitality worldwide</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              To provide discerning travelers with access to the world's most exceptional casino resort experiences, 
              where heritage meets modern luxury, and every stay becomes an unforgettable journey through 
              the heart of exceptional hospitality.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;