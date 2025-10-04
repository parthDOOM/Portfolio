export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'web' | 'programming' | 'ml' | 'tools';
  level: number; // 1-5 scale (1=Beginner, 2=Learning, 3=Comfortable, 4=Proficient, 5=Expert)
  experience: string;
  projects: number;
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'competition' | 'certification' | 'award' | 'ml';
  link?: string;
}

export interface CompetitiveProgramming {
  platform: string;
  username: string;
  rating: string;
  maxRating?: string;
  rank?: string;
  profileUrl: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  codeforces: string;
  codechef: string;
  leetcode: string;
}