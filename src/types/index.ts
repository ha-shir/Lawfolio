export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  extendedDescription: string;
  iconName: 'scales' | 'file-text' | 'building' | 'home' | 'users' | 'laptop' | 'car' | 'stethoscope' | 'handshake';
  keyServices: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullOverview: string;
  strategy: string;
  outcome: string;
  jurisdiction: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientRole: string;
  caseType: string;
  year: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  practiceArea: string;
  preferredDate: string;
  preferredTime: string;
  summary: string;
  acknowledgement: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  icon: 'wreath' | 'briefcase' | 'scales';
}
