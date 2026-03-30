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
      "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and a powerful admin dashboard. Designed to handle high-traffic online stores and multiple product variants.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Prisma", "Tailwind CSS", "React Query"],
    github: "https://github.com/codewithjaker/nextjs-ecommerce-zamzam",
    live: "https://mustaqbalzamzam.com",
    image: "/projects/ecommerce.png",
    featured: true,
    highlights: [
      "Real-time inventory tracking with automated stock updates",
      "Secure Stripe payment integration with multiple payment methods",
      "Admin dashboard analytics with sales, revenue, and user metrics",
      "Product variant management with bulk CSV import/export",
      "Order management workflow with status updates and notifications",
      "Responsive design for desktop and mobile with optimized UX",
    ],
  },
  {
    title: "E-Commerce Mobile App UI",
    description:
      "A visually appealing React Native e-commerce mobile app focusing on frontend design and user experience. Designed for smooth navigation, responsive layouts, and interactive UI components.",
    tags: ["React Native", "TypeScript", "Expo", "Tailwind CSS", "React Navigation", "Reanimated"],
    github: "https://github.com/codewithjaker/expo-ecommerce-mobile",
    live: "#",
    image: "/projects/mobile.png",
    featured: true,
    highlights: [
      "Modern and responsive mobile-first design",
      "Smooth navigation between product listing, details, and checkout screens",
      "Interactive product cards and carousel components",
      "Customizable cart and checkout interface",
      "Consistent typography, color scheme, and spacing",
      "Focus on intuitive user experience and mobile usability",
    ],
  },
  {
    title: "School Dashboard UI",
    description:
      "A modern, responsive school management dashboard built with Next.js and Shadcn/UI. Focuses on intuitive frontend design, dynamic data tables, and analytics visualizations for teachers, students, and administrators.",
    tags: ["Next.js", "TypeScript", "Shadcn/UI", "Tailwind CSS", "React Query", "Chart.js"],
    github: "https://github.com/codewithjaker/school-dashboard",
    live: "#",
    image: "/projects/school.png",
    featured: true,
    highlights: [
      "Clean and intuitive dashboard layout with sidebar navigation",
      "Dynamic tables for students, teachers, classes, and schedules",
      "Custom charts and data visualizations for attendance, grades, and performance",
      "Responsive design optimized for desktop and mobile",
      "Interactive components such as modals, filters, and notifications",
      "Focus on user-friendly interface and seamless UX",
    ],
  },
  {
    title: "Nexus Multi-Vendor Marketplace",
    description:
      "An enterprise-grade marketplace engine featuring dual dashboards for platform admins and independent vendors. Built for scalability, multi-tenant support, and advanced commerce features.",
    tags: ["Next.js 15", "Stripe Connect", "Supabase", "TanStack Table", "Shadcn/UI", "TypeScript"],
    github: "https://github.com/codewithjaker/ecommerce-admin-react",
    live: "https://nexus-marketplace-admin.com",
    image: "/projects/nexus.png",
    featured: true,
    highlights: [
      "Stripe Connect integration for automated vendor payouts and platform fees",
      "Dynamic multi-tenant architecture with vendor-specific subdomains",
      "Advanced inventory management with bulk CSV upload and variant tracking",
      "Real-time sales analytics & commission tracking for super admins",
      "KYC onboarding workflow for new merchant verification",
      "Global search & filtering across 50,000+ products using Meilisearch",
      "Multi-role access with granular permission settings",
    ],
  },
  {
    title: "Full Stack Library Management System",
    description:
      "A modern library ecosystem with a student-facing catalog, administrative portal, automated fine management, and real-time book availability tracking. Built to handle large-scale libraries with analytics and digital borrowing workflows.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Auth.js", "Tailwind CSS", "Zod", "React Query", "Next-Auth", "Email API", "QR Code"],
    github: "https://github.com/codewithjaker/library-management-system",
    live: "https://lumina-lib-demo.com",
    image: "/projects/library.png",
    featured: true,
    highlights: [
      "Secure RBAC for admins, librarians, and members",
      "Real-time book availability tracking and inventory management",
      "Automated overdue fine calculation and email notifications",
      "Advanced server-side search, filters, and pagination for 10,000+ books",
      "Digital borrowing workflow with QR code verification",
      "Dynamic analytics dashboard for library usage, fines, and circulation trends",
      "Multi-branch support with centralized catalog",
      "Import/export book inventory via CSV",
      "Integration with external ISBN database for quick book registration",
      "User activity logs for borrowing, returning, and fine payments",
    ],
  },
  {
    title: "Full Stack Pharmacy Management System",
    description:
      "A complete pharmacy ecosystem with patient management, medicine inventory tracking, prescription handling, and real-time reporting. Designed for streamlined pharmacy operations, automated alerts, compliance management, and patient engagement.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Auth.js", "Tailwind CSS", "Zod", "React Query", "Next-Auth", "Stripe API", "Email API"],
    github: "https://github.com/codewithjaker/pharmacy-management-system",
    live: "https://pharma-demo.com",
    image: "/projects/pharmacy.png",
    featured: true,
    highlights: [
      "Role-Based Access Control (RBAC) for pharmacists, admins, and patients",
      "Real-time medicine inventory tracking with automated stock updates",
      "Low stock & expiry notifications via email/SMS",
      "Prescription management with secure patient authentication",
      "Digital prescription upload and QR code verification for medicine pickup",
      "Advanced server-side search and filtering for thousands of medicines",
      "Sales reporting, profit/loss dashboard, and daily revenue analytics",
      "Integrated payment system for online orders and in-store checkout",
      "Audit logs for all inventory and transaction changes",
      "Multi-branch support with centralized inventory synchronization",
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
