import React from 'react';
import { 
  CheckCircle2, ArrowRight, Phone, Calendar, Shield, 
  Clock, MapPin, Users, HeartHandshake, Sparkles 
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

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner with Clean Vehicle in Medical-Center Setting */}
      <section className="relative bg-[#061f46] text-white py-14 sm:py-20 border-b-2 border-[#f3bf28] overflow-hidden">
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
                Our Specialized Transportation Services
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                Our Non-Emergency Medical Transport Service in Seattle provides comfortable, secure journeys to your clinical appointments, dialysis treatments, and therapy sessions with trained, compassionate drivers.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('/book-a-ride')}
                  className="dt-button shadow-dt-button"
                >
                  <span className="text-[#f3bf28]">📅</span>
                  <span>Book Medical Transit</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="dt-button-outline !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#061f46]"
                >
                  <Phone className="w-4 h-4 text-[#f3bf28]" />
                  <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/medical-center-van-doctor.jpg"
                  alt="Cloud Comfort Ride clean medical transport van outside Seattle clinical center"
                  className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-[#061f46]/95 backdrop-blur-md border-t border-[#f3bf28]/40 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Seattle Medical Center Transit</span>
                  <span className="text-[#f3bf28] font-bold">100% On-Time Protocol</span>
                </div>
              </div>
            </div>
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
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white bg-slate-900 group">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-brand-navy font-bold text-xs shadow-md">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-brand-navy/90 backdrop-blur-md text-white text-xs">
                    <span className="text-brand-teal font-bold block">Vehicle Specification:</span>
                    <span className="text-slate-200">{service.vehicleType}</span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                    Specialized Medical Transit
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-brand-navy tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-brand-blue font-semibold text-sm sm:text-base">
                    {service.tagline}
                  </p>
                </div>

                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>{service.description}</p>
                  <p className="text-slate-600 text-sm">{service.longDescription}</p>
                </div>

                {/* Features & Ideal For Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
                      Key Service Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
                      Ideal For
                    </h4>
                    <ul className="space-y-1.5">
                      {service.idealFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
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
                    className="dt-button shadow-dt-button flex items-center justify-center gap-2"
                  >
                    <span className="text-[#f3bf28]">📅</span>
                    <span>Book {service.title}</span>
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="dt-button-outline flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#061f46]" />
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#061f46] border-2 border-[#f3bf28] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-lg">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f3bf28] bg-[#f3bf28]/10 px-3 py-1 rounded-full border border-[#f3bf28]/30">
              Standing Weekly Scheduling
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Need Assistance With Recurring Dialysis or Therapy Rides?
            </h3>
            <p className="text-slate-200 text-sm max-w-xl">
              We coordinate standing weekly reservations with dedicated driver assignments to eliminate scheduling stress across Seattle.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 dt-button shadow-dt-button"
          >
            <span className="text-[#f3bf28]">✉</span>
            <span>Contact Scheduling Coordinator</span>
          </button>
        </div>
      </section>
    </div>
  );
};
