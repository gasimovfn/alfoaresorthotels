import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <FileText className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. They govern your use of our website and booking services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 rounded-2xl p-8 mb-12">
              <p className="text-slate-600 text-center mb-0">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Fair Terms</h3>
                <p className="text-slate-600 text-sm">Transparent and reasonable conditions</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Clear Rights</h3>
                <p className="text-slate-600 text-sm">Your rights and responsibilities</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Important Info</h3>
                <p className="text-slate-600 text-sm">Key terms you should know</p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Acceptance of Terms</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    By accessing and using the RoyalDelft-GR website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                  <p className="text-slate-600">
                    These terms apply to all visitors, users, and others who access or use our service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Use of Services</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Permitted Use</h3>
                  <ul className="text-slate-600 space-y-2 mb-4">
                    <li>• Browse and search for casino hotel accommodations</li>
                    <li>• Make legitimate bookings and reservations</li>
                    <li>• Contact our customer service for assistance</li>
                    <li>• Access information about our partner hotels</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Prohibited Use</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Making false or fraudulent bookings</li>
                    <li>• Using automated systems to access our services</li>
                    <li>• Attempting to disrupt or damage our website</li>
                    <li>• Violating any applicable laws or regulations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Booking and Reservations</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Booking Process</h3>
                  <ul className="text-slate-600 space-y-2 mb-4">
                    <li>• All bookings are subject to availability</li>
                    <li>• Prices are subject to change until booking is confirmed</li>
                    <li>• You must provide accurate information for all bookings</li>
                    <li>• Confirmation will be sent via email</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Cancellation Policy</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Cancellation policies vary by hotel and booking type</li>
                    <li>• Some bookings may be non-refundable</li>
                    <li>• Cancellation fees may apply</li>
                    <li>• Contact us for specific cancellation terms</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Payment Terms</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <ul className="text-slate-600 space-y-2">
                    <li>• Payment is required at time of booking unless otherwise specified</li>
                    <li>• We accept major credit cards and secure payment methods</li>
                    <li>• All prices are displayed in Euros unless otherwise stated</li>
                    <li>• Additional taxes and fees may apply</li>
                    <li>• Refunds will be processed according to the applicable cancellation policy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Limitation of Liability</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    RoyalDelft-GR acts as an intermediary between you and hotel partners. We are not responsible for:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• The quality of accommodations or services provided by hotels</li>
                    <li>• Changes to hotel amenities, policies, or availability</li>
                    <li>• Force majeure events affecting your travel plans</li>
                    <li>• Personal injury or property damage during your stay</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Intellectual Property</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    All content on this website, including text, graphics, logos, and images, is the property of RoyalDelft-GR or our partners and is protected by copyright and trademark laws.
                  </p>
                  <p className="text-slate-600">
                    You may not reproduce, distribute, or create derivative works from our content without written permission.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Governing Law</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600">
                    These Terms and Conditions are governed by the laws of Greece. Any disputes arising from these terms will be subject to the exclusive jurisdiction of Greek courts.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h2>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
                  <p className="mb-4">
                    If you have questions about these Terms and Conditions:
                  </p>
                  <div className="space-y-2">
                    <p>Email: legal@alfoaresorthotels.com</p>
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

export default TermsConditionsPage;