import { Project, Skill, Achievement, CompetitiveProgramming, ContactInfo } from '../types';

export const personalInfo = {
  name: "Parthiv Jasoliya",
  title: "Software Developer",
  subtitle: "Studying at NIT Surat",
  bio: "Welcome to my portfolio! I am a Software Developer studying at NIT Surat, passionate about programming, web development, IoT and artificial intelligence. With a strong foundation in languages like Java, C/C++, and Python, I've sharpened my skills by working on real-world projects and tackling challenging problems.",
  fullBio: "Some highlights include building responsive web applications using modern frameworks like React and optimizing database systems for high performance. I've also explored the fields of generative AI and machine learning, developing innovative solutions such as a platform for creating intricate 2D artwork and physics models during my internship. With hands-on experience in tools and technologies like MERN stack, Spring Boot, and neural networks(GANs, CNNs), I bring a blend of technical expertise and problem-solving ability. My achievements in competitive programming, including being an ICPC Regionalist and ranking among the top in global coding contests(META Hackercup), reflect my drive to excel in this field.",
  resumeUrl: "/assets/Resume_All_Exp.pdf",
  profileImage: "/assets/self1.jpg"
};

export const skills: Skill[] = [
  // Web Development
  { name: "Full Stack Web Dev (MERN & WAMP)", category: "web", level: 4, experience: "2+ years", projects: 8 },
  { name: "HTML", category: "web", level: 3, experience: "3+ years", projects: 12 },
  { name: "CSS / SCSS", category: "web", level: 3, experience: "2+ years", projects: 10 },
  { name: "JavaScript", category: "web", level: 4, experience: "2+ years", projects: 15 },
  { name: "React", category: "web", level: 4, experience: "1+ years", projects: 6 },
  { name: "Node.js", category: "web", level: 3, experience: "1+ years", projects: 5 },
  
  // Programming Languages
  { name: "C++", category: "programming", level: 5, experience: "3+ years", projects: 20 },
  { name: "Python", category: "programming", level: 4, experience: "2+ years", projects: 12 },
  { name: "Java", category: "programming", level: 4, experience: "2+ years", projects: 8 },
  { name: "TypeScript", category: "programming", level: 3, experience: "1+ years", projects: 4 },
  
  // Machine Learning
  { name: "Python", category: "ml", level: 4, experience: "2+ years", projects: 8 },
  { name: "TensorFlow", category: "ml", level: 3, experience: "1+ years", projects: 4 },
  { name: "Neural Networks", category: "ml", level: 3, experience: "1+ years", projects: 3 },
  
  // Tools & Technologies
  { name: "Git", category: "tools", level: 4, experience: "3+ years", projects: 25 },
  { name: "Docker", category: "tools", level: 2, experience: "6+ months", projects: 3 },
  { name: "AWS", category: "tools", level: 3, experience: "1+ years", projects: 4 },
  { name: "MongoDB", category: "tools", level: 3, experience: "1+ years", projects: 5 },
];

export const projects: Project[] = [
  {
    id: "code-base",
    title: "Code Base",
    description: "MERN Stack Web Application with robust CRUD operations optimizing query response times to under 50 ms.",
    fullDescription: "The MERN Stack Web Application is a responsive platform developed using MongoDB, Express.js, React, and Node.js, featuring robust CRUD operations that optimize query response times to under 50 ms through effective caching strategies. User access is secured with OAuth 2.0 and JWT-based authentication, and the application supports multiple languages for broader accessibility. Automated unit and end-to-end testing using Jest and Cypress achieved 95% test coverage, while deployment on AWS through CI/CD pipelines using Docker and Jenkins ensures streamlined feature deployment and continuous integration, resulting in a scalable and user-friendly web application.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "OAuth 2.0", "Docker", "AWS", "Jest", "Cypress"],
    image: "/assets/Code_Base.png",
    githubUrl: "https://github.com/parthDOOM/YeetTheCode",
    liveUrl: "https://code-vault-new-frontend.vercel.app/",
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
    featured: true
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
    id: "graph-visualizer",
    title: "Graph Visualizer",
    description: "TypeScript web tool for data visualization with downloadable PNG export functionality.",
    fullDescription: "\"Lookatthisgraph\" is a web-based data visualization tool developed with TypeScript, JavaScript, Tailwind CSS, and Vite, designed to help users create and interact with various graphical representations like graphs and trees. It's especially useful during competitive programming contests for visualizing Graphs and Trees problem-solving strategies. Key features include customizable visualizations, real-time data updates, and the ability to download the generated visuals as PNG files.",
    technologies: ["TypeScript", "JavaScript", "Tailwind CSS", "Vite", "Canvas API"],
    image: "/assets/graph.png",
    githubUrl: "https://github.com/parthDOOM/Lookatthisgraph",
    liveUrl: "https://lookatthisgraph.netlify.app/",
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

export const achievements: Achievement[] = [
  {
    title: "Amazon ML Summer School 2024",
    description: "Selected from 100,000 applicants for Amazon Machine Learning Summer School 2024",
    date: "2024",
    category: "ml",
    link: "#"
  },
  {
    title: "ICPC Amritapuri Regional Onsite 2024",
    description: "Represented my college at the ICPC Regional Amritapuri Onsite 2024, one of the top competitive programming contests.",
    date: "2024",
    category: "competition",
    link: "/assets/2025-ICPC Asia Amritapuri Multisite RC 2024-Parthiv Jasoliya-PLACE.pdf"
  },
  {
    title: "META Hackercup - Top Ranking",
    description: "Achieved top ranking in global coding contest META Hackercup, demonstrating exceptional problem-solving skills.",
    date: "2024",
    category: "competition"
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