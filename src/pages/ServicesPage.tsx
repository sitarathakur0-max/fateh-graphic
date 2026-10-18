import React from 'react';
import { PageId } from '../types';
import {
  BUSINESS_INFO,
  PROPOSED_SERVICES,
  ENQUIRY_CHECKLIST
} from '../data/business';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFFFFF] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Compact Page Introduction */}
        <div className="border-b border-[#E1E6ED] pb-10">
          <span className="text-xs font-semibold tracking-wider text-[#168C8C] uppercase block mb-2">
            Service Directory &amp; Guidelines
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D] mb-4">
            Services &amp; Proposed Offerings
          </h1>
          <p className="text-base sm:text-lg text-[#657184] max-w-3xl leading-relaxed">
            Review proposed service areas for graphic work and document composing. Because specific tools and technical parameters vary per job, all assignments must be confirmed directly with the center in Lodhran.
          </p>

          <div className="mt-6 p-4 bg-[#F5F7FA] border border-[#E1E6ED] text-xs text-[#293443] max-w-3xl">
            <span className="font-bold text-[#172B4D] uppercase tracking-wide">Verification Notice:</span>{' '}
            The exact service menu, design tools, document templates, and file formats must be confirmed with the business prior to commitment. No automated guarantees or unverified deliverables are offered.
          </div>
        </div>

        {/* Vertically Structured Service Directory with Thin Dividers */}
        <section aria-labelledby="directory-heading" className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-[#172B4D] pb-3">
            <h2 id="directory-heading" className="text-xl font-bold text-[#172B4D]">
              Directory of Proposed Services
            </h2>
            <span className="text-xs text-[#657184] uppercase tracking-wider">
              Subject to Direct Confirmation
            </span>
          </div>

          <div className="divide-y divide-[#E1E6ED]">
            {PROPOSED_SERVICES.map((service) => (
              <article
                key={service.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Number & Status */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="text-3xl font-extrabold text-[#172B4D] tracking-tight">
                    {service.number}
                  </span>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#168C8C]">
                    {service.statusLabel}
                  </div>
                </div>

                {/* Details & Guidelines */}
                <div className="lg:col-span-9 space-y-4">
                  <h3 className="text-2xl font-bold text-[#172B4D]">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#657184] leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-2">
                      When Enquiring:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#657184]">
                      {service.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#168C8C] font-mono select-none">—</span>
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Enquiry Preparation Panel (Practical Checklist) */}
        <section
          aria-labelledby="checklist-heading"
          className="bg-[#F5F7FA] border border-[#E1E6ED] p-8 lg:p-12 space-y-6"
        >
          <div className="border-b border-[#E1E6ED] pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#168C8C] block mb-1">
              Customer Preparation Guide
            </span>
            <h2 id="checklist-heading" className="text-2xl font-bold text-[#172B4D]">
              Enquiry Preparation Checklist
            </h2>
            <p className="text-sm text-[#657184] mt-1">
              Before calling or visiting Fateh Graphic &amp; Composing Center, review these five preparation points to facilitate an accurate discussion:
            </p>
          </div>

          <ol className="space-y-3">
            {ENQUIRY_CHECKLIST.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-[#293443] bg-[#FFFFFF] p-3.5 border border-[#E1E6ED]"
              >
                <span className="font-mono text-xs font-bold text-[#168C8C] pt-0.5">
                  [0{idx + 1}]
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#E1E6ED]">
            <p className="text-xs text-[#657184]">
              Ready with your project details? Contact the center directly to check schedule and rates.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors whitespace-nowrap"
              >
                Call {BUSINESS_INFO.phone}
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#172B4D] bg-[#FFFFFF] border border-[#E1E6ED] hover:border-[#172B4D] transition-colors whitespace-nowrap cursor-pointer"
              >
                Send Enquiry Form
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
