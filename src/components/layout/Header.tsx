import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Calendar, Sun, Moon, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { useTheme } from '../../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

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

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#041329]/95 backdrop-blur-md border-b-[3px] border-[#f3bf28] shadow-xs transition-colors duration-200">
      {/* Top Contact Strip */}
      <div className="bg-[#f7f9fc] dark:bg-[#030d1a] border-b border-[#dce4ee] dark:border-slate-800/80 text-xs py-1.5 px-3 sm:px-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-3 text-[#122747] dark:text-slate-300 font-medium text-[11px] sm:text-xs">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 hover:text-[#123e77] dark:hover:text-[#f3bf28] transition-colors font-bold min-h-[32px] items-center"
              aria-label={`Call Cloud Comfort Ride at ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="w-3 h-3 text-[#986800] dark:text-[#f3bf28]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden xs:inline">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden md:inline-flex items-center gap-1.5 hover:text-[#123e77] dark:hover:text-[#f3bf28] transition-colors text-[#65758b] dark:text-slate-400"
              aria-label={`Email Cloud Comfort Ride at ${COMPANY_INFO.email}`}
            >
              <Mail className="w-3 h-3 text-[#986800] dark:text-[#f3bf28]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#65758b] dark:text-slate-400 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-[#f3bf28] animate-pulse"></span>
            <span>Serving Seattle & King County</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Brand Identity / Logo */}
        <button 
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none min-h-[44px]"
          aria-label="Cloud Comfort Ride home"
        >
          <img 
            src="/images/cloud-emblem-transparent.png" 
            alt="Cloud Comfort Ride emblem" 
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            width="44"
            height="44"
          />
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-xl lg:text-2xl text-[#061f46] dark:text-white tracking-tight leading-none group-hover:text-[#123e77] dark:group-hover:text-[#f3bf28] transition-colors">
              Cloud Comfort Ride
            </span>
            <span className="text-[9px] sm:text-[11px] font-bold text-[#123e77] dark:text-[#f3bf28] tracking-wider uppercase mt-1">
              Safe • Comfortable • Reliable
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[14px] font-bold text-[#122747] dark:text-slate-200" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors py-1.5 px-1 relative ${
                  isActive
                    ? 'text-[#123e77] dark:text-[#f3bf28] font-extrabold border-b-2 border-[#123e77] dark:border-[#f3bf28]'
                    : 'hover:text-[#123e77] dark:hover:text-[#f3bf28]'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {link.label}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-[#f3bf28] text-[#061f46] font-black shadow-xs">
                      {link.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}

          {/* Theme Switcher Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-[#061f46] dark:text-[#f3bf28] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-[#f3bf28] min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#f3bf28]" />
            ) : (
              <Moon className="w-4 h-4 text-[#061f46]" />
            )}
          </button>

          {/* Book A Ride Button (Desktop) */}
          <button
            onClick={() => handleLinkClick('/book-a-ride')}
            className="dt-button text-xs py-2.5 px-5 !rounded-full shadow-sm hover:translate-y-[-2px]"
          >
            <span className="text-[#f3bf28]">📅</span>
            <span>Book A Ride</span>
          </button>
        </nav>

        {/* Mobile / Tablet Action Cluster */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-[#061f46] dark:text-[#f3bf28] hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#f3bf28]" />
            ) : (
              <Moon className="w-4 h-4 text-[#061f46]" />
            )}
          </button>

          {/* Quick Book Button (Mobile) */}
          <button
            onClick={() => handleLinkClick('/book-a-ride')}
            className="dt-button text-xs py-2 px-3 sm:px-4 !rounded-full min-h-[44px] flex items-center justify-center"
          >
            <span>Book</span>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#061f46] dark:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Sheet */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[67px] sm:top-[83px] z-50 bg-black/60 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full max-h-[calc(100vh-85px)] overflow-y-auto bg-white dark:bg-[#061830] border-t border-[#dce4ee] dark:border-slate-800 px-4 py-6 space-y-5 shadow-2xl transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Quick Links List */}
            <div className="flex flex-col gap-1.5" role="menu">
              <button
                onClick={() => handleLinkClick('/')}
                className={`p-3 text-left font-bold rounded-xl text-base flex items-center justify-between min-h-[48px] ${
                  currentPath === '/' 
                    ? 'bg-[#f0f6ff] dark:bg-slate-800 text-[#123e77] dark:text-[#f3bf28]' 
                    : 'text-[#122747] dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
                role="menuitem"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`p-3 text-left font-bold rounded-xl text-base flex items-center justify-between min-h-[48px] ${
                    currentPath === link.path 
                      ? 'bg-[#f0f6ff] dark:bg-slate-800 text-[#123e77] dark:text-[#f3bf28]' 
                      : 'text-[#122747] dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                  role="menuitem"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-[#f3bf28] text-[#061f46] font-black">
                        {link.badge} active
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            {/* Theme Toggle Card in Mobile Drawer */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Display Appearance
                </span>
                <span className="text-sm font-extrabold text-[#061f46] dark:text-white capitalize">
                  {theme} Theme Active
                </span>
              </div>
              <button
                onClick={toggleTheme}
                className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-700 text-[#061f46] dark:text-[#f3bf28] font-bold text-xs border border-slate-200 dark:border-slate-600 shadow-xs flex items-center gap-2 min-h-[44px]"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#f3bf28]" />
                    <span>Switch to Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-[#061f46]" />
                    <span>Switch to Dark</span>
                  </>
                )}
              </button>
            </div>

            {/* CTAs inside Mobile Drawer */}
            <div className="pt-3 border-t border-[#dce4ee] dark:border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => handleLinkClick('/book-a-ride')}
                className="dt-button w-full text-center min-h-[48px]"
              >
                <span>📅 Book A Ride Online</span>
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="dt-button-outline w-full text-center min-h-[48px] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#986800] dark:text-[#f3bf28]" />
                <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="text-center pt-2 text-xs text-slate-500 dark:text-slate-400">
              <p>{COMPANY_INFO.address}</p>
              <p className="mt-1 text-[11px]">Seattle Non-Emergency Medical Transportation</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
