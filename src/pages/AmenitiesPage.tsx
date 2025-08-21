import React from 'react';
import { Wifi, Car, Utensils, Waves, Dumbbell, Sparkles, Crown, Music } from 'lucide-react';

const AmenitiesPage = () => {
  const amenityCategories = [
    {
      title: "Gaming & Entertainment",
      icon: Crown,
      color: "from-purple-600 to-purple-800",
      amenities: [
        { name: "24/7 Casino Floor", description: "World-class gaming with slots, table games, and poker rooms" },
        { name: "VIP Gaming Lounges", description: "Exclusive high-limit gaming areas with personal service" },
        { name: "Live Entertainment", description: "Concerts, shows, and performances by renowned artists" },
        { name: "Sports Betting", description: "State-of-the-art sportsbook with live betting options" }
      ]
    },
    {
      title: "Dining & Bars",
      icon: Utensils,
      color: "from-amber-500 to-amber-700",
      amenities: [
        { name: "Fine Dining Restaurants", description: "Michelin-starred chefs and gourmet cuisine" },
        { name: "Casual Dining Options", description: "Relaxed atmosphere with diverse menu selections" },
        { name: "Rooftop Bars", description: "Panoramic views with craft cocktails and premium spirits" },
        { name: "24-Hour Room Service", description: "Gourmet meals delivered to your suite anytime" }
      ]
    },
    {
      title: "Wellness & Recreation",
      icon: Waves,
      color: "from-emerald-600 to-emerald-800",
      amenities: [
        { name: "Luxury Spa Services", description: "Full-service spa with massage, facials, and treatments" },
        { name: "Fitness Centers", description: "State-of-the-art equipment and personal training" },
        { name: "Swimming Pools", description: "Indoor and outdoor pools with poolside service" },
        { name: "Tennis & Golf", description: "Professional courts and championship golf courses" }
      ]
    },
    {
      title: "Business & Events",
      icon: Music,
      color: "from-indigo-600 to-indigo-800",
      amenities: [
        { name: "Conference Facilities", description: "Modern meeting rooms with AV equipment" },
        { name: "Wedding Venues", description: "Elegant ballrooms and outdoor ceremony spaces" },
        { name: "Business Centers", description: "24-hour access to computers, printing, and fax services" },
        { name: "Event Planning", description: "Professional coordinators for special occasions" }
      ]
    }
  ];

  const standardAmenities = [
    { icon: Wifi, name: "Free WiFi", description: "High-speed internet throughout the property" },
    { icon: Car, name: "Valet Parking", description: "Complimentary valet service for all guests" },
    { icon: Sparkles, name: "Concierge Service", description: "24/7 assistance with reservations and recommendations" },
    { icon: Dumbbell, name: "Fitness Access", description: "Complimentary access to fitness facilities" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Sparkles className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            World-Class Amenities
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Experience luxury beyond gaming with our comprehensive collection of premium amenities and services designed for the discerning traveler.
          </p>
        </div>
      </section>

      {/* Standard Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Standard Amenities
            </h2>
            <p className="text-lg text-slate-600">
              Every property in our collection includes these essential amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {standardAmenities.map((amenity, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-full p-6 w-20 h-20 mx-auto mb-6 shadow-lg group-hover:shadow-xl">
                  <amenity.icon className="w-8 h-8 text-white mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{amenity.name}</h3>
                <p className="text-slate-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenity Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Premium Amenities by Category
            </h2>
            <p className="text-lg text-slate-600">
              Discover the exceptional facilities and services available at our casino resorts
            </p>
          </div>

          <div className="space-y-12">
            {amenityCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mt-2"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-2">{amenity.name}</h4>
                          <p className="text-slate-600 leading-relaxed">{amenity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Exclusive VIP Services
            </h2>
            <p className="text-lg text-slate-600">
              Elevated experiences for our most distinguished guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full p-4 w-16 h-16 mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Royal Suite Services</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Personal butler service</li>
                <li>• Private check-in/check-out</li>
                <li>• Exclusive lounge access</li>
                <li>• Complimentary airport transfers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-full p-4 w-16 h-16 mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Concierge Plus</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Personal shopping assistance</li>
                <li>• Restaurant reservations</li>
                <li>• Event and show tickets</li>
                <li>• Local tour arrangements</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full p-4 w-16 h-16 mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Transportation</h3>
              <ul className="text-slate-600 space-y-2">
                <li>• Luxury vehicle fleet</li>
                <li>• Helicopter transfers</li>
                <li>• Private yacht charters</li>
                <li>• Chauffeur services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Luxury Like Never Before
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Our casino resorts offer more than just gaming – they provide a complete luxury lifestyle experience with world-class amenities and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
              View Our Hotels
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold">
              Contact Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;