import React, { useState } from 'react';
import { PageId, ContactFormData, ContactApiResponse } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    workType: 'Graphic Work',
    description: '',
    preferredContact: 'Phone Call',
    hp_check: '' // Spam honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<ContactApiResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const workTypes = [
    'Graphic Work',
    'Document Composing',
    'Document Preparation Enquiry',
    'General Document Enquiry'
  ];

  const validateClient = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const cleanPhone = formData.phoneNumber.trim();
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Phone number is required so the center can reach you.';
    } else if (cleanPhone.length < 8 || !/^[\d\s+\-().]+$/.test(cleanPhone)) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g. 0331 6025262 or +92 331 6025262).';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description of what you need.';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters so we understand your request.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data: ContactApiResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(data);
        setFormData({
          fullName: '',
          phoneNumber: '',
          workType: 'Graphic Work',
          description: '',
          preferredContact: 'Phone Call',
          hp_check: ''
        });
        setErrors({});
      } else {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(data.message || 'Submission could not be completed. Please try calling the center.');
      }
    } catch {
      setServerError('Network error connecting to the submission endpoint. Please telephone the center directly at +92 331 6025262.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FFFFFF] py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Intro */}
        <div className="border-b border-[#E1E6ED] pb-8 mb-12">
          <span className="text-xs font-semibold tracking-wider text-[#168C8C] uppercase block mb-2">
            Direct Communication
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D] mb-4">
            Contact the Center
          </h1>
          <p className="text-base sm:text-lg text-[#657184] max-w-3xl leading-relaxed">
            Reach out to Fateh Graphic &amp; Composing Center to inquire about graphic work, document composing, or task availability in Lodhran.
          </p>
        </div>

        {/* Two-Column Layout on Desktop / Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Instructions */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#172B4D]">
                Get in Touch Directly
              </h2>
              <p className="text-sm text-[#657184] leading-relaxed">
                For immediate confirmation, pricing queries, or urgent tasks, calling the center directly by phone is always recommended. If you prefer, submit your project details using the online form and the center can review your request.
              </p>
            </div>

            <div className="border border-[#E1E6ED] bg-[#F5F7FA] p-6 space-y-6">
              <div>
                <span className="block text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
                  Business Entity
                </span>
                <p className="text-base font-bold text-[#172B4D]">
                  {BUSINESS_INFO.name}
                </p>
                <p className="text-xs text-[#657184] mt-0.5">
                  {BUSINESS_INFO.category}
                </p>
              </div>

              <div className="border-t border-[#E1E6ED] pt-4">
                <span className="block text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
                  Verified Telephone
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-lg font-bold text-[#168C8C] hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-xs text-[#657184] mt-1">
                  Click-to-call available from any mobile or desktop dialer.
                </p>
              </div>

              <div className="border-t border-[#E1E6ED] pt-4">
                <span className="block text-xs font-semibold text-[#657184] uppercase tracking-wider mb-1">
                  Physical Address
                </span>
                <p className="text-sm text-[#293443] leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div className="border-t border-[#E1E6ED] pt-4 text-xs text-[#657184] space-y-1">
                <p className="font-semibold text-[#172B4D]">Important Transparency Note:</p>
                <p>
                  We list only verified contact information. The center does not advertise public email accounts or unverified social media profiles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Real Backend Integration */}
          <div className="lg:col-span-7">
            <div className="border border-[#E1E6ED] bg-[#FFFFFF] p-6 sm:p-10 shadow-none">
              <h2 className="text-xl font-bold text-[#172B4D] mb-2">
                Document &amp; Graphic Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-[#657184] mb-8 leading-relaxed">
                Provide basic details of the work you need. Submissions are processed by our secure server. No sensitive personal data (such as CNIC or banking details) is required or collected.
              </p>

              {/* Success Notification */}
              {submitSuccess && (
                <div
                  role="alert"
                  className="mb-8 p-6 bg-[#F5F7FA] border border-[#168C8C] text-[#293443] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#168C8C]">
                      Enquiry Submitted Successfully
                    </span>
                    {submitSuccess.id && (
                      <span className="font-mono text-xs text-[#657184]">
                        Ref: {submitSuccess.id}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[#172B4D]">
                    {submitSuccess.message}
                  </p>
                  <p className="text-xs text-[#657184] leading-relaxed">
                    The center will review your submission and contact you via your provided telephone number. If your requirement is time-sensitive, feel free to call directly at {BUSINESS_INFO.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(null)}
                    className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#168C8C] hover:underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              )}

              {/* Server-level Error Notification */}
              {serverError && (
                <div
                  role="alert"
                  className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm space-y-1"
                >
                  <p className="font-semibold">{serverError}</p>
                  <p className="text-xs text-red-700">
                    If online submission fails, you can reach the center immediately by calling{' '}
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="font-bold underline">
                      {BUSINESS_INFO.phone}
                    </a>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field for bot/spam protection (hidden via CSS and aria-hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_check">Leave this field blank</label>
                  <input
                    id="hp_check"
                    type="text"
                    name="hp_check"
                    value={formData.hp_check}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5"
                  >
                    Full Name <span className="text-[#168C8C]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    maxLength={80}
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full px-4 py-2.5 text-sm bg-[#FFFFFF] border rounded-none text-[#293443] focus:outline-none focus:ring-1 transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#E1E6ED] focus:border-[#168C8C] focus:ring-[#168C8C]'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5"
                  >
                    Phone Number <span className="text-[#168C8C]">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    required
                    maxLength={25}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 0331 6025262"
                    aria-invalid={!!errors.phoneNumber}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    className={`w-full px-4 py-2.5 text-sm bg-[#FFFFFF] border rounded-none text-[#293443] focus:outline-none focus:ring-1 transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#E1E6ED] focus:border-[#168C8C] focus:ring-[#168C8C]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p id="phoneNumber-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.phoneNumber}
                    </p>
                  )}
                  <p className="mt-1 text-[11px] text-[#657184]">
                    Used strictly by the center to contact you regarding your enquiry.
                  </p>
                </div>

                {/* Type of Work Required */}
                <div>
                  <label
                    htmlFor="workType"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5"
                  >
                    Type of Work Required <span className="text-[#168C8C]">*</span>
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm bg-[#FFFFFF] border border-[#E1E6ED] rounded-none text-[#293443] focus:outline-none focus:border-[#168C8C] focus:ring-1 focus:ring-[#168C8C]"
                  >
                    {workTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Brief Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5"
                  >
                    Brief Description <span className="text-[#168C8C]">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    required
                    maxLength={2000}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the document, paper size, approximate length, or design requirements..."
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                    className={`w-full px-4 py-2.5 text-sm bg-[#FFFFFF] border rounded-none text-[#293443] focus:outline-none focus:ring-1 transition-colors ${
                      errors.description
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#E1E6ED] focus:border-[#168C8C] focus:ring-[#168C8C]'
                    }`}
                  />
                  {errors.description && (
                    <p id="description-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.description}
                    </p>
                  )}
                  <p className="mt-1 text-[11px] text-[#657184] text-right">
                    {formData.description.length}/2000 characters
                  </p>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label
                    htmlFor="preferredContact"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-1.5"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm bg-[#FFFFFF] border border-[#E1E6ED] rounded-none text-[#293443] focus:outline-none focus:border-[#168C8C] focus:ring-1 focus:ring-[#168C8C]"
                  >
                    <option value="Phone Call">Phone Call (Recommended)</option>
                    <option value="SMS Message">SMS Message</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#168C8C] hover:bg-[#127070] disabled:bg-[#657184] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172B4D]"
                  >
                    {isSubmitting ? 'Transmitting Enquiry...' : 'Submit Enquiry to Center'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
