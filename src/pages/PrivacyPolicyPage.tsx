import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block">
          Legal & Privacy
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#061f46] dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Last Updated: {new Date().getFullYear()} • Cloud Comfort Ride LLC / Cloud Medical Transportation
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700 dark:text-slate-300 bg-white dark:bg-[#091b33] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-soft-sm transition-colors">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">1. Introduction</h2>
          <p>
            Cloud Comfort Ride LLC ("Cloud Medical Transportation", "we", "our", or "us") respects your privacy. This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of personal information provided through our website (cloudmedicaltrans.com) and dispatch operations based at 1902 E Yesler Way Unit #4, Seattle, WA 98122.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">2. Information We Collect</h2>
          <p>
            To safely coordinate non-emergency medical transportation, we collect information submitted directly by passengers, family members, or healthcare case managers, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Passenger contact details (name, telephone number, email address).</li>
            <li>Trip schedule details (pickup date, desired appointment arrival time, return time).</li>
            <li>Route points (pickup address, medical clinic name, department, destination address).</li>
            <li>Mobility assistance requirements (ambulatory, standard wheelchair, power wheelchair, companion escort).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">3. How We Use Information</h2>
          <p>
            Your information is used strictly to fulfill transit reservations, verify driver assignments, facilitate door-through-door mobility safety, and communicate reservation confirmations or updates. We do not sell, rent, or monetize personal health transit data under any circumstances.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">4. HIPAA & Confidentiality</h2>
          <p>
            We maintain administrative, technical, and physical safeguards designed to protect personal data against unauthorized disclosure. Driver access to trip notes is limited strictly to what is required to safely carry out the passenger's transport.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-[#061f46] dark:text-white">5. Contact Information</h2>
          <p>
            For questions or requests regarding your stored trip history or privacy rights, please contact our dispatch team at {COMPANY_INFO.phoneDisplay} or by email at {COMPANY_INFO.email}.
          </p>
        </section>
      </div>
    </div>
  );
};
