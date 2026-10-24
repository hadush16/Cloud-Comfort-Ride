import React from 'react';
import { X, Printer, CheckCircle, Calendar, Clock, MapPin, Phone, Mail, User, Shield, AlertCircle } from 'lucide-react';
import { BookingSubmission, getServiceTitle } from '../../types';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/companyData';

interface BookingVoucherModalProps {
  booking: BookingSubmission | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingVoucherModal: React.FC<BookingVoucherModalProps> = ({
  booking,
  isOpen,
  onClose
}) => {
  if (!isOpen || !booking) return null;

  const handlePrint = () => {
    window.print();
  };

  const service = SERVICES_DATA.find(s => s.id === booking.serviceType);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="voucher-title"
      >
        {/* Header Ribbon */}
        <div className="bg-brand-navy p-6 text-white flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-bold">
              CCR
            </div>
            <div>
              <h3 id="voucher-title" className="font-heading font-bold text-lg">
                Trip Confirmation Voucher
              </h3>
              <p className="text-xs text-slate-300">
                Cloud Comfort Ride • Dispatch Reference
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Print Voucher"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Voucher Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Printable Brand Header (visible on print) */}
          <div className="hidden print:block border-b border-slate-300 pb-4 mb-4">
            <h2 className="text-2xl font-bold text-slate-900">Cloud Comfort Ride</h2>
            <p className="text-xs text-slate-600">
              Non-Emergency Medical Transportation • 1902 E Yesler Way Unit #4, Seattle WA 98122 • (206) 327-4411
            </p>
          </div>

          {/* Status Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-900 text-sm">
                Reservation Request Registered & Sent to Dispatch
              </h4>
              <p className="text-xs text-emerald-700 mt-0.5">
                Confirmation ID: <strong className="font-mono text-emerald-950 font-bold">{booking.id}</strong>
              </p>
              <p className="text-xs text-emerald-700">
                Submitted on {new Date(booking.createdAt).toLocaleDateString()} at {new Date(booking.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          {/* Key Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Passenger Information
              </span>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <User className="w-4 h-4 text-brand-blue" />
                <span>{booking.passengerName}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{booking.passengerPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{booking.passengerEmail}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Schedule & Service
              </span>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Calendar className="w-4 h-4 text-brand-teal" />
                <span>Date: {booking.pickupDate}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Clock className="w-4 h-4 text-brand-teal" />
                <span>Time: {booking.pickupTime} {booking.tripType === 'round_trip' && `(Return: ${booking.returnTime || 'TBD'})`}</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Service: <span className="text-brand-blue font-semibold">{getServiceTitle(booking.serviceType)}</span>
              </div>
              <div className="text-xs text-slate-600 font-medium">
                Trip: <span className="capitalize font-semibold">{booking.tripType.replace('_', ' ')}</span>
              </div>
            </div>
          </div>

          {/* Route Details */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
              Route Information
            </span>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                A
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                  Pickup Location
                </p>
                <p className="text-xs text-slate-700">{booking.pickupAddress}</p>
                {booking.pickupNotes && (
                  <p className="text-[11px] text-slate-500 italic mt-0.5">Note: {booking.pickupNotes}</p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue-light text-brand-blue flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                B
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                  Destination Clinic / Facility
                </p>
                {booking.facilityName && (
                  <p className="text-xs font-bold text-brand-navy">{booking.facilityName}</p>
                )}
                <p className="text-xs text-slate-700">{booking.destinationAddress}</p>
                {booking.destinationNotes && (
                  <p className="text-[11px] text-slate-500 italic mt-0.5">Clinic/Suite Note: {booking.destinationNotes}</p>
                )}
              </div>
            </div>
          </div>

          {/* Mobility & Special Needs */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-brand-navy">
              <Shield className="w-4 h-4 text-brand-blue" />
              <span>Assistance & Mobility Requirements</span>
            </div>
            <p className="text-slate-700">
              Mobility Need: <strong className="capitalize">{booking.mobilityNeed.replace(/_/g, ' ')}</strong>
            </p>
            {booking.hasCompanion && (
              <p className="text-slate-700">
                Companion Passenger: <strong>Yes ({booking.companionCount} escort/caregiver)</strong>
              </p>
            )}
            {booking.specialInstructions && (
              <p className="text-slate-700 italic">
                Special Instructions: "{booking.specialInstructions}"
              </p>
            )}
          </div>

          {/* Contact Dispatch Notice */}
          <div className="text-xs text-slate-500 border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <p className="font-semibold text-slate-700">Questions or need to update this trip?</p>
              <p>Call Seattle Dispatch: <strong>{COMPANY_INFO.phoneDisplay}</strong></p>
            </div>
            <div className="no-print">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                Close Voucher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
