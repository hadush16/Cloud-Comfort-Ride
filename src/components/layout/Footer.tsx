import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';
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
    <footer className="bg-[#041329] dark:bg-[#020b18] text-white border-t-[3px] border-[#f3bf28] transition-colors duration-200">
      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#243650]">
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={() => handleLinkClick('/')}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label="Cloud Comfort Ride home"
            >
              <img 
                src="/images/cloud-emblem-transparent.png" 
                alt="Cloud Comfort Ride emblem" 
                className="h-10 sm:h-12 w-auto object-contain brightness-110 shrink-0 group-hover:scale-105 transition-transform"
                width="48"
                height="48"
              />
              <div>
                <strong className="font-heading font-extrabold text-lg sm:text-xl text-white block leading-tight group-hover:text-[#f3bf28] transition-colors">
                  Cloud Comfort Ride
                </strong>
                <span className="text-[11px] text-[#f3bf28] font-bold uppercase tracking-wider block mt-0.5">
                  Safe • Comfortable • Reliable
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-[#bac8d9] leading-relaxed max-w-sm">
              Providing compassionate, punctual non-emergency medical transportation throughout Seattle and King County. Wheelchair lifts, clinical appointments, and door-through-door care.
            </p>

            <div className="space-y-1.5 text-xs text-[#9eb0c6]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f3bf28] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#f3bf28] shrink-0" />
                <span>Mon – Sun: 6:00 AM – 8:00 PM (On-call priority dispatch)</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-[#f3bf28]">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#c8d5e5]">
              <button onClick={() => handleLinkClick('/')} className="text-left hover:text-white transition-colors py-1">
                Home
              </button>
              <button onClick={() => handleLinkClick('/services')} className="text-left hover:text-white transition-colors py-1">
                Specialized Services
              </button>
              <button onClick={() => handleLinkClick('/safety-drivers')} className="text-left hover:text-white transition-colors py-1">
                Drivers & Safety Standards
              </button>
              <button onClick={() => handleLinkClick('/about')} className="text-left hover:text-white transition-colors py-1">
                About Our Company
              </button>
              <button onClick={() => handleLinkClick('/my-bookings')} className="text-left hover:text-white transition-colors py-1">
                My Bookings & Trip Vouchers
              </button>
              <button onClick={() => handleLinkClick('/contact')} className="text-left hover:text-white transition-colors py-1">
                Contact & Dispatch Support
              </button>
            </div>
          </div>

          {/* Dispatch Assistance & Back to Top */}
          <div className="md:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#f3bf28] block">
                24/7 Seattle Dispatch
              </span>
              <p className="text-xs text-[#bac8d9]">
                Need immediate ride coordination or appointment adjustments?
              </p>
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-white hover:text-[#f3bf28] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f3bf28]" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-[#8699b0]">
                King County Licensed NEMT
              </span>
              <button
                onClick={scrollToTop}
                className="text-xs text-[#f3bf28] font-bold hover:underline inline-flex items-center gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Scroll back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* NEMT Safety Disclaimer */}
        <div className="py-4 text-[11px] text-[#788ca4] border-b border-[#243650]/60">
          <strong>Important Clinical Notice:</strong> Cloud Comfort Ride operates strictly as a Non-Emergency Medical Transportation (NEMT) provider. If you are experiencing a life-threatening medical emergency, please dial 911 immediately.
        </div>

        {/* Bottom Legal Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-[#8da0b8]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={() => handleLinkClick('/privacy')} className="hover:text-white transition-colors py-1">
              Privacy Policy
            </button>
            <span className="text-slate-700">|</span>
            <button onClick={() => handleLinkClick('/terms')} className="hover:text-white transition-colors py-1">
              Terms of Service
            </button>
            <span className="text-slate-700">|</span>
            <button onClick={() => handleLinkClick('/contact')} className="hover:text-white transition-colors py-1">
              Contact Us
            </button>
          </div>

          <div className="text-center sm:text-right">
            <span>© {new Date().getFullYear()} Cloud Comfort Ride. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
