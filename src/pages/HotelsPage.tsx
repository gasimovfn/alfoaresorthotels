import React from 'react';
import { ArrowRight, Star, MapPin, Wifi, Car, Utensils, Hotel } from 'lucide-react';
import { Link } from 'react-router-dom';

const HotelsPage = () => {
  const hotels = [
    {
      name: "Acropolis Casino Resort",
      location: "Athens, Greece",
      rating: 5,
      description: "Athens' premier casino hotel overlooking the ancient Acropolis with 24/7 gaming and luxury suites.",
      image: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Free WiFi", "Valet Parking", "5 Restaurants", "Spa & Wellness"],
      price: "From €299/night"
    },
    {
      name: "Royal Santorini",
      location: "Santorini, Greece",
      rating: 5,
      description: "Cliffrop casino resort on Santorini featuring panoramic Aegean views and championship poker tournaments.",
      image: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Ocean View", "Private Beach", "Infinity Pool", "Casino Floor"],
      price: "From €450/night"
    },
    {
      name: "Palace of Knossos Resort",
      location: "Crete, Greece",
      rating: 4,
      description: "Historic palace transformed into an exclusive casino resort with royal heritage and Mediterranean gardens.",
      image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Historic Architecture", "Garden Views", "Fine Dining", "Cultural Tours"],
      price: "From €199/night"
    },
    {
      name: "Mykonos Grand Casino",
      location: "Mykonos, Greece",
      rating: 5,
      description: "Exclusive island retreat combining traditional Cycladic architecture with world-class gaming facilities.",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Private Yacht Access", "Beach Club", "VIP Gaming", "Helicopter Pad"],
      price: "From €650/night"
    },
    {
      name: "Rhodes Imperial Palace",
      location: "Rhodes, Greece",
      rating: 4,
      description: "Medieval charm meets modern luxury in this castle-inspired casino resort near the ancient city.",
      image: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Castle Design", "Medieval Tours", "Rooftop Casino", "Knights Hall"],
      price: "From €275/night"
    },
    {
      name: "Corfu Venetian Resort",
      location: "Corfu, Greece",
      rating: 4,
      description: "Venetian-inspired elegance with emerald waters, offering boutique gaming in a romantic setting.",
      image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
      amenities: ["Venetian Design", "Botanical Gardens", "Wine Cellar", "Romantic Dining"],
      price: "From €225/night"
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Hotel className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Casino Hotels
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Discover an exclusive collection of luxury casino resorts worldwide, where ancient heritage meets modern gaming excellence.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{hotel.name}</h3>
                    <div className="flex items-center space-x-1 text-slate-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{hotel.price}</div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{hotel.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {hotel.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to='/contact' className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="flex-1 border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg hover:border-purple-300 hover:text-purple-600 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Need help choosing the perfect casino resort?</p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Our Concierge
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;