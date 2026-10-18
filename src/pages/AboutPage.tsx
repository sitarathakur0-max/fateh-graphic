import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFFFFF] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header & Introduction */}
        <div className="border-b border-[#E1E6ED] pb-10 max-w-3xl">
          <span className="text-xs font-semibold tracking-wider text-[#168C8C] uppercase block mb-2">
            Company Profile
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D] mb-6 leading-tight">
            Practical Help for Graphic and Composing Enquiries.
          </h1>
          <p className="text-base sm:text-lg text-[#657184] leading-relaxed">
            Fateh Graphic &amp; Composing Center is a locally listed business in Lodhran associated with graphic work and document composing. We operate as a local contact point for individuals, students, and businesses seeking document composition and graphic assistance.
          </p>
        </div>

        {/* Content Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Informational Column */}
          <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-[#657184] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#172B4D]">
                Our Focus &amp; Approach
              </h2>
              <p>
                Document composing and graphic formatting are fundamental requirements for everyday administrative, academic, and business communication. Fateh Graphic &amp; Composing Center focuses on facilitating these needs through practical, direct coordination.
              </p>
              <p>
                We prioritize clear communication regarding what can and cannot be done. Rather than presenting generic or unsupported promises, we advise each customer to speak directly with the center to verify specific file formats, paper sizes, typography preferences, and turnaround schedules.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#E1E6ED]">
              <h2 className="text-xl font-bold text-[#172B4D]">
                Commitment to Transparent Operations
              </h2>
              <p>
                As an independent local center in Lodhran, we do not claim unverified certifications, awards, or inflated metrics. Customers receive straightforward guidance regarding project scope, estimated completion times, and associated costs before confirming their assignments.
              </p>
              <p>
                We do not provide legal counsel, certified legal attestations, or guaranteed document approval by third-party authorities. Our core operational focus remains centered on graphic and text arrangement tasks.
              </p>
            </section>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors cursor-pointer"
              >
                Contact the Center
              </button>
            </div>
          </div>

          {/* Business Information Panel (Verified Data) */}
          <div className="lg:col-span-5">
            <div className="border border-[#172B4D] bg-[#F5F7FA] p-6 sm:p-8 space-y-6">
              <div className="border-b border-[#E1E6ED] pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#168C8C] block mb-1">
                  Directory Record
                </span>
                <h3 className="text-lg font-bold text-[#172B4D]">
                  Verified Business Information
                </h3>
              </div>

              <dl className="space-y-4 text-xs">
                <div>
                  <dt className="text-[#657184] uppercase tracking-wider font-semibold">
                    Business Name
                  </dt>
                  <dd className="text-sm font-bold text-[#172B4D] mt-0.5">
                    {BUSINESS_INFO.name}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#657184] uppercase tracking-wider font-semibold">
                    Registered Category
                  </dt>
                  <dd className="text-sm text-[#293443] mt-0.5">
                    {BUSINESS_INFO.category}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#657184] uppercase tracking-wider font-semibold">
                    Direct Contact Telephone
                  </dt>
                  <dd className="text-sm font-bold text-[#168C8C] mt-0.5">
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[#657184] uppercase tracking-wider font-semibold">
                    Physical Address
                  </dt>
                  <dd className="text-sm text-[#293443] mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#657184] uppercase tracking-wider font-semibold">
                    District / Region
                  </dt>
                  <dd className="text-sm text-[#293443] mt-0.5">
                    Lodhran, Punjab, Pakistan
                  </dd>
                </div>

                <div className="pt-2 border-t border-[#E1E6ED]">
                  <dt className="text-[#657184] uppercase tracking-wider font-semibold">
                    Operating Verification
                  </dt>
                  <dd className="text-[11px] text-[#657184] mt-1 leading-relaxed">
                    Verified phone line and road address on record. Customers are advised to contact by phone to confirm immediate staff availability before traveling.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
