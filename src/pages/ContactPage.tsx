import React, { useState } from 'react';
import {
  Send,
  Building,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { AdmissionCtaBanner } from '@/components/AdmissionCtaBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const ContactPage: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.phone.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }

    setSubmitted(true);

    const waText = `*New Contact Message - Apple College of Nursing*%0A%0A*Name:* ${encodeURIComponent(
      contactForm.name
    )}%0A*Phone:* ${encodeURIComponent(contactForm.phone)}%0A*Email:* ${encodeURIComponent(
      contactForm.email || 'None'
    )}%0A*Subject:* ${encodeURIComponent(
      contactForm.subject
    )}%0A*Message:* ${encodeURIComponent(contactForm.message || 'None')}`;

    window.open(`https://wa.me/${appleCollegeConfig.whatsappDigits}?text=${waText}`, '_blank');
  };

  return (
    <>
      <SeoHelmet
        title="Contact Us & Campus Location | Apple College of Nursing"
        description="Get in touch with Apple College of Nursing in Nagaram, Hyderabad. Verified address at Bandlaguda Cross Road, Keesara. Phone: +91 93464 10606. Sponsoring Society: Telangana Xpress Educational Society."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="GET IN TOUCH"
        title="Contact Apple College Admissions & Campus Office"
        highlightPhrase="Campus Office"
        description="We welcome prospective nursing candidates, parents, and healthcare partners to connect with our administrative and counseling teams in Nagaram, Hyderabad."
        breadcrumbs={[{ label: 'Contact Us' }]}
        bgImage="/images/gallery-campus-frontage.jpg"
      />

      {/* CONTACT INFO BLOCKS (Medova 4 Pastel / White Info Cards) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Card 1: Campus Address */}
            <EditorialCard
              theme="peach"
              graphic="chevron"
              statusBadge="Nagaram • Hyderabad"
              title="Campus Location"
              description={appleCollegeConfig.address}
              linkText="Open in Google Maps"
              linkTo={appleCollegeConfig.mapUrl}
            >
              <div className="mt-3 pt-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Landmark: Near Bandlaguda X Roads
              </div>
            </EditorialCard>

            {/* Card 2: Phone Helpline */}
            <EditorialCard
              theme="mint"
              graphic="circles"
              statusBadge="Helpline • Daily"
              title="Admissions Helpline"
              description={`Direct lines: ${appleCollegeConfig.phones[0]} or ${appleCollegeConfig.phones[1]}`}
              linkText="Call Admissions Desk"
              linkTo={`tel:${appleCollegeConfig.phones[0].replace(/[^0-9+]/g, '')}`}
            >
              <div className="mt-3 pt-2 text-[11px] text-slate-500 font-semibold">
                Available: 09:30 AM – 05:00 PM
              </div>
            </EditorialCard>

            {/* Card 3: Email Address */}
            <EditorialCard
              theme="lavender"
              graphic="blocks"
              statusBadge="Direct Mail • 24hr"
              title="Official Admissions Email"
              description={appleCollegeConfig.email}
              linkText="Send Email Query"
              linkTo={`mailto:${appleCollegeConfig.email}`}
            >
              <div className="mt-3 pt-2 text-[11px] text-slate-500 font-semibold">
                Attach marks memos for quick review
              </div>
            </EditorialCard>

            {/* Card 4: Office Timings */}
            <EditorialCard
              theme="slate"
              graphic="semicircles"
              statusBadge="Office Hours • Mon - Sat"
              title="Campus Visiting Desk"
              description="Monday to Saturday: 09:30 AM – 05:00 PM (Saturday till 02:00 PM). Closed on Sundays."
              linkText="Book Campus Tour"
              linkTo="#contact-form"
            >
              <div className="mt-3 pt-2 text-[11px] text-[#248568] font-bold uppercase tracking-wider">
                Walk-ins Welcome
              </div>
            </EditorialCard>
          </div>

          {/* CONTACT FORM & INTERACTIVE MAP EMBED */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Message Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E5E]">
                  SEND A MESSAGE
                </span>
                <h3 className="font-display text-2xl font-extrabold text-[#132847]">
                  Get in Touch with Admissions
                </h3>
                <p className="text-xs text-slate-500">
                  Have questions about admission eligibility, syllabus, or hostel accommodations?
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#EBF7EE] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#248568] text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#132847]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {contactForm.name}. Our admissions desk will review your message and
                    contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#248568] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Rao"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 93464 10606"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                    >
                      <option value="B.Sc. Nursing Admission Inquiry">B.Sc. Nursing Admission Inquiry</option>
                      <option value="GNM Diploma Course Details">GNM Diploma Course Details</option>
                      <option value="Campus Visit & Lab Tour">Campus Visit & Lab Tour</option>
                      <option value="Document Verification / Eligibility">Document Verification / Eligibility</option>
                      <option value="General Inquiries">General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Question
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your query or message here..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#132847] hover:bg-[#0E1D33] text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4 text-[#FF5E5E]" />
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Embed & Campus Directions Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <iframe
                  title="Apple College of Nursing Location Map"
                  src={appleCollegeConfig.mapEmbedUrl}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              <div className="rounded-3xl p-6 sm:p-8 bg-[#132847] text-white shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#34D399] uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>Visiting Our Campus</span>
                </div>
                <h4 className="font-display text-xl font-extrabold text-white">
                  How to Reach Apple College
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our campus is conveniently situated at Bandlaguda Cross Road in Mandal Keesara,
                  Nagaram, Hyderabad (Telangana State - 500083). Direct bus connectivity and accessible
                  transport links connect our campus across Secunderabad and the greater Hyderabad metropolitan area.
                </p>
                <div className="pt-2">
                  <a
                    href={appleCollegeConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <AdmissionCtaBanner
        title="Speak Directly with an Admissions Counselor"
        subtitle="Call +91 93464 10606 or visit our Nagaram campus to discuss course eligibility and complete enrollment."
      />
    </>
  );
};
