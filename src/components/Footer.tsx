import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Hotel className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold tracking-wide">AlfoareResortHotels</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Curating the finest casino resort experiences worldwide with luxury, elegance, and exceptional hospitality.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/responsible-gaming" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/affiliate-disclosure" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6">
          <p className="text-center text-slate-400 text-sm">
            © {currentYear} AlfoareResortHotels. All rights reserved.
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            AlfoareResortHotels may receive commissions from bookings or referrals. Please gamble responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;