// ================================================================
// SITE CONFIG SYSTEM
// Central source of truth for every editable site section.
// - DEFAULT_CONFIG  : committed defaults (used by build)
// - getConfig()     : loads public/site-config.json at runtime,
//   falling back to defaults → enables dashboard publish flow.
// ================================================================

// ================================================================
// TYPES (match src/data/site.json schema)
// ================================================================
export type Social = {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  linkedinProfile?: string;
  youtube?: string;
};

export type Brand = {
  name: string;
  tagline: string;
  logo: string;
  favicon: string;
  founder: string;
  founderTagline: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  social: Social;
};

export type Colors = {
  primary: string;
  surface: string;
  terra: string;
  terraBright: string;
  peach: string;
  mint: string;
  accentMint: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
};

export type Typography = {
  headingFont: string;
  headingFontUrl: string;
  bodyFont: string;
  bodyFontUrl: string;
  monoFont: string;
  monoFontUrl: string;
  baseSize: string;
  scaleRatio: number;
};

export type Spacing = {
  sectionX: string;
  sectionY: string;
  containerMax: string;
  gutter: string;
};

export type Radius = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

export type Shadows = {
  card: string;
  elevated: string;
  glow: string;
};

export type Theme = {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  radius: Radius;
  shadows: Shadows;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  enabled: boolean;
};

export type CtaButton = {
  label: string;
  href: string;
  enabled: boolean;
};

export type Navigation = {
  items: NavItem[];
  cta: CtaButton;
};

export type HeroMetric = {
  label: string;
  value: string;
  id: string;
};

export type FloatingCard = {
  id: string;
  label: string;
  value: string;
  trend?: 'up' | 'down';
  subLabel?: string;
  position: string;
};

export type HeroSection = {
  enabled: boolean;
  tag: string;
  headline1: string;
  headline2: string;
  headline3: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  metrics: HeroMetric[];
  floatingCards: FloatingCard[];
};

export type MarqueeSection = {
  enabled: boolean;
  items: string[];
};

export type ServiceItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type ServicesSection = {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export type CalculatorSection = {
  enabled: boolean;
  title: string;
  subtitle: string;
};

export type CaseStudyItem = {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  result: string;
  metrics: string[];
  image: string;
};

export type CaseStudiesSection = {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: CaseStudyItem[];
};

export type FounderSection = {
  enabled: boolean;
  name: string;
  tagline: string;
  quote: string;
  image: string;
};

export type CtaSection = {
  enabled: boolean;
  headline: string;
  buttonText: string;
  buttonHref: string;
  features: string;
};

export type SiteSection =
  | HeroSection
  | MarqueeSection
  | ServicesSection
  | CalculatorSection
  | CaseStudiesSection
  | FounderSection
  | CtaSection;

export type Sections = {
  hero: HeroSection;
  marquee: MarqueeSection;
  services: ServicesSection;
  calculator: CalculatorSection;
  caseStudies: CaseStudiesSection;
  founder: FounderSection;
  cta: CtaSection;
};

export type SeoPage = {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
};

export type SeoConfig = {
  home: SeoPage;
  blog: SeoPage;
  privacy: SeoPage;
};

export type BlogConfig = {
  postsPerPage: number;
  categories: string[];
  defaultCover: string;
};

export type MediaAsset = {
  id: string;
  name: string;
  url: string;
  type: string;
  alt: string;
};

export type MediaConfig = {
  assets: MediaAsset[];
};

export type FooterConfig = {
  copyright: string;
  disclaimer: string;
  madeIn: string;
};

export type Config = {
  version: string;
  lastUpdated: string;
  brand: Brand;
  theme: Theme;
  navigation: Navigation;
  sections: Sections;
  seo: SeoConfig;
  blog: BlogConfig;
  media: MediaConfig;
  footer: FooterConfig;
};

// ================================================================
// DEFAULT CONFIG (source of truth — used when public/site-config.json
//  is absent or fails to load)
// ================================================================
export const DEFAULT_CONFIG: Config = {
  version: '1.0',
  lastUpdated: new Date().toISOString(),
  brand: {
    name: 'iAdvert Studio',
    tagline: 'Premier Meta & Facebook Ads Agency',
    logo: '/assets/logo.png',
    favicon: '/favicon.svg',
    founder: 'Ratul Ahmed Shishir',
    founderTagline: 'THE STRATEGIST BEHIND THE SYSTEM',
    description: 'We scale brands with high-performance Meta and Facebook ads. Psychological creative, scientific CBO architecture, and bulletproof CAPI tracking.',
    email: 'inquiryiadverts@gmail.com',
    phone: '+880 1301-843562',
    whatsapp: '+880 1301-843562',
    address: 'Rajshahi, Bangladesh',
    social: {
      facebook: 'https://www.facebook.com/iAdvertStudio',
      instagram: 'https://www.instagram.com/iadvertstudio',
      linkedin: 'https://www.linkedin.com/company/iadvertsm/',
      linkedinProfile: 'https://www.linkedin.com/in/ratulashishir/',
      youtube: 'https://youtube.com/@iadvertstudio'
    }
  },
  theme: {
    colors: {
      primary: '#0c0a10',
      surface: '#141218',
      terra: '#e04832',
      terraBright: '#e04832',
      peach: '#ffdad2',
      mint: '#00e599',
      accentMint: '#00e599',
      textPrimary: '#f8f7fa',
      textSecondary: '#c4c3ca',
      textMuted: '#9a999f',
      border: '#ffffff1a'
    },
    typography: {
      headingFont: 'Lora',
      headingFontUrl: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap',
      bodyFont: 'Plus Jakarta Sans',
      bodyFontUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
      monoFont: 'JetBrains Mono',
      monoFontUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
      baseSize: '16px',
      scaleRatio: 1.25
    },
    spacing: {
      sectionX: '6rem',
      sectionY: '4rem',
      containerMax: '80rem',
      gutter: '1.5rem'
    },
    radius: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      full: '9999px'
    },
    shadows: {
      card: '0 4px 20px rgba(0,0,0,0.3)',
      elevated: '0 10px 40px rgba(0,0,0,0.45)',
      glow: '0 0 25px rgba(224,72,50,0.5)'
    }
  },
  navigation: {
    items: [
      { id: 'services', label: 'Meta Engine', href: '/#services', enabled: true },
      { id: 'calculator', label: 'ROAS Simulator', href: '/#calculator', enabled: true },
      { id: 'results', label: 'Case Studies', href: '/#results', enabled: true },
      { id: 'blog', label: 'Blog', href: '/blog', enabled: true },
      { id: 'founder', label: 'About', href: '/#founder', enabled: true }
    ],
    cta: {
      label: 'Claim Free Audit',
      href: 'https://wa.me/8801301843562?text=Hello%20Ratul,%20I%20want%20a%20Free%20Meta%20Ads%20Audit%20for%20my%20business.',
      enabled: true
    }
  },
  sections: {
    hero: {
      enabled: true,
      tag: '100% SPECIALIZED IN META & FACEBOOK ADS',
      headline1: 'We Scale Brands with',
      headline2: 'HIGH-PERFORMANCE',
      headline3: 'META ADS.',
      subtitle: 'Stop guessing your Facebook ad spend. Build a profitable sales machine with psychological creative hooks, data-driven CBO architecture, and bulletproof server-side CAPI tracking.',
      ctaText: 'Get Free 20-Min Audit',
      ctaHref: 'https://wa.me/8801301843562?text=Hello%20Ratul,%20I%20would%20like%20to%20audit%20my%20Facebook%20Ads%20account.',
      secondaryCtaText: 'Calculate ROAS',
      secondaryCtaHref: '#calculator',
      metrics: [
        { label: 'Spend Managed', value: '$100k+', id: 'metric1' },
        { label: 'Avg Client ROAS', value: '3.8x – 6.2x', id: 'metric2' },
        { label: 'CAPI Accuracy', value: '99.8%', id: 'metric3' }
      ],
      floatingCards: [
        { id: 'card1', label: 'BLENDED ROAS', value: '+380%', trend: 'up', position: 'top-left' },
        { id: 'card2', label: 'SCALING ENGINE', value: '+124%', subLabel: 'MoM Growth', position: 'bottom-right' },
        { id: 'card3', label: 'CAPI VERIFIED', value: '100% Server-Side Data', subLabel: '● Zero iOS 14.5 Loss', position: 'center-left' }
      ]
    },
    marquee: {
      enabled: true,
      items: [
        'Meta Ads Specialist',
        'CAPI Implementation Expert',
        'Creative Strategy & UGC',
        'CBO Architecture',
        'Server-Side Tracking',
        'ROAS Optimization',
        'E-commerce Scaling',
        'Lead Gen Mastery'
      ]
    },
    services: {
      enabled: true,
      title: 'The Meta Engine',
      subtitle: 'End-to-end ad systems — not just campaigns.',
      items: [
        { id: 'svc1', icon: 'target', title: 'Meta Ads Strategy', description: 'Full-funnel architecture from cold traffic to LTV maximization. Audience layering, bid strategy selection, and budget pacing.' },
        { id: 'svc2', icon: 'chart', title: 'Creative That Converts', description: 'Psychological hook engineering, UGC production systems, iterative testing frameworks, and creative fatigue detection.' },
        { id: 'svc3', icon: 'shield', title: 'Server-Side CAPI', description: 'Stape.io, GTM server-side, and Events API implementation. Recover 15-35% lost signal from iOS/privacy changes.' },
        { id: 'svc4', icon: 'scale', title: 'Scaling Playbooks', description: 'Vertical & horizontal scaling without ROAS decay. Automated rules, budget allocation models, and audience expansion.' },
        { id: 'svc5', icon: 'audit', title: 'Account Audits', description: 'Deep-dive analysis of structure, creative, tracking, and attribution. Actionable roadmap with priority scoring.' },
        { id: 'svc6', icon: 'brain', title: 'Retention & LTV', description: 'Post-purchase funnels, WhatsApp automation, email sequences, and predictive LTV modeling for sustainable growth.' }
      ]
    },
    calculator: {
      enabled: true,
      title: 'ROAS Simulator',
      subtitle: 'Project your returns before you spend.'
    },
    caseStudies: {
      enabled: true,
      title: 'Client Results',
      subtitle: 'Real outcomes from real ad accounts.',
      items: [
        { id: 'cs1', client: 'D2C Beauty Brand', industry: 'Beauty & Cosmetics', challenge: 'Declining ROAS at $8K/mo spend', result: '3.2x ROAS → 5.8x in 45 days', metrics: ['$8K → $22K/mo', 'CPA -44%', '28% signal recovered'], image: '/assets/hero-3d-concept.jpg' },
        { id: 'cs2', client: 'Fitness Apparel', industry: 'E-commerce', challenge: 'Stuck at $50K/mo, creative fatigue', result: 'Scaled to $180K/mo at 4.1x ROAS', metrics: ['Creative refresh 2x/mo', 'CAPI +30% attribution', 'LTV +67%'], image: '/assets/hero-3d-concept.jpg' },
        { id: 'cs3', client: 'SaaS Lead Gen', industry: 'B2B Software', challenge: 'High CPL, poor lead quality', result: 'CPL -52%, SQL rate +89%', metrics: ['Server-side tracking', 'WhatsApp nurture', 'Lookalike expansion'], image: '/assets/hero-3d-concept.jpg' }
      ]
    },
    founder: {
      enabled: true,
      name: 'Ratul Ahmed Shishir',
      tagline: 'THE STRATEGIST BEHIND THE SYSTEM',
      quote: '"Agencies that claim to handle graphics, logos, websites, and SEO all at once cannot truly specialize in any. I have spent the last several years focusing exclusively on the internal algorithms, high-conversion copywriting, and server-side tracking mechanisms of Meta and Facebook ads. My single goal: to deliver the maximum cash return for every 1 taka of ad spend."',
      image: '/assets/founder.jpg'
    },
    cta: {
      enabled: true,
      headline: 'Ready to Build a Predictable REVENUE ENGINE WITH META ADS?',
      buttonText: 'Book 20-Min Strategy Audit on WhatsApp',
      buttonHref: 'https://wa.me/8801301843562?text=Hello%20Ratul,%20I%20want%20a%20Free%20Meta%20Ads%20Audit%20for%20my%20business.',
      features: '✓ Free 1-on-1 Consultation • ✓ Actionable Scaling Roadmap • ✓ Zero Obligation'
    }
  },
  seo: {
    home: {
      title: 'iAdvert Studio | Premier Meta & Facebook Ads Agency',
      description: 'We scale brands with high-performance Meta and Facebook ads. Psychological creative, scientific CBO architecture, and bulletproof CAPI tracking.',
      keywords: 'Meta Ads Agency, Facebook Ads Bangladesh, CAPI Setup, Scale ROAS',
      ogImage: '/assets/hero-3d-concept.jpg'
    },
    blog: {
      title: 'iAdvert Studio | Meta Ads Blog & Insights',
      description: 'Expert insights on Meta Ads, CAPI tracking, creative strategy, and scaling playbooks from Ratul Ahmed Shishir.',
      keywords: 'Meta Ads Blog, Facebook Ads Tips, CAPI Tutorial, Ad Scaling',
      ogImage: '/assets/hero-3d-concept.jpg'
    },
    privacy: {
      title: 'Privacy Policy | iAdvert Studio',
      description: 'Our commitment to protecting your data and privacy. Learn how we collect, use, and safeguard your information.',
      keywords: 'Privacy Policy, Data Protection, GDPR',
      ogImage: '/assets/hero-3d-concept.jpg'
    }
  },
  blog: {
    postsPerPage: 10,
    categories: ['Meta Ads', 'CAPI & Tracking', 'Creative Psychology', 'Strategy & Scale', 'Education & Tips'],
    defaultCover: '/assets/hero-3d-concept.jpg'
  },
  media: {
    assets: [
      { id: 'logo', name: 'logo.png', url: '/assets/logo.png', type: 'image', alt: 'iAdvert Studio Logo' },
      { id: 'hero', name: 'hero-3d-concept.jpg', url: '/assets/hero-3d-concept.jpg', type: 'image', alt: 'Hero 3D Concept' },
      { id: 'founder', name: 'founder.jpg', url: '/assets/founder.jpg', type: 'image', alt: 'Founder Ratul Ahmed Shishir' }
    ]
  },
  footer: {
    copyright: 'iAdvert Studio. All rights reserved.',
    disclaimer: 'Meta™ and Facebook™ are trademarks of Meta Platforms, Inc.',
    madeIn: 'Made with focus in Rajshahi, Bangladesh'
  }
};

// ================================================================
// CONFIG LOADER
// Loads config from public/site-config.json for Vercel deployment,
// falling back gracefully to DEFAULT_CONFIG.
// ================================================================
let _config: Config | null = null;
let _loadingPromise: Promise<Config> | null = null;

function loadConfig(): Promise<Config> {
  if (_loadingPromise) return _loadingPromise;

  _loadingPromise = (async () => {
    try {
      const resp = await fetch('/site-config.json', {
        cache: 'force-cache',
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        const fetched = (await resp.json()) as Partial<Config>;
        _config = mergeConfigDeep(DEFAULT_CONFIG, fetched);
      } else {
        _config = DEFAULT_CONFIG;
      }
    } catch (err) {
      _config = DEFAULT_CONFIG;
    }
    return _config;
  })();

  return _loadingPromise;
}

// Deep merge: target ← source (source wins for conflicts)
function mergeConfigDeep(target: Config, source: Partial<Config>): Config {
  const result = { ...target } as Config;

  for (const key of Object.keys(source) as (keyof Partial<Config>)[]) {
    if (source[key] === undefined) continue;

    if (
      typeof source[key] === 'object' &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      const targetVal = result[key] as Record<string, unknown>;
      const srcVal = source[key] as Partial<Record<string, unknown>>;
      if (targetVal && srcVal) {
        (result as any)[key] = mergeConfigDeepTyped(targetVal as Config, srcVal as Partial<Config>);
      } else {
        (result as any)[key] = source[key];
      }
    } else {
      (result as any)[key] = source[key];
    }
  }

  return result;
}

// Internal recursive merge for nested objects
function mergeConfigDeepTyped(target: Record<string, unknown>, source: Partial<Record<string, unknown>>): Record<string, unknown> {
  const result = { ...target };
  for (const [k, v] of Object.entries(source)) {
    if (v === undefined) continue;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      const cur = result[k] as Record<string, unknown> | undefined;
      if (cur) {
        result[k] = mergeConfigDeepTyped(cur, v as Partial<Record<string, unknown>>);
      } else {
        result[k] = v;
      }
    } else {
      result[k] = v;
    }
  }
  return result;
}

// ================================================================
// EXPORTS
// ================================================================
export async function getConfig(): Promise<Config> {
  if (!_config && !_loadingPromise) return loadConfig();
  if (_loadingPromise) return _loadingPromise;
  return _config;
}

export async function reloadConfig(): Promise<Config> {
  _config = null;
  _loadingPromise = null;
  return loadConfig();
}

export type { Config };