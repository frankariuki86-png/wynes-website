export const siteInfo = {
  name: 'Wynes Technical Training Institute',
  shortName: 'WynesTTI',
  tagline: 'Empowering Students With Practical Skills For The Future',
  description:
    'Practical training, industry-relevant courses, experienced trainers and a learning environment built to prepare students for employment, entrepreneurship and lifelong success.',
  phone: '+254 712 450 603',
  phoneDigits: '254712450603',
  email: 'wynestti@gmail.com',
  address: 'P.O. Box 2626-20100, Nakuru, Kenya',
  whatsapp: '254712450603',
  facebook: 'https://www.facebook.com/profile.php?id=61574055930482',
  tiktok: 'https://www.tiktok.com/@wynnesbeauty?_t=ZM-90JshcWoH1P&_r=1',
};

export const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Student Life / Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const photoBase = `${import.meta.env.BASE_URL}wynes%20photos`;
const photoUrl = (fileName) => `${photoBase}/${fileName}`;

export const heroSlides = [
  photoUrl('gallery.jpeg'),
  photoUrl('gallerly1.jpeg'),
  photoUrl('gallerly2.jpeg'),
];

export const aboutPoints = [
  'Hands-on training centered on industry skills and professional growth.',
  'A supportive learning culture that nurtures creativity and confidence.',
  'A commitment to preparing graduates for work, enterprise and service to community.',
];

export const courses = [
  {
    title: 'Beauty',
    category: 'Beauty',
    duration: '6-12 months',
    image: photoUrl('gallerly3.jpeg'),
    description: 'Comprehensive beauty and cosmetology training covering hair dressing, beauty therapy, fashion and professional salon services.',
  },
  {
    title: 'ICT',
    category: 'ICT',
    duration: '4-12 months',
    image: photoUrl('ict.jpeg'),
    description: 'Practical ICT programs including computer packages, basic web design and maintenance focused on employability.',
  },
  {
    title: 'Care Giving',
    category: 'Care Giving',
    duration: '6-12 months',
    image: photoUrl('gallerly4.jpeg'),
    description: 'Practical caregiver training covering compassionate support, personal care, safety, first aid awareness and assistance with daily living.',
  },
];

export const whyChoose = [
  {
    title: 'Qualified Trainers',
    description: 'Experienced tutors who focus on practical understanding and student confidence.',
  },
  {
    title: 'Hands-on Learning',
    description: 'Workshop-driven instruction that builds employable skills from day one.',
  },
  {
    title: 'Modern Learning Environment',
    description: 'A professional campus atmosphere designed for focused and engaging training.',
  },
  {
    title: 'Flexible Intakes',
    description: 'Admissions designed to give students timely opportunities to begin training.',
  },
  {
    title: 'Career Growth',
    description: 'Programs aligned to employment, entrepreneurship and self-reliance.',
  },
  {
    title: 'Student Support',
    description: 'Guidance that helps learners settle, progress and complete successfully.',
  },
];

export const stats = [
  { label: 'Students Guided', value: 850 },
  { label: 'Courses Offered', value: 3 },
  { label: 'Years of Excellence', value: 8 },
  { label: 'Career Pathways', value: 3 },
];

export const galleryImages = [
  { src: photoUrl('gallery.jpeg'), alt: 'WynesTTI campus life' },
  { src: photoUrl('gallerly1.jpeg'), alt: 'WynesTTI students and leadership' },
  { src: photoUrl('gallerly2.jpeg'), alt: 'Training lab' },
  { src: photoUrl('gallerly3.jpeg'), alt: 'Beauty and cosmetology training' },
  { src: photoUrl('gallerly4.jpeg'), alt: 'Practical workshop' },
  { src: photoUrl('gallerly5.jpeg'), alt: 'Student projects' },
  { src: photoUrl('gallerly6.jpeg'), alt: 'WynesTTI student activities' },
  { src: photoUrl('gallerly7.jpeg'), alt: 'Celebration moment' },
  { src: photoUrl('gallery-20261123-wa0279.jpg'), alt: 'WynesTTI representatives at a caregiver event' },
  { src: photoUrl('gallery-20261123-wa0280.jpg'), alt: 'Students practising hair styling' },
  { src: photoUrl('gallery-20261123-wa0284.jpg'), alt: 'WynesTTI students together outside campus' },
  { src: photoUrl('gallery-20261123-wa0287.jpg'), alt: 'WynesTTI representative at a caregiver event' },
  { src: photoUrl('gallery-20261123-wa0288-promo.jpg'), alt: 'Beauty therapy training promotion' },
  { src: photoUrl('gallery-20261123-wa0288-promo-copy.jpg'), alt: 'Beauty therapy training promotion image' },
  { src: photoUrl('gallery-20261123-wa0290.jpg'), alt: 'Student practising hair care' },
  { src: photoUrl('gallery-20261123-wa0292.jpg'), alt: 'Students practising in the beauty classroom' },
  { src: photoUrl('gallery-20261123-wa0293.jpg'), alt: 'WynesTTI representatives at a caregiver event' },
  { src: photoUrl('gallery-20261123-wa0297.jpg'), alt: 'Student practising a haircut' },
  { src: photoUrl('gallery-20261123-wa0298.jpg'), alt: 'Students learning barbering skills' },
  { src: photoUrl('gallery-20261123-wa0299.jpg'), alt: 'WynesTTI students celebrating together' },
  { src: photoUrl('gallery-20261123-wa0301.jpg'), alt: 'Student practising hair care' },
  { src: photoUrl('gallery-20261123-wa0305.jpg'), alt: 'Student practising makeup application' },
  { src: photoUrl('gallery-20261123-wa0314.jpg'), alt: 'Student practising facial treatment' },
  { src: photoUrl('gallery-20261123-wa0319.jpg'), alt: 'Students practising hair braiding' },
  { src: photoUrl('gallery-20261123-wa0321.jpg'), alt: 'Student practising a hairstyle' },
  { src: photoUrl('gallery-20261123-wa0323.jpg'), alt: 'WynesTTI makeup course poster' },
  { src: photoUrl('gallery-20261123-wa0325.jpg'), alt: 'Student practising massage therapy' },
  { src: photoUrl('gallery-20261123-wa0329.jpg'), alt: 'Students practising massage therapy' },
  { src: photoUrl('gallery-20261123-wa0330.jpg'), alt: 'Student practising makeup application' },
  { src: photoUrl('gallery-20261123-wa0331.jpg'), alt: 'Student practising hair braiding' },
  { src: photoUrl('gallery-20261123-wa0334.jpg'), alt: 'Students practising hair braiding' },
  { src: photoUrl('gallery-20261123-wa0340.jpg'), alt: 'WynesTTI student holding a certificate' },
];

export const testimonials = [
  {
    name: 'Sharon Odhiambo',
    course: 'ICT',
    photo: photoUrl('testimonial3.jpeg'),
    quote: 'I now understand the basics of computer packages and feel ready for more advanced learning.',
  },
  {
    name: 'Claris Nyokabi',
    course: 'Beauty',
    photo: photoUrl('testimonial4.jpeg'),
    quote: 'I gained real salon confidence, and every class felt hands-on and career-focused.',
  },
  {
    name: 'Sharon Wanjiru',
    course: 'Beauty',
    photo: photoUrl('testimonial2.jpeg'),
    quote: 'WynesTTI helped me build discipline, practical beauty skills and a clear path forward.',
  },
];

export const admissionSteps = [
  'Choose a program and review the course details.',
  'Prepare your documents: ID or passport, certificates and passport photo.',
  'Submit the application form and follow up on the admission offer.',
  'Confirm your place and complete registration at the campus.',
];

export const faqs = [
  {
    question: 'What are the entry requirements?',
    answer: 'Entry requirements vary by course, but generally include identification documents and prior academic records where applicable.',
  },
  {
    question: 'Do you offer flexible intakes?',
    answer: 'Yes. WynesTTI promotes accessible admissions so students can join training at suitable periods across the year.',
  },
  {
    question: 'How can I contact admissions?',
    answer: 'You can call, email or use the WhatsApp contact button on the website for quick admissions support.',
  },
];