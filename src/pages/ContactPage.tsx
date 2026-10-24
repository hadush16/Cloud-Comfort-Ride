import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  AlertCircle, Shield, MessageSquare, ArrowRight, Loader2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry / Medical Transport');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Simulate dispatch message delivery
      await new Promise(resolve => setTimeout(resolve, 600));

      // Save inquiry to localStorage
      const inquiry = {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
      };
      const existingRaw = localStorage.getItem('cloud_comfort_inquiries');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      localStorage.setItem('cloud_comfort_inquiries', JSON.stringify([inquiry, ...existing]));

      setSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please call our office directly at (206) 327-4411.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#061f46] text-white py-14 sm:py-20 relative overflow-hidden border-b-2 border-[#f3bf28]">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#123e77]/40 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider mb-4">
            Direct Communication & Dispatch
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            We Want to Hear from You!
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-4 leading-relaxed">
            Contact Cloud Comfort Ride (Cloud Medical Transportation) and let us be your trusted medical transit partner. Call us or send an inquiry for standing schedules or urgent transfers.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy">
                Seattle Headquarters & Dispatch
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need assistance coordinating recurring dialysis trips, physical therapy rides, or hospital discharge, our friendly team is ready to assist.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* Telephone */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Phone Inquiries & Dispatch
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="font-heading font-bold text-lg text-brand-navy hover:text-brand-blue transition-colors block"
                  >
                    +1 (206) 327 - 4411
                  </a>
                  <p className="text-xs text-slate-500">Available Monday through Sunday</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-heading font-bold text-base text-brand-navy hover:text-brand-blue transition-colors block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500">Responses typically within 2-4 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Office Location
                  </span>
                  <p className="font-heading font-bold text-sm text-slate-900">
                    1902 E Yesler Way Unit #4, Seattle, WA 98122
                  </p>
                  <p className="text-xs text-slate-500">Centrally located in Seattle's healthcare corridor</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Operating Schedule
                  </span>
                  <p className="font-semibold text-xs sm:text-sm text-slate-800">
                    Monday – Sunday: 6:00 AM – 8:00 PM
                  </p>
                  <p className="text-xs text-slate-500">
                    Emergency dialysis and urgent hospital discharges accommodated on-call
                  </p>
                </div>
              </div>
            </div>

            {/* Seattle Service Area Card with Space Needle Skyline Photo */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 bg-white shadow-soft-sm group">
              <div className="h-48 overflow-hidden bg-slate-900 relative">
                <img
                  src="/images/wheelchair-seattle-skyline.jpg"
                  alt="Cloud Comfort Ride wheelchair accessible transit van with Seattle skyline and Space Needle"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#061f46]/95 backdrop-blur-md text-[#f3bf28] font-bold text-xs border border-[#f3bf28]/50">
                  Greater Seattle & King County
                </span>
              </div>
              <div className="p-4 bg-slate-50 text-xs text-slate-700 flex items-center justify-between font-medium">
                <span>Serving Swedish, UW Medical & Harborview</span>
                <span className="text-[#061f46] font-bold">Centrally Located</span>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
              <span className="font-bold block">Medical Emergency Notice:</span>
              <p>
                Cloud Comfort Ride provides scheduled Non-Emergency Medical Transportation (NEMT). If you are experiencing a life-threatening medical emergency, call 911 immediately.
              </p>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-soft-lg p-6 sm:p-10 space-y-6">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                    Thanks for submitting!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your message has been received by our Seattle dispatch team. We will get back to you promptly at <strong className="text-slate-900">{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-brand-blue bg-blue-50 hover:bg-blue-100 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-heading font-extrabold text-2xl text-brand-navy">
                      Send Us a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Have questions about coverage, recurring schedules, or private billing? Fill out this quick form.
                    </p>
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(206) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue bg-white"
                    >
                      <option value="General Inquiry / Medical Transport">General Inquiry / Medical Transport</option>
                      <option value="Dialysis Recurring Transportation">Dialysis Recurring Transportation</option>
                      <option value="Physical Therapy Ride Coordination">Physical Therapy Ride Coordination</option>
                      <option value="Hospital Discharge Coordination">Hospital Discharge Coordination</option>
                      <option value="Wheelchair Accessible Transit">Wheelchair Accessible Transit</option>
                      <option value="Facility Partnership / Case Manager">Facility Partnership / Case Manager</option>
                      <option value="Billing & Pricing Inquiry">Billing & Pricing Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can Cloud Comfort Ride assist with your transportation needs?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full dt-button shadow-dt-button flex items-center justify-center gap-2 !py-4 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#f3bf28]" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#f3bf28]">✉</span>
                        <span>Send Message to Seattle Dispatch</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
