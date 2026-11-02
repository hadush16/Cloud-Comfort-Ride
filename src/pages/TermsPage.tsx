import React from 'react';
import { FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 dark:text-slate-100 transition-colors">
      <button
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-[#f3bf28] hover:underline min-h-[44px]"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Homepage</span>
      </button>

      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900 inline-block">
          Terms of Service
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] dark:text-white">
          Transportation Terms & Conditions
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Last Updated: {new Date().getFullYear()} • Cloud Comfort Ride LLC / Cloud Medical Transportation
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700 dark:text-slate-300 bg-white dark:bg-[#091b33] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft-sm transition-colors">
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs">
          <span className="font-bold block mb-1">Non-Emergency Service Agreement:</span>
          Cloud Comfort Ride operates strictly as a Non-Emergency Medical Transportation (NEMT) provider in Washington State. If you or a passenger requires acute paramedic intervention, emergency life support, or is in immediate medical danger, please call 911.
        </div>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">1. Booking and Reservations</h2>
          <p>
            Online ride requests are logged immediately into our dispatch scheduling queue. A trip request is reviewed by our dispatchers to verify vehicle availability, driver assignment, and route feasibility. For urgent or same-day service, passengers are encouraged to contact our dispatch directly at (206) 327-4411.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">2. Punctuality and Waiting Periods</h2>
          <p>
            Passengers are asked to be ready at their designated pickup location 10 minutes prior to scheduled pickup time. Our drivers will provide courteous assistance entering the vehicle. If clinic or treatment delays occur, passengers or facility nurses should notify dispatch promptly so return transport can be adjusted smoothly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">3. Cancellations & Modifications</h2>
          <p>
            We appreciate advance notice when medical appointments are rescheduled or cancelled. Please call (206) 327-4411 at least two hours prior to the scheduled pickup time to release the driver for other clinical patients.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">4. Passenger Conduct & Safety</h2>
          <p>
            To protect our passengers and staff, all transit vehicles are strictly smoke-free. Wheelchairs and mobility equipment must meet safety specifications allowing secure attachment via vehicle 4-point Q-Straint or seatbelt anchor points.
          </p>
        </section>
      </div>
    </div>
  );
};
