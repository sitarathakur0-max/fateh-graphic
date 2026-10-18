import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E1E6ED] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Category Info */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="block text-lg font-bold tracking-tight text-[#172B4D] uppercase">
                {BUSINESS_INFO.name}
              </span>
              <span className="block text-xs font-medium tracking-wide text-[#657184] uppercase mt-0.5">
                {BUSINESS_INFO.category}
              </span>
            </div>
            <p className="text-sm text-[#657184] leading-relaxed max-w-sm">
              Local document composing and graphic-work enquiry desk based in Lodhran, Punjab.
              Contact directly to review project specifications, turnaround time, and exact service availability.
            </p>
            <div className="pt-2 text-xs text-[#657184] border-t border-[#E1E6ED]">
              <span className="font-semibold text-[#172B4D]">Verification Status:</span> Business name, contact telephone, and physical road address are verified. Exact service offerings must be confirmed with the center before commencing work.
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-4">
              Website Directory
            </h4>
            <ul className="space-y-2.5 text-sm text-[#657184]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#172B4D] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#172B4D] transition-colors cursor-pointer text-left"
                >
                  Services &amp; Proposed Offerings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#172B4D] transition-colors cursor-pointer text-left"
                >
                  About the Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-[#172B4D] transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#172B4D] transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Verified Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-4">
              Verified Business Details
            </h4>
            <div className="text-sm space-y-2">
              <div>
                <span className="block text-xs uppercase tracking-wide text-[#657184]">Telephone:</span>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-medium text-[#168C8C] hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="pt-1">
                <span className="block text-xs uppercase tracking-wide text-[#657184]">Location:</span>
                <p className="text-[#293443] leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>
              <div className="pt-1 text-xs text-[#657184]">
                <span>Lodhran, Punjab, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-[#E1E6ED] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#657184]">
          <p>© {new Date().getFullYear()} Fateh Graphic &amp; Composing Center. All rights reserved.</p>
          <p className="text-[11px]">Lodhran, Punjab, Pakistan · Graphic &amp; Document Composing</p>
        </div>
      </div>
    </footer>
  );
};
