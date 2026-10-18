import { BusinessDetails, FaqItem, ServiceItem } from '../types';

export const BUSINESS_INFO: BusinessDetails = {
  name: 'Fateh Graphic & Composing Center',
  category: 'Graphic work and document composing',
  phone: '+92 331 6025262',
  formattedPhone: '+92 331 6025262',
  address: 'Kahror Pacca Road, opposite Rescue 1122 tower, Lodhran, Punjab, Pakistan',
  locationDetails: 'Opposite Rescue 1122 tower, Kahror Pacca Road, Lodhran'
};

export const PROPOSED_SERVICES: ServiceItem[] = [
  {
    id: 'graphic-work',
    number: '01',
    title: 'Graphic Work',
    shortDescription: 'Enquire regarding graphic-related layout and design preparation for personal, academic, or commercial printing needs.',
    detailedDescription: 'Visitors may enquire about graphic-related work. Please note that specific design deliverables, supported file formats, and software applications are not fixed and must be confirmed directly with the center before initiating any assignment.',
    isConfirmed: false,
    statusLabel: 'Proposed Category — Confirmation Required with Center',
    guidelines: [
      'Contact the center to discuss requested visual layouts.',
      'Confirm whether your required design formats are supported.',
      'Specify dimensions, text content, and any reference samples when calling.'
    ]
  },
  {
    id: 'document-composing',
    number: '02',
    title: 'Document Composing',
    shortDescription: 'Inquire about digital document typing, text arrangement, formatting, and composing assistance.',
    detailedDescription: 'Customers may contact the center to discuss document-composing requirements. Specific language support, specialized form templates, or official document configurations are subject to direct review and agreement with the center.',
    isConfirmed: false,
    statusLabel: 'Proposed Category — Confirmation Required with Center',
    guidelines: [
      'Share your source handwritten, printed, or rough draft notes.',
      'Clarify required font sizes, line spacing, and margin preferences.',
      'Confirm available proofreading, revisions, and export options directly.'
    ]
  },
  {
    id: 'document-preparation',
    number: '03',
    title: 'Document Preparation Enquiries',
    shortDescription: 'Consult with the center to evaluate whether your specific document-preparation task can be accommodated.',
    detailedDescription: 'Visitors can ask whether their requested document-preparation task is supported. Important: Fateh Graphic & Composing Center does not provide legal advice, official statutory certification, government approvals, or guaranteed official acceptance.',
    isConfirmed: false,
    statusLabel: 'Proposed Category — Confirmation Required with Center',
    guidelines: [
      'Describe the context and purpose of the document to verify suitability.',
      'Confirm expected turnaround timeline and final delivery method.',
      'Verify pricing prior to confirming the assignment.'
    ]
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-services',
    question: 'What services are available?',
    answer: 'Contact the center to confirm which graphic-work and document-composing services are currently available.'
  },
  {
    id: 'faq-format',
    question: 'Can I request a particular document format?',
    answer: 'Describe the format you need when enquiring. The center can confirm whether it supports your requirements.'
  },
  {
    id: 'faq-cost',
    question: 'How much does the work cost?',
    answer: 'Pricing depends on the requested work. Ask the center for a quote before confirming the job.'
  },
  {
    id: 'faq-timeline',
    question: 'How long will my work take?',
    answer: 'Completion time depends on the task and availability. Confirm the expected timeline directly with the center.'
  },
  {
    id: 'faq-requirements',
    question: 'Can I send my requirements before visiting?',
    answer: 'Contact the center by phone to ask about the available ways to share your requirements.'
  },
  {
    id: 'faq-location',
    question: 'Where is the center located?',
    answer: 'Kahror Pacca Road, opposite Rescue 1122 tower, Lodhran, Punjab, Pakistan.'
  },
  {
    id: 'faq-contact',
    question: 'How can I contact the center?',
    answer: 'Call +92 331 6025262.'
  }
];

export const ENQUIRY_CHECKLIST: string[] = [
  'Describe the document or graphic work required.',
  'Explain any specific formatting requirements.',
  'Ask about available file formats.',
  'Confirm the price and estimated completion time.',
  'Confirm how completed work will be delivered.'
];

export const CUSTOMER_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Describe the work you need.',
    description: 'Outline the type of document, required dimensions, language, or graphic layout details before calling.'
  },
  {
    step: '02',
    title: 'Contact the center to confirm availability and requirements.',
    description: 'Call +92 331 6025262 to verify whether the specific task is currently supported and discuss delivery.'
  },
  {
    step: '03',
    title: 'Agree on the scope, cost, and expected completion time directly with the business.',
    description: 'Finalize all project terms and turnaround expectations directly with the center prior to starting work.'
  }
];
