export type ServiceType = 
  | 'non_emergency_medical'
  | 'wheelchair'
  | 'senior_private_pay'
  | 'private_transport'
  | 'hospital_discharge'
  | 'school_transport'
  | 'dialysis'
  | 'therapy'
  | 'routine'
  | 'discharge';

export interface ServiceOption {
  value: ServiceType | '';
  label: string;
  disabled?: boolean;
}

export const BOOKING_SERVICE_OPTIONS: ServiceOption[] = [
  { value: '', label: 'Choose our service', disabled: true },
  { value: 'non_emergency_medical', label: 'Non-emergency medical transportation' },
  { value: 'wheelchair', label: 'Wheelchair transportation' },
  { value: 'senior_private_pay', label: 'Senior & private-pay rides' },
  { value: 'private_transport', label: 'Private transportation' },
  { value: 'hospital_discharge', label: 'Hospital discharge transportation' },
  { value: 'school_transport', label: 'Private-pay school transportation' },
  { value: 'dialysis', label: 'Dialysis appointment transportation' }
];

export const getServiceTitle = (type?: string): string => {
  if (!type) return 'Non-emergency medical transportation';
  switch (type) {
    case 'non_emergency_medical':
    case 'routine':
      return 'Non-emergency medical transportation';
    case 'wheelchair':
    case 'wheelchair_standard':
      return 'Wheelchair transportation';
    case 'senior_private_pay':
      return 'Senior & private-pay rides';
    case 'private_transport':
      return 'Private transportation';
    case 'hospital_discharge':
    case 'discharge':
      return 'Hospital discharge transportation';
    case 'school_transport':
      return 'Private-pay school transportation';
    case 'dialysis':
      return 'Dialysis appointment transportation';
    case 'therapy':
      return 'Physical therapy transportation';
    default:
      return type;
  }
};

export interface ServiceItem {
  id: ServiceType;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  longDescription: string;
  features: string[];
  idealFor: string[];
  vehicleType: string;
  imageUrl: string;
}

export type MobilityLevel = 
  | 'ambulatory'
  | 'wheelchair_standard'
  | 'wheelchair_motorized'
  | 'walker'
  | 'bedside_transfer';

export interface BookingSubmission {
  id: string;
  createdAt: string;
  status: 'pending_review' | 'confirmed' | 'completed' | 'cancelled';
  serviceType: ServiceType;
  tripType: 'one_way' | 'round_trip';
  pickupDate: string;
  pickupTime: string;
  returnTime?: string;
  pickupAddress: string;
  pickupNotes?: string;
  destinationAddress: string;
  facilityName?: string;
  destinationNotes?: string;
  passengerName: string;
  passengerPhone: string;
  passengerEmail: string;
  mobilityNeed: MobilityLevel;
  hasCompanion: boolean;
  companionCount: number;
  hasStairs: boolean;
  specialInstructions?: string;
  estimatedMileage?: number;
}

export interface DriverValue {
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  quote: string;
  serviceUsed: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'safety' | 'payment' | 'service';
}
