import React from 'react';
import { FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <button
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Homepage</span>
      </button>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Terms of Service
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
          Transportation Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: {new Date().getFullYear()} • Cloud Comfort Ride LLC / Cloud Medical Transportation
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700 bg-white p-8 rounded-3xl border border-slate-200">
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
          <span className="font-bold block mb-1">Non-Emergency Service Agreement:</span>
          Cloud Comfort Ride operates strictly as a Non-Emergency Medical Transportation (NEMT) provider in Washington State. If you or a passenger requires acute paramedic intervention, emergency life support, or is in immediate medical danger, please call 911.
        </div>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">1. Booking and Reservations</h2>
          <p>
            Online ride requests are logged immediately into our dispatch scheduling queue. A trip request is reviewed by our dispatchers to verify vehicle availability, driver assignment, and route feasibility. For urgent or same-day service, passengers are encouraged to contact our dispatch directly at (206) 327-4411.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">2. Punctuality and Waiting Periods</h2>
          <p>
            Passengers are asked to be ready at their designated pickup location 10 minutes prior to scheduled pickup time. Our drivers will provide courteous assistance entering the vehicle. If clinic or treatment delays occur, passengers or facility nurses should notify dispatch promptly so return transport can be adjusted smoothly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">3. Cancellations & Rescheduling</h2>
          <p>
            We understand medical schedules change unexpectedly. Please provide at least 2 hours advance notice for routine cancellations whenever possible to allow our team to reassign drivers to other awaiting patients.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">4. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Washington. For inquiries, contact:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <p><strong>Cloud Comfort Ride LLC</strong></p>
            <p>1902 E Yesler Way Unit #4, Seattle, WA 98122</p>
            <p>Phone: {COMPANY_INFO.phoneDisplay}</p>
            <p>Email: {COMPANY_INFO.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
