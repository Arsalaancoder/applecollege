import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { appleCollegeConfig } from '@/data/appleCollegeData';

interface AdmissionEnquirySectionProps {
  preselectedProgramme?: string;
}

export const AdmissionEnquirySection: React.FC<AdmissionEnquirySectionProps> = ({
  preselectedProgramme = '',
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    email: '',
    programme: preselectedProgramme || 'B.Sc. Nursing',
    preferredDate: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedProgramme) {
      setFormData((prev) => ({ ...prev, programme: preselectedProgramme }));
    }
  }, [preselectedProgramme]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const getSummary = () => {
    return [
      `Admission Appointment Request — Apple College of Nursing`,
      `Student Name: ${formData.studentName.trim()}`,
      `Phone Number: ${formData.phone.trim()}`,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
      `Programme: ${formData.programme}`,
      formData.preferredDate ? `Preferred Visit Date: ${formData.preferredDate}` : null,
      formData.message.trim() ? `Questions/Notes: ${formData.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const whatsappUrl = `https://wa.me/${appleCollegeConfig.whatsappDigits}?text=${encodeURIComponent(
    getSummary()
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your full name.');
      return;
    }
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setStatus('error');
      setErrorMessage('Please provide a valid 10-digit phone number.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await new Promise((res) => setTimeout(res, 500));
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  return (
    <section
      id="admissions"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#132847] overflow-hidden"
    >
      {/* Background Hospital Room / Ward Image on Right Side (Medova style) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0">
        <img
          src="/images/appointment-ward-bg.jpg"
          alt="Modern clinical ward"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#132847]/75 lg:bg-gradient-to-r lg:from-[#132847] lg:via-[#132847]/70 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Medova White Appointment Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-100"
          >
            <div className="space-y-1.5 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5E5E]">
                APPLY FOR ADMISSION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#132847] leading-tight">
                Book an Appointment for Expert Consultation
              </h2>
              <p className="text-xs text-slate-500">
                Schedule a campus visit or discuss course eligibility with our admissions team.
              </p>
            </div>

            {status === 'success' ? (
              <div className="rounded-xl bg-[#EBF7EE] border border-[#D9EEDF] p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#248568] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-[#132847]">
                    Enquiry Details Ready
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Thank you, <strong>{formData.studentName}</strong>. Your enquiry has been prepared for WhatsApp dispatch.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#248568] hover:bg-[#1b6951] text-white text-xs font-bold transition-colors"
                  >
                    <span>Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        studentName: '',
                        phone: '',
                        email: '',
                        programme: 'B.Sc. Nursing',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:underline"
                  >
                    Submit Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      name="studentName"
                      placeholder="Your Name *"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F7FC] border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#132847] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F7FC] border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#132847] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F7FC] border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#132847] focus:outline-none"
                    />
                  </div>
                  <div>
                    <select
                      name="programme"
                      value={formData.programme}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F7FC] border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:border-[#132847] focus:outline-none"
                    >
                      <option value="B.Sc. Nursing">B.Sc. Nursing (4-Year Degree · BiPC)</option>
                      <option value="GNM">GNM (3-Year Diploma · Any Stream)</option>
                      <option value="General Admission Enquiry">General Admission Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5F7FC] border border-slate-200 rounded-lg text-slate-800 focus:bg-white focus:border-[#132847] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Message / Questions regarding admission, hostels or certificates..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F5F7FC] border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#132847] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-md bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Make Appointment</span>
                      <Calendar className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Key Admissions Highlight Notes over Hospital photo */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 text-white space-y-4 lg:pl-6"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#38B6FF]">
              Nagaram, Hyderabad Campus
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-snug">
              Begin Your Nursing Journey with Transparent Guidance
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-lg">
              Visit our campus on Bandlaguda Cross Road, Keesara, Nagaram to tour the Nursing
              Foundation Skills Lab and Anatomy Demonstration Room.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                <span>Sponsored by Telangana Xpress Educational Society (Reg. 214/2025)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                <span>Admissions Helpline: {appleCollegeConfig.phones[0]} | {appleCollegeConfig.phones[1]}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
