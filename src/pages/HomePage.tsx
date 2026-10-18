import React from 'react';
import { PageId } from '../types';
import {
  BUSINESS_INFO,
  PROPOSED_SERVICES,
  CUSTOMER_JOURNEY_STEPS
} from '../data/business';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* SECTION A: HERO */}
      <section className="bg-[#FFFFFF] border-b border-[#E1E6ED] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Main Message & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-semibold tracking-wider text-[#168C8C] uppercase">
                GRAPHIC &amp; DOCUMENT COMPOSING
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#172B4D] leading-[1.1] text-balance">
                Clear Work. Carefully Composed.
              </h1>
              <p className="text-base sm:text-lg text-[#657184] leading-relaxed max-w-2xl">
                Need help with graphic work or document composing? Contact Fateh Graphic &amp; Composing Center in Lodhran to discuss your requirements and confirm the services available.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172B4D]"
                >
                  Call the Center
                </a>
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#172B4D] bg-[#FFFFFF] border border-[#E1E6ED] hover:border-[#172B4D] hover:bg-[#F5F7FA] transition-colors cursor-pointer"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Right Column: Text Panel with Thin Border */}
            <div className="lg:col-span-5">
              <div className="border border-[#E1E6ED] bg-[#F5F7FA] p-6 lg:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-[#E1E6ED] pb-3 text-xs text-[#657184]">
                  <span className="font-semibold text-[#172B4D]">01 / SERVICES</span>
                  <span className="uppercase tracking-wider">Lodhran, Punjab</span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-base font-bold text-[#172B4D]">
                    Direct Customer Assistance Desk
                  </h2>
                  <p className="text-sm text-[#657184] leading-relaxed">
                    Fateh Graphic &amp; Composing Center assists individuals and businesses with text arrangement, typing, graphic layout, and document preparation enquiries.
                  </p>
                </div>
                <div className="border-t border-[#E1E6ED] pt-4 text-xs text-[#657184] space-y-2">
                  <p>
                    <span className="font-semibold text-[#172B4D]">Telephone:</span>{' '}
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#168C8C] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-[#172B4D]">Location:</span>{' '}
                    Kahror Pacca Road, opp. Rescue 1122 tower, Lodhran
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: INTRODUCTION */}
      <section className="bg-[#FFFFFF] border-b border-[#E1E6ED] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-wider text-[#657184] uppercase block mb-2">
                About Our Role
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] leading-snug">
                Support for Your Everyday Document Needs
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#657184] leading-relaxed">
              <p>
                Visitors can contact Fateh Graphic &amp; Composing Center to discuss their graphic-work and document-composing requirements in Lodhran. Whether you need assistance organizing text, setting up a readable layout, or inquiring about document preparation, we provide a direct point of contact.
              </p>
              <p>
                Because specific technical capabilities, software versions, and delivery timelines vary according to individual requirements, we encourage all visitors to contact the center directly. We believe in clear, upfront communication before any work commences.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-semibold uppercase tracking-wider text-[#168C8C] hover:text-[#127070] inline-flex items-center gap-1 cursor-pointer"
                >
                  Read full business profile <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: SERVICES */}
      <section className="bg-[#F5F7FA] border-b border-[#E1E6ED] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#168C8C] uppercase block mb-2">
              Service Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] mb-4">
              Proposed Service Categories
            </h2>
            <p className="text-sm sm:text-base text-[#657184] leading-relaxed">
              The following categories represent proposed services based on our registered business activities. All specific offerings, software tools, deliverables, and turnarounds must be confirmed prior to commencing work.
            </p>
          </div>

          {/* Structured Numbered List (No generic card clones) */}
          <div className="divide-y divide-[#E1E6ED] border-y border-[#E1E6ED] bg-[#FFFFFF]">
            {PROPOSED_SERVICES.map((service) => (
              <div
                key={service.id}
                className="py-8 px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center hover:bg-[#F5F7FA] transition-colors"
              >
                <div className="md:col-span-2">
                  <span className="text-2xl font-bold text-[#172B4D] tracking-tight">
                    {service.number}
                  </span>
                  <span className="block text-[11px] font-medium uppercase tracking-wider text-[#657184] mt-1">
                    Proposed
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-bold text-[#172B4D]">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-[#657184] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold uppercase tracking-wider text-[#168C8C] hover:text-[#127070] cursor-pointer inline-flex items-center gap-1"
                  >
                    View details <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs text-[#657184] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-[#FFFFFF] border border-[#E1E6ED]">
            <p>
              <strong className="text-[#172B4D]">Confirmation Notice:</strong> If a specific service format or requirement cannot be confirmed over the phone, it is not guaranteed.
            </p>
            <button
              onClick={() => onNavigate('services')}
              className="font-semibold text-[#168C8C] hover:underline whitespace-nowrap cursor-pointer"
            >
              Consult services checklist →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION D: SIMPLE CUSTOMER JOURNEY */}
      <section className="bg-[#FFFFFF] border-b border-[#E1E6ED] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#657184] uppercase block mb-2">
              Suggested Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] mb-3">
              How to Arrange Your Work
            </h2>
            <p className="text-sm text-[#657184] leading-relaxed">
              These are recommended steps for customers when preparing to request services from the business.
            </p>
          </div>

          {/* Desktop 3-Step Horizontal / Mobile Vertical Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CUSTOMER_JOURNEY_STEPS.map((step) => (
              <div
                key={step.step}
                className="border-t-2 border-[#172B4D] pt-6 space-y-3"
              >
                <span className="text-xs font-bold text-[#168C8C] uppercase tracking-wider">
                  Step {step.step}
                </span>
                <h3 className="text-base font-bold text-[#172B4D] leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#657184] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: LOCAL CONTACT SECTION */}
      <section className="bg-[#F5F7FA] border-b border-[#E1E6ED] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold tracking-wider text-[#657184] uppercase block mb-2">
                Find the Center in Lodhran
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172B4D] mb-4">
                Looking for a Local Composing Center?
              </h2>
              <p className="text-sm text-[#657184] leading-relaxed">
                We are conveniently located along Kahror Pacca Road in Lodhran. Contact us directly by telephone to confirm availability before visiting in person.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E1E6ED] p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="block text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
                    Business Name
                  </span>
                  <p className="text-base font-bold text-[#172B4D]">
                    {BUSINESS_INFO.name}
                  </p>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
                    Telephone Line
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-[#168C8C] hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="border-t border-[#E1E6ED] pt-5">
                <span className="block text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
                  Physical Location
                </span>
                <p className="text-sm text-[#293443] leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors cursor-pointer"
                >
                  Send an Enquiry Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: FINAL HOMEPAGE SECTION */}
      <section className="bg-[#172B4D] text-[#FFFFFF] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#168C8C]">
              Direct Enquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Tell Us What You Need Prepared.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Get in touch to discuss your requirements and confirm which services are available.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Speak to the Center
              </a>
              <span className="text-xs text-slate-400">
                Call: {BUSINESS_INFO.phone}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
