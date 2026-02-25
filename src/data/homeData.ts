import { Cloud, Code2, Database } from "lucide-react";

export const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React/Next.js/React Native", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
      { name: "State Management", level: 80, color: "bg-purple-500" },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js/Express", level: 88, color: "bg-green-500" },
      { name: "RESTful API/GraphQL", level: 75, color: "bg-green-600" },
      { name: "PostgreSQL/MongoDB", level: 82, color: "bg-emerald-500" },
      { name: "API Design", level: 85, color: "bg-teal-500" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 80, color: "bg-orange-500" },
      { name: "AWS/GCP", level: 70, color: "bg-red-500" },
      { name: "CI/CD", level: 75, color: "bg-amber-500" },
      { name: "Git & GitHub", level: 90, color: "bg-gray-500" },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/codewithjaker/nextjs-ecommerce-zamzam",
    live: "https://mustaqbalzamzam.com",
    image: "ecommerce.jpeg",
    // "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    featured: true,
    highlights: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Admin dashboard analytics",
    ],
  },
  {
    title: "MedConnect Healthcare Platform",
    description:
      "A comprehensive medical website for patient management, appointment scheduling, and telemedicine consultations.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/medical.jpeg",
    featured: true,
    highlights: [
      "Telemedicine video consultations",
      "Electronic Health Records (EHR) system",
      "Automated appointment scheduling",
      "HIPAA compliant data security",
      "Prescription management portal",
    ],
  },
  {
    title: "E-Commerce Mobile App UI",
    description:
      "A visually appealing React Native e-commerce mobile app focusing solely on frontend design and user experience.",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Tailwind CSS",
      "React Navigation",
    ],
    github: "https://github.com/codewithjaker/react-native-ecommerce-ui",
    live: "https://your-app-demo-link.com", // optional if you have a live preview
    image: "rn-ecommerce-ui.jpeg", // screenshot of your app UI
    featured: true,
    highlights: [
      "Modern and responsive mobile-first design",
      "Smooth navigation between product screens",
      "Interactive product cards and carousel",
      "Customizable cart and checkout UI",
      "Clean and consistent typography and color scheme",
      "Focus on user experience and intuitive layout",
    ],
  },
  {
    title: "School Dashboard UI",
    description:
      "A modern, responsive school management dashboard built with Next.js and Shadcn/UI, focusing entirely on frontend design and user experience.",
    tags: ["Next.js", "TypeScript", "Shadcn/UI", "Tailwind CSS", "React Query"],
    github: "https://github.com/codewithjaker/school-dashboard-ui",
    live: "https://your-dashboard-demo.com", // optional if live preview available
    image: "school-dashboard-ui.jpeg", // screenshot of your dashboard
    featured: true,
    highlights: [
      "Clean and intuitive dashboard layout",
      "Interactive sidebar and top navigation",
      "Dynamic tables for students, teachers, and classes",
      "Custom charts and data visualization",
      "Responsive design for mobile and desktop",
      "Focus on user-friendly interface and UX",
    ],
  },
  {
    title: "Learning Management System UI",
    description:
      "A modern and responsive Learning Management System (LMS) frontend built with Next.js and Shadcn/UI, focusing on user experience for students and teachers.",
    tags: ["Next.js", "TypeScript", "Shadcn/UI", "Tailwind CSS", "React Query"],
    github: "https://github.com/codewithjaker/lms-frontend-ui",
    live: "https://your-lms-demo.com", // optional live demo link
    image: "lms-dashboard-ui.jpeg", // screenshot of LMS UI
    featured: true,
    highlights: [
      "Interactive dashboard for students and teachers",
      "Course listing and enrollment UI",
      "Responsive design for mobile and desktop",
      "Clean UI for lessons, quizzes, and assignments",
      "User-friendly navigation and profile management",
      "Focus on modern UX/UI patterns with Shadcn/UI",
    ],
  },
];

export const experiences = [
  {
    company: "Skill Based IT(SBIT), Feni.",
    role: "React Frontend Developer",
    period: "2025 - Present",
    location: "Feni, Bangladesh",
    description:
      "Lead development of customer-facing web applications used by over 500k monthly active users.",
    achievements: [
      "Reduced page load times by 40% through code splitting and performance optimization",
      "Mentored 4 junior developers and established team best practices",
      "Architected migration from monolithic to microservices architecture",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Figma", "Git"],
  },
  {
    company: "Porgramming Paradise",
    role: "React.js/Next.js Frontend Developerr",
    period: "2026 - Present",
    location: "Remote",
    description:
      "Built and maintained multiple SaaS products from concept to production.",
    achievements: [
      "Developed a real-time dashboard used by 10k+ customers",
      "Implemented automated testing reducing bugs in production by 60%",
      "Collaborated with product team to implement user-requested features",
    ],
    tags: [
      "Next.js",
      "Next-Auth",
      "TypeScript",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "NeonDB",
      "Docker",
    ],
  },
];
