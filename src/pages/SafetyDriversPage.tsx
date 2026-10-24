import React from 'react';
import { 
  Shield, Heart, Award, CheckCircle2, Phone, Calendar, 
  Car, Users, Eye, FileCheck, Stethoscope, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO, DRIVER_STANDARDS } from '../data/companyData';

interface SafetyDriversPageProps {
  onNavigate: (path: string) => void;
}

export const SafetyDriversPage: React.FC<SafetyDriversPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-[#061f46] text-white py-14 sm:py-20 relative overflow-hidden border-b-2 border-[#f3bf28]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#123e77]/40 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider mb-4">
            Driver Safety & Training
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Dedicated Drivers. Empathy-First Service.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
            At Cloud Comfort Ride, we prioritize selecting individuals who are naturally courteous, solution-focused, and deeply empathetic. Every driver is CPR certified and thoroughly trained.
          </p>
        </div>
      </section>

      {/* Core Safety Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
              Driver Excellence
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Safety, Courtesy & Empathy at Every Turn
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                At Cloud Comfort Ride, we prioritize selecting individuals who are not only naturally courteous and solution-focused but also deeply empathetic, to serve as our drivers. Each potential driver undergoes rigorous background checks before joining our team, ensuring a secure and safe experience for both patients and healthcare facilities.
              </p>
              <p>
                We strive for consistency in our services, often assigning the same drivers to specific facilities. This practice fosters familiarity, strengthens communication, and enhances comfort for both our staff and your patients.
              </p>
              <p>
                Our drivers are thoroughly trained in the safe operation of all equipment on our diverse fleet of vehicles, paying special attention to passenger assistance techniques, wheelchair lifts, and patient door transfers.
              </p>
            </div>

            {/* 3 Core Responsibilities Callouts */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                    EFFICIENT: Ramp & Wheelchair Lift Operation
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Efficiently operate hydraulic ramps and wheelchair lifts in our vehicles with strict adherence to ADA protocols.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                    SAFE: Vehicle Entry & Exit Support
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Safely assist patients during vehicle entry and exit, providing stability support for walking aids and wheelchair transfers.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-navy uppercase tracking-wider">
                    ASSISTANCE: Clinic Escort Navigation
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Help patients securely navigate to and from your healthcare facility lobby, check-in desk, or clinic department.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-soft-lg border-2 border-white bg-slate-900 group">
              <img
                src="/images/wheelchair-ramp-van.jpg"
                alt="Cloud Comfort Ride wheelchair accessible transit van with commercial ramp deployed"
                className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-[#061f46] text-white space-y-2 border-t-2 border-[#f3bf28]">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-lg text-white">Certified Ramp & Lift Operation</h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] text-xs font-bold border border-[#f3bf28]/40">ADA Certified</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Seeing the same dedicated, courteous driver each week gives patients peace of mind and builds genuine community trust."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Vetting Checklist Grid */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Rigorous Vetting
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
              Our 6-Point Driver Safety Standard
            </h2>
            <p className="text-slate-600 text-base">
              Every driver who represents Cloud Comfort Ride meets rigorous local, state, and healthcare facility standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DRIVER_STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-soft-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-navy">
                  {std.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & Sanitized Comfort Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#061f46] bg-[#f3bf28]/20 px-3.5 py-1 rounded-full border border-[#f3bf28]/40">
            Fleet Safety & Comfort
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Clean Van Interiors & Verified Fleet Quality
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every vehicle in our Seattle fleet undergoes rigorous daily sanitization, scheduled multi-point mechanical inspections, and is outfitted for maximum patient relaxation and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Clean Van Interior */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-white shadow-soft-md group">
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src="/images/clean-van-interior.jpg"
                alt="Cloud Comfort Ride clean van interior with luxury leather seating and panoramic sunroof"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-xl text-[#061f46]">
                  Sanitized, Spacious Cabin Comfort
                </h3>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Daily Sanitized
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Featuring contoured supportive leather seating, expansive legroom, multi-zone climate control, and whisper-quiet suspension for post-surgical or sensitive medical journeys.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2 font-medium">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Hospital-grade filtration</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Non-slip commercial flooring</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Dual climate zones</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Generous luggage space</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Genuine Accessible Fleet Vehicle */}
          <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-white shadow-soft-md group">
            <div className="h-64 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src="/images/wheelchair-accessible-transit-van.jpg"
                alt="Cloud Comfort Ride full accessibility transit van"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-xl text-[#061f46]">
                  Certified ADA Mobility Compliance
                </h3>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-200">
                  Q-Straint Secured
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered with high-clearance doorways, 1,000-lb capacity power ramps, and heavy-duty 4-point tie-down anchor channels to guarantee secure, stable mobility for all chair types.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-2 font-medium">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> ADA compliant ramp/lift</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> Power wheelchair certified</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> 4-point tie-downs</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" /> Companion seating next to rider</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#061f46] text-white p-8 sm:p-12 text-center space-y-6 border-2 border-[#f3bf28] shadow-soft-lg">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#f3bf28] bg-[#f3bf28]/10 px-3.5 py-1 rounded-full border border-[#f3bf28]/30">
            Seattle's Premier Medical Transit
          </span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Experience the Cloud Comfort Driver Difference
          </h3>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Schedule your upcoming appointment or coordinate regular clinic transportation with our professional Seattle dispatch team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/book-a-ride')}
              className="w-full sm:w-auto dt-button shadow-dt-button"
            >
              <span className="text-[#f3bf28]">📅</span>
              <span>Book Your Ride</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto dt-button-outline !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#061f46]"
            >
              <Phone className="w-4 h-4 text-[#f3bf28]" />
              <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
