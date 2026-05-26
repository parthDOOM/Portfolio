import { Project, Skill, Achievement, CompetitiveProgramming, ContactInfo, Experience } from '../types';

export const personalInfo = {
  name: "Parthiv Jasoliya",
  title: "Software Engineer & AI Architect",
  subtitle: "Studying at NIT Surat",
  bio: "Welcome to my portfolio! I am a Software Engineer studying at NIT Surat, passionate about cloud-native systems, generative AI, and high-performance computing. I specialize in building scalable applications that leverage cutting-edge technologies to solve complex real-world problems.",
  fullBio: "I specialize in building scalable cloud-native systems and AI-powered applications. My recent work includes designing high-performance property matching engines using vector embeddings (Qdrant) and architecting custom email communication platforms with generative AI at TruEstate. I have also developed autonomous AI-driven agent workflows for cloud security and hybrid ingestion pipelines for high-volume threat intelligence at TCS R&I. With a strong background in competitive programming (ICPC Regionalist, Meta Hacker Cup Round 3) and hands-on expertise in Next.js, NestJS, Python, and GCP, I thrive at the intersection of software engineering and machine learning.",
  resumeUrl: "/assets/ParthivJasoliya-2026-SDE.pdf",
  profileImage: "/assets/self.jpeg"
};

export const skills: Skill[] = [
  // Web Development
  { name: "Next.js & React", category: "web", level: 4, experience: "2+ years", projects: 8 },
  { name: "NestJS & Node.js", category: "web", level: 4, experience: "1.5+ years", projects: 5 },
  { name: "Full Stack (MERN & WAMP)", category: "web", level: 4, experience: "2+ years", projects: 8 },
  { name: "HTML / CSS / SCSS", category: "web", level: 3, experience: "3+ years", projects: 12 },
  { name: "JavaScript", category: "web", level: 4, experience: "2+ years", projects: 15 },
  
  // Programming Languages
  { name: "C++", category: "programming", level: 5, experience: "3+ years", projects: 20 },
  { name: "Python", category: "programming", level: 4, experience: "2+ years", projects: 12 },
  { name: "Java", category: "programming", level: 4, experience: "2+ years", projects: 8 },
  { name: "TypeScript", category: "programming", level: 4, experience: "1.5+ years", projects: 6 },
  
  // Machine Learning & AI
  { name: "LLMs & Agentic Frameworks", category: "ml", level: 4, experience: "1+ years", projects: 6 },
  { name: "Generative AI (Diffusion, GANs)", category: "ml", level: 4, experience: "1.5+ years", projects: 4 },
  { name: "Vector Databases (Qdrant)", category: "ml", level: 3, experience: "6+ months", projects: 2 },
  { name: "TensorFlow & PyTorch", category: "ml", level: 3, experience: "1+ years", projects: 5 },
  
  // Tools & Technologies
  { name: "GCP (Cloud Run, SQL, Pub/Sub)", category: "tools", level: 4, experience: "1+ years", projects: 4 },
  { name: "AWS (Lambda, IAM, S3)", category: "tools", level: 3, experience: "1+ years", projects: 4 },
  { name: "Git & Docker", category: "tools", level: 4, experience: "3+ years", projects: 25 },
  { name: "MongoDB & PostgreSQL", category: "tools", level: 3, experience: "1.5+ years", projects: 7 },
];

export const projects: Project[] = [
  {
    id: "canvas-homes",
    title: "Canvas Homes",
    description: "Next.js real estate platform that enables users to browse, filter, and manage property listings using Redux for global state.",
    fullDescription: "Canvas Homes is a Next.js real estate platform that enables users to browse, filter, and manage property listings using Redux for global state. It provides detailed property insights, including RERA data and brochures, alongside engagement features like enquiry modals and call scheduling.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "GCP", "Firebase", "Redux"],
    image: "/assets/canvashomes.png",
    liveUrl: "https://canvas-homes.com",
    featured: true
  },
    {
    id: "graph-visualizer",
    title: "Graph Visualizer",
    description: "TypeScript web tool for data visualization with downloadable PNG export functionality.",
    fullDescription: "\"Lookatthisgraph\" is a web-based data visualization tool developed with TypeScript, JavaScript, Tailwind CSS, and Vite, designed to help users create and interact with various graphical representations like graphs and trees. It's especially useful during competitive programming contests for visualizing Graphs and Trees problem-solving strategies. Key features include customizable visualizations, real-time data updates, and the ability to download the generated visuals as PNG files.",
    technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Canvas API"],
    image: "/assets/graph.png",
    githubUrl: "https://github.com/parthDOOM/Lookatthisgraph",
    liveUrl: "https://lookatthisgraph.netlify.app/",
    featured: true
  },
  {
    id: "rng-analyzer",
    title: "RNG Analyzer Mobile App",
    description: "Expo React Native application for RNG data analysis with machine learning predictions.",
    fullDescription: "The RNG Analyzer Mobile App is an Expo (React Native) application that acts as a client for the RNG Flaw Detection API. Users can select binary (.bin) files containing RNG data, send them to the backend API for analysis, and view the results—such as predicted status (\"Healthy,\" \"Biased,\" \"Periodic\"), confidence scores, detailed explanations, and recommendations.",
    technologies: ["React Native", "Expo", "TypeScript", "Machine Learning", "File System API"],
    image: "/assets/model.jpg",
    githubUrl: "https://github.com/parthDOOM/RNG_Android_App",
    downloadUrl: "https://drive.google.com/file/d/1xYAXZVwO7GzXKOxOffqgO88uMqwlLi4t/view?usp=sharing",
    featured: true
  },
  {
    id: "fifa-database",
    title: "FIFA Database",
    description: "Full Stack WAMP project with robust CRUD functionalities for FIFA player data management.",
    fullDescription: "The FIFA Database Full Stack WAMP project is a user-interactive and responsive web application built using the WAMP stack (Windows, Apache, MySQL, PHP). It features robust CRUD (Create, Read, Update, Delete) functionalities, allowing users to search for player data, update existing records, delete entries, and add new information seamlessly. The project leverages a MySQL database to store detailed player statistics and utilizes PHP for server-side logic, with a responsive front-end designed using HTML, CSS, and JavaScript to ensure compatibility across various devices.",
    technologies: ["PHP", "MySQL", "Apache", "HTML", "CSS", "JavaScript"],
    image: "/assets/FIFA.png",
    githubUrl: "https://github.com/parthDOOM/FIFA_DBMS",
    featured: false
  },
  {
    id: "self-driving-car",
    title: "Self-Driving Car",
    description: "JavaScript simulation with custom neural network and genetic algorithm optimization.",
    fullDescription: "This self-driving car simulation, built with JavaScript, HTML, and CSS, features a custom three-level neural network coded entirely without external libraries. The network processes inputs and makes driving decisions, optimized using a genetic algorithm. Initially, a 25% mutation rate explores diverse configurations, which reduces to 10% as performance improves, refining the network for greater accuracy and stability. It also has Save and Discard options that allow tracking the most desirable runs and facilitate setting the mutation rate more efficiently.",
    technologies: ["JavaScript", "HTML", "CSS", "Neural Networks", "Genetic Algorithms"],
    image: "/assets/selfdrive.png",
    githubUrl: "https://github.com/parthDOOM/Self_Driving_Car.git",
    liveUrl: "https://selfdrv.netlify.app/",
    featured: true
  },
  {
    id: "cafe-website",
    title: "Website for a Business",
    description: "MERN stack café website with Tailwind CSS and workshop reservation system.",
    fullDescription: "Welcome to my Café Website! This single-page website was created for GWOC 2024, crafted with the MERN stack and styled using Tailwind CSS, offers a seamless and delightful browsing experience. Designed to capture the essence of my cozy café, the website features a sleek and modern interface that ensures easy navigation and a visually appealing layout. The responsive design ensures that the website looks stunning on any device, whether you're browsing from a desktop, tablet, or smartphone.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/assets/cafe.png",
    githubUrl: "https://github.com/parthDOOM/GWOC_Proj_2024",
    liveUrl: "https://aayudhpanchal.github.io/Koe-s-Cafe-GWOC-24/",
    featured: false
  },
  {
    id: "dots-game",
    title: "Another Dots Game",
    description: "Simplified Agar.io-style game with strict collision detection and smooth controls.",
    fullDescription: "\"Another Dots Game\" is a simplified version of the popular \"Agar.io\" game, where you control a dot that must grow by eating smaller dots while avoiding being eaten by larger ones. The game features strict collision detection, meaning even the slightest touch from a bigger dot results in a loss. With smooth controls and an intuitive gameplay loop, the challenge lies in navigating through a grid filled with dangers as you strive to grow and survive.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Game Physics"],
    image: "/assets/dotsgame.png",
    githubUrl: "https://github.com/parthDOOM/anotherdotsgame",
    liveUrl: "https://anotherdotsgame.netlify.app/",
    featured: false
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Clean, organized showcase optimized for all devices with detailed project information.",
    fullDescription: "Welcome to my portfolio website! Here, you'll find a clean, organized showcase of my skills, projects, and professional journey, optimized for all devices from desktops to smartphones. Styled with CSS for a cohesive look, the site features detailed sections on my background, technical skills, and completed projects. Each project entry highlights the technologies used and key features.",
    technologies: ["HTML", "SCSS", "JavaScript", "Responsive Design"],
    image: "/assets/image.png",
    githubUrl: "https://github.com/parthDOOM/Portfolio/tree/master",
    liveUrl: "https://parthivportfolio.netlify.app/",
    featured: false
  },
  {
    id: "proximity-sensor",
    title: "Proximity Sensor",
    description: "Hardware project with HC-SR04 sensor, SSD1306 display, and STM32 board for distance monitoring.",
    fullDescription: "This hardware project involves proximity detection using an HC-SR04 ultrasonic sensor, an SSD1306 LED display, and an STM32 development board, with code written in Python using the Thonny IDE. The system measures distance and displays it on the LED. If the detected distance falls below a user-defined threshold, an LED connected to port 5 is triggered to alert the user.",
    technologies: ["Python", "STM32", "HC-SR04", "SSD1306", "Thonny IDE", "Hardware"],
    image: "/assets/proximity.jpg",
    githubUrl: "https://github.com/parthDOOM/Proximity_Sensor.git",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "TruEstate",
    location: "Gurugram, India",
    duration: "Jan 2026 – Present",
    description: [
      "Designed and deployed scalable cloud-native systems using GCP (Cloud Run, App Engine, Compute Engine, Cloud SQL, BigQuery, Cloud Scheduler, Pub/Sub, Cloud Tasks) for Canvas Homes.",
      "Launched a high-performance property matching engine using vector embeddings and Qdrant, computing similarity scores across all listings to deliver intelligent match percentages for buyers.",
      "Architected an AI-powered email communication platform (custom-built email client replica) with prediction models and semantic analysis by integrating generative AI APIs, improving sales team efficiency."
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "GCP", "Qdrant", "PostgreSQL"]
  },
  {
    title: "Software Engineering Intern",
    company: "TCS R&I",
    location: "Hyderabad, India",
    duration: "May 2025 – Jul 2025",
    description: [
      "Designed a hybrid ingestion pipeline utilizing Python scripts for high-volume structured feeds (STIX/JSON) and a fine-tuned LLM to extract entities from unstructured vendor reports, processing 100,000+ events/day.",
      "Automated CIS benchmark checks across 50+ AWS resources using Python Lambda agents, identifying and mitigating 120+ security misconfigurations pre-deployment.",
      "Evaluated 10,000+ IAM access patterns using custom AI agents, leading to a 30% reduction in overly permissive policies."
    ],
    technologies: ["Python", "AWS", "LLMs", "Agentic Frameworks", "IAM"],
    certificateUrl: "/assets/2927832-Parthiv Jasoliya.pdf"
  },
  {
    title: "Software Engineering Intern",
    company: "Voxel Verse",
    location: "Hyderabad, India",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Architected a Stable Diffusion and PyTorch pipeline to generate 500+ 2D game assets per hour, seamlessly integrating colliders and rigid-body parameters into the game engine.",
      "Optimized the generation workflow by batching denoising steps and improving GPU utilization, reducing latency from 6.0s to 5.1s (15%) across a 1,000-asset benchmark while maintaining consistent visual fidelity.",
      "Enhanced environment pattern generation, increasing designer-approval rate from 72% to 79% through A/B testing"
    ],
    technologies: ["Python", "Diffusion Models", "GANs", "PyTorch", "Stable Diffusion"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Summer School 2024",
    description: "Selected from 100,000 applicants for Amazon Machine Learning Summer School 2024",
    date: "2024",
    category: "ml",
    link: "#"
  },
  {
    title: "Meta Hacker Cup",
    description: "Global competitive programming contest. 2025: Round 3 (130th/500), Round 2 (156th/5,972 - Adv. to R3), Round 1 (705th/13,779 - Adv. to R2). 2024: Round 2 (2,583rd/5,000), Round 1 (581st/22,494 - Adv. to R2).",
    date: "2024 - 2025",
    category: "competition",
    certificates: [
      { label: "2025 Certificate", url: "/assets/MetaHackercup2025.pdf" },
      { label: "2024 Certificate", url: "/assets/MetaHackercup2024.pdf" }
    ]
  }
];

export const competitiveProgramming: CompetitiveProgramming[] = [
  {
    platform: "Codeforces",
    username: "Dark__Seith",
    rating: "Loading...",
    profileUrl: "https://codeforces.com/profile/Dark__Seith",
    icon: "/assets/codeforces-svgrepo-comm.svg"
  },
  {
    platform: "CodeChef",
    username: "parthivmj",
    rating: "Max: 2059 (5⭐)",
    profileUrl: "https://www.codechef.com/users/parthivmj",
    icon: "/assets/codechef-svgrepo-comm.svg"
  },
  {
    platform: "LeetCode",
    username: "parthDOOM",
    rating: "Max: 2409 (Guardian)",
    profileUrl: "https://leetcode.com/u/parthDOOM/",
    icon: "/assets/leetcode-svgrepo-comm.svg"
  }
];

export const contactInfo: ContactInfo = {
  email: "parthivmjasoliya31102@gmail.com",
  linkedin: "https://www.linkedin.com/in/parthiv-jasoliya-604946257/",
  github: "https://github.com/parthDOOM",
  codeforces: "https://codeforces.com/profile/Dark__Seith",
  codechef: "https://www.codechef.com/users/parthivmj",
  leetcode: "https://leetcode.com/u/parthDOOM/"
};