import { NavLink, Stat, Feature, PricingPlan, TeamMember, FooterColumn } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Producto', href: '#features' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Equipo', href: '#team' },
];

export const HERO_STATS: Stat[] = [
  { value: '12K+', label: 'Usuarios' },
  { value: '99.9%', label: 'Uptime' },
  { value: '3ms', label: 'Latencia' },
  { value: '150+', label: 'Integraciones' },
];

export const FEATURES: Feature[] = [
  {
    icon: '📊',
    title: 'Analytics en tiempo real',
    description: 'Monitoreá el rendimiento con precisión de milisegundos. Dashboards con insights profundos.',
  },
  {
    icon: '🔒',
    title: 'Seguridad reforzada',
    description: 'Encriptación enterprise-grade y detección automática de amenazas integrada.',
  },
  {
    icon: '⚡',
    title: 'Deploy instantáneo',
    description: 'Push a git y nosotros hacemos el resto. Zero downtime, rollback instantáneo.',
  },
  {
    icon: '🌐',
    title: 'Red edge global',
    description: 'Tu data, en todos lados. Enrutado al servidor más cercano para latencia mínima.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfecto para proyectos personales.',
    features: ['1 proyecto', 'Soporte comunidad', 'Analytics básico', '1GB almacenamiento'],
    ctaLabel: 'Empezar gratis',
  },
  {
    name: 'Pro',
    price: 29,
    description: 'Para equipos en crecimiento.',
    featured: true,
    badge: 'MÁS POPULAR',
    features: ['Proyectos ilimitados', 'Soporte 24/7 prioritario', 'Analytics avanzado', '100GB almacenamiento', 'Dominio personalizado'],
    ctaLabel: 'Empezar ahora',
    ctaGradient: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'Máximo rendimiento y seguridad.',
    features: ['Todo ilimitado', 'Manager dedicado', 'SSO & SAML', 'SLA 99.99% uptime', 'Deploy on-premise'],
    ctaLabel: 'Contactar ventas',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { initials: 'ML', name: 'Martina López', role: 'CEO & Co-founder', gradient: ['#6c4fff', '#a78bfa'] },
  { initials: 'SG', name: 'Santiago García', role: 'CTO & Co-founder', gradient: ['#00e5ff', '#0099aa'] },
  { initials: 'LR', name: 'Luciana Ruiz', role: 'Lead Designer', gradient: ['#ff4daa', '#cc1177'] },
  { initials: 'FM', name: 'Franco Medina', role: 'Backend Lead', gradient: ['#f59e0b', '#d97706'] },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Producto', links: ['Funcionalidades', 'Integraciones', 'Precios', 'Changelog', 'Docs'] },
  { title: 'Empresa', links: ['Nosotros', 'Carreras', 'Blog', 'Contacto', 'Partners'] },
  { title: 'Legal', links: ['Privacidad', 'Términos', 'Cookies', 'Seguridad'] },
];

export const LOGO_COMPANIES = ['ANDINA', 'NOATEC', 'TUCLAB', 'CERRO CO', 'AZUCAR++', 'SEQA'];

export const TICKER_ITEMS = [
  'Hecho en Tucumán',
  'v2.0 disponible',
  '+12.000 usuarios activos',
  'Deploy en segundos',
  '99.9% uptime garantizado',
];
