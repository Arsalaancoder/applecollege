export interface QuickInfoCard {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  tintClass: string;
  iconBgClass: string;
  iconColorClass: string;
  iconName: 'graduation' | 'stethoscope' | 'clipboard';
}

export interface ProgrammeItem {
  id: string;
  slug: string;
  code: string;
  name: string;
  degreeType: string;
  duration: string;
  eligibility: string;
  shortDescription: string;
  fullDescription: string;
  institutionNote: string;
  imageUrl: string;
  imageAlt: string;
  featured: boolean;
  learningAreas: string[];
  trainingStatement: string;
  careerOpportunities: string[];
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: 'book' | 'microscope' | 'hospital' | 'users' | 'compass';
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CampusExperienceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  spanClass: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classrooms' | 'Laboratories' | 'Practical Learning' | 'Student Activities';
  caption: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FaqItem {
  id: string;
  topic: string;
  question: string;
  answer: string;
}

export const appleCollegeConfig = {
  institutionName: 'Apple College of Nursing',
  parentGroup: 'Orange Colleges',
  parentGroupFull: 'Orange Group of Nursing & Paramedical Colleges',
  parentWebsite: 'https://www.orangecolleges.com/',
  parentCollegePath: 'https://www.orangecolleges.com/colleges/apple-college-of-nursing',
  sisterInstitutionNote:
    'Separate from sister institution Apple School of Nursing (GNM diploma wing on the Nagaram campus).',
  sponsoringSociety: 'Telangana Xpress Educational Society',
  registrationNumber: '214/2025',
  category: 'Nursing College',
  locationShort: 'Nagaram, Hyderabad',
  address:
    'Bandlaguda Cross Road, Mandal: Keesara, Nagaram, Hyderabad, Medchal Dist., Telangana State - 500083',
  shortAddress: 'Bandlaguda Cross Road, Nagaram, Hyderabad - 500083',
  phones: ['+91 94943 52950', '+91 93464 10606'],
  whatsappDigits: '919494352950',
  email: 'info@applecollege.in',
  mapUrl:
    'https://maps.google.com/?q=Bandlaguda+Cross+Road+Keesara+Nagaram+Hyderabad+500083',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Bandlaguda%20Cross%20Road%20Keesara%20Nagaram%20Hyderabad%20500083&t=&z=14&ie=UTF8&iwloc=&output=embed',
  regulatoryNote:
    'Course availability, duration, eligibility, intake, and recognition are governed by applicable Telangana State nursing authorities and Nursing Council norms. Contact the admissions office for current session details.',
};

export const heroData = {
  eyebrow: 'Welcome to Apple College of Nursing · Nagaram, Hyderabad',
  heading: "Building Tomorrow's Healthcare Professionals",
  highlightWord: 'Healthcare',
  description:
    'Discover a learning environment where nursing education, practical experience and professional development come together to prepare students for meaningful careers in healthcare.',
  primaryCta: { label: 'Explore Our Courses', href: '#academics' },
  secondaryCta: { label: 'Apply for Admission', href: '#admissions' },
  imageUrl: '/images/hero-nursing-student.jpg',
  imageAlt: 'Undergraduate nursing student holding clinical chart in ward setting',
};

export const quickInfoCardsData: QuickInfoCard[] = [
  {
    id: 'academic-excellence',
    title: 'Academic Excellence',
    description:
      'Structured undergraduate nursing sciences, anatomy, and classroom instruction built on scientific understanding.',
    ctaLabel: 'Explore Courses',
    href: '#academics',
    tintClass: 'bg-[#F5F7FC] border-[#DFE6F3]',
    iconBgClass: 'bg-[#142C55]/10',
    iconColorClass: 'text-[#142C55]',
    iconName: 'graduation',
  },
  {
    id: 'practical-learning',
    title: 'Practical Learning',
    description:
      'Hands-on nursing foundation skills labs, 3D anatomy demonstrations, and supervised clinical training support.',
    ctaLabel: 'View Facilities',
    href: '#facilities',
    tintClass: 'bg-[#EAF5EE] border-[#CBE5D5]',
    iconBgClass: 'bg-[#248568]/15',
    iconColorClass: 'text-[#248568]',
    iconName: 'stethoscope',
  },
  {
    id: 'admissions',
    title: 'Admissions',
    description:
      'Guidance on B.Sc. Nursing eligibility, required documents, and direct admission counselling in Nagaram, Hyderabad.',
    ctaLabel: 'Enquire Now',
    href: '#admissions',
    tintClass: 'bg-[#FDF8EE] border-[#F3E4C2]',
    iconBgClass: 'bg-[#B45309]/10',
    iconColorClass: 'text-[#92400E]',
    iconName: 'clipboard',
  },
];

export const aboutSectionData = {
  eyebrow: 'About Apple College',
  heading: 'From Scientific Understanding to Nursing Practice',
  introduction:
    'Apple College of Nursing provides structured academic instruction and visual demonstration training in Nagaram, Hyderabad, designed to prepare students for degree-level nursing practice.',
  description:
    'Sponsored by the Telangana Xpress Educational Society (Reg. No. 214/2025) and belonging to Orange Colleges, the institution connects biological and medical sciences with hands-on laboratory routines, collaborative peer study, and ethical patient care.',
  highlights: [
    'Applied Medical & Biological Sciences',
    '3D Anatomy Model Demonstrations',
    'Collaborative Small-Group Learning',
    'Practice-Oriented Clinical Readiness',
  ],
  primaryImage: '/images/about-campus-building.jpg',
  primaryImageAlt: 'Apple College of Nursing campus building at Bandlaguda Cross Road, Keesara, Nagaram',
  secondaryImage: '/images/about-skills-practice.jpg',
  secondaryImageAlt: 'Nursing students practicing clinical assessment with instructor',
  extendedProfile: {
    title: 'Institutional Profile — Apple College of Nursing',
    facts: [
      { label: 'Official Institution', value: 'Apple College of Nursing' },
      { label: 'Parent Group', value: 'Orange Colleges (Orange Group of Nursing & Paramedical Colleges)' },
      { label: 'Sponsoring Society', value: 'Telangana Xpress Educational Society' },
      { label: 'Society Registration', value: 'Reg. No. 214/2025' },
      { label: 'Campus Location', value: 'Bandlaguda Cross Road, Mandal: Keesara, Nagaram, Hyderabad - 500083' },
      { label: 'Primary Focus', value: 'Undergraduate Nursing Degree Education & Applied Clinical Skills' },
    ],
  },
};

export const academicProgrammesData: ProgrammeItem[] = [
  {
    id: 'bsc-nursing',
    slug: 'bsc-nursing',
    code: 'B.Sc. Nursing',
    name: 'Bachelor of Science in Nursing',
    degreeType: 'Undergraduate Degree Programme',
    duration: '4 Years',
    eligibility: 'Intermediate (10+2) with BiPC',
    shortDescription:
      'A 4-year professional undergraduate nursing degree combining nursing science, anatomy, skills laboratories, and supervised clinical exposure.',
    fullDescription:
      'The B.Sc. Nursing curriculum builds strong academic foundations in nursing sciences, human anatomy and physiology, healthcare practices, bedside patient care, and clinical procedures.',
    institutionNote: 'Flagship undergraduate degree offered at Apple College of Nursing, Nagaram, Hyderabad.',
    imageUrl: '/images/program-bsc-nursing.jpg',
    imageAlt: 'B.Sc. Nursing students observing clinical demonstration with ventilator monitor',
    featured: true,
    learningAreas: [
      'Fundamentals of Nursing',
      'Anatomy & Physiology',
      'Nutrition & Dietetics',
      'Medical-Surgical Nursing',
      'Community Health Nursing',
      'Child Health Nursing',
      'Mental Health Nursing',
      'Maternal & Obstetric Nursing',
      'Nursing Research',
      'Supervised Clinical Practice',
    ],
    trainingStatement:
      'Students receive a balanced combination of classroom instruction, skills laboratory training, anatomical demonstration, and supervised clinical exposure.',
    careerOpportunities: [
      'Multispecialty Hospitals',
      'Nursing Homes & Clinics',
      'Community Health Centres',
      'Public Health Organizations',
      'Healthcare & Educational Institutions',
      'Home Healthcare Services',
    ],
  },
  {
    id: 'gnm',
    slug: 'gnm',
    code: 'GNM',
    name: 'General Nursing & Midwifery',
    degreeType: 'Professional Nursing Diploma',
    duration: '3 Years',
    eligibility: 'Intermediate (10+2) Any Group',
    shortDescription:
      'A 3-year nursing diploma focused on bedside care routines, maternal health, midwifery, and community healthcare readiness.',
    fullDescription:
      'Students are introduced to core nursing fundamentals, medical-surgical care, community health outreach, maternal and child health, and clinical bedside routines.',
    institutionNote:
      'Listed on the Apple College of Nursing profile and delivered alongside sister diploma institution Apple School of Nursing at the Nagaram campus.',
    imageUrl: '/images/program-gnm-nursing.jpg',
    imageAlt: 'Nursing students practicing blood pressure monitoring and bedside care',
    featured: false,
    learningAreas: [
      'Nursing Fundamentals',
      'Anatomy & Physiology',
      'Nutrition',
      'Medical-Surgical Nursing',
      'Community Health Nursing',
      'Child Health Nursing',
      'Mental Health Nursing',
      'Midwifery & Maternal Care',
      'Clinical Nursing Practice',
    ],
    trainingStatement:
      'Combines classroom study with hands-on practice in nursing skills laboratories and practical clinical training environments.',
    careerOpportunities: [
      'Hospitals & Ward Care',
      'Maternity & Nursing Homes',
      'Primary Healthcare Centres',
      'Community Health Clinics',
      'Home Healthcare Support',
    ],
  },
];

export const whyChooseData = {
  eyebrow: 'Why Choose Apple College',
  heading: 'Focused on Applied Nursing Competence & Care',
  description:
    'At our Nagaram, Hyderabad campus, every classroom lecture and demonstration session is structured to bridge scientific knowledge with confident, compassionate patient care.',
  advantages: [
    {
      id: 'adv-1',
      title: 'Applied Medical Sciences Curriculum',
      description:
        'Connects biological, anatomical, and physiological principles directly to everyday nursing procedures.',
      iconName: 'book',
    },
    {
      id: 'adv-2',
      title: 'Visual 3D Anatomy & Skills Labs',
      description:
        'Hands-on training with skeletal structures, 3D anatomical models, nursing manikins, and patient-care stations.',
      iconName: 'microscope',
    },
    {
      id: 'adv-3',
      title: 'Supervised Clinical Training Support',
      description:
        'Faculty-guided ward preparation, vitals assessment discipline, and patient safety protocols.',
      iconName: 'hospital',
    },
    {
      id: 'adv-4',
      title: 'Small-Group Collaborative Mentorship',
      description:
        'Peer skill demonstrations, nursing case-study discussions, and attentive faculty mentoring.',
      iconName: 'users',
    },
    {
      id: 'adv-5',
      title: 'Academic & Career Guidance',
      description:
        'Structured orientation for clinical readiness, healthcare ethics, and higher nursing education pathways.',
      iconName: 'compass',
    },
  ] satisfies AdvantageItem[],
  mainImage: '/images/why-clinical-rounds.jpg',
  mainImageAlt: 'Nursing faculty guiding students during clinical ward briefing',
  overlayImageOne: '/images/why-communication.jpg',
  overlayImageOneAlt: 'Interactive small-group nursing communication workshop',
  overlayImageTwo: '/images/why-counselling.jpg',
  overlayImageTwoAlt: 'Individual academic mentoring and student counselling session',
};

export const facilitiesData: FacilityItem[] = [
  {
    id: 'nursing-skills-lab',
    title: 'Nursing Foundation Skills Lab',
    category: 'Practical Training',
    description:
      'Practical training stations equipped with patient-care manikins, hospital beds, stethoscopes, and clinical simulation setups.',
    imageUrl: '/images/facility-skills-lab.jpg',
    imageAlt: 'Students practicing clinical care on a simulation manikin in the Nursing Skills Lab',
  },
  {
    id: 'anatomy-demo-room',
    title: 'Anatomy Demonstration Room',
    category: 'Applied Sciences',
    description:
      'Dedicated visual learning space equipped with 3D anatomical models, organ specimens, and skeletal structures for faculty demonstrations.',
    imageUrl: '/images/facility-anatomy-demo.jpg',
    imageAlt: 'Faculty demonstrating human anatomy using a 3D torso model to nursing students',
  },
  {
    id: 'smart-classrooms',
    title: 'Interactive Smart Classrooms',
    category: 'Academic',
    description:
      'Spacious lecture halls featuring digital display boards, anatomical charts, audio-visual teaching aids, and ergonomic seating.',
    imageUrl: '/images/facility-smart-classroom.jpg',
    imageAlt: 'Instructor teaching cardiovascular anatomy on an interactive smart display',
  },
  {
    id: 'library-resources',
    title: 'Library & Learning Resources',
    category: 'Learning',
    description:
      'Medical reference textbooks, nursing journals, pathology handbooks, and quiet reading tables supporting academic study.',
    imageUrl: '/images/facility-library.jpg',
    imageAlt: 'Nursing students studying reference textbooks in the college library',
  },
  {
    id: 'computer-facility',
    title: 'Informatics Computer Facility',
    category: 'Digital Learning',
    description:
      'Computer terminals supporting health informatics coursework, clinical documentation literacy, and academic research.',
    imageUrl: '/images/facility-computer-lab.jpg',
    imageAlt: 'Faculty assisting students at computer workstations in the informatics lab',
  },
  {
    id: 'seminar-hall',
    title: 'Seminar & Training Hall',
    category: 'Workshops',
    description:
      'Audio-visual seminar hall hosting academic lectures, health awareness talks, and student clinical workshops.',
    imageUrl: '/images/facility-seminar-hall.jpg',
    imageAlt: 'Nursing students attending a seminar presentation on patient safety',
  },
];

export const campusExperienceData: CampusExperienceItem[] = [
  {
    id: 'cpr-workshop',
    title: 'CPR & Emergency Readiness Workshops',
    tag: 'Skill Development',
    description:
      'Guided basic life support orientation, vitals monitoring, and practical resuscitation drills.',
    imageUrl: '/images/campus-cpr-workshop.jpg',
    imageAlt: 'Instructor guiding nursing students during a CPR resuscitation workshop',
    spanClass: 'md:col-span-7 md:row-span-2',
  },
  {
    id: 'health-awareness',
    title: 'Health Awareness Initiatives',
    tag: 'Community Health',
    description:
      'Student-led hygiene, preventive wellness, and public health awareness activities.',
    imageUrl: '/images/campus-health-awareness.jpg',
    imageAlt: 'Nursing students conducting a hand hygiene and health awareness booth',
    spanClass: 'md:col-span-5',
  },
  {
    id: 'outreach-camp',
    title: 'Community Outreach Camps',
    tag: 'Field Learning',
    description:
      'Supervised vitals screening and health education outreach in local communities.',
    imageUrl: '/images/campus-outreach-camp.jpg',
    imageAlt: 'Nursing students checking blood pressure during a community outreach camp',
    spanClass: 'md:col-span-5',
  },
  {
    id: 'cultural-fest',
    title: 'Campus Community & Celebrations',
    tag: 'Student Life',
    description:
      'Academic milestones, cultural events, and collaborative campus activities fostering unity.',
    imageUrl: '/images/campus-cultural-fest.jpg',
    imageAlt: 'Nursing students performing on stage during the annual campus cultural celebration',
    spanClass: 'md:col-span-12',
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-campus-frontage',
    title: 'Nagaram Campus Building',
    category: 'Campus',
    caption: 'Apple College campus at Bandlaguda Cross Road, Mandal: Keesara, Nagaram, Hyderabad.',
    imageUrl: '/images/gallery-campus-frontage.jpg',
    imageAlt: 'Exterior view of the Apple nursing campus building in Keesara, Nagaram',
  },
  {
    id: 'gal-lecture-hall',
    title: 'Anatomy & Nursing Lecture Room',
    category: 'Classrooms',
    caption: 'Structured classroom setup with anatomical wall charts and projection screen.',
    imageUrl: '/images/gallery-lecture-hall.png',
    imageAlt: 'Lecture classroom with anatomical charts and whiteboard',
  },
  {
    id: 'gal-science-lab',
    title: 'Applied Sciences & Microbiology Lab',
    category: 'Laboratories',
    caption: 'Supervised laboratory session building foundational biological and diagnostic observation skills.',
    imageUrl: '/images/gallery-science-lab.jpg',
    imageAlt: 'Students working with microscopes and laboratory equipment',
  },
  {
    id: 'gal-guest-lecture',
    title: 'Medical Specialist Guest Lecture',
    category: 'Practical Learning',
    caption: 'Academic sessions delivered by senior clinicians and healthcare educators.',
    imageUrl: '/images/gallery-guest-lecture.jpg',
    imageAlt: 'Medical educator delivering a presentation to nursing students',
  },
  {
    id: 'gal-poster-session',
    title: 'Academic Poster Presentation',
    category: 'Student Activities',
    caption: 'Students presenting evidence-based healthcare posters to academic evaluators.',
    imageUrl: '/images/gallery-poster-session.jpg',
    imageAlt: 'Students presenting a clinical study poster in front of faculty panel',
  },
  {
    id: 'gal-peer-study',
    title: 'Collaborative Peer Study Session',
    category: 'Student Activities',
    caption: 'Small-group textbook review and clinical case discussions in the tiered classroom.',
    imageUrl: '/images/gallery-peer-study.png',
    imageAlt: 'Nursing students collaborating in small groups with textbooks in a lecture hall',
  },
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq-courses',
    topic: 'Available Courses',
    question: 'What nursing programmes are offered at Apple College of Nursing?',
    answer:
      'Apple College of Nursing offers the 4-year undergraduate B.Sc. Nursing degree programme. On the Nagaram campus, the 3-year GNM (General Nursing & Midwifery) diploma pathway is also listed alongside sister diploma institution Apple School of Nursing.',
  },
  {
    id: 'faq-eligibility',
    topic: 'Eligibility',
    question: 'What are the admission eligibility requirements for B.Sc. Nursing and GNM?',
    answer:
      'B.Sc. Nursing requires Intermediate (10+2) with a BiPC (Biology, Physics, Chemistry) background from a recognized board. GNM accepts Intermediate (10+2) graduates from any stream, subject to applicable state nursing council guidelines.',
  },
  {
    id: 'faq-duration',
    topic: 'Course Duration',
    question: 'What is the duration of the nursing programmes?',
    answer:
      'B.Sc. Nursing is a 4-year undergraduate degree programme combining classroom nursing sciences, skills laboratory practice, and supervised clinical exposure. GNM is a 3-year diploma programme.',
  },
  {
    id: 'faq-application',
    topic: 'Application Process',
    question: 'How can prospective students apply for admission?',
    answer:
      'Prospective students can submit an online admission enquiry directly through this website, call our admissions helpline (+91 93464 10606 / +91 94943 52950), or visit our campus office at Bandlaguda Cross Road, Mandal: Keesara, Nagaram, Hyderabad for application guidance and counseling.',
  },
  {
    id: 'faq-facilities',
    topic: 'Facilities',
    question: 'What practical learning facilities are available for nursing students?',
    answer:
      'Students have access to the Nursing Foundation Skills Lab, 3D Anatomy Demonstration Room, Interactive Smart Classrooms, Medical Reference Library, Informatics Computer Facility, Seminar Hall, and supervised Clinical Training Support.',
  },
  {
    id: 'faq-contact',
    topic: 'Contact & Location',
    question: 'Where is Apple College of Nursing located and who sponsors the institution?',
    answer:
      'Apple College of Nursing is located at Bandlaguda Cross Road, Mandal: Keesara, Nagaram, Hyderabad, Medchal Dist., Telangana State - 500083. It is sponsored by the Telangana Xpress Educational Society (Reg. No. 214/2025) and belongs to Orange Colleges.',
  },
];

