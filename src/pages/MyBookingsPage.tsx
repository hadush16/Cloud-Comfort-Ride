import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, User, Phone, CheckCircle2, 
  Printer, ArrowRight, Search, AlertCircle, FileText, Trash2, X 
} from 'lucide-react';
import { BookingSubmission, getServiceTitle } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { BookingVoucherModal } from '../components/booking/BookingVoucherModal';

interface MyBookingsPageProps {
  onNavigate: (path: string) => void;
}

export const MyBookingsPage: React.FC<MyBookingsPageProps> = ({ onNavigate }) => {
  const [bookings, setBookings] = useState<BookingSubmission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<BookingSubmission | null>(null);
  const [voucherModalOpen, setVoucherModalOpen] = useState(false);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    try {
      const raw = localStorage.getItem('cloud_comfort_bookings');
      if (raw) {
        setBookings(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Failed to load bookings from storage', e);
    }
  };

  const handleOpenVoucher = (booking: BookingSubmission) => {
    setSelectedBooking(booking);
    setVoucherModalOpen(true);
  };

  const handleDeleteBooking = (id: string) => {
    if (window.confirm('Are you sure you want to remove this booking from your local device history? (To cancel with dispatch, please call (206) 327-4411)')) {
      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem('cloud_comfort_bookings', JSON.stringify(updated));
    }
  };

  const filteredBookings = bookings.filter(b => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      b.id.toLowerCase().includes(q) ||
      b.passengerName.toLowerCase().includes(q) ||
      b.passengerPhone.includes(q) ||
      b.pickupAddress.toLowerCase().includes(q) ||
      b.destinationAddress.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-0 text-[#122747]">
      {/* ========================================================================= */}
      {/* 01 — HEADER BANNER: DEEP NAVY BACKGROUND WITH GOLD ACCENT (HIGH CONTRAST) */}
      {/* ========================================================================= */}
      <section className="bg-[#061f46] text-white py-12 sm:py-16 relative overflow-hidden border-b-2 border-[#f3bf28]">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#123e77]/40 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#f3bf28]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3bf28]/20 text-[#f3bf28] border border-[#f3bf28]/40 text-xs font-bold uppercase tracking-wider mb-3">
            Passenger Self-Service Portal
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            My Medical Trip Bookings
          </h1>
          <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed max-w-2xl mx-auto">
            Review your registered transportation requests, access printable trip vouchers, and connect directly with Seattle dispatch.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — MAIN CONTENT: ACCESSIBLE LIGHT NEUTRAL SURFACE (#F5F8FC) */}
      {/* ========================================================================= */}
      <div className="bg-[#f5f8fc] py-10 sm:py-14 min-h-[550px]">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Search & Actions Toolbar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#d7e1ed] shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#12366b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by booking ID, passenger name, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-[#d7e1ed] bg-[#f8fafc] text-[#102a4c] placeholder-[#52647a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123e77] focus:border-[#123e77] transition-all"
                aria-label="Search bookings by ID, passenger name, or phone"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#52647a] hover:text-[#102a4c] p-1 rounded-full"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onNavigate('/book-a-ride');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto dt-button shadow-dt-button !py-2.5 !px-5 text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#f3bf28]" />
                <span>Book a Ride</span>
              </button>
            </div>
          </div>

          {/* Bookings List or Empty State */}
          {filteredBookings.length === 0 ? (
            searchQuery ? (
              /* Search Filter Empty State */
              <div className="bg-white rounded-3xl border border-[#d7e1ed] p-10 sm:p-14 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#eef3f9] text-[#12366b] border border-[#d7e1ed] flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#102a4c]">
                    No Matching Bookings Found
                  </h3>
                  <p className="text-sm text-[#52647a] max-w-md mx-auto">
                    No scheduled rides matched <strong className="text-[#102a4c]">"{searchQuery}"</strong>. Try checking your reference ID digits or passenger last name.
                  </p>
                </div>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => setSearchQuery('')}
                    className="dt-button-outline !py-2.5 !px-5 text-xs font-bold"
                  >
                    Clear Search Filter
                  </button>
                </div>
              </div>
            ) : (
              /* Genuine Initial Empty State */
              <div className="bg-white rounded-3xl border border-[#d7e1ed] p-10 sm:p-14 text-center space-y-6 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#eef3f9] text-[#12366b] border border-[#d7e1ed] flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-[#123e77]" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="font-heading font-extrabold text-2xl text-[#102a4c]">
                    No Bookings Yet
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    Your scheduled rides will appear here after you make a booking. Schedule routine doctor check-ups, recurring dialysis transit, or hospital discharges with our Seattle team.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      onNavigate('/book-a-ride');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto dt-button shadow-dt-button flex items-center justify-center gap-2"
                  >
                    <span className="text-[#f3bf28]">📅</span>
                    <span>Book a Ride</span>
                    <ArrowRight className="w-4 h-4 text-[#f3bf28]" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="w-full sm:w-auto dt-button-outline flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#061f46]" />
                    <span>Call Dispatch: {COMPANY_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#d7e1ed] max-w-md mx-auto text-xs text-[#52647a]">
                  <span>Serving Seattle, Bellevue, Renton & surrounding King County facilities.</span>
                </div>
              </div>
            )
          ) : (
            /* Populated Bookings List */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#52647a] px-1">
                <span>Showing {filteredBookings.length} {filteredBookings.length === 1 ? 'Trip' : 'Trips'}</span>
                <span>Sorted by Booking Date</span>
              </div>

              {filteredBookings.map((booking) => {
                const service = SERVICES_DATA.find(s => s.id === booking.serviceType);

                return (
                  <div
                    key={booking.id}
                    className="bg-white rounded-2xl border border-[#d7e1ed] shadow-sm p-6 sm:p-7 space-y-5 transition-all hover:border-[#123e77]/40"
                  >
                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#eef3f9] pb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-mono font-black text-base text-[#102a4c]">
                            {booking.id}
                          </span>
                          <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#fff8e6] text-[#946200] border border-[#f3bf28]">
                            {booking.status === 'pending_review' ? 'Pending Dispatch Review' : booking.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#52647a] mt-1 font-medium">
                          Submitted on {new Date(booking.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenVoucher(booking)}
                          className="dt-button-outline !py-2 !px-3.5 text-xs flex items-center gap-1.5"
                          title="View and print trip voucher"
                        >
                          <Printer className="w-3.5 h-3.5 text-[#061f46]" />
                          <span>Print Voucher</span>
                        </button>

                        <button
                          onClick={() => handleDeleteBooking(booking.id)}
                          className="p-2 rounded-lg text-[#52647a] hover:text-rose-600 hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-200"
                          title="Remove booking from local device history"
                          aria-label="Remove booking from device history"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Booking Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
                      {/* Passenger & Service */}
                      <div className="space-y-1.5 bg-[#f8fafc] p-4 rounded-xl border border-[#eef3f9]">
                        <span className="text-[11px] font-extrabold text-[#52647a] uppercase tracking-wider block">
                          Passenger & Service
                        </span>
                        <p className="font-extrabold text-[#102a4c] text-sm sm:text-base">{booking.passengerName}</p>
                        <p className="text-[#123e77] font-bold">{getServiceTitle(booking.serviceType)}</p>
                        <p className="text-[#334155] text-xs capitalize font-medium">
                          Mobility: {booking.mobilityNeed.replace(/_/g, ' ')}
                        </p>
                      </div>

                      {/* Schedule */}
                      <div className="space-y-1.5 bg-[#f8fafc] p-4 rounded-xl border border-[#eef3f9]">
                        <span className="text-[11px] font-extrabold text-[#52647a] uppercase tracking-wider block">
                          Date & Timing
                        </span>
                        <p className="font-extrabold text-[#102a4c] flex items-center gap-1.5 text-sm sm:text-base">
                          <Calendar className="w-4 h-4 text-[#123e77]" />
                          <span>{booking.pickupDate}</span>
                        </p>
                        <p className="text-[#334155] flex items-center gap-1.5 font-medium">
                          <Clock className="w-4 h-4 text-[#123e77]" />
                          <span>Pickup: {booking.pickupTime} {booking.returnTime && `• Return: ${booking.returnTime}`}</span>
                        </p>
                        <p className="text-[#52647a] text-xs capitalize font-medium">
                          Trip Type: {booking.tripType.replace('_', ' ')}
                        </p>
                      </div>

                      {/* Route */}
                      <div className="space-y-1.5 bg-[#f8fafc] p-4 rounded-xl border border-[#eef3f9]">
                        <span className="text-[11px] font-extrabold text-[#52647a] uppercase tracking-wider block">
                          Route Details
                        </span>
                        <p className="text-[#334155] text-xs leading-relaxed">
                          <strong className="text-emerald-700 block">Pickup:</strong> {booking.pickupAddress}
                        </p>
                        <p className="text-[#334155] text-xs leading-relaxed pt-1">
                          <strong className="text-[#123e77] block">Destination:</strong> 
                          {booking.facilityName ? `${booking.facilityName} — ` : ''}{booking.destinationAddress}
                        </p>
                      </div>
                    </div>

                    {/* Reassurance Dispatch Footer */}
                    <div className="pt-3 border-t border-[#eef3f9] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#52647a]">
                      <span>Need to adjust pickup time or reschedule?</span>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="font-bold text-[#123e77] hover:text-[#061f46] flex items-center gap-1 hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Seattle Dispatch: {COMPANY_INFO.phoneDisplay}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Printable Trip Voucher Modal */}
      <BookingVoucherModal
        booking={selectedBooking}
        isOpen={voucherModalOpen}
        onClose={() => setVoucherModalOpen(false)}
      />
    </div>
  );
};
