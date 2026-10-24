import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBookingModal?: () => void;
  bookingCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  onOpenBookingModal,
  bookingCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'About us', path: '/about' },
    { label: 'Why Cloud Medical', path: '/safety-drivers' },
    { label: 'Contact', path: '/contact' },
    { 
      label: 'My Bookings', 
      path: '/my-bookings', 
      badge: bookingCount > 0 ? bookingCount : null 
    }
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-[3px] border-[#f3bf28] shadow-xs">
      {/* Top Contact Strip */}
      <div className="bg-[#f7f9fc] border-b border-[#dce4ee] text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[#122747] font-medium">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 hover:text-[#123e77] transition-colors"
            >
              <span className="text-[#986800]">☎</span>
              <span className="font-bold">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#123e77] transition-colors text-[#65758b]"
            >
              <span className="text-[#986800]">✉</span>
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[#65758b] text-[11px] font-semibold uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f3bf28]"></span>
            <span>Serving Seattle & surrounding Washington</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Brand Identity / Logo */}
        <button 
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 group text-left focus:outline-none"
          aria-label="Cloud Comfort Ride home"
        >
          <img 
            src="/images/cloud-emblem-transparent.png" 
            alt="Cloud Comfort Ride emblem" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-2xl text-[#061f46] tracking-tight leading-none group-hover:text-[#123e77] transition-colors">
              Cloud Comfort Ride
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-[#123e77] tracking-wider uppercase mt-1">
              Safe • Comfortable • Reliable
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-bold text-[#122747]" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#123e77] font-extrabold border-b-2 border-[#123e77]'
                    : 'hover:text-[#123e77]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#f3bf28] text-[#061f46] font-black">
                      {link.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}

          {/* Book A Ride Button */}
          <button
            onClick={() => handleLinkClick('/book-a-ride')}
            className="dt-button text-xs py-2.5 px-5 !rounded-full shadow-sm hover:translate-y-[-2px]"
          >
            <span className="text-[#f3bf28]">📅</span>
            <span>Book A Ride</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleLinkClick('/book-a-ride')}
            className="dt-button text-xs py-2 px-3 !rounded-full"
          >
            <span>Book</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#061f46] text-2xl focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#dce4ee] px-4 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('/')}
              className={`p-3 text-left font-bold rounded-lg text-base ${
                currentPath === '/' ? 'bg-[#f7f9fc] text-[#123e77]' : 'text-[#122747]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`p-3 text-left font-bold rounded-lg text-base flex items-center justify-between ${
                  currentPath === link.path ? 'bg-[#f7f9fc] text-[#123e77]' : 'text-[#122747]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs bg-[#f3bf28] text-[#061f46] font-black">
                    {link.badge} active
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#dce4ee] flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('/book-a-ride')}
              className="dt-button w-full text-center"
            >
              <span>📅 Book A Ride Online</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="dt-button-outline w-full text-center"
            >
              <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
