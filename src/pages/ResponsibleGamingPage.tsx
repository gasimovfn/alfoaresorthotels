import React from 'react';
import { Shield, Heart, Phone, AlertTriangle, Clock, Users } from 'lucide-react';

const ResponsibleGamingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Shield className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Responsible Gaming
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Your safety and well-being are our top priorities. We're committed to providing a safe, 
            enjoyable gaming environment for all our guests.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full p-4 w-16 h-16 mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Play Responsibly</h3>
              <p className="text-slate-600 leading-relaxed">
                Gaming should be entertaining and enjoyable. Set limits for yourself and stick to them. 
                Never gamble more than you can afford to lose.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-full p-4 w-16 h-16 mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Time Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Take regular breaks and be aware of how much time you spend gaming. 
                Set time limits and use our self-exclusion tools if needed.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full p-4 w-16 h-16 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Get Support</h3>
              <p className="text-slate-600 leading-relaxed">
                If you or someone you know needs help, we provide resources and support. 
                Our staff is trained to assist with responsible gaming concerns.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Warning Signs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                  Behavioral Signs
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Spending more time or money than intended</li>
                  <li>• Chasing losses with bigger bets</li>
                  <li>• Neglecting work, family, or social responsibilities</li>
                  <li>• Borrowing money to gamble</li>
                  <li>• Lying about gambling activities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                  Emotional Signs
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Feeling anxious or depressed about gambling</li>
                  <li>• Inability to stop despite wanting to</li>
                  <li>• Mood swings related to wins and losses</li>
                  <li>• Gambling to escape problems or negative feelings</li>
                  <li>• Feeling guilty or ashamed about gambling</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
              If you're concerned about your gambling or that of someone you know, help is available 24/7.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">National Helpline</h3>
                <p className="text-purple-100">1-800-522-4700</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Self-Exclusion</h3>
                <p className="text-purple-100">Voluntary exclusion programs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Heart className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Counseling</h3>
                <p className="text-purple-100">Professional support services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleGamingPage;