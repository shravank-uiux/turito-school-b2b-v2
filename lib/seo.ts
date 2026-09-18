import type { Metadata } from 'next';

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const metadataBase = new URL(deploymentHost ? `https://${deploymentHost}` : 'http://localhost:3001');
export function pageMetadata(title: string, description: string, image = '/learning-together.png'): Metadata {
  return {
    title, description,
    openGraph: { type: 'website', locale: 'en_US', siteName: 'TuritoSchools', title: `${title} | TuritoSchools`, description,
      images: [{ url: image, width: 1536, height: 1024, alt: 'TuritoSchools — teaching and student learning support' }] },
    twitter: { card: 'summary_large_image', title: `${title} | TuritoSchools`, description, images: [{ url: image, alt: 'TuritoSchools — teaching and student learning support' }] },
  };
}
