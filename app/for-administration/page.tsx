import { pageMetadata } from '@/lib/seo';
import {SchoolPerformancePage} from '@/components/school-performance-page';
import './school-performance.css';
export default function Page(){return <SchoolPerformancePage/>}

export const metadata = pageMetadata("For Schools — School Performance & Learning Insights", "Track engagement and subject-level performance across counties, schools, classrooms, and students, with AI summaries to help leadership teams focus support.", "/performance-hero.png");
