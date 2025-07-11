export type contentType = {
  imageUrl: string;
  title: string;
  description: string;
  ctaUrl: string;
  ctaText: string;
  authorImageUrl: string;
  authorName: string;
  quote: string;
  authorPosition: string;
  clientIcons?: {
    clientIcons: string | undefined;
    icon: any;
    index: string;
  }[];
};

export type ClientStateData = {
  title: string;
  description: string;
  clientLogos: string[];
};

export type FeatureItem = {
  title: string;
  subtitle: string;
  features: {
    iconUrl: string;
    title: string;
    description: string;
  }[];
};

export type footerItem = {
  socialLinks: {
    platform: string;
    url: string;
  }[];
  footerNavigation: {
    company: {
      label: string;
      href: string;
    }[];
    support: {
      label: string;
      href: string;
    }[];
  };
};
export type FarmeItem = {
  title: string;
  ctaText: string;
};
export type ImpactItem = {
  title: string;
  description: string;
  stats: {
    value: any;
    item: string;
    index: number;
    logoUrl: string;
    label: string;
  }[];
};

export type NavItem = {
  logoUrl: string;
  brandName: string;
  navigation: {
    label: string;
    href: string;
  }[];
  authActions: {
    label: string;
    href: string;
  }[];
};
export type SliderItem = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl: string;
};
export type BlogItem = {
  title: string;
  description: string;
  articles: {
    ctaText: string;
    title: string;
    ctaUrl: string | undefined;
    imageUrl: string | undefined;
    article: string;
    index: number;
  }[];
};