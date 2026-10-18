export type PageId = 'home' | 'services' | 'about' | 'faqs' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  isConfirmed: boolean;
  statusLabel: string;
  guidelines: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessDetails {
  name: string;
  category: string;
  phone: string;
  formattedPhone: string;
  address: string;
  locationDetails: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  workType: string;
  description: string;
  preferredContact: string;
  hp_check?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  id?: string;
  errors?: Record<string, string>;
}
