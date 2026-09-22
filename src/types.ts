export type ServiceCategory = 'video' | 'design';

export type ActivePage = 'home' | 'works' | 'services' | 'showreel' | 'about' | 'inquire';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  deliverables: string[];
  typicalTimeline: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'video' | 'design' | 'both';
  subcategory: string;
  coverImage: string;
  editorialImages: string[];
  videoUrl?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'cinematic';
  tagline: string;
  synopsis: string;
  creativeDirection: string;
  deliverables: string[];
  featuredCollageIndex: number;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  companyOrBrand?: string;
  message?: string;
  serviceInterest?: string;
}

export interface LogoConfig {
  type: 'text' | 'image';
  textBrand: string;
  tagline: string;
  imageUrl?: string;
}
