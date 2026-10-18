import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_METADATA: Record<PageId, { title: string; description: string; path: string }> = {
  home: {
    title: 'Fateh Graphic & Composing Center – Lodhran',
    description: 'Local graphic work and document composing business located on Kahror Pacca Road, opposite Rescue 1122 tower, Lodhran, Punjab, Pakistan.',
    path: '/'
  },
  services: {
    title: 'Services & Proposed Offerings | Fateh Graphic & Composing Center',
    description: 'Review proposed graphic work and document composing categories. Contact the center in Lodhran to confirm availability, software, and turnaround.',
    path: '/services'
  },
  about: {
    title: 'About the Center | Fateh Graphic & Composing Center Lodhran',
    description: 'Company profile for Fateh Graphic & Composing Center, providing practical help for graphic and document composing enquiries in Lodhran.',
    path: '/about'
  },
  faqs: {
    title: 'Frequently Asked Questions | Fateh Graphic & Composing Center',
    description: 'Frequently asked questions regarding graphic work, document composing, pricing, location, and contacting Fateh Graphic & Composing Center in Lodhran.',
    path: '/faqs'
  },
  contact: {
    title: 'Contact the Center | Fateh Graphic & Composing Center Lodhran',
    description: 'Contact Fateh Graphic & Composing Center on Kahror Pacca Road, Lodhran. Direct phone line +92 331 6025262 and project enquiry form.',
    path: '/contact'
  }
};

const resolveInitialPage = (): PageId => {
  const pathname = window.location.pathname.toLowerCase();
  if (pathname.includes('/services')) return 'services';
  if (pathname.includes('/about')) return 'about';
  if (pathname.includes('/faqs') || pathname.includes('/faq')) return 'faqs';
  if (pathname.includes('/contact')) return 'contact';
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(resolveInitialPage);

  // Sync document title and meta tags when page changes
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;
    document.title = meta.title;

    // Update standard description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', meta.description);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(resolveInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = PAGE_METADATA[page]?.path || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#293443]">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'faqs' && <FaqPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
