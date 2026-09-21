import { pageMetadata } from '@/lib/seo';
import {SchoolPerformancePage} from '@/components/school-performance-page';
import './school-performance.css';
export default function Page(){return <SchoolPerformancePage/>}

export const metadata = pageMetadata("School & District Insights — Engagement & Learning Performance", "Review engagement and subject-level performance across districts, schools, classrooms, and students, with AI summaries that support educator review.", "/performance-hero.png");
