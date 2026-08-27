export const projects = [
  {
    slug: "fitfinder",
    title: "FitFinder / GymOS",
    description: "A gym management platform with role-based dashboards, gym management, memberships, payments, AI assistant, and other features.",
    image: "/window.svg", // Placeholder, user will provide
    role: "Full-Stack Developer",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: [
      "Role-based dashboards for admins and members",
      "Membership and payment management",
      "AI assistant for fitness planning"
    ],
    overview: "FitFinder (also known as GymOS) is a comprehensive gym management platform designed to streamline operations for gym owners and enhance the experience for gym members.",
    problem: "Gyms often rely on fragmented systems or manual processes to manage memberships, payments, and member engagement, leading to inefficiencies and a subpar user experience.",
    solution: "Developed a centralized, role-based platform that integrates membership management, payment processing, and an AI-powered fitness assistant into a single intuitive interface.",
    contribution: "Designed and implemented the full-stack architecture, including the database schema, API endpoints, and responsive frontend dashboards.",
    challenges: "Handling secure, recurring payments and ensuring the AI assistant provided accurate, context-aware fitness advice.",
    learned: "Gained deep experience in complex state management, integrating third-party payment gateways, and working with AI APIs.",
    github: "#",
    live: "#"
  },
  {
    slug: "ai-academic-schedule",
    title: "AI Academic Schedule Reminder",
    description: "A web application for managing academic schedules and reminders with an AI assistant.",
    image: "/file.svg", // Placeholder
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "Tailwind CSS", "OpenAI API"],
    features: [
      "Dynamic schedule management",
      "Automated reminders for assignments and exams",
      "AI assistant for study planning and answering academic queries"
    ],
    overview: "This application helps students manage their academic lives more effectively by combining traditional scheduling tools with intelligent AI assistance.",
    problem: "Students frequently struggle to balance their course loads, assignments, and exams, often leading to missed deadlines and increased stress.",
    solution: "Created an intelligent scheduling tool that not only tracks deadlines but also proactively reminds users and provides AI-driven study strategies.",
    contribution: "Built the entire frontend interface, ensuring a seamless and accessible user experience across all devices. Integrated the OpenAI API for the assistant.",
    challenges: "Designing an intuitive UI for complex scheduling data and ensuring the AI assistant responses were fast and relevant.",
    learned: "Improved my skills in responsive design and prompt engineering for AI integrations.",
    github: "#",
    live: "#"
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Website",
    description: "A modern e-commerce application with product browsing, filtering, product details, and shopping functionality.",
    image: "/window.svg", // Placeholder
    role: "Frontend Developer",
    technologies: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    features: [
      "Product catalog with advanced filtering and search",
      "Detailed product pages with image galleries",
      "Fully functional shopping cart and checkout flow"
    ],
    overview: "A fully functional e-commerce storefront designed to provide a fast, intuitive shopping experience for users.",
    problem: "Many small e-commerce sites suffer from slow load times and confusing navigation, leading to high cart abandonment rates.",
    solution: "Built a high-performance Next.js storefront with optimized images, instant search, and a streamlined checkout process.",
    contribution: "Developed the UI components, integrated the state management for the cart, and optimized the application for performance.",
    challenges: "Managing the complex state of the shopping cart across different components and pages.",
    learned: "Mastered global state management techniques in React and learned best practices for e-commerce UX.",
    github: "https://github.com/JanAro1/Ecommerce-App",
    live: "#"
  },
  {
    slug: "student-management",
    title: "Student Management System",
    description: "A CRUD-based student management system with authentication and database functionality.",
    image: "/file.svg", // Placeholder
    role: "Full-Stack Developer",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: [
      "Secure user authentication",
      "Full CRUD operations for student records",
      "Search and filtering capabilities"
    ],
    overview: "A robust internal tool for educational institutions to manage student data securely and efficiently.",
    problem: "Schools often use outdated, paper-based, or overly complex systems for tracking basic student information.",
    solution: "Developed a clean, web-based CRUD application that simplifies data entry and retrieval.",
    contribution: "Built the backend logic in PHP, designed the MySQL database schema, and created the frontend interface.",
    challenges: "Ensuring data security and preventing SQL injection and XSS attacks.",
    learned: "Solidified my understanding of fundamental web security principles and relational database design.",
    github: "#",
    live: "#"
  }
];

export const skills = {
  frontend: [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwind" }
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "PHP", icon: "php" },
    { name: "REST APIs", icon: "api" }
  ],
  database: [
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "Prisma", icon: "prisma" }
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "npm", icon: "npm" }
  ]
};

export const journey = [
  {
    year: "2026",
    title: "Building Production Systems",
    description: "Focusing on building larger, production-style systems and continuously improving my full-stack development skills."
  },
  {
    year: "2025",
    title: "Full-Stack Applications",
    description: "Started building larger full-stack applications, integrating complex databases and APIs."
  },
  {
    year: "2024",
    title: "Building Personal Projects",
    description: "Applied my learning by building various personal projects and small applications to solidify my skills."
  },
  {
    year: "2023",
    title: "Started Learning Web Development",
    description: "Began my journey into programming, learning the fundamentals of HTML, CSS, and JavaScript."
  }
];

export const education = [
  {
    degree: "BS Information Technology",
    school: "Cordova Public College",
    period: "2023 - Present", // Adjust if needed
    description: "Studying core computer science concepts, software engineering, and database management."
  }
];

export const certifications = [
  {
    name: "Web Design Certificate",
    issuer: "TESDA",
    date: "[Add Date]",
    link: "#"
  }
];
