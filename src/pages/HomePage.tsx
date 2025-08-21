import React, { useState } from 'react';
import { Dice6, Crown, Utensils, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    hotel: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - What Are Casino Hotels */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What Are Casino Hotels?
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Gaming Excellence */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                <Dice6 className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Gaming Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                World-class casino floors with table games, slots, and poker rooms in elegant Greek settings.
              </p>
            </div>

            {/* Royal Comfort */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                <Crown className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Royal Comfort</h3>
              <p className="text-slate-600 leading-relaxed">
                Luxurious accommodations that blend Greek heritage with modern amenities and royal service.
              </p>
            </div>

            {/* Fine Dining */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                <Utensils className="w-8 h-8 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Fine Dining</h3>
              <p className="text-slate-600 leading-relaxed">
                Michelin-starred restaurants and exclusive bars offering the finest Greek and international cuisine.
              </p>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-slate-700 leading-relaxed">
              Casino hotels in Greece offer a unique fusion of Greek hospitality, royal elegance, and world-class gaming. 
              From ancient sites in Athens to island resorts, each property provides an unforgettable experience 
              combining luxury accommodations, gourmet dining, spa services, and exciting casino entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Casino Hotels */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Featured Casino Hotels
            </h2>
            <p className="text-lg text-slate-600">
              Discover our curated selection of the finest casino hotels across the Netherlands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Acropolis Casino Resort */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Greek islands with blue domes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Acropolis Casino Resort</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Athens' premier casino hotel overlooking the ancient Acropolis with 24/7 gaming and luxury suites.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Royal Santorini */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Santorini blue domes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Royal Santorini</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Cliffrop casino resort on Santorini featuring panoramic Aegean views and championship poker tournaments.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Palace of Knossos Resort */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-blue-500 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Luxury resort with palm trees and ocean"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Palace of Knossos Resort</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Historic palace transformed into an exclusive casino resort with royal heritage and Mediterranean gardens.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 flex items-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/hotels" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>View All Hotels</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guest Experiences */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Guest Experiences
            </h2>
            <p className="text-lg text-slate-600">
              Hear from our distinguished guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full p-4">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <blockquote className="text-slate-700 mb-6 text-center leading-relaxed italic">
                "The Canal House Casino Resort exceeded all expectations. The perfect blend of Dutch charm and Vegas-style excitement. The poker room is world-class!"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-slate-800">Marcus Thompson</p>
                <p className="text-sm text-slate-500">Professional Poker Player, London</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full p-4">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <blockquote className="text-slate-700 mb-6 text-center leading-relaxed italic">
                "Royal Scheveningen's spa and beachfront location made our anniversary unforgettable. The casino was just a delightful bonus to an already perfect stay."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-slate-800">Isabella & James Mitchell</p>
                <p className="text-sm text-slate-500">Luxury Travel Enthusiasts, New York</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full p-4">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <blockquote className="text-slate-700 mb-6 text-center leading-relaxed italic">
                "Castle De Hooge Vuursche felt like staying in a fairy tale. The historical ambiance combined with modern gaming facilities is absolutely unique in Europe."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-slate-800">Dr. Heinrich Weber</p>
                <p className="text-sm text-slate-500">Art Collector, Vienna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Plan Your Royal Casino Experience
            </h2>
            <p className="text-lg text-slate-600">
              Contact our concierge team for personalized recommendations and exclusive bookings
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hotel" className="block text-sm font-medium text-slate-700 mb-2">
                  Which hotel are you interested in?
                </label>
                <select
                  id="hotel"
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a hotel (optional)</option>
                  <option value="acropolis">Acropolis Casino Resort</option>
                  <option value="santorini">Royal Santorini</option>
                  <option value="knossos">Palace of Knossos Resort</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your ideal casino hotel experience..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;