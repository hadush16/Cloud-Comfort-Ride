import React from 'react';
import { 
  Shield, Heart, Award, CheckCircle2, Clock, MapPin, 
  Phone, Mail, ArrowRight, Calendar, Users, FileText 
} from 'lucide-react';
import { COMPANY_INFO, DRIVER_STANDARDS } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 dark:bg-[#040d1a] transition-colors">
      {/* Header Banner */}
      <section className="bg-[#061f46] dark:bg-[#030d1a] text-white py-14 sm:py-20 relative overflow-hidden border-b-2 border-[#f3bf28]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#123e77]/40 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider mb-4">
            About Cloud Comfort Ride
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Transport Service With Care & Dignity
          </h1>
          <p className="text-base sm:text-lg text-slate-200 dark:text-slate-300 mt-4 leading-relaxed">
            Founded in 2023 in Seattle, Cloud Comfort Ride (Cloud Medical Transportation) was built to bridge the gap in healthcare transit with safe, compassionate, and punctual service.
          </p>
        </div>
      </section>

      {/* Main Story & History Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#061f46] dark:text-[#f3bf28] bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 px-3 py-1 rounded-full inline-block">
              Our Founding Story
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] dark:text-white tracking-tight">
              Deeply Rooted in the Heart of Seattle
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to <strong>Cloud Comfort Ride</strong> (Cloud Medical Transportation), a non-emergency medical transportation service deeply rooted in the heart of Seattle. Founded in 2023 by a seasoned professional businessman, our company was born out of a motivation to serve and a commitment to excellence in healthcare transportation.
              </p>
              <p>
                At Cloud Comfort Ride, we specialize in providing safe, reliable, and compassionate transportation services for individuals with special medical needs. Recognizing the challenges faced by those who cannot travel via standard means, we have dedicated ourselves to bridging the gap, ensuring that medical appointments and healthcare needs are met with ease and efficiency.
              </p>
              <p>
                Understanding the critical nature of punctuality in the medical field, we take immense pride in our reliability. Our efficient scheduling and precise coordination mean that late arrivals and the stress of rescheduling are things of the past. We tailor the level of care to each individual patient, ensuring timely arrival and the right support for every journey.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/book-a-ride')}
                className="dt-button shadow-dt-button min-h-[44px]"
              >
                Schedule a Medical Ride
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="dt-button-outline min-h-[44px]"
              >
                Call (206) 327-4411
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white dark:border-slate-800 bg-slate-900 group">
              <img
                src="/images/hero-branded-van-panoramic.jpg"
                alt="Cloud Comfort Ride official branded transit van and driver assisting passenger in Seattle with Space Needle skyline"
                className="w-full h-80 sm:h-96 object-cover object-right sm:object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-[#061f46] dark:bg-[#030d1a] text-white flex items-center justify-between border-t-2 border-[#f3bf28]">
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Compassionate Patient Assistance</h4>
                  <p className="text-xs text-slate-300">1902 E Yesler Way Unit #4, Seattle, WA 98122 • (206) 327-4411</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] text-xs font-bold border border-[#f3bf28]/40">
                  Seattle & King County
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Team Standards Grid */}
      <section className="bg-slate-100/70 dark:bg-[#06162a]/70 border-y border-slate-200/80 dark:border-slate-800 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block">
              Operational Standards
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] dark:text-white tracking-tight">
              Safety, Fleet Maintenance & The Team
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base">
              The heart of Cloud Medical Transport lies in our exceptional team and our rigorous vehicle safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Rigorous Fleet Standards */}
            <div className="bg-white dark:bg-[#091b33] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-[#0f2e59] text-blue-700 dark:text-[#f3bf28] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#061f46] dark:text-white">
                State & Federal Fleet Compliance
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our fleet sets the standard for maintenance and safety. Each vehicle is meticulously maintained, regularly inspected, and fully licensed, strictly adhering to Washington State and federal transportation regulations.
              </p>
            </div>

            {/* Card 2: Combined Experience & CPR Training */}
            <div className="bg-white dark:bg-[#091b33] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#061f46] dark:text-white">
                CPR & First Aid Certified Staff
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our staff boasts over a decade of combined experience in transportation and medical care. From drivers skilled in CPR and First Aid to friendly dispatchers, our team prioritizes empathy, warmth, and patient security.
              </p>
            </div>

            {/* Card 3: Hassle-Free Billing */}
            <div className="bg-white dark:bg-[#091b33] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-soft-sm space-y-4 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#061f46] dark:text-white">
                Straightforward Billing Department
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Finally, our hassle-free billing department reflects our overall approach to service: straightforward, transparent, and user-friendly. We make every financial interaction clear, honest, and completely stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Partnership & Community Reassurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#061f46] dark:bg-[#07192f] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border-2 border-[#f3bf28] shadow-soft-lg">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f3bf28] bg-[#f3bf28]/10 px-3 py-1 rounded-full border border-[#f3bf28]/30 inline-block">
              Healthcare Facility Partnerships
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Consistent Driver Assignments for Clinics & Dialysis Centers
            </h3>
            <p className="text-slate-200 dark:text-slate-300 text-sm leading-relaxed">
              We frequently assign the same drivers to specific healthcare facilities. This practice fosters familiarity, strengthens communication between clinic staff and transit coordinators, and significantly reduces patient anxiety.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate('/safety-drivers')}
              className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-[#061f46] bg-white hover:bg-slate-100 transition-colors shadow-sm min-h-[44px]"
            >
              Learn More About Drivers
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="dt-button shadow-dt-button min-h-[44px]"
            >
              <span className="text-[#f3bf28]">✉</span>
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
