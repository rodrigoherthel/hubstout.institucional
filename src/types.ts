export type Language = 'pt' | 'en' | 'es';

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  footer: {
    rights: string;
  };
}