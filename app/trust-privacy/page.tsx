import { pageMetadata } from '@/lib/seo';
import { ArrowUpRight, Check, ChevronRight, Eye, GraduationCap, Lock, PencilRuler, School, SlidersHorizontal, UserCheck } from 'lucide-react';
import { Header, Footer } from '@/components/marketing';
import './trust-privacy.css';

const principles = [
  { icon: UserCheck, tone: 'green', title: 'Teachers review what AI produces',
    body: 'AI helps prepare materials, questions, and marking. A teacher reviews, edits, and decides what reaches the classroom. Nothing is published to students automatically.' },
  { icon: School, tone: 'purple', title: 'Schools stay in control of their data',
    body: 'Your school decides which solutions are used, who has access, and what is shared between them. Student work and results belong to the school, not to us.' },
  { icon: Eye, tone: 'coral', title: 'Insights are for supporting learning',
    body: 'Engagement and performance reporting exists to help educators find where students need support. It is not used to advertise to students or families.' },
  { icon: SlidersHorizontal, tone: 'gold', title: 'Start small, expand deliberately',
    body: 'Schools can begin with one solution and add others later. Access and visibility are set up to match how your school is actually organised.' },
];

const roles = [
  { icon: PencilRuler, label: 'Teachers', body: 'See the classes they teach. They review AI-assisted materials and evaluations before students see results.' },
  { icon: GraduationCap, label: 'Students', body: 'See their own resources, practice, and progress — the material their school has made available to them.' },
  { icon: Lock, label: 'School & county leaders', body: 'See engagement and performance for the schools and classrooms in their remit, at the level of detail their role requires.' },
];

export default function Page() {
  return <>
    <Header />
    <main id="main" className="trust-page">
      <section className="tp-hero">
        <div className="wrap">
          <a className="tp-breadcrumb" href="/">The ecosystem <ChevronRight size={14} /> Trust &amp; Privacy</a>
          <div className="tp-hero-grid">
            <div>
              <div className="eyebrow">TRUST &amp; PRIVACY</div>
              <h1>Built for classrooms.<br /><em>Answerable to schools.</em></h1>
              <p>TuritoSchools sits close to teaching and learning, so how it handles student work matters as much as what it can do. These are the principles the product is built around.</p>
              <a className="button" href="/request-demo?interest=trust-privacy">Talk through the details <ArrowUpRight size={18} /></a>
            </div>
            <div className="tp-hero-mark">
              <Lock size={34} />
              <span>Teacher judgement stays<br /><em>in the loop.</em></span>
            </div>
          </div>
        </div>
      </section>

      <section className="tp-principles">
        <div className="wrap">
          <div className="tp-heading">
            <div>
              <div className="eyebrow">HOW WE APPROACH IT</div>
              <h2>Four commitments<br /><em>behind the product.</em></h2>
            </div>
            <p>Each one shows up in how the solutions actually behave — not only in policy.</p>
          </div>
          <div className="tp-grid">
            {principles.map((p, i) => <article key={p.title}>
              <span className={`tp-icon ${p.tone}`}><p.icon size={23} /></span>
              <span className="tp-number">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="tp-roles">
        <div className="wrap">
          <div className="tp-heading">
            <div>
              <div className="eyebrow">ACCESS BY ROLE</div>
              <h2>People see what<br /><em>their role requires.</em></h2>
            </div>
            <p>Access follows the structure of the school, so information reaches the people responsible for acting on it.</p>
          </div>
          <div className="tp-role-grid">
            {roles.map(r => <article key={r.label}>
              <r.icon size={25} />
              <h3>{r.label}</h3>
              <p>{r.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="tp-ai">
        <div className="wrap tp-ai-grid">
          <img src="/learning-together.png" width={1536} height={1024} alt="A teacher working through a problem with two students" loading="lazy" />
          <div>
            <div className="eyebrow">WHERE AI FITS</div>
            <h2>AI prepares the draft.<br /><em>Educators make the call.</em></h2>
            <p>Across Teacher Tools, Academics, and reporting, AI is a starting point: a generated worksheet, a suggested question set, an assisted mark, a summary of a class. In every case an educator can open what sits underneath it, change it, or set it aside.</p>
            <ul>
              <li><Check size={17} /> Generated materials can be edited before use.</li>
              <li><Check size={17} /> Answer keys and evaluations are reviewable.</li>
              <li><Check size={17} /> Summaries link back to the underlying results.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tp-closing">
        <div className="wrap">
          <div>
            <div className="eyebrow">YOUR SCHOOL&rsquo;S REQUIREMENTS</div>
            <h2>Bring your questions.</h2>
            <p>Every district has its own requirements around student data, access, and review. Bring yours and we&rsquo;ll walk through how TuritoSchools would be set up for your school.</p>
          </div>
          <a className="button" href="/request-demo?interest=trust-privacy">Request a demo <ArrowUpRight size={18} /></a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

export const metadata = pageMetadata("Trust & Privacy", "How TuritoSchools handles student work: teachers review what AI produces, schools stay in control of their data, and access follows the structure of the school.", "/learning-together.png");
