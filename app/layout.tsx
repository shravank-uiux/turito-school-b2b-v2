import { metadataBase } from '@/lib/seo';
import type { Metadata } from 'next';
import { CardMotion } from '@/components/card-motion';
import './globals.css';
import './journey.css';
import './solution-hero-art.css';
import './card-motion.css';
export const metadata: Metadata = {
  metadataBase,
  title: { default: 'TuritoSchools | Teaching Tools & Student Learning Support', template: '%s | TuritoSchools' },
  description: 'Connect academic planning, AI teaching tools, student learning support, performance insights, and college readiness for your school.',
  applicationName: 'TuritoSchools',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>{children}<CardMotion/></body></html>;
}
