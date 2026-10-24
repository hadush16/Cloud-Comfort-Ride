import React from 'react';
import { 
  Phone, Calendar, ArrowRight, Shield, Heart, Clock, 
  Accessibility, Armchair, MapPin, CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { BookingForm } from '../components/booking/BookingForm';
import { ServiceType } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectServiceForBooking: (serviceId: ServiceType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate,
  onSelectServiceForBooking 
}) => {
  const handleBookService = (serviceId: ServiceType) => {
    onSelectServiceForBooking(serviceId);
    onNavigate('/book-a-ride');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 text-[#122747]">
      {/* ========================================================================= */}
      {/* 01 — HOMEPAGE HERO: FULL-WIDTH BACKGROUND WITH DIRECTIONAL NAVY GRADIENT */}
      {/* ========================================================================= */}
      <section className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center bg-[#061f46] text-white overflow-hidden border-b-2 border-[#f3bf28]">
        {/* Full-Width Background Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-branded-van-panoramic.jpg"
            alt="Cloud Comfort Ride branded medical transit van with driver assisting an older passenger beside the vehicle in Seattle"
            className="w-full h-full object-cover object-[78%_center] lg:object-[82%_center]"
            loading="eager"
          />
          {/* Directional Navy Gradient: Rich solid navy behind headline & CTAs on the left, softly fading across the center to leave the driver, passenger, and branded van 100% visible on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061f46] via-[#061f46]/95 via-45% to-[#061f46]/35 lg:to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#061f46] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container (Left-aligned) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
          <div className="max-w-2xl space-y-6 text-left">
            {/* Top Eyebrow Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3bf28]/25 text-[#f3bf28] border border-[#f3bf28]/50 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f3bf28] animate-pulse"></span>
              <span>Serving Seattle & Surrounding Washington</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.08] drop-shadow-sm">
              Every Ride. <br />
              <span className="text-[#f3bf28]">
                More Comfort. More Care.
              </span>
            </h1>

            {/* Concise Supporting Text */}
            <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-xl drop-shadow-xs">
              Safe, comfortable non-emergency medical transportation in Seattle. Our dedicated drivers provide respectful curb-to-clinic and door-through-door care.
            </p>

            {/* Booking & Call Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('/book-a-ride')}
                className="dt-button shadow-dt-button cursor-pointer"
              >
                <span className="text-[#f3bf28]">📅</span>
                <span>Book a Ride</span>
                <ArrowRight className="w-4 h-4 ml-1 text-[#f3bf28]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="dt-button-outline !bg-[#061f46]/75 !text-white !border-white/40 hover:!bg-white hover:!text-[#061f46] backdrop-blur-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f3bf28]" />
                <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Reassurance Micro-Copy */}
            <div className="pt-3 border-t border-white/20 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-slate-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f3bf28] shrink-0" />
                <span>Routine Clinic Visits</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f3bf28] shrink-0" />
                <span>Dialysis Priority</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f3bf28] shrink-0" />
                <span>Physical Therapy</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#f3bf28] shrink-0" />
                <span>Hospital Discharge</span>
              </span>
            </div>

            {/* Official Seattle Fleet Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#041329]/80 border border-[#f3bf28]/40 backdrop-blur-md text-xs text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-bold text-[#f3bf28]">Cloud Comfort Ride Official Fleet:</span>
                <span className="text-slate-300">"Safe Rides. Better Days."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Feature Highlight Pills */}
      <div className="bg-white border-b border-[#dce4ee] py-4 px-4 shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center lg:justify-between gap-3 text-xs font-bold text-[#122747]">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span>Safe & Professional Drivers</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
            <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs">
              <Heart className="w-3.5 h-3.5" />
            </div>
            <span>Compassionate Assistance</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
            <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span>On-Time Service</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
            <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
              <Accessibility className="w-3.5 h-3.5" />
            </div>
            <span>Full Accessibility Options</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
              <Armchair className="w-3.5 h-3.5" />
            </div>
            <span>Comfortable Journeys</span>
          </div>
        </div>
      </div>

      {/* Dream Transit Promise Ribbon */}
      <div className="bg-[#04152f] border-t border-[#d6a51b] py-4 px-4 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2.5">
            <span className="text-[#f3bf28] text-lg font-black">◇</span>
            <span>Safety-minded service</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[#f3bf28] text-lg font-black">♡</span>
            <span>Care in every journey</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[#f3bf28] text-lg font-black">◷</span>
            <span>Reliable transportation</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: GALLERY — “Comfort and Accessibility for Every Journey” */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white" id="gallery">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#775d23] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f3bf28]"></span>
              Fleet & Accessibility Showcase
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] tracking-tight">
              Comfort and Accessibility for Every Journey
            </h2>
            <p className="text-sm text-[#65758b]">
              Explore our versatile fleet and dedicated passenger care options, tailored to keep you safe and comfortable from door to destination.
            </p>
          </div>

          {/* Featured Flagship Branded Fleet Spotlight Banner */}
          <div className="mb-12 rounded-3xl overflow-hidden border-2 border-[#f3bf28] shadow-dt-card bg-gradient-to-r from-[#061f46] via-[#092b5a] to-[#061f46] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 aspect-[1024/422] overflow-hidden bg-slate-900 group">
                <img
                  src="/images/hero-branded-van-panoramic.jpg"
                  alt="Cloud Comfort Ride official branded medical transit vehicle in Seattle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] text-xs font-black uppercase tracking-wider border border-[#f3bf28]/40">
                  ★ Flagship Seattle Fleet
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Custom-Branded Medical Transportation Vans
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  Our official Seattle vehicles feature high roofs, gentle-grade ADA entry steps, low boarding thresholds, stability grab handles, and dedicated rollator walker storage. Operated by certified, empathetic drivers who escort you straight to your clinical check-in.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleBookService('non_emergency_medical')}
                    className="dt-button shadow-dt-button !py-3 !px-6 text-xs font-bold"
                  >
                    <span>Book Accessible Transit</span>
                    <ArrowRight className="w-4 h-4 ml-1 text-[#f3bf28]" />
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="dt-button-outline !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#061f46] !py-3 !px-5 text-xs font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f3bf28]" />
                    <span>Call (206) 327-4411</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Responsive Image Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Sedan & SUV Options */}
            <div className="rounded-[16px] border border-[#dce4ee] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group hover:border-[#8ca5c5] transition-all">
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src="/images/clinic-pickup-sedan.jpg"
                    alt="Driver assisting elderly passenger out of sedan outside Medical Clinic intake entrance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#061f46]/85 text-white text-[10px] font-bold">
                    Sedan & SUV
                  </div>
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                    Sedan & SUV Options
                  </h3>
                  <p className="text-[11px] font-semibold text-[#0284c7]">
                    Comfortable rides for every need
                  </p>
                  <p className="text-xs text-[#65758b] leading-relaxed pt-1">
                    Dependable, low-step transportation for routine check-ups, diagnostic appointments, and outpatient clinic visits.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleBookService('non_emergency_medical')}
                  className="w-full py-2 px-3 rounded-lg border border-[#061f46] text-[#061f46] hover:bg-[#061f46] hover:text-white text-xs font-bold transition-colors"
                >
                  Book Sedan / SUV
                </button>
              </div>
            </div>

            {/* Card 2: Wheelchair Accessible Transit */}
            <div className="rounded-[16px] border border-[#dce4ee] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group hover:border-[#8ca5c5] transition-all">
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src="/images/wheelchair-seattle-skyline.jpg"
                    alt="Driver assisting senior woman in motorized wheelchair on accessible van lift with Seattle Space Needle skyline"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#f3bf28] text-[#061f46] text-[10px] font-extrabold">
                    Wheelchair Van & Lift
                  </div>
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                    Wheelchair Accessible Vans
                  </h3>
                  <p className="text-[11px] font-semibold text-[#0284c7]">
                    Safe and easy entry and exit
                  </p>
                  <p className="text-xs text-[#65758b] leading-relaxed pt-1">
                    Commercial hydraulic lifts and gentle ramps, certified 4-point Q-Straint floor tie-downs, and patient boarding assistance.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleBookService('wheelchair')}
                  className="w-full py-2 px-3 rounded-lg border border-[#061f46] text-[#061f46] hover:bg-[#061f46] hover:text-white text-xs font-bold transition-colors"
                >
                  Book Wheelchair Van
                </button>
              </div>
            </div>

            {/* Card 3: Spacious & Comfortable Interior */}
            <div className="rounded-[16px] border border-[#dce4ee] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group hover:border-[#8ca5c5] transition-all">
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src="/images/clean-van-interior.jpg"
                    alt="Spacious leather passenger van interior with captain chairs and panoramic sunroof"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#061f46]/85 text-white text-[10px] font-bold">
                    Spacious Cabin
                  </div>
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                    Spacious & Comfortable
                  </h3>
                  <p className="text-[11px] font-semibold text-[#0284c7]">
                    Relax and feel at ease
                  </p>
                  <p className="text-xs text-[#65758b] leading-relaxed pt-1">
                    Spotless leather seating, climate control, and room for family companions, health aides, or medical supplies.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleBookService('senior_private_pay')}
                  className="w-full py-2 px-3 rounded-lg border border-[#061f46] text-[#061f46] hover:bg-[#061f46] hover:text-white text-xs font-bold transition-colors"
                >
                  Schedule Comfort Ride
                </button>
              </div>
            </div>

            {/* Card 4: Assistance When You Need It */}
            <div className="rounded-[16px] border border-[#dce4ee] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group hover:border-[#8ca5c5] transition-all">
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src="/images/medical-center-van-doctor.jpg"
                    alt="Healthcare professional assisting patient in wheelchair on accessible vehicle ramp outside hospital clinic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#061f46]/85 text-white text-[10px] font-bold">
                    Hospital & Clinic
                  </div>
                </div>
                <div className="p-5 space-y-1.5">
                  <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                    Assistance When You Need It
                  </h3>
                  <p className="text-[11px] font-semibold text-[#0284c7]">
                    From door to destination
                  </p>
                  <p className="text-xs text-[#65758b] leading-relaxed pt-1">
                    CPR and First Aid certified drivers providing door-through-door escort into hospital departments and clinic check-ins.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleBookService('hospital_discharge')}
                  className="w-full py-2 px-3 rounded-lg border border-[#061f46] text-[#061f46] hover:bg-[#061f46] hover:text-white text-xs font-bold transition-colors"
                >
                  Request Assisted Ride
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: SERVICES — "Transportation for real life." */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#f7f9fc] border-y border-[#dce4ee]" id="services">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#775d23] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f3bf28]"></span>
                How we can help
              </p>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] tracking-tight">
                Transportation for <em className="not-italic text-[#986800]">real life.</em>
              </h2>
            </div>
            <p className="text-sm text-[#65758b] max-w-sm">
              From important appointments to everyday destinations, explore the ride options available through Cloud Comfort Ride.
            </p>
          </div>

          {/* Service Cards Grid (Matching Dream Transit styling) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Non-Emergency Medical */}
            <article className="border border-[#dce4ee] border-t-[3px] border-t-[#f3bf28] rounded-[16px] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group">
              <div>
                <img 
                  src="/images/clinic-pickup-sedan.jpg"
                  alt="Doctor appointments and routine medical checkups"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <div className="absolute right-6 top-6 text-[#aeb8c6] text-xs font-extrabold tracking-wider">01</div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 service-icon-blue border-2 border-[#8ca5c5]">
                    ✚
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#061f46] mb-2">
                    Non-Emergency Medical
                  </h3>
                  <p className="text-xs text-[#65758b] leading-relaxed mb-4">
                    Support getting to healthcare appointments and treatments—without the stress of driving yourself.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#40516a]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Doctor appointments & check-ups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Specialist consultations & lab work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Hospital visits and clinical care</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService('non_emergency_medical')}
                  className="text-xs font-extrabold text-[#123e77] hover:text-[#061f46] flex items-center gap-1"
                >
                  <span>Book this ride</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Card 2: Wheelchair Transportation */}
            <article className="border border-[#dce4ee] border-t-[3px] border-t-[#f3bf28] rounded-[16px] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group">
              <div>
                <img 
                  src="/images/wheelchair-seattle-skyline.jpg"
                  alt="Wheelchair passenger boards accessible vehicle with lift in Seattle"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <div className="absolute right-6 top-6 text-[#aeb8c6] text-xs font-extrabold tracking-wider">02</div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 service-icon-gold border-2 border-[#f0c13b]">
                    ♿
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#061f46] mb-2">
                    Wheelchair Transportation
                  </h3>
                  <p className="text-xs text-[#65758b] leading-relaxed mb-4">
                    Thoughtful transportation for passengers who need a wheelchair-accessible ride with ramps and lifts.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#40516a]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Accessible vehicle hydraulic lifts & ramps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Certified 4-point Q-Straint tie downs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Door-to-door boarding assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService('wheelchair')}
                  className="text-xs font-extrabold text-[#123e77] hover:text-[#061f46] flex items-center gap-1"
                >
                  <span>Book this ride</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Card 3: Dialysis Transportation */}
            <article className="border border-[#dce4ee] border-t-[3px] border-t-[#f3bf28] rounded-[16px] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group">
              <div>
                <img 
                  src="/images/medical-center-van-doctor.jpg"
                  alt="Compassionate transit for dialysis treatments"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <div className="absolute right-6 top-6 text-[#aeb8c6] text-xs font-extrabold tracking-wider">03</div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 service-icon-lavender border-2 border-[#bfa8f5]">
                    ◷
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#061f46] mb-2">
                    Dialysis Transportation
                  </h3>
                  <p className="text-xs text-[#65758b] leading-relaxed mb-4">
                    Dependable and secure transportation for regular dialysis treatments with strict punctuality.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#40516a]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Consistent familiar driver assignments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Scheduled recurring chair times</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Gentle post-treatment ride home</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService('dialysis')}
                  className="text-xs font-extrabold text-[#123e77] hover:text-[#061f46] flex items-center gap-1"
                >
                  <span>Book this ride</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Card 4: Physical Therapy */}
            <article className="border border-[#dce4ee] border-t-[3px] border-t-[#f3bf28] rounded-[16px] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group">
              <div>
                <img 
                  src="/images/driver-wellness-center.jpg"
                  alt="Physical therapy and rehabilitation transport"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <div className="absolute right-6 top-6 text-[#aeb8c6] text-xs font-extrabold tracking-wider">04</div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 service-icon-green border-2 border-[#81caa5]">
                    ↗
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#061f46] mb-2">
                    Physical Therapy Transit
                  </h3>
                  <p className="text-xs text-[#65758b] leading-relaxed mb-4">
                    Ensuring easy access to physical therapy sessions, crucial for healing and overall health.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#40516a]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Post-operative rehabilitation visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Support with walkers and crutches</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Hassle-free recovery scheduling</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService('therapy')}
                  className="text-xs font-extrabold text-[#123e77] hover:text-[#061f46] flex items-center gap-1"
                >
                  <span>Book this ride</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Card 5: Hospital Discharge */}
            <article className="border border-[#dce4ee] border-t-[3px] border-t-[#f3bf28] rounded-[16px] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group">
              <div>
                <img 
                  src="/images/medical-center-van-doctor.jpg"
                  alt="Care team assisting patient discharge"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <div className="absolute right-6 top-6 text-[#aeb8c6] text-xs font-extrabold tracking-wider">05</div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 service-icon-coral border-2 border-[#f5b399]">
                    ⌂
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#061f46] mb-2">
                    Hospital Discharge
                  </h3>
                  <p className="text-xs text-[#65758b] leading-relaxed mb-4">
                    Help arranging a ride home after a hospital stay, with assistance to your destination as agreed.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#40516a]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Rides home after a hospital stay</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Destination assistance inside residence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Comfort-focused transportation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService('hospital_discharge')}
                  className="text-xs font-extrabold text-[#123e77] hover:text-[#061f46] flex items-center gap-1"
                >
                  <span>Book this ride</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Card 6: Senior & Companion Rides */}
            <article className="border border-[#dce4ee] border-t-[3px] border-t-[#f3bf28] rounded-[16px] overflow-hidden bg-white shadow-dt-card flex flex-col justify-between group">
              <div>
                <img 
                  src="/images/driver-wellness-center.jpg"
                  alt="Caregiver supporting older adult beside accessible transport"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6 relative">
                  <div className="absolute right-6 top-6 text-[#aeb8c6] text-xs font-extrabold tracking-wider">06</div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 service-icon-navy border-2 border-[#8ca5c5]">
                    ▣
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-[#061f46] mb-2">
                    Senior & Companion Rides
                  </h3>
                  <p className="text-xs text-[#65758b] leading-relaxed mb-4">
                    Dependable rides that help make everyday appointments and personal healthcare visits easier to reach.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#40516a]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Companion transportation welcomed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Hassle-free transparent billing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#b88b23] font-black">✓</span>
                      <span>Direct phone reservation support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService('senior_private_pay')}
                  className="text-xs font-extrabold text-[#123e77] hover:text-[#061f46] flex items-center gap-1"
                >
                  <span>Book this ride</span>
                  <span>→</span>
                </button>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: ABOUT — "More than a ride. A caring experience." */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white" id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#775d23] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f3bf28]"></span>
              A ride you can feel good about
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] tracking-tight mb-4">
              More than a ride.<br />
              <em className="not-italic text-[#986800]">A caring experience.</em>
            </h2>
            <p className="text-sm text-[#65758b] leading-relaxed">
              Getting from one place to another can be a big part of someone’s day. We aim to make that journey feel easier with respectful service, clear communication, and attention to each passenger’s needs.
            </p>
          </div>

          {/* 3 Value Cards with Authentic Photos (Dream Transit layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <article className="rounded-[12px] overflow-hidden border border-[#dce4ee] bg-white shadow-xs">
              <img
                src="/images/clinic-pickup-sedan.jpg"
                alt="Compassionate healthcare transport assistance"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 space-y-1">
                <strong className="font-heading font-extrabold text-sm text-[#061f46] block">
                  Respect at every step
                </strong>
                <small className="text-xs text-[#65758b] block leading-relaxed">
                  We treat every passenger with dignity, patience, and kindness.
                </small>
              </div>
            </article>

            <article className="rounded-[12px] overflow-hidden border border-[#dce4ee] bg-white shadow-xs">
              <img
                src="/images/medical-center-van-doctor.jpg"
                alt="Reliable communication and ride coordination"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 space-y-1">
                <strong className="font-heading font-extrabold text-sm text-[#061f46] block">
                  Communication you can count on
                </strong>
                <small className="text-xs text-[#65758b] block leading-relaxed">
                  We’ll work with you and your clinic to coordinate your ride request.
                </small>
              </div>
            </article>

            <article className="rounded-[12px] overflow-hidden border border-[#dce4ee] bg-white shadow-xs">
              <img
                src="/images/wheelchair-seattle-skyline.jpg"
                alt="Thoughtful wheelchair and door assistance in Seattle"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5 space-y-1">
                <strong className="font-heading font-extrabold text-sm text-[#061f46] block">
                  Thoughtful transportation
                </strong>
                <small className="text-xs text-[#65758b] block leading-relaxed">
                  Your destination and individual medical needs matter.
                </small>
              </div>
            </article>
          </div>

          <div>
            <button
              onClick={() => {
                const el = document.getElementById('request');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-heading font-extrabold text-sm text-[#061f46] hover:text-[#123e77] transition-colors"
            >
              <span>Tell us about your ride</span>
              <span className="text-[#b78b27] text-lg">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: WHY US — "Care is in the details." */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#f7f9fc] border-t border-[#dce4ee]" id="why-us">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#775d23] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f3bf28]"></span>
              The Cloud Comfort Ride difference
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] tracking-tight">
              Care is in the <em className="not-italic text-[#986800]">details.</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#65758b]">
              Our goal is to make arranging transportation clear and comfortable from the first conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-[#dce4ee] pt-6 space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#fff4d7] text-[#aa8122] flex items-center justify-center text-xl font-bold border border-[#f3bf28]">
                ♡
              </div>
              <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                Caring service
              </h3>
              <p className="text-xs text-[#65758b] leading-relaxed">
                A courteous, passenger-first approach on every trip across Seattle.
              </p>
            </div>

            <div className="border-t border-[#dce4ee] pt-6 space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#fff4d7] text-[#aa8122] flex items-center justify-center text-xl font-bold border border-[#f3bf28]">
                ✓
              </div>
              <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                Reliable communication
              </h3>
              <p className="text-xs text-[#65758b] leading-relaxed">
                We review requests, coordinate timing, and communicate next steps clearly.
              </p>
            </div>

            <div className="border-t border-[#dce4ee] pt-6 space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#fff4d7] text-[#aa8122] flex items-center justify-center text-xl font-bold border border-[#f3bf28]">
                ⌖
              </div>
              <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                Local Seattle focus
              </h3>
              <p className="text-xs text-[#65758b] leading-relaxed">
                Centrally located at 1902 E Yesler Way, serving Seattle & King County.
              </p>
            </div>

            <div className="border-t border-[#dce4ee] pt-6 space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#fff4d7] text-[#aa8122] flex items-center justify-center text-xl font-bold border border-[#f3bf28]">
                ✧
              </div>
              <h3 className="font-heading font-extrabold text-base text-[#061f46]">
                Personal attention
              </h3>
              <p className="text-xs text-[#65758b] leading-relaxed">
                Dedicated drivers assigned to clinics, fostering familiarity and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: REQUEST / BOOK A RIDE FORM */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#eef3f9] border-t border-[#dce4ee]" id="request">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#775d23] flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f3bf28]"></span>
              Let’s plan your trip
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] tracking-tight">
              Book A <em className="not-italic text-[#986800]">Ride</em>
            </h2>
            <p className="text-xs sm:text-sm text-[#65758b]">
              Share a few details and our Seattle dispatch team can follow up to discuss availability and next steps.
            </p>
          </div>

          {/* Booking Form Container */}
          <div className="shadow-soft-lg rounded-3xl overflow-hidden">
            <BookingForm 
              onViewMyBookings={() => onNavigate('/my-bookings')}
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CONTACT BAR (Dream Transit Navy with Gold Top Border) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-r from-[#061a38] to-[#0c3268] text-white py-16 border-t-[5px] border-[#f3bf28]" id="contact">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 text-center md:text-left">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#f3bf28] mb-1">
                Direct Contact
              </p>
              <h2 className="font-heading font-extrabold text-3xl text-white">
                We Want to Hear from You.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#b9c6d8] max-w-md">
              Call us or message us for more info, or to coordinate recurring medical appointment transit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20 text-center">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="p-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <span className="text-xs text-[#c1ccda] block mb-1">Email</span>
              <strong className="font-heading font-extrabold text-base sm:text-lg text-white block">
                {COMPANY_INFO.email}
              </strong>
            </a>

            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="p-4 rounded-xl hover:bg-white/5 transition-colors border-y sm:border-y-0 sm:border-x border-white/20"
            >
              <span className="text-xs text-[#c1ccda] block mb-1">Phone</span>
              <strong className="font-heading font-extrabold text-base sm:text-lg text-white block">
                {COMPANY_INFO.phoneDisplay}
              </strong>
            </a>

            <div className="p-4 rounded-xl">
              <span className="text-xs text-[#c1ccda] block mb-1">Business office</span>
              <strong className="font-heading font-extrabold text-sm sm:text-base text-white block">
                1902 E Yesler Way Unit #4, Seattle WA
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
