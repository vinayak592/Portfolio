// ===== PROJECT DATA =====
export const projects = [
  {
    id: 1,
    title: 'Think to Build - College Event CMS',
    description: 'A comprehensive college event management system featuring registration, competition entry, judge assignment, and a live real-time leaderboard.',
    image: '/assets/projects/think_to_build.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'Python'],
    category: 'fullstack',
    github: 'https://github.com/vinayak592/Think-To-Build.git',
    live: 'https://think-to-build-production.up.railway.app',
    featured: true,
  },
  {
    id: 2,
    title: 'IP-Based Master-Slave Connectivity',
    description: 'A network connectivity project implementing master-slave communication protocols using IPv4 for secure and efficient data exchange.',
    image: '/assets/projects/ip_connectivity.png',
    tags: ['JavaScript', 'Express', 'MongoDB', 'IPv4'],
    category: 'fullstack',
    github: 'https://github.com/vinayak592/IP_based-master-slave-operatation.git',
    
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Agri-Culture IoT System',
    description: 'An automated irrigation and field monitoring system using ESP32, Arduino, and Flutter with integrated maps and offline/online monitoring.',
    image: '/assets/projects/smart_agri.png',
    tags: ['Flutter', 'IoT', 'Arduino', 'ESP32'],
    category: 'mobile',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'AI Healthcare Management System',
    description: 'A modern healthcare platform with AI-driven symptom analysis, report interpretation, and automated appointment booking using Gemini LLMs.',
    image: '/assets/projects/healthcare_ai.png',
    tags: ['React', 'Gemini AI', 'Tailwind', 'LLM'],
    category: 'fullstack',
    github: 'https://github.com/vinayak592/opd_hospital_ai_agent.git',
    live: 'https://opd-hospital-ai-agent.onrender.com/',
    featured: true,
  },
  {
    id: 5,
    title: 'KCN Connect - Organization App',
    description: 'A Flutter-based communication app for organizations featuring secure auth, channel-based organization, and real-time announcements.',
    image: '/assets/projects/kcn_connect.png',
    tags: ['Flutter', 'Firebase', 'Real-time', 'Dart'],
    category: 'mobile',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Premium 3D Portfolio',
    description: 'This current high-end portfolio featuring 3D interactions, Bento Grid layouts, and AI-driven features for a modern professional presence.',
    image: '/assets/projects/portfolio_v3.png',
    tags: ['React', 'Framer Motion', 'Vite', 'Three.js'],
    category: 'react',
    github: 'https://github.com',
    live: '/',
    featured: false,
  },
];

// ===== ARTICLES DATA =====
export const articles = [
  {
    id: 1,
    title: 'Build A Custom Pagination Component In ReactJS From Scratch',
    date: 'March 22, 2025',
    readTime: '9 min read',
    category: 'React',
    summary: 'Learn how to build a custom pagination component from scratch in ReactJS with clean, reusable code and smooth animations.',
    content: 'Pagination is one of those components that seems simple but can get complex quickly. In this article, we will build a fully custom pagination component that handles edge cases gracefully...',
  },
  {
    id: 2,
    title: 'Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens',
    date: 'March 15, 2025',
    readTime: '10 min read',
    category: 'React',
    summary: 'Explore three different approaches to creating beautiful loading screens that keep users engaged.',
    content: 'Loading screens are often overlooked, but they are crucial for user experience. A well-designed loading screen can reduce perceived wait time significantly...',
  },
  {
    id: 3,
    title: 'Form Validation In ReactJS: Build A Reusable Custom Hook For Inputs And Error Handling',
    date: 'March 8, 2025',
    readTime: '12 min read',
    category: 'React',
    summary: 'Create a powerful, reusable form validation hook that handles complex validation rules with ease.',
    content: 'Form validation is a critical part of any web application. In this guide, we will create a custom hook that makes form handling a breeze...',
  },
  {
    id: 4,
    title: 'Mastering Tailwind CSS: Advanced Techniques For Modern Web Design',
    date: 'February 28, 2025',
    readTime: '8 min read',
    category: 'CSS',
    summary: 'Deep dive into advanced Tailwind CSS techniques including custom plugins, design tokens, and performance optimization.',
    content: 'Tailwind CSS has revolutionized how we write CSS. But beyond the basics, there are powerful advanced techniques that can take your designs to the next level...',
  },
  {
    id: 5,
    title: 'Building Scalable APIs With Node.js And Express: A Complete Guide',
    date: 'February 20, 2025',
    readTime: '15 min read',
    category: 'Backend',
    summary: 'A comprehensive guide to building production-ready APIs with proper architecture, authentication, and error handling.',
    content: 'Building APIs that scale requires careful planning and architecture decisions. In this guide, we cover everything from project setup to deployment...',
  },
  {
    id: 6,
    title: 'The Art Of Micro-Animations: Making Your UI Feel Alive',
    date: 'February 12, 2025',
    readTime: '7 min read',
    category: 'Design',
    summary: 'Learn how subtle animations can dramatically improve user experience and make your interface feel premium.',
    content: 'Micro-animations are the secret ingredient that separates good interfaces from great ones. They provide feedback, guide attention, and create delight...',
  },
];

// ===== SKILLS DATA =====
export const skills = [
  
  { name: 'Python', level: 85, slug: 'py' },
  { name: 'SQL', level: 88, slug: 'mysql' },
  { name: 'MongoDB', level: 82, slug: 'mongodb' },
  { name: 'React', level: 95, slug: 'react' },
  { name: 'HTML', level: 98, slug: 'html' },
  { name: 'CSS', level: 95, slug: 'css' },
  { name: 'Node.js', level: 88, slug: 'nodejs' },
  { name: 'Express.js', level: 85, slug: 'express' },
  { name: 'JavaScript', level: 92, slug: 'js' },
  { name: 'Prompt Engineering', level: 90, slug: 'openai' },
 
];

// ===== TECH STACK ICONS =====
export const techStack = [
  { name: 'React', color: '#61DAFB' },
  
  { name: 'Node.js', color: '#339933' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Tailwind', color: '#06B6D4' },
 
];

// ===== TIMELINE DATA =====
export const timeline = [
  {
    year: '2024 - Present',
    title: 'B.Tech in Computer Science',
    company: 'G M University Davangere',
    description: 'Current 2nd-year student focusing on Full Stack Development, Data Structures, and UI/UX Design. Active member of the coding community.',
    type: 'education',
  },
  {
    year: '2024 (Summer)',
    title: 'Web Development Intern',
    company: 'Startup / Internship',
    description: 'Worked on building responsive frontend components using React and contributing to the internal design system.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Full Stack Personal Projects',
    company: 'Self-Employed',
    description: 'Developed several high-impact projects including a portfolio, e-commerce prototypes, and interactive web tools.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Hackathon Enthusiast',
    company: 'Self-Employed',
    description: 'Developed several high-impact projects including a portfolio, e-commerce prototypes, and interactive web tools.',
    type: 'work',
  },
];

// ===== TESTIMONIALS =====
export const testimonials = [];

// ===== ACHIEVEMENTS =====
export const achievements = [
  { title: 'GFG Campus Ambassador', year: '2025', icon: '🎓' },
  { title: 'Ignitrion Event Coordinator', year: '2025', icon: '⚡' },
  { title: 'Tech Event Coordinator', year: '2024', icon: '🎯' },
  { title: 'Open Source Contributor', year: '2024', icon: '⭐' },
  { title: 'Hackathon Enthusiast', year: '2024', icon: '🏆' },
];

// ===== CHATBOT RESPONSES =====
export const chatResponses = {
  greeting: "Hey there! 👋 I'm Vinayak's AI assistant. Ask me anything about his projects, skills, or college journey!",
  skills: "Vinayak is a 2nd-year CS student specialized in Full-Stack Web Development (Python, React, Node.js) and Prompt Engineering!",
  experience: "Vinayak is a 2nd-year B.Tech student at G M University Davangere. He is a GFG Campus Ambassador and specializes in Full-Stack development and Prompt Engineering.",
  projects: "Vinayak has worked on 8+ projects including personal full-stack apps and college initiatives. You can see his best work on the Projects page!",
  contact: "You can reach Vinayak via the contact form or on LinkedIn! He's always happy to discuss tech and collaborations.",
  hire: "Vinayak is currently looking for internship opportunities where he can apply his Full Stack skills and learn from industry experts!",
  services: "Vinayak offers several premium services: 1. Digital Wedding Cards 💌, 2. Interactive Birthday Wishes 🎂, 3. Poster & UI Design 🎨, 4. Full-Stack Web Development (in 7 days!) ⚡, and 5. IoT Based Projects 🤖.",
  default: "That's a great question! Feel free to explore the portfolio or reach out directly through the Contact page. 😊",
};

// ===== SOCIAL LINKS =====
export const socialLinks = [
  { platform: 'github', href: 'https://github.com/vinayak592', label: 'GitHub' },
  { platform: 'linkedin', href: 'https://www.linkedin.com/in/vinayak-kathare-7851a9314/?skipRedirect=true', label: 'LinkedIn' },
  { platform: 'twitter', href: 'https://x.com/kathare_vi23556', label: 'Twitter' },
  { platform: 'instagram', href: 'https://www.instagram.com/vinayak_kathare_?igsh=MWl3bjhwZGNnOXo2ZQ==', label: 'Instagram' },
  { platform: 'whatsapp', href: 'https://wa.me/919482033869', label: 'WhatsApp' },
];

// ===== SERVICES DATA =====
export const services = [
  {
    id: 1,
    title: 'Digital Wedding Cards',
    description: 'Tech-driven, interactive digital wedding invitations with RSVP tracking and cinematic animations.',
    icon: '💌',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 2,
    title: 'Interactive Birthday Wishes',
    description: 'Custom cinematic web experiences for birthdays featuring 3D elements, music, and personalized memories.',
    icon: '🎂',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 3,
    title: 'Poster & UI Design',
    description: 'Modern graphic design for posters and digital assets, along with high-end UI/UX prototyping.',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Rapid Full-Stack Web',
    description: 'Production-ready full-stack websites delivered within 7 days, specialized for startups and portfolios.',
    icon: '⚡',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 5,
    title: 'IoT Based Projects',
    description: 'Hardware-software integration using ESP32, Arduino, and mobile apps for automation and monitoring.',
    icon: '🤖',
    color: 'from-emerald-500 to-teal-500'
  }
];
