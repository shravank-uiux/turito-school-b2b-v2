import { pageMetadata } from "@/lib/seo";
import { SolutionHeroArt } from "@/components/solution-hero-art";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChartNoAxesCombined,
  ClipboardCheck,
  PencilRuler,
  Sparkles,
} from "lucide-react";
import { Header, Footer } from "@/components/marketing";
import { Closing } from "@/components/experiences";
import { TeacherSolutionSections } from "@/components/journey-motion";
const teacherBenefits = [
  {
    id: "planning",
    icon: BookOpen,
    title: "Academic planning",
    body: "Map the school year, then keep materials and assignments attached to the lessons where they belong.",
  },
  {
    id: "tools",
    icon: Sparkles,
    title: "50+ AI teaching tools",
    body: "Start with drafts of worksheets, lesson plans, rubrics, and slides, then adapt them for the class.",
  },
  {
    id: "assessment",
    icon: PencilRuler,
    title: "Assessment creation",
    body: "Choose question sources, question types, difficulty, and point values, then review the answer key.",
  },
];

export default function TeacherPage() {
  return (
    <>
      <Header />
      <main id="main" className="teacher-tools-page">
        <section className="hero teacher-page-hero">
          <div className="wrap">
            <Link className="breadcrumb-link" href="/">
              The ecosystem <ArrowRight size={12} /> For Teachers
            </Link>
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="eyebrow blue">Teacher Tools</div>
                <h1>
                  Your teaching week.
                  <br />
                  Plan, create,
                  <br />
                  <span className="serif">and assess in one place.</span>
                </h1>
                <p>
                  Plan lessons, prepare materials, and build assessments in one connected
                  workflow. Adapt each step to your class.
                </p>
                <div className="actions">
                  <Link href="/request-demo?interest=teacher-tools" className="button">
                    Request a Teacher Tools demo <ArrowUpRight size={17} />
                  </Link>
                  <a className="text-link" href="#teacher-workflow">
                    See the workflow <ArrowRight size={17} />
                  </a>
                </div>
                <p className="hero-note">
                  <Check size={14} /> Teachers review and edit every AI-assisted material before
                  it reaches a class.
                </p>
              </div>
              <SolutionHeroArt solution="teacher-tools" />
            </div>
          </div>
        </section>
        <div className="teacher-benefits wrap">
          {teacherBenefits.map((b) => {
            const I = b.icon;
            return (
              <div key={b.id}>
                <I size={24} />
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            );
          })}
        </div>
        <TeacherSolutionSections />
        <section className="teacher-human">
          <div className="wrap human-grid">
            <img
              src="/learning-together.png"
              width={1536}
              height={1024}
              alt="Teacher helping students work through a problem"
              loading="lazy"
            />
            <div>
              <div className="eyebrow">Teacher control</div>
              <h2>
                AI prepares a starting point.
                <br />
                <span className="serif">You decide what to use.</span>
              </h2>
              <p>
                Revise a draft to match your lesson, check the questions and answer key, and
                decide what reaches your students.
              </p>
              <div className="human-note">
                <Check size={18} /> Teaching materials and assessments stay under teacher review.
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Connected solutions</div>
                <h2>
                  Connect classroom work
                  <br />
                  <span className="serif">with student support and insights.</span>
                </h2>
              </div>
              <p>
                Students can access resources and guided practice, while school teams can review
                engagement and subject-level performance.
              </p>
            </div>
            <div className="related-grid">
              <Link href="/for-students/academic-support">
                <BookOpen className="teal" size={27} />
                <div>
                  <h3>Academic support beyond class</h3>
                  <p>Explore resources, practice, and the included Virtual AI Tutor.</p>
                  <span>
                    Explore Academic Support <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
              <Link href="/for-administration">
                <ChartNoAxesCombined className="violet" size={27} />
                <div>
                  <h3>Insights for schools and districts</h3>
                  <p>
                    Review engagement and results across districts, schools, classrooms, and
                    students.
                  </p>
                  <span>
                    Explore School &amp; District Insights <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <Closing teacher />
      </main>
      <Footer />
    </>
  );
}

export const metadata = pageMetadata(
  "Teacher Tools — Planning, Materials & Assessments",
  "Connect academic planning, AI-assisted teaching materials, and assessment creation while keeping teachers in control.",
  "/teacher-tools-hero.png",
);
