import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQ_LIST, BUSINESS_INFO } from '../data/business';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  // Allow multiple or single open accordions. Default first open for helpful context.
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-services': true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="bg-[#FFFFFF] py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="border-b border-[#E1E6ED] pb-8">
          <span className="text-xs font-semibold tracking-wider text-[#168C8C] uppercase block mb-2">
            Clarifications &amp; Guidance
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#172B4D] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Find factual answers to common inquiries regarding service confirmation, document formats, turnaround estimates, and contacting Fateh Graphic &amp; Composing Center.
          </p>
        </div>

        {/* Accessible Accordion Interface with CSS/Text Indicators */}
        <div
          role="region"
          aria-label="Frequently Asked Questions Accordion"
          className="divide-y divide-[#E1E6ED] border-y border-[#E1E6ED]"
        >
          {FAQ_LIST.map((faq, index) => {
            const isOpen = !!openItems[faq.id];
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div key={faq.id} className="py-2">
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full py-5 text-left flex items-start justify-between gap-4 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168C8C]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#172B4D] group-hover:text-[#168C8C] transition-colors pr-2">
                    <span className="font-mono text-xs font-normal text-[#657184] mr-3">
                      0{index + 1}.
                    </span>
                    {faq.question}
                  </span>

                  {/* Text/CSS plus/minus indicator - strictly NO image icon */}
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-7 h-7 flex items-center justify-center border border-[#E1E6ED] text-sm font-mono font-bold text-[#172B4D] group-hover:border-[#168C8C] transition-colors bg-[#F5F7FA]"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="pb-6 pl-8 sm:pl-9 pr-4 text-sm sm:text-base text-[#657184] leading-relaxed animate-fadeIn"
                  >
                    <p className="border-l-2 border-[#168C8C] pl-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further Assistance Box */}
        <div className="bg-[#F5F7FA] border border-[#E1E6ED] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#172B4D]">
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-[#657184]">
              Call directly at <span className="font-semibold text-[#172B4D]">{BUSINESS_INFO.phone}</span> or submit an online enquiry.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors whitespace-nowrap"
            >
              Call Center
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#172B4D] bg-[#FFFFFF] border border-[#E1E6ED] hover:border-[#172B4D] transition-colors whitespace-nowrap cursor-pointer"
            >
              Enquiry Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
