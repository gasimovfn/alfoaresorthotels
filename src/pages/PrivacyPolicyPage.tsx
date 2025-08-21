import React from 'react';
import { Lock, Eye, Shield, Database } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6">
              <Lock className="w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Transparency</h3>
                <p className="text-slate-600 text-sm">Clear information about data collection</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Protection</h3>
                <p className="text-slate-600 text-sm">Advanced security measures</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Control</h3>
                <p className="text-slate-600 text-sm">You control your personal data</p>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Information We Collect</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Information</h3>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Name, email address, and contact information</li>
                    <li>• Booking and reservation details</li>
                    <li>• Payment information (processed securely)</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Information</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <ul className="text-slate-600 space-y-2">
                    <li>• Process bookings and reservations</li>
                    <li>• Provide customer support and assistance</li>
                    <li>• Send booking confirmations and updates</li>
                    <li>• Improve our services and website functionality</li>
                    <li>• Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Information Sharing</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Hotel partners to process your reservations</li>
                    <li>• Payment processors for secure transactions</li>
                    <li>• Service providers who assist in website operations</li>
                    <li>• Legal authorities when required by law</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• SSL encryption for all data transmission</li>
                    <li>• Secure servers with regular security updates</li>
                    <li>• Limited access to personal information</li>
                    <li>• Regular security audits and monitoring</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">You have the right to:</p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Data portability where applicable</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Cookies and Tracking</h2>
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-600 mb-4">
                    We use cookies and similar technologies to enhance your browsing experience:
                  </p>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Essential cookies for website functionality</li>
                    <li>• Analytics cookies to improve our services</li>
                    <li>• Marketing cookies for personalized content</li>
                    <li>• You can manage cookie preferences in your browser</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Us</h2>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
                  <p className="mb-4">
                    If you have questions about this Privacy Policy or your personal information:
                  </p>
                  <div className="space-y-2">
                    <p>Email: privacy@alfoaresorthotels.com</p>
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

export default PrivacyPolicyPage;