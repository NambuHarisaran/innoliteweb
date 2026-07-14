// Centralized SEO metadata for every route.
// Each key corresponds to a route path in App.jsx.

const SITE_URL = 'https://www.innolitetech.com';
const SITE_NAME = 'InnoLite Technologies';
const DEFAULT_IMAGE = `${SITE_URL}/2.png`;

const seoData = {
  '/': {
    title: 'InnoLite Technologies | Best AI, Robotics & Tech Training in Madurai',
    description:
      'InnoLite Technologies offers hands-on training in Artificial Intelligence, Robotics, Web Development, Drone Technology, Python, Java, and Embedded Systems in Madurai, Tamil Nadu. Enroll today!',
    keywords:
      'AI training Madurai, robotics course Madurai, web development Madurai, drone technology course, Python training Tamil Nadu, Java course Madurai, embedded systems training, tech training institute Madurai, InnoLite Technologies',
    canonical: SITE_URL + '/',
    og: {
      title: 'InnoLite Technologies — Best Emerging Tech Training in Madurai',
      description:
        'Hands-on AI, Robotics, Web Development, Drone & Embedded Systems courses. Learn. Build. Innovate.',
      image: DEFAULT_IMAGE,
      type: 'website',
    },
  },

  '/about': {
    title: 'About InnoLite Technologies | Our Mission & Team in Madurai',
    description:
      'Learn about InnoLite Technologies — Madurai\'s leading hands-on tech training institute. Our mission is to empower students with industry-ready skills in AI, Robotics, and more.',
    keywords:
      'about InnoLite Technologies, tech institute Madurai, mission, team, emerging technology education, Madurai training center',
    canonical: SITE_URL + '/about',
    og: {
      title: 'About InnoLite Technologies — Our Story',
      description:
        'Empowering the next generation of tech innovators from Madurai, Tamil Nadu.',
      image: DEFAULT_IMAGE,
      type: 'website',
    },
  },

  '/courses': {
    title: 'Courses | AI, Robotics, Python, Web Dev & More — InnoLite Technologies',
    description:
      'Explore 10+ industry-oriented courses at InnoLite Technologies: Artificial Intelligence, Robotics, Python, Java, Website Development, Mobile App Development, Data Analytics, UI/UX Design, PCB Design, and Drone Technology.',
    keywords:
      'AI course Madurai, robotics course, Python course Madurai, Java training, web development course, mobile app development, data analytics Power BI, UI UX design, PCB design course, drone course Madurai, InnoLite courses',
    canonical: SITE_URL + '/courses',
    og: {
      title: 'Courses at InnoLite — AI, Robotics, Python & More',
      description:
        '10+ hands-on tech courses with real projects, expert mentors, and certification support.',
      image: DEFAULT_IMAGE,
      type: 'website',
    },
  },

  '/why-us': {
    title: 'Why Choose InnoLite Technologies | Hands-On Learning & Career Support',
    description:
      'Industry-oriented curriculum, hands-on every session, real-time projects, expert mentorship, career guidance, and certification. Discover why 200+ students chose InnoLite Technologies in Madurai.',
    keywords:
      'why InnoLite Technologies, best tech training, hands-on learning, career guidance Madurai, certification support, project-based learning, expert mentors',
    canonical: SITE_URL + '/why-us',
    og: {
      title: 'Why Choose InnoLite Technologies?',
      description:
        'Hands-on projects, expert mentors, career support — here\'s why we\'re Madurai\'s top tech training institute.',
      image: DEFAULT_IMAGE,
      type: 'website',
    },
  },

  '/contact': {
    title: 'Contact InnoLite Technologies | Enroll for Tech Courses in Madurai',
    description:
      'Get in touch with InnoLite Technologies in Anna Nagar, Madurai. Call +91 98421 81701 or fill out our contact form to enroll in AI, Robotics, Web Development, and more.',
    keywords:
      'contact InnoLite Technologies, enroll tech course Madurai, phone number, email, Anna Nagar Madurai, tech training enquiry',
    canonical: SITE_URL + '/contact',
    og: {
      title: 'Contact InnoLite Technologies — Enroll Today',
      description:
        'Visit us in Anna Nagar, Madurai or send us a message. We reply within 24 hours.',
      image: DEFAULT_IMAGE,
      type: 'website',
    },
  },
};

export { SITE_URL, SITE_NAME, DEFAULT_IMAGE };
export default seoData;
