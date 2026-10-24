import React from 'react';
import { Phone, Mail, MapPin, Shield, Clock, HelpCircle, CheckCircle2 } from 'lucide-react';
import { BookingForm } from '../components/booking/BookingForm';
import { COMPANY_INFO, FAQS } from '../data/companyData';
import { ServiceType, BookingSubmission } from '../types';

interface BookRidePageProps {
  initialService?: ServiceType | '';
  onNavigate: (path: string) => void;
  onBookingSuccess?: (booking: BookingSubmission) => void;
}

export const BookRidePage: React.FC<BookRidePageProps> = ({
  initialService,
  onNavigate,
  onBookingSuccess
}) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#061f46] text-white py-12 sm:py-16 relative overflow-hidden border-b-2 border-[#f3bf28]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#123e77]/40 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider mb-3">
            Online Dispatch Portal
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Book Your Medical Ride
          </h1>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
            Fill in your appointment and mobility requirements below. Our Seattle dispatch team will immediately review your request and confirm vehicle coordination.
          </p>
        </div>
      </section>

      {/* Main Booking Container with Reassuring Transportation Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <BookingForm
              initialService={initialService}
              onBookingSuccess={onBookingSuccess}
              onViewMyBookings={() => {
                onNavigate('/my-bookings');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Reassuring Side Image & Trust Highlights */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft-md group">
              <div className="h-48 sm:h-56 overflow-hidden bg-slate-900 relative">
                <img
                  src="/images/driver-sedan-assistance.jpg"
                  alt="Cloud Comfort Ride driver courteously assisting passenger toward vehicle"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#061f46]/90 backdrop-blur-md text-white font-bold text-[11px] border border-[#f3bf28]/50">
                  Door-Through-Door Care
                </span>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <h3 className="font-heading font-extrabold text-lg text-[#061f46]">
                  What to Expect with Cloud Comfort Ride
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100% On-Time Guarantee:</strong> Punctual arrival for dialysis, clinic visits, and surgical appointments.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>CPR & First Aid Certified:</strong> Every driver is trained in safe mobility and emergency care protocols.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Wheelchair & Walker Safe:</strong> ADA ramps, hydraulic lifts, and 4-point Q-Straint tie-downs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>No Cancellation Surprises:</strong> Clear, upfront confirmation with digital reservation voucher.</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-[#334155] font-semibold">
                  <span>Seattle HQ: 1902 E Yesler Way</span>
                  <span className="text-emerald-700 font-extrabold">King County Licensed</span>
                </div>
              </div>
            </div>

            {/* Quick Dispatch Call Card */}
            <div className="bg-[#061f46] text-white rounded-3xl p-6 border-2 border-[#f3bf28] shadow-soft-md space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#f3bf28]">
                Need Urgent or Same-Day Booking?
              </span>
              <h4 className="font-heading font-extrabold text-base text-white">
                Call Our Seattle Dispatch Directly
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dialysis coordinators and hospital discharge managers can reach our live dispatch desk 7 days a week.
              </p>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full dt-button shadow-dt-button flex items-center justify-center gap-2 text-xs !py-3"
              >
                <Phone className="w-4 h-4 text-[#f3bf28]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Phone Alternative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-100 p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-lg text-[#061f46]">
              Prefer to Book by Phone or Have Recurring Route Needs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak directly with our local Seattle dispatch team for same-day requests or standing weekly route planning.
            </p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="shrink-0 dt-button shadow-dt-button flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#f3bf28]" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
