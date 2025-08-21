import React from 'react';
import { DollarSign, Handshake, Info, Star } from 'lucide-react';

const AffiliateDisclosurePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Handshake className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Affiliate Disclosure
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Transparency is important to us. Learn about our affiliate relationships and how we maintain editorial integrity.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Transparency</h3>
                <p className="text-slate-600 text-sm">Full disclosure of our partnerships</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Quality First</h3>
                <p className="text-slate-600 text-sm">Recommendations based on merit</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Fair Compensation</h3>
                <p className="text-slate-600 text-sm">Ethical business practices</p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">What is Affiliate Marketing?</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    Affiliate marketing is a performance-based marketing arrangement where we receive compensation when you book accommodations through our website links. This is a common practice in the travel industry that helps us maintain our free service.
                  </p>
                  <p className="text-slate-600">
                    When you click on certain links on our website and make a booking, we may receive a commission from the hotel or booking platform. This does not affect the price you pay.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Affiliate Relationships</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    RoyalDelft-GR has affiliate relationships with various casino hotels and booking platforms, including:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Casino hotel properties featured on our website</li>
                    <li>• Online travel agencies and booking platforms</li>
                    <li>• Hotel management companies and chains</li>
                    <li>• Travel service providers and tour operators</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">How Commissions Work</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">What We Earn</h3>
                      <ul className="text-slate-600 space-y-2">
                        <li>• Commission on completed bookings</li>
                        <li>• Referral fees from partner hotels</li>
                        <li>• Performance-based bonuses</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">What You Pay</h3>
                      <ul className="text-slate-600 space-y-2">
                        <li>• Same price as booking directly</li>
                        <li>• No additional fees or charges</li>
                        <li>• Access to exclusive deals and rates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Editorial Standards</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    Despite our affiliate relationships, we maintain strict editorial standards:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• All recommendations are based on quality and value</li>
                    <li>• We only feature hotels we would personally recommend</li>
                    <li>• Honest reviews and accurate information are our priority</li>
                    <li>• We clearly identify sponsored content when applicable</li>
                    <li>• Our editorial team operates independently from sales</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Benefits to You</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    Our affiliate model allows us to provide you with:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Free access to our curated hotel recommendations</li>
                    <li>• Detailed reviews and property information</li>
                    <li>• Exclusive deals and special offers</li>
                    <li>• 24/7 customer support and concierge services</li>
                    <li>• Regular updates on new properties and promotions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">FTC Compliance</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    We comply with Federal Trade Commission (FTC) guidelines regarding affiliate marketing disclosure:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Clear and conspicuous disclosure of affiliate relationships</li>
                    <li>• Honest and unbiased recommendations</li>
                    <li>• Proper identification of sponsored content</li>
                    <li>• Transparent communication about compensation</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Trust Matters</h2>
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white">
                  <p className="mb-4">
                    Your trust is our most valuable asset. We are committed to:
                  </p>
                  <ul className="space-y-2">
                    <li>• Maintaining complete transparency about our business model</li>
                    <li>• Providing honest, unbiased recommendations</li>
                    <li>• Putting your interests first in all our recommendations</li>
                    <li>• Continuously improving our services based on your feedback</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Questions?</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    If you have questions about our affiliate relationships or disclosure policy:
                  </p>
                  <div className="space-y-2 text-slate-600">
                    <p>Email: disclosure@alfoaresorthotels.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: International Locations</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateDisclosurePage;