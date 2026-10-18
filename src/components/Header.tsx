import React, { useState } from 'react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E1E6ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark (Text-based only, strictly no image) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left cursor-pointer focus:outline-none"
            aria-label="Fateh Graphic & Composing Center - Return to homepage"
          >
            <span className="block text-xl font-bold tracking-tight text-[#172B4D] leading-none uppercase">
              FATEH
            </span>
            <span className="block text-xs font-medium tracking-wide text-[#657184] uppercase mt-1">
              Graphic &amp; Composing Center
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`cursor-pointer transition-colors pb-1 border-b-2 text-sm ${
                    isActive
                      ? 'border-[#168C8C] text-[#172B4D] font-semibold'
                      : 'border-transparent text-[#657184] hover:text-[#172B4D]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="cursor-pointer px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172B4D]"
            >
              Contact the Center
            </button>
          </div>

          {/* Mobile Menu Button (Text-based, accessible, no icon images) */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center px-3 py-1.5 border border-[#E1E6ED] text-xs font-semibold uppercase tracking-wider text-[#172B4D] hover:bg-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-[#168C8C]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? 'Close [x]' : 'Menu [=]'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#E1E6ED] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-1 shadow-sm"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium border-l-2 transition-colors ${
                  isActive
                    ? 'border-[#168C8C] bg-[#F5F7FA] text-[#172B4D] font-semibold'
                    : 'border-transparent text-[#657184] hover:text-[#172B4D] hover:bg-[#F5F7FA]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] transition-colors"
            >
              Contact the Center
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
