import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { SeoHelmet } from '@/components/SeoHelmet';
import { PageBanner } from '@/components/PageBanner';
import { EditorialCard } from '@/components/EditorialCard';
import { appleCollegeConfig } from '@/data/appleCollegeData';

export const AdmissionsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    programme: 'B.Sc. Nursing (4-Year Degree · BiPC)',
    preferredDate: '',
    qualification: 'Intermediate (10+2) BiPC Completed',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [successModal, setSuccessModal] = useState(false);

  const steps = [
    {
      step: '01',
      title: 'Submit Admission Enquiry',
      desc: 'Fill out the online consultation form or contact our Nagaram campus admissions team to register interest.',
    },
    {
      step: '02',
      title: 'Eligibility Verification',
      desc: 'Our academic counselors verify your Intermediate (10+2) stream, marks, and applicable nursing council criteria.',
    },
    {
      step: '03',
      title: 'Counseling & Campus Tour',
      desc: 'Visit our campus at Bandlaguda Cross Road, inspect our Skills Lab and 3D Anatomy Room, and discuss course details.',
    },
    {
      step: '04',
      title: 'Document Submission & Enrollment',
      desc: 'Submit original certificates, complete enrollment formalities, and receive your academic schedule and orientation kit.',
    },
  ];

  const requiredDocuments = [
    'SSC / 10th Standard Marks Memo (Original & Copies)',
    'Intermediate / (10+2) Marks Memo (Original & Copies)',
    'Transfer Certificate (T.C.) & Study / Conduct Certificates',
    'Migration Certificate (for non-Telangana Board students)',
    'Caste Certificate & Income Certificate (if claiming reservation/scholarship)',
    'Aadhaar Card Copy of Student & Parent',
    'Recent Passport-Sized Photographs (8 Copies)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please fill in your full name and phone number.');
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setSuccessModal(true);

      // WhatsApp dispatch link
      const text = `*New Admission Enquiry - Apple College of Nursing*%0A%0A*Name:* ${encodeURIComponent(
        formData.fullName
      )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(
        formData.email || 'Not provided'
      )}%0A*Programme:* ${encodeURIComponent(
        formData.programme
      )}%0A*Qualification:* ${encodeURIComponent(
        formData.qualification
      )}%0A*Preferred Date:* ${encodeURIComponent(
        formData.preferredDate || 'Earliest available'
      )}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}`;

      // Open WhatsApp in background/tab
      const waUrl = `https://wa.me/${appleCollegeConfig.whatsappDigits}?text=${text}`;
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <>
      <SeoHelmet
        title="Admissions 2026-27 | Apple College of Nursing"
        description="Apply for B.Sc. Nursing (4-Year Degree) and GNM (3-Year Diploma) at Apple College of Nursing in Nagaram, Hyderabad. Review admission process, eligibility requirements, documents checklist, and submit your enquiry form."
      />

      {/* INNER-PAGE BANNER */}
      <PageBanner
        tag="ENROLLMENT & COUNSELING"
        title="Admission Guidance for Nursing Candidates"
        highlightPhrase="Nursing Candidates"
        description="Begin your healthcare education with Apple College of Nursing. Submit your admission enquiry for B.Sc. Nursing and GNM diploma courses in Nagaram, Hyderabad."
        breadcrumbs={[{ label: 'Admissions' }]}
        bgImage="/images/hero-nursing-student.jpg"
      />

      {/* SECTION: PROGRAMMES & ELIGIBILITY TABLE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>AVAILABLE PROGRAMMES & ELIGIBILITY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Eligible Pathways for the Current Academic Session
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Check the eligibility requirements below. Sponsoring Society:{' '}
              <strong className="text-[#132847]">{appleCollegeConfig.sponsoringSociety}</strong> (Reg. No.{' '}
              {appleCollegeConfig.registrationNumber}).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Programme 1: B.Sc. Nursing */}
            <EditorialCard
              theme="peach"
              graphic="medical"
              statusBadge="Degree Course • 4 Years"
              title="B.Sc. Nursing"
              description="Four-year undergraduate degree program combining biological sciences, anatomy demonstrations, simulation laboratories, and supervised hospital ward exposure."
              linkText="View Full B.Sc. Nursing Syllabus & Details"
              linkTo="/academics/bsc-nursing"
            >
              <div className="mt-4 pt-3 border-t border-black/5 space-y-2 text-xs">
                <div className="font-bold text-[#132847] uppercase tracking-wider text-[11px]">
                  Eligibility Requirement:
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0 mt-0.5" />
                  <span>
                    Passed Intermediate (10+2) with Physics, Chemistry, Biology (BiPC) and English.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0 mt-0.5" />
                  <span>Minimum 17 years completed as on 31st December of the admission year.</span>
                </div>
              </div>
            </EditorialCard>

            {/* Programme 2: GNM */}
            <EditorialCard
              theme="mint"
              graphic="chevron"
              statusBadge="Diploma Course • 3 Years"
              title="General Nursing & Midwifery (GNM)"
              description="Three-year professional diploma course focusing on vital signs monitoring, bedside patient routines, maternal health, and community nursing readiness."
              linkText="View Full GNM Diploma Details"
              linkTo="/academics/gnm"
            >
              <div className="mt-4 pt-3 border-t border-black/5 space-y-2 text-xs">
                <div className="font-bold text-[#132847] uppercase tracking-wider text-[11px]">
                  Eligibility Requirement:
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0 mt-0.5" />
                  <span>
                    Passed Intermediate (10+2) or equivalent from Any Stream/Group recognized by the board.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0 mt-0.5" />
                  <span>Delivered alongside sister diploma institution Apple School of Nursing.</span>
                </div>
              </div>
            </EditorialCard>
          </div>
        </div>
      </section>

      {/* SECTION: 4-STEP ADMISSION PROCESS */}
      <section className="py-16 sm:py-20 bg-hex-pattern border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
              <span className="text-base font-extrabold leading-none">~</span>
              <span>HOW TO APPLY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
              Simple 4-Step Admission Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear, transparent guidance from your initial enquiry to your first day in the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => {
              const themes: ('peach' | 'mint' | 'lavender' | 'blue')[] = [
                'peach',
                'mint',
                'lavender',
                'blue',
              ];
              const graphics: ('circles' | 'blocks' | 'semicircles' | 'chevron')[] = [
                'circles',
                'blocks',
                'semicircles',
                'chevron',
              ];
              return (
                <EditorialCard
                  key={idx}
                  theme={themes[idx % themes.length]}
                  graphic={graphics[idx % graphics.length]}
                  statusBadge={`Step ${st.step} • Priority`}
                  title={st.title}
                  description={st.desc}
                  linkText="Get Guidance"
                  linkTo="#enquiry-form"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: REQUIRED DOCUMENTS CHECKLIST */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E5E]">
                <span className="text-base font-extrabold leading-none">~</span>
                <span>DOCUMENTATION CHECKLIST</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#132847] tracking-tight">
                Required Documents for Admission
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Candidates are requested to bring original certificates along with 3 sets of self-attested
                photocopies during counseling and enrollment at our Nagaram campus office.
              </p>

              <div className="space-y-2.5 pt-2">
                {requiredDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 flex items-center gap-3 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ADMISSION FORM CARD (Medova White Consultation Card) */}
            <div id="enquiry-form" className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl space-y-6">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E5E]">
                    APPLY / ENQUIRE ONLINE
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-[#132847]">
                    Book an Admission Consultation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Schedule a campus visit or discuss course eligibility with our admissions team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#132847]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#132847]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="candidate@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#132847]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Course of Interest *
                      </label>
                      <select
                        value={formData.programme}
                        onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                      >
                        <option value="B.Sc. Nursing (4-Year Degree · BiPC)">
                          B.Sc. Nursing (4-Year Degree · Inter BiPC)
                        </option>
                        <option value="General Nursing & Midwifery (GNM · 3-Year Diploma)">
                          General Nursing & Midwifery (GNM · 3-Year Diploma)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Intermediate Qualification
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                      >
                        <option value="Intermediate (10+2) BiPC Completed">
                          Inter (10+2) BiPC Completed
                        </option>
                        <option value="Intermediate (10+2) Other Group Completed">
                          Inter (10+2) Other Stream (MPC/CEC/HEC)
                        </option>
                        <option value="Appearing for Inter Second Year">
                          Appearing for Inter Final Exams
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Campus Visit Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 focus:outline-none focus:border-[#132847]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Questions / Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask questions regarding fee schedule, hostel facilities, or document verification..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#F8F9FD] border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#132847]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Connecting to Admissions Desk...</span>
                    ) : (
                      <>
                        <span>Submit Admission Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="pt-2 text-center text-[11px] text-slate-400">
                  Admissions Helpline: <strong>{appleCollegeConfig.phones[0]}</strong> · Open 09:30AM - 05:00PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIRMATION MODAL */}
      {successModal && (
        <div className="fixed inset-0 z-50 bg-[#0E203F]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full space-y-4 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#EBF7EE] text-[#248568] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display text-2xl font-extrabold text-[#132847]">
              Enquiry Submitted Successfully!
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your enquiry for{' '}
              <strong>{formData.programme}</strong> has been transmitted to our admissions office.
              Our counseling team will contact you shortly on <strong>{formData.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={() => setSuccessModal(false)}
              className="w-full py-3 rounded-xl bg-[#132847] text-white text-xs font-bold hover:bg-[#0E1D33] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
