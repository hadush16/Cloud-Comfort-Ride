import React from 'react';
import { 
  CheckCircle2, ArrowRight, Phone, Calendar, Shield, 
  Clock, MapPin, Users, HeartHandshake, Sparkles, Navigation 
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { ServiceType } from '../types';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onSelectServiceForBooking: (serviceId: ServiceType) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForBooking
}) => {
  const handleBook = (serviceId: ServiceType) => {
    onSelectServiceForBooking(serviceId);
    onNavigate('/book-a-ride');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 sm:space-y-20 pb-16 dark:bg-[#040d1a] transition-colors">
      {/* Header Banner with Clean Vehicle in Medical-Center Setting */}
      <section className="relative bg-[#061f46] dark:bg-[#030d1a] text-white py-12 sm:py-20 border-b-2 border-[#f3bf28] overflow-hidden">
        {/* Ambient subtle vehicle backdrop */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/medical-center-van-doctor.jpg"
            alt="Clean medical transportation vehicle outside Seattle medical center"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider">
                Non-Emergency Medical Transportation
              </span>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Specialized Medical Transit in Greater Seattle
              </h1>
              <p className="text-sm sm:text-lg text-slate-200 dark:text-slate-300 leading-relaxed max-w-2xl">
                Our Non-Emergency Medical Transport Service provides comfortable, secure journeys to your clinical appointments, dialysis treatments, and therapy sessions with trained, compassionate drivers.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('/book-a-ride')}
                  className="dt-button shadow-dt-button min-h-[44px]"
                >
                  <span className="text-[#f3bf28]">📅</span>
                  <span>Book Medical Transit</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="dt-button-outline !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#061f46] min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-[#f3bf28]" />
                  <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 dark:border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/medical-center-van-doctor.jpg"
                  alt="Cloud Comfort Ride clean medical transport van outside Seattle clinical center"
                  className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-[#061f46]/95 dark:bg-[#030d1a]/95 backdrop-blur-md border-t border-[#f3bf28]/40 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Seattle Medical Center Transit</span>
                  <span className="text-[#f3bf28] font-bold">100% On-Time Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Quick Jump Navigation Pills */}
      <section className="sticky top-16 sm:top-20 z-20 bg-white/95 dark:bg-[#091b33]/95 backdrop-blur-md border-y border-slate-200 dark:border-slate-800 py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#061f46] dark:text-[#f3bf28] shrink-0">
            <Navigation className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Quick Jump:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToService(service.id)}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all bg-slate-100 hover:bg-[#061f46] hover:text-white dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-[#f3bf28] dark:hover:text-[#061f46] border border-slate-200 dark:border-slate-700 whitespace-nowrap min-h-[36px]"
              >
                {service.badge}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white dark:border-slate-800 bg-slate-900 group">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#061f46]/90 text-[#f3bf28] border border-[#f3bf28]/40 font-bold text-xs shadow-md">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#061f46]/95 backdrop-blur-md text-white text-xs border border-white/10">
                    <span className="text-[#f3bf28] font-bold block">Vehicle Specification:</span>
                    <span className="text-slate-200">{service.vehicleType}</span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#061f46] dark:text-[#f3bf28] bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-full inline-block">
                    Specialized Medical Transit
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#061f46] dark:text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-blue-700 dark:text-blue-300 font-semibold text-sm sm:text-base">
                    {service.tagline}
                  </p>
                </div>

                <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>{service.description}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{service.longDescription}</p>
                </div>

                {/* Features & Ideal For Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#091b33] border border-slate-200 dark:border-slate-800 space-y-2.5">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-[#f3bf28]" />
                      <span>Key Service Highlights</span>
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#091b33] border border-slate-200 dark:border-slate-800 space-y-2.5">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Ideal For</span>
                    </h4>
                    <ul className="space-y-2">
                      {service.idealFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => handleBook(service.id)}
                    className="dt-button shadow-dt-button flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span className="text-[#f3bf28]">📅</span>
                    <span>Book {service.title}</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="dt-button-outline flex items-center justify-center gap-2 text-xs sm:text-sm min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#061f46] dark:text-[#f3bf28]" />
                    <span>Inquire: {COMPANY_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom Reassurance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#061f46] dark:bg-[#07192f] border-2 border-[#f3bf28] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f3bf28] bg-[#f3bf28]/10 px-3 py-1 rounded-full border border-[#f3bf28]/30 inline-block">
              Standing Weekly Scheduling
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Need Assistance With Recurring Dialysis or Therapy Rides?
            </h3>
            <p className="text-slate-200 dark:text-slate-300 text-sm max-w-xl">
              We coordinate standing weekly reservations with dedicated driver assignments to eliminate scheduling stress across Seattle and King County.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 dt-button shadow-dt-button min-h-[44px]"
          >
            <span className="text-[#f3bf28]">✉</span>
            <span>Contact Scheduling Coordinator</span>
          </button>
        </div>
      </section>
    </div>
  );
};
