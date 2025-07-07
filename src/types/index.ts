// Common types for the application

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  children?: NavigationItem[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaButtons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'horse-racing' | 'development' | 'cultural' | 'leadership';
  image?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate?: string;
  budget?: string;
  location: string;
  images: string[];
  impact: {
    economic: string;
    social: string;
    infrastructure: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  author: string;
  category: string;
  featuredImage: string;
  tags: string[];
  source?: string;
  externalLink?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'horse-racing' | 'ceremonies' | 'projects' | 'awards';
  date: string;
  location?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'personal' | 'career' | 'achievement' | 'appointment';
  image?: string;
}
