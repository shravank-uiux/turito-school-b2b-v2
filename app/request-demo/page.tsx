import { pageMetadata } from '@/lib/seo';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Header, Footer } from '@/components/marketing';
import { DemoForm } from '@/components/demo-form';
export default function DemoPage(){return <><Header/><main id="main" className="demo-page"><div className="wrap demo-grid"><div className="demo-copy"><Link href="/" className="breadcrumb-link">TuritoSchools <ArrowRight size={12}/> Let's connect</Link><div className="eyebrow teal">Your school. Your next step.</div><h1>Tell us what<br/><span className="serif">your school needs.</span></h1><p>Come with the problem you actually want solved. We'll show you the part of this that addresses it, and be honest about the parts that don't.</p><ul><li><Check size={17}/> We walk through the solutions you asked about.</li><li><Check size={17}/> You see what your teachers and students would actually use.</li><li><Check size={17}/> We work out whether you start with one solution or several.</li></ul><div className="demo-image"><img src="/learning-together.png" width={1536} height={1024} alt="A teacher helping two students work through a problem together"/><span>Every school has a next chapter.</span></div></div><DemoForm/></div></main><Footer/></>}

export const metadata = pageMetadata("Request a School Demo", "Explore TuritoSchools with your team. Discuss academic planning, AI teaching tools, student learning support, performance insights, and college readiness.", "/learning-together.png");
