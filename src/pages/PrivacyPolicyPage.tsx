import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
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
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Legal & Privacy
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-navy">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last Updated: {new Date().getFullYear()} • Cloud Comfort Ride LLC / Cloud Medical Transportation
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700 bg-white p-8 rounded-3xl border border-slate-200">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">1. Introduction</h2>
          <p>
            Cloud Comfort Ride LLC ("Cloud Medical Transportation", "we", "our", or "us") respects your privacy. This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of personal information provided through our website (cloudmedicaltrans.com) and dispatch operations based at 1902 E Yesler Way Unit #4, Seattle, WA 98122.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">2. Information We Collect</h2>
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
          <h2 className="font-heading font-bold text-lg text-brand-navy">3. Purpose and Use of Information</h2>
          <p>
            The information collected is used strictly for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Assigning qualified, CPR-certified drivers and vehicles with appropriate lift/ramp equipment.</li>
            <li>Communicating trip confirmations, arrival reminders, and dispatch updates.</li>
            <li>Coordinating directly with destination medical clinics, dialysis centers, and hospital discharge desks.</li>
            <li>Transparent billing and record maintenance.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third-party marketers or advertisers under any circumstances.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">4. Data Security</h2>
          <p>
            We maintain physical, procedural, and electronic safeguards designed to protect personal information against unauthorized access, loss, or disclosure. Dispatch data is restricted to authorized operations personnel.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-lg text-brand-navy">5. Contact Our Privacy Coordinator</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to review your data, please contact our Seattle office:
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
