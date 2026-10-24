import React from 'react';
import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041329] text-white border-t-[3px] border-[#f3bf28]">
      {/* Footer Main */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#243650]">
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Cloud Comfort Ride home"
          >
            <img 
              src="/images/cloud-emblem-transparent.png" 
              alt="Cloud Comfort Ride emblem" 
              className="h-10 w-auto object-contain brightness-110 shrink-0 group-hover:scale-105 transition-transform"
            />
            <div>
              <strong className="font-heading font-extrabold text-lg text-white block leading-tight group-hover:text-[#f3bf28] transition-colors">
                Cloud Comfort Ride
              </strong>
              <small className="text-[11px] text-[#bac8d9]">
                Non-Emergency Medical Transportation • 1902 E Yesler Way Unit #4, Seattle WA 98122
              </small>
            </div>
          </button>

          {/* Service Area Statement */}
          <p className="text-xs text-[#bdc8d6] text-center md:text-right max-w-sm">
            Serving Seattle & surrounding Washington communities with safe, reliable medical transportation.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="text-xs text-[#e7c45e] font-bold hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Footer Navigation and Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-[#96a6bb]">
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => handleLinkClick('/safety-drivers')} className="hover:text-white transition-colors">
              Drivers & Safety
            </button>
            <button onClick={() => handleLinkClick('/about')} className="hover:text-white transition-colors">
              About us
            </button>
            <button onClick={() => handleLinkClick('/contact')} className="hover:text-white transition-colors">
              Contact
            </button>
            <button onClick={() => handleLinkClick('/my-bookings')} className="hover:text-white transition-colors">
              My Bookings
            </button>
            <button onClick={() => handleLinkClick('/privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick('/terms')} className="hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>

          <div>
            <span>© {new Date().getFullYear()} Cloud Comfort Ride. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
