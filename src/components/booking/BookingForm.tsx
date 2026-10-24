import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle2, 
  AlertCircle, ArrowRight, Shield, Heart, Car, HelpCircle, Loader2, ChevronDown 
} from 'lucide-react';
import { ServiceType, MobilityLevel, BookingSubmission, BOOKING_SERVICE_OPTIONS, getServiceTitle } from '../../types';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/companyData';
import { BookingVoucherModal } from './BookingVoucherModal';

interface BookingFormProps {
  initialService?: ServiceType | '';
  onBookingSuccess?: (booking: BookingSubmission) => void;
  onViewMyBookings?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  onBookingSuccess,
  onViewMyBookings
}) => {
  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState<ServiceType | ''>(initialService || '');
  const [tripType, setTripType] = useState<'one_way' | 'round_trip'>('round_trip');
  const selectedServiceData = SERVICES_DATA.find((s) => s.id === serviceType);

  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);
  
  // Date & Times (default to tomorrow 9:00 AM)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [pickupDate, setPickupDate] = useState(minDateStr);
  const [pickupTime, setPickupTime] = useState('09:00');
  const [returnTime, setReturnTime] = useState('11:30');
  
  // Locations
  const [pickupAddress, setPickupAddress] = useState('');
  const [pickupNotes, setPickupNotes] = useState('');
  const [facilityName, setFacilityName] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [destinationNotes, setDestinationNotes] = useState('');

  // Needs & Options
  const [mobilityNeed, setMobilityNeed] = useState<MobilityLevel>('ambulatory');
  const [hasCompanion, setHasCompanion] = useState(false);
  const [companionCount, setCompanionCount] = useState(1);
  const [hasStairs, setHasStairs] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Processing & Confirmation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedBooking, setCompletedBooking] = useState<BookingSubmission | null>(null);
  const [voucherModalOpen, setVoucherModalOpen] = useState(false);

  // Validation
  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!serviceType || (serviceType as string) === 'choose_service' || (serviceType as string) === '') {
      errs.serviceType = 'Please choose a service from the options';
    }

    if (!firstName.trim()) errs.firstName = 'First name is required';
    if (!lastName.trim()) errs.lastName = 'Last name is required';
    
    if (!phone.trim()) {
      errs.phone = 'Contact telephone is required';
    } else if (phone.trim().replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit telephone number';
    }

    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!pickupDate) errs.pickupDate = 'Pickup date is required';
    if (!pickupTime) errs.pickupTime = 'Pickup time is required';
    if (tripType === 'round_trip' && !returnTime) {
      errs.returnTime = 'Estimated return time is required for round trips';
    }

    if (!pickupAddress.trim()) errs.pickupAddress = 'Pickup street address is required';
    if (!destinationAddress.trim()) errs.destinationAddress = 'Destination clinic or address is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate clean unique confirmation ID
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const bookingId = `CCR-${new Date().getFullYear()}-${randomSuffix}`;

      const newBooking: BookingSubmission = {
        id: bookingId,
        createdAt: new Date().toISOString(),
        status: 'pending_review',
        serviceType: serviceType as ServiceType,
        tripType,
        pickupDate,
        pickupTime,
        returnTime: tripType === 'round_trip' ? returnTime : undefined,
        pickupAddress,
        pickupNotes: pickupNotes.trim() || undefined,
        destinationAddress,
        facilityName: facilityName.trim() || undefined,
        destinationNotes: destinationNotes.trim() || undefined,
        passengerName: `${firstName.trim()} ${lastName.trim()}`,
        passengerPhone: phone.trim(),
        passengerEmail: email.trim(),
        mobilityNeed,
        hasCompanion,
        companionCount: hasCompanion ? companionCount : 0,
        hasStairs,
        specialInstructions: specialInstructions.trim() || undefined
      };

      // 1. Save to localStorage for persistence & "My Bookings" lookup
      const existingRaw = localStorage.getItem('cloud_comfort_bookings');
      const existingList: BookingSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
      const updatedList = [newBooking, ...existingList];
      localStorage.setItem('cloud_comfort_bookings', JSON.stringify(updatedList));

      // Simulate network / server processing latency for high-fidelity experience
      await new Promise(resolve => setTimeout(resolve, 800));

      setCompletedBooking(newBooking);
      if (onBookingSuccess) {
        onBookingSuccess(newBooking);
      }
    } catch (err) {
      console.error('Failed to submit booking:', err);
      setErrors({ form: 'An unexpected error occurred. Please call dispatch directly at (206) 327-4411.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCompletedBooking(null);
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setPickupAddress('');
    setPickupNotes('');
    setFacilityName('');
    setDestinationAddress('');
    setDestinationNotes('');
    setSpecialInstructions('');
    setErrors({});
  };

  // SUCCESS CONFIRMATION STATE
  if (completedBooking) {
    const selectedService = SERVICES_DATA.find(s => s.id === completedBooking.serviceType);

    return (
      <div className="bg-white rounded-3xl border-2 border-[#d7e1ed] shadow-soft-lg p-6 sm:p-10 max-w-2xl mx-auto text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner border border-emerald-300">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider">
            Request Received & Logged
          </span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#061f46]">
            Your Ride Request is Registered!
          </h3>
          <p className="text-[#334155] text-sm sm:text-base max-w-lg mx-auto font-medium">
            Thank you, <strong className="text-[#061f46] font-bold">{completedBooking.passengerName}</strong>. Our Seattle dispatch team has logged your booking details and will verify driver assignment for your appointment.
          </p>
        </div>

        {/* Confirmation Code Card */}
        <div className="p-5 rounded-2xl bg-[#f8fafc] border-2 border-[#cbd5e1] text-left space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#e2e8f0] pb-3 gap-2">
            <div>
              <span className="text-xs font-black text-[#475569] uppercase tracking-wider block">
                Booking Reference ID
              </span>
              <span className="font-mono font-black text-xl sm:text-2xl text-[#061f46]">
                {completedBooking.id}
              </span>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-lg bg-[#061f46] text-[#f4c832] font-extrabold text-xs tracking-wide">
              Pending Dispatch Review
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#1e293b]">
            <div>
              <span className="text-[#475569] font-bold block text-xs">Service:</span>
              <strong className="text-[#061f46] text-sm">{selectedService?.title}</strong>
            </div>
            <div>
              <span className="text-[#475569] font-bold block text-xs">Pickup Date & Time:</span>
              <strong className="text-[#061f46] text-sm">{completedBooking.pickupDate} at {completedBooking.pickupTime}</strong>
            </div>
            <div>
              <span className="text-[#475569] font-bold block text-xs">Pickup Location:</span>
              <span className="text-[#0f172a] font-medium">{completedBooking.pickupAddress}</span>
            </div>
            <div>
              <span className="text-[#475569] font-bold block text-xs">Destination:</span>
              <span className="text-[#0f172a] font-medium">{completedBooking.destinationAddress}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setVoucherModalOpen(true)}
            className="w-full sm:w-auto dt-button shadow-dt-button flex items-center justify-center gap-2 !py-3.5 !px-6 text-sm font-bold cursor-pointer"
          >
            <span>View & Print Trip Voucher</span>
          </button>

          {onViewMyBookings && (
            <button
              onClick={onViewMyBookings}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-heading font-extrabold text-sm text-[#061f46] bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors border border-slate-300 cursor-pointer"
            >
              Go to My Bookings
            </button>
          )}

          <button
            onClick={resetForm}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-bold text-[#061f46] hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Book Another Ride
          </button>
        </div>

        {/* Dispatch contact reminder */}
        <p className="text-xs text-[#475569] font-medium pt-3 border-t border-slate-200">
          Need immediate changes? Call our Seattle dispatcher at{' '}
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-extrabold text-[#061f46] hover:underline">
            {COMPANY_INFO.phoneDisplay}
          </a>
        </p>

        {/* Voucher Modal */}
        <BookingVoucherModal
          booking={completedBooking}
          isOpen={voucherModalOpen}
          onClose={() => setVoucherModalOpen(false)}
        />
      </div>
    );
  }

  // ACTIVE BOOKING FORM
  return (
    <form 
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl border-2 border-[#d7e1ed] shadow-soft-lg overflow-hidden transition-all"
    >
      {/* Form Top Ribbon */}
      <div className="bg-gradient-to-r from-[#061f46] via-[#0a2c5e] to-[#061f46] p-6 sm:p-8 text-white border-b-2 border-[#f3bf28]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Official Dispatch Booking Form</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Book Your Medical Transportation
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 font-medium">
              Serving Seattle, King County, and Eastside medical centers.
            </p>
          </div>

          <div className="shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/20 text-center sm:text-right">
            <span className="text-xs text-slate-200 block font-semibold">Questions? Live Dispatch 24/7</span>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="text-base sm:text-lg font-black text-white hover:text-[#f3bf28] transition-colors flex items-center justify-center sm:justify-end gap-1.5 mt-0.5"
            >
              <Phone className="w-4 h-4 text-[#f3bf28]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 space-y-10">
        {errors.form && (
          <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-900 text-sm font-semibold flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>{errors.form}</div>
          </div>
        )}

        {/* STEP 1: Select Service & Trip Type */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b-2 border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#061f46] text-[#f4c832] flex items-center justify-center text-sm font-black shrink-0 border border-[#f4c832]/40 shadow-xs">
                1
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#061f46]">
                  Select Service & Trip Type
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium">
                  Choose the specialized transport level matching your clinical appointment.
                </p>
              </div>
            </div>
            
            {/* Segmented Trip Type Toggle (Round Trip vs One Way) */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#f1f5f9] border-2 border-[#cbd5e1] shadow-inner gap-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setTripType('round_trip')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                  tripType === 'round_trip'
                    ? 'bg-[#061f46] text-white shadow-md ring-2 ring-[#061f46]'
                    : 'text-[#1e293b] hover:text-[#061f46] hover:bg-white/80'
                }`}
              >
                <span>Round Trip</span>
                {tripType === 'round_trip' && (
                  <span className="w-2 h-2 rounded-full bg-[#f4c832]"></span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setTripType('one_way')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                  tripType === 'one_way'
                    ? 'bg-[#061f46] text-white shadow-md ring-2 ring-[#061f46]'
                    : 'text-[#1e293b] hover:text-[#061f46] hover:bg-white/80'
                }`}
              >
                <span>One Way</span>
                {tripType === 'one_way' && (
                  <span className="w-2 h-2 rounded-full bg-[#f4c832]"></span>
                )}
              </button>
            </div>
          </div>

          {/* Responsive Service Dropdown Selector */}
          <div data-error={!!errors.serviceType} className="space-y-3">
            <label 
              htmlFor="service-type-selector" 
              className="block text-sm sm:text-base font-bold text-[#061f46]"
            >
              Choose our service <span className="text-rose-600 font-black">*</span>
            </label>

            <div className="relative">
              <select
                id="service-type-selector"
                value={serviceType}
                onChange={(e) => {
                  const val = e.target.value as ServiceType | '';
                  setServiceType(val);
                  if (errors.serviceType && val) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.serviceType;
                      return next;
                    });
                  }
                }}
                className={`w-full appearance-none pl-4 pr-11 py-3.5 sm:py-4 rounded-xl border-2 text-base transition-all bg-white cursor-pointer ${
                  errors.serviceType
                    ? 'border-rose-500 bg-rose-50/40 text-rose-950 font-bold focus:border-rose-600 focus:ring-4 focus:ring-rose-100'
                    : !serviceType
                    ? 'border-[#94a3b8] text-slate-500 font-medium focus:border-[#061f46] focus:ring-4 focus:ring-blue-100'
                    : 'border-[#061f46] text-[#061f46] font-bold focus:border-[#061f46] focus:ring-4 focus:ring-blue-100 shadow-xs'
                }`}
              >
                {BOOKING_SERVICE_OPTIONS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.disabled}
                    className={opt.disabled ? 'text-slate-400 font-normal italic' : 'text-[#061f46] font-semibold py-1.5'}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#061f46]">
                <ChevronDown className="w-5 h-5 text-[#061f46] stroke-[2.5]" />
              </div>
            </div>

            {errors.serviceType && (
              <p className="text-xs sm:text-sm font-bold text-rose-600 flex items-center gap-1.5 pt-1">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{errors.serviceType}</span>
              </p>
            )}

            {/* Selected Service Reassurance Pill / Info Snippet */}
            {selectedServiceData && (
              <div className="flex flex-wrap items-center gap-2.5 p-3 sm:p-3.5 rounded-xl bg-[#f0f6ff] border border-blue-200/80 text-xs sm:text-sm text-[#061f46] transition-all">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#061f46] text-[#f4c832] font-black text-xs shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f4c832]" />
                  {selectedServiceData.badge}
                </span>
                <span className="font-bold text-[#0d3b66]">
                  {selectedServiceData.vehicleType}
                </span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-[#334155] font-medium">
                  {selectedServiceData.tagline}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* STEP 2: Date & Scheduled Times */}
        <div className="space-y-5 pt-8 border-t-2 border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#061f46] text-[#f4c832] flex items-center justify-center text-sm font-black shrink-0 border border-[#f4c832]/40 shadow-xs">
              2
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#061f46]">
                Date & Scheduled Times
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">
                Pick your travel date and requested pickup times.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div data-error={!!errors.pickupDate}>
              <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                Appointment / Pickup Date <span className="text-rose-600 font-black">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={minDateStr}
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white transition-all focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs ${
                    errors.pickupDate ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                  }`}
                  required
                />
              </div>
              {errors.pickupDate && (
                <p className="text-rose-700 text-xs font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.pickupDate}</span>
                </p>
              )}
            </div>

            <div data-error={!!errors.pickupTime}>
              <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                Pickup Time <span className="text-rose-600 font-black">*</span>
              </label>
              <div className="relative">
                <input
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white transition-all focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs ${
                    errors.pickupTime ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                  }`}
                  required
                />
              </div>
              {errors.pickupTime && (
                <p className="text-rose-700 text-xs font-bold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.pickupTime}</span>
                </p>
              )}
            </div>

            {tripType === 'round_trip' && (
              <div data-error={!!errors.returnTime}>
                <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                  Estimated Return Pickup <span className="text-rose-600 font-black">*</span>
                </label>
                <div className="relative">
                  <input
                    type="time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white transition-all focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs ${
                      errors.returnTime ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                    }`}
                    required
                  />
                </div>
                {errors.returnTime && (
                  <p className="text-rose-700 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.returnTime}</span>
                  </p>
                )}
              </div>
            )}
          </div>
          <p className="text-xs text-[#475569] font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#061f46]" />
            <span>Drivers arrive 10–15 minutes prior to requested pickup to safely assist with boarding.</span>
          </p>
        </div>

        {/* STEP 3: Route Locations */}
        <div className="space-y-5 pt-8 border-t-2 border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#061f46] text-[#f4c832] flex items-center justify-center text-sm font-black shrink-0 border border-[#f4c832]/40 shadow-xs">
              3
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#061f46]">
                Pickup & Destination Locations
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">
                Provide specific addresses so dispatch can map optimal transit routes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickup */}
            <div className="space-y-3.5 p-5 rounded-2xl bg-[#f8fafc] border-2 border-[#cbd5e1]" data-error={!!errors.pickupAddress}>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-black shadow-xs">
                  A
                </div>
                <label className="text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider">
                  Pickup Street Address <span className="text-rose-600 font-black">*</span>
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="e.g. 1420 5th Ave, Seattle, WA 98101"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all ${
                    errors.pickupAddress ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                  }`}
                  required
                />
                {errors.pickupAddress && (
                  <p className="text-rose-700 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.pickupAddress}</span>
                  </p>
                )}
              </div>

              <input
                type="text"
                placeholder="Apartment, unit, floor, or gate access code (optional)"
                value={pickupNotes}
                onChange={(e) => setPickupNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#cbd5e1] text-xs font-medium text-[#0f172a] bg-white placeholder:text-slate-500 focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all"
              />
            </div>

            {/* Destination */}
            <div className="space-y-3.5 p-5 rounded-2xl bg-[#f8fafc] border-2 border-[#cbd5e1]" data-error={!!errors.destinationAddress}>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#061f46] text-[#f4c832] flex items-center justify-center text-xs font-black shadow-xs">
                  B
                </div>
                <label className="text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider">
                  Destination Medical Clinic / Facility <span className="text-rose-600 font-black">*</span>
                </label>
              </div>

              <input
                type="text"
                placeholder="Clinic or Hospital Name (e.g. Swedish Medical Center First Hill)"
                value={facilityName}
                onChange={(e) => setFacilityName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#cbd5e1] text-xs font-semibold text-[#0f172a] bg-white placeholder:text-slate-500 focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all"
              />

              <div>
                <input
                  type="text"
                  placeholder="Clinic Address (e.g. 747 Broadway, Seattle, WA 98122)"
                  value={destinationAddress}
                  onChange={(e) => setDestinationAddress(e.target.value)}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all ${
                    errors.destinationAddress ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                  }`}
                  required
                />
                {errors.destinationAddress && (
                  <p className="text-rose-700 text-xs font-bold mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.destinationAddress}</span>
                  </p>
                )}
              </div>

              <input
                type="text"
                placeholder="Department, suite number, doctor name (optional)"
                value={destinationNotes}
                onChange={(e) => setDestinationNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#cbd5e1] text-xs font-medium text-[#0f172a] bg-white placeholder:text-slate-500 focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all"
              />
            </div>
          </div>
        </div>

        {/* STEP 4: Passenger Information & Mobility Needs */}
        <div className="space-y-5 pt-8 border-t-2 border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#061f46] text-[#f4c832] flex items-center justify-center text-sm font-black shrink-0 border border-[#f4c832]/40 shadow-xs">
              4
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#061f46]">
                Passenger Details & Assistance Level
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">
                Ensure our driver has all passenger details and mobility equipment ready.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div data-error={!!errors.firstName}>
              <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                First Name <span className="text-rose-600 font-black">*</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Passenger first name"
                className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all ${
                  errors.firstName ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                }`}
                required
              />
              {errors.firstName && <p className="text-rose-700 text-xs font-bold mt-1.5">{errors.firstName}</p>}
            </div>

            <div data-error={!!errors.lastName}>
              <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                Last Name <span className="text-rose-600 font-black">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Passenger last name"
                className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all ${
                  errors.lastName ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                }`}
                required
              />
              {errors.lastName && <p className="text-rose-700 text-xs font-bold mt-1.5">{errors.lastName}</p>}
            </div>

            <div data-error={!!errors.phone}>
              <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                Phone Number <span className="text-rose-600 font-black">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(206) 000-0000"
                className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all ${
                  errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                }`}
                required
              />
              {errors.phone && <p className="text-rose-700 text-xs font-bold mt-1.5">{errors.phone}</p>}
            </div>

            <div data-error={!!errors.email}>
              <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
                Email Address <span className="text-rose-600 font-black">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Confirmation email"
                className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-semibold text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all ${
                  errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-[#cbd5e1] hover:border-slate-400'
                }`}
                required
              />
              {errors.email && <p className="text-rose-700 text-xs font-bold mt-1.5">{errors.email}</p>}
            </div>
          </div>

          {/* Mobility Selection Buttons */}
          <div className="pt-2">
            <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2.5">
              Mobility & Equipment Requirements
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { id: 'ambulatory', label: 'Ambulatory', desc: 'Can walk with minimal assistance' },
                { id: 'wheelchair_standard', label: 'Manual Wheelchair', desc: 'ADA ramp or vehicle lift' },
                { id: 'wheelchair_motorized', label: 'Power Chair', desc: 'Heavy lift & 4-point tie-downs' },
                { id: 'walker', label: 'Walker / Rollator', desc: 'Folding storage in vehicle' },
                { id: 'bedside_transfer', label: 'Door-Through-Door', desc: 'Bedside escort & lobby care' }
              ].map((mob) => (
                <button
                  type="button"
                  key={mob.id}
                  onClick={() => setMobilityNeed(mob.id as MobilityLevel)}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    mobilityNeed === mob.id
                      ? 'border-[#061f46] bg-[#f0f6ff] shadow-sm ring-2 ring-[#061f46]/30'
                      : 'border-[#cbd5e1] hover:border-[#061f46]/60 bg-white hover:bg-slate-50 text-[#1e293b]'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-extrabold text-[#061f46] flex items-center justify-between">
                    <span>{mob.label}</span>
                    {mobilityNeed === mob.id && (
                      <span className="w-2 h-2 rounded-full bg-[#061f46]"></span>
                    )}
                  </div>
                  <div className="text-xs text-[#334155] font-medium leading-snug mt-1">{mob.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-start gap-3.5 p-4 rounded-xl border-2 border-[#cbd5e1] hover:border-[#061f46]/60 bg-white hover:bg-slate-50 cursor-pointer transition-colors shadow-xs">
              <input
                type="checkbox"
                checked={hasCompanion}
                onChange={(e) => setHasCompanion(e.target.checked)}
                className="w-5 h-5 text-[#061f46] accent-[#061f46] rounded border-2 border-slate-400 focus:ring-[#061f46] mt-0.5 shrink-0 cursor-pointer"
              />
              <span className="text-xs sm:text-sm font-bold text-[#061f46] leading-snug">
                A family member, caregiver, or aide will accompany the passenger (Free)
              </span>
            </label>

            <label className="flex items-start gap-3.5 p-4 rounded-xl border-2 border-[#cbd5e1] hover:border-[#061f46]/60 bg-white hover:bg-slate-50 cursor-pointer transition-colors shadow-xs">
              <input
                type="checkbox"
                checked={hasStairs}
                onChange={(e) => setHasStairs(e.target.checked)}
                className="w-5 h-5 text-[#061f46] accent-[#061f46] rounded border-2 border-slate-400 focus:ring-[#061f46] mt-0.5 shrink-0 cursor-pointer"
              />
              <span className="text-xs sm:text-sm font-bold text-[#061f46] leading-snug">
                Pickup or destination location has stairs requiring driver assistance
              </span>
            </label>
          </div>

          {/* Special notes */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#061f46] uppercase tracking-wider mb-2">
              Special Instructions or Care Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Passenger uses portable oxygen, preferred pickup side entrance, post-dialysis fatigue care..."
              className="w-full px-4 py-3 rounded-xl border-2 border-[#cbd5e1] text-sm font-medium text-[#0f172a] bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#061f46] focus:ring-2 focus:ring-[#061f46]/20 shadow-xs transition-all"
            ></textarea>
          </div>
        </div>

        {/* Submit & Dispatch Reassurance Bar */}
        <div className="pt-6 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-xs sm:text-sm text-[#1e293b] font-bold flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>
              Direct Seattle Dispatch • HIPAA-Compliant Protocols • No Surcharges
            </span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto dt-button shadow-dt-button flex items-center justify-center gap-3 !py-4 !px-10 text-base font-black cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-[#061f46]" />
                <span>Submitting to Dispatch...</span>
              </>
            ) : (
              <>
                <span>Book Medical Ride</span>
                <ArrowRight className="w-5 h-5 text-[#061f46]" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};
