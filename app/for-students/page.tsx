import { pageMetadata } from '@/lib/seo';
import { ArrowRight, ArrowUpRight, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { Header, Footer } from '@/components/marketing';
import { SolutionHeroArt } from '@/components/solution-hero-art';
import { AcademicsSections, AcademicsRollout } from '@/components/academics-page';
import { CollegeReadinessSections, CollegeReadinessClosing } from '@/components/college-readiness-page';
import './academics.css';
import './college-readiness.css';
import './for-students.css';

const tracks = [
  { id: 'academics', icon: BookOpen, tone: 'green', label: 'Academics',
    title: 'Help with today\u2019s homework,\nnot just this term\u2019s syllabus.',
    body: 'Resources, guided explanations, AI study tools, and practice your students can reach for during classwork, homework, and revision.',
    jump: [['Subject resources', '#academic-resources'], ['Virtual AI Tutor', '#academic-tutor'], ['AI study tools', '#academic-practice'], ['Learning outcomes', '#academic-progress']] },
  { id: 'college-readiness', icon: GraduationCap, tone: 'gold', label: 'College Readiness',
    title: 'Give every student\na path after school.',
    body: 'SAT and ACT preparation, a student profile, college recommendations, and Virtual Counselor guidance \u2014 one readiness program instead of four disconnected ones.',
    jump: [['SAT & ACT preparation', '#readiness-tests'], ['Student profiles', '#readiness-profile'], ['College discovery', '#readiness-colleges'], ['Virtual Counselor', '#readiness-counselor']] },
];

function TrackIntro({ track }: { track: typeof tracks[number] }) {
  return <section className={`st-track st-${track.tone}`} id={track.id}>
    <div className="wrap st-track-grid">
      <div>
        <span className="st-track-label"><track.icon size={20} />{track.label}</span>
        <h2>{track.title.split('\n').map((line, i) => <span key={line}>{line}{i === 0 ? <br /> : null}</span>)}</h2>
        <p>{track.body}</p>
      </div>
      <nav className="st-track-jump" aria-label={`${track.label} sections`}>
        {track.jump.map(([label, href]) => <a href={href} key={href}>{label}<ArrowRight size={15} /></a>)}
      </nav>
    </div>
  </section>;
}

export default function Page() {
  return <>
    <Header />
    <main id="main" className="academics-page college-page students-page">
      <section className="ac-hero st-hero">
        <div className="wrap">
          <a className="ac-breadcrumb" href="/">The ecosystem <ChevronRight size={14} /> For Students</a>
          <div className="ac-hero-grid">
            <div>
              <div className="eyebrow">FOR STUDENTS</div>
              <h1>Somewhere to turn<br /><span>when class ends.</span></h1>
              <p>Your students get help with every subject while the term runs, and a clear path to college when it matters. Both in the same place, and both there when your teachers are not.</p>
              <a className="button" href="/request-demo?interest=academics,college-readiness">Explore the student experience <ArrowUpRight size={18} /></a>
              <div className="st-hero-tracks">
                {tracks.map(t => <a href={`#${t.id}`} key={t.id} className={`st-${t.tone}`}><t.icon size={19} /><b>{t.label}</b><ArrowRight size={16} /></a>)}
              </div>
            </div>
            <SolutionHeroArt solution="academics" />
          </div>
        </div>
      </section>

      <TrackIntro track={tracks[0]} />
      <AcademicsSections />
      <AcademicsRollout />

      <TrackIntro track={tracks[1]} />
      <CollegeReadinessSections />
      <CollegeReadinessClosing />
    </main>
    <Footer />
  </>;
}

export const metadata = pageMetadata("For Students — Academics & College Readiness", "Support student learning with subject resources, Virtual AI Tutor, and AI study tools, then connect it to SAT and ACT preparation, college discovery, and counseling.", "/academics-hero.png");
