import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SafetyDriversPage } from './pages/SafetyDriversPage';
import { BookRidePage } from './pages/BookRidePage';
import { ContactPage } from './pages/ContactPage';
import { MyBookingsPage } from './pages/MyBookingsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ServiceType, BookingSubmission } from './types';
import { COMPANY_INFO } from './data/companyData';
import { Phone, Calendar } from 'lucide-react';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const path = window.location.pathname;
    if (path === '/book-online') return '/book-a-ride';
    return path || '/';
  });

  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceType | ''>('');
  const [bookingCount, setBookingCount] = useState<number>(0);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path === '/book-online' ? '/book-a-ride' : path || '/');
    };

    window.addEventListener('popstate', handlePopState);
    updateBookingCount();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const updateBookingCount = () => {
    try {
      const raw = localStorage.getItem('cloud_comfort_bookings');
      if (raw) {
        const list: BookingSubmission[] = JSON.parse(raw);
        setBookingCount(list.length);
      } else {
        setBookingCount(0);
      }
    } catch {
      setBookingCount(0);
    }
  };

  const navigateTo = (path: string) => {
    const normalized = path === '/book-online' ? '/book-a-ride' : path;
    if (window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentPath(normalized);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingSuccess = (booking: BookingSubmission) => {
    updateBookingCount();
  };

  // Render appropriate page
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={navigateTo}
            onSelectServiceForBooking={(id) => setSelectedServiceForBooking(id)}
          />
        );
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceForBooking={(id) => setSelectedServiceForBooking(id)}
          />
        );
      case '/safety-drivers':
        return <SafetyDriversPage onNavigate={navigateTo} />;
      case '/book-a-ride':
      case '/book-online':
        return (
          <BookRidePage
            initialService={selectedServiceForBooking}
            onNavigate={navigateTo}
            onBookingSuccess={handleBookingSuccess}
          />
        );
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/my-bookings':
        return <MyBookingsPage onNavigate={navigateTo} />;
      case '/privacy':
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case '/terms':
        return <TermsPage onNavigate={navigateTo} />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onSelectServiceForBooking={(id) => setSelectedServiceForBooking(id)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-blue text-white font-bold rounded-lg shadow-lg"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        bookingCount={bookingCount}
        onOpenBookingModal={() => navigateTo('/book-a-ride')}
      />

      {/* Main Page Body */}
      <main id="main-content" className="flex-grow focus:outline-none">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Floating Action Bar (Call & Quick Book) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#f3bf28] p-3 flex items-center justify-between gap-3 shadow-2xl no-print">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#061f46] font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#061f46]" />
          <span>Call Dispatch</span>
        </a>
        <button
          onClick={() => navigateTo('/book-a-ride')}
          className="flex-1 py-3 px-3 rounded-xl bg-[#f4c832] hover:bg-[#eab720] text-[#061f46] font-heading font-black text-xs flex items-center justify-center gap-1.5 shadow-sm border border-[#f4c832] transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-[#061f46]" />
          <span>Book a Ride</span>
        </button>
      </div>
    </div>
  );
}

export default App;
