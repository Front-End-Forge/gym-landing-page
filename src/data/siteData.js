export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Programs', href: '#diet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact', href: '#contact' },
];

export const equipment = [
  {
    name: 'Power Rack Station',
    description: 'Olympic-grade rack with safety bars, perfect for squats, bench press, and overhead presses.',
    category: 'Strength',
    icon: '🏋️',
    color: '#E63946',
    img: "/assets/equipment1.webp",
  },
  {
    name: 'Cardio Theater',
    description: 'State-of-the-art treadmills, ellipticals, and bikes with HD entertainment systems.',
    category: 'Cardio',
    icon: '🏃',
    color: '#39FF14',
    img: "/assets/equipment2.webp",
  },
  {
    name: 'Free Weights Zone',
    description: 'Dumbbells from 2–100kg, barbells, EZ-bars, and competition-grade weight plates.',
    category: 'Strength',
    icon: '💪',
    color: '#FF6B35',
    img: "/assets/equipment3.webp",
  },
  {
    name: 'Functional Training',
    description: 'Kettlebells, battle ropes, suspension trainers, and plyometric platforms.',
    category: 'Functional',
    icon: '⚡',
    color: '#E63946',
    img: "/assets/equipment4.webp",
  },
  {
    name: 'Cable & Machine Zone',
    description: 'Over 40 premium cable machines and isolating stations for targeted muscle training.',
    category: 'Machine',
    icon: '🔧',
    color: '#39FF14',
    img: "/assets/equipment5.webp",
  },
  {
    name: 'Recovery Suite',
    description: 'Ice baths, steam rooms, massage guns, and foam rollers for optimal recovery.',
    category: 'Recovery',
    icon: '🧊',
    color: '#FF6B35',
    img: "/assets/equipment6.webp",
  },
];

export const dietPlans = [
  {
    name: 'Weight Loss',
    tagline: 'Shred & Define',
    color: '#39FF14',
    price: '₹2,499',
    features: [
      'Calorie deficit meal plan',
      'High protein blueprint',
      'Supplement guide',
      'Weekly check-ins',
      '50+ recipes included',
      'Macro tracking app',
    ],
    recommended: false,
  },
  {
    name: 'Muscle Gain',
    tagline: 'Build & Dominate',
    color: '#E63946',
    price: '₹2,999',
    features: [
      'Hypertrophy nutrition plan',
      'Pre/Post workout meals',
      'Creatine & protein guide',
      'Bi-weekly check-ins',
      '80+ muscle-building recipes',
      'Personalized macro targets',
    ],
    recommended: true,
  },
  {
    name: 'Maintenance',
    tagline: 'Sustain & Thrive',
    color: '#FF6B35',
    price: '₹1,999',
    features: [
      'Balanced macro blueprint',
      'Flexible dieting approach',
      'Cheat meal strategies',
      'Monthly check-ins',
      '60+ balanced recipes',
      'Habit tracker included',
    ],
    recommended: false,
  },
];

export const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'Lost 28kg in 6 months',
    rating: 5,
    text: 'APEX completely transformed me. I came in 108kg and left at 80kg. The trainers are relentless, the equipment is world-class, and the community keeps you accountable. Best investment of my life.',
    img: "/assets/testimonal1.webp",
  },
  {
    name: 'Priya Nair',
    rating: 5,
    role: 'Gained 8kg muscle',
    text: 'As a woman who was intimidated by gyms, APEX welcomed me with open arms. My trainer Vikram built my confidence alongside my physique. I competed in my first fitness show after 8 months here!',
    img: "/assets/testimonal2.webp",
  },
  {
    name: 'Rahul Mehta',
    rating: 5,
    role: 'Marathon finisher',
    text: 'The cardio zones and functional training area helped me shave 45 minutes off my marathon time. The coaches understand athletic performance, not just aesthetics.',
    img: "/assets/testimonal3.webp",
  },
  {
    name: 'Sneha Patel',
    rating: 5,
    role: 'Powerlifter, 120kg squat',
    text: "From zero to 120kg squat in under a year. APEX's strength coaches are certified and passionate. The power racks are always available and maintained perfectly.",
    img: "/assets/testimonal4.webp",
  },
  {
    name: 'Karthik Rajan',
    rating: 5,
    role: 'Corporate athlete',
    text: 'As a busy professional, I needed efficiency. APEX\'s 5am opening, locker rooms, and quick-change shower facilities make it possible to train before work every day.',
    img: "/assets/testimonal5.webp",
  },
];

export const galleryImages = [
  { src: "/assets/gallery1.webp", span: 'col-span-2 row-span-2' },
  { src: "/assets/gallery2.webp", span: '' },
  { src: "/assets/gallery3.webp", span: '' },
  { src: "/assets/gallery4.webp", span: '' },
  { src: "/assets/gallery5.webp", span: '' },
  { src: "/assets/gallery6.webp", span: 'col-span-2' },
  { src: "/assets/gallery7.webp", span: '' },
  { src: "/assets/gallery8.webp", span: '' },
];

export const pricingPlans = [
  {
    name: 'Monthly',
    price: '₹2,499',
    period: '/month',
    features: [
      'Full gym access',
      '2 PT sessions/month',
      'Locker room access',
      'Group classes',
      'App tracking',
    ],
    bestValue: false,
    color: '#4b5563',
  },
  {
    name: 'Quarterly',
    price: '₹5,999',
    period: '/3 months',
    features: [
      'Full gym access',
      '6 PT sessions',
      'Nutrition consultation',
      'All group classes',
      'Body composition analysis',
      'Priority booking',
    ],
    bestValue: true,
    color: '#E63946',
  },
  {
    name: 'Yearly',
    price: '₹17,999',
    period: '/year',
    features: [
      'Unlimited gym access',
      '24 PT sessions',
      'Full diet plan included',
      'All group classes',
      'Quarterly assessments',
      'Guest passes (4/yr)',
      'Merchandise discount 20%',
    ],
    bestValue: false,
    color: '#FF6B35',
  },
];

export const competitions = [
  {
    name: 'APEX Strength Games 2025',
    date: 'March 15, 2025',
    type: 'Powerlifting',
    description: 'Annual powerlifting championship with divisions for all experience levels. Over ₹5 lakh in prizes.',
    participants: 240,
    color: '#E63946',
    icon: '🏆',
  },
  {
    name: 'Shred Summer Challenge',
    date: 'June 1 – July 31, 2025',
    type: 'Body Transformation',
    description: '8-week body transformation contest judged on percentage body fat lost and muscle gained.',
    participants: 180,
    color: '#39FF14',
    icon: '⚡',
  },
  {
    name: 'Iron Man Triathlon',
    date: 'September 20, 2025',
    type: 'Endurance',
    description: 'Run-Cycle-Swim endurance event open to all members. Medals for top 3 in each age category.',
    participants: 120,
    color: '#FF6B35',
    icon: '🏃',
  },
  {
    name: 'APEX Classic Bodybuilding',
    date: 'December 12, 2025',
    type: 'Bodybuilding',
    description: 'Classic physique and men\'s/women\'s bodybuilding show. IFBB-affiliated judging criteria.',
    participants: 90,
    color: '#E63946',
    icon: '💪',
  },
];

export const achievements = [
  { year: '2015', title: 'Founded APEX', desc: 'Opened our flagship 10,000 sq ft facility with a vision to redefine fitness in India.', icon: '🏗️' },
  { year: '2017', title: 'Best Gym – South India', desc: 'Awarded Best New Gym by FitLife India magazine after our second location opening.', icon: '🥇' },
  { year: '2019', title: '5,000 Members Milestone', desc: 'Reached 5,000 active members across 3 branches with 98% retention rate.', icon: '👥' },
  { year: '2021', title: 'ISO Certified Facility', desc: 'Achieved ISO 9001:2015 certification for gym management and safety protocols.', icon: '🏅' },
  { year: '2023', title: 'National Gym Chain of the Year', desc: 'Recognized by India Fitness Council as the #1 premium gym chain in the country.', icon: '🏆' },
  { year: '2025', title: '10 Branches & Growing', desc: 'Expanded to 10 locations across 6 cities with 15,000+ active members.', icon: '🚀' },
];

export const trainers = [
  {
    name: 'Vikram Singh',
    specialization: 'Strength & Powerlifting',
    experience: '12 Years',
    certifications: 'NSCA-CSCS, IPF Level 3',
    img: "/assets/trainers1.webp",
    color: '#E63946',
  },
  {
    name: 'Ananya Krishnan',
    specialization: 'Weight Loss & HIIT',
    experience: '8 Years',
    certifications: 'ACE-CPT, Precision Nutrition',
    img: "/assets/trainers2.webp",
    color: '#39FF14',
  },
  {
    name: 'Rohan Kapoor',
    specialization: 'Bodybuilding & Aesthetics',
    experience: '10 Years',
    certifications: 'NASM-CPT, IFBB Pro',
    img: "/assets/trainers3.webp",
    color: '#FF6B35',
  },
  {
    name: 'Meera Pillai',
    specialization: 'Yoga & Mobility',
    experience: '9 Years',
    certifications: 'RYT-500, FMS Level 2',
    img: "/assets/trainers4.webp",
    color: '#E63946',
  },
];

export const branches = [
  {
    name: 'APEX — Koramangala',
    address: '47, 5th Block, Koramangala, Bengaluru – 560095',
    phone: '+91 80 4141 2200',
    hours: 'Mon–Sat: 5AM–11PM | Sun: 7AM–9PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.478!2d77.6267!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159161aea283%3A0x3b1e7a38ab8a5f0f!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000',
  },
  {
    name: 'APEX — Indiranagar',
    address: '12, 100 Feet Rd, Indiranagar, Bengaluru – 560038',
    phone: '+91 80 4141 3300',
    hours: 'Mon–Sat: 5AM–11PM | Sun: 7AM–9PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.906!2d77.6411!3d12.9719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e4e1bfffff%3A0x1234567890!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000001',
  },
];
