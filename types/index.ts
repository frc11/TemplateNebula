export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  ctaGradient?: boolean;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  gradient: [string, string];
}

export interface FooterColumn {
  title: string;
  links: string[];
}
