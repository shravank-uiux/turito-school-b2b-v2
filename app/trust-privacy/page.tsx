import { pageMetadata } from "@/lib/seo";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Eye,
  GraduationCap,
  Lock,
  PencilRuler,
  School,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";
import { Header, Footer } from "@/components/marketing";
import "./trust-privacy.css";

const principles = [
  {
    icon: UserCheck,
    tone: "green",
    title: "Teachers review AI-assisted work",
    body: "Teachers can edit generated materials and review questions and answer keys before sharing them with students.",
  },
  {
    icon: School,
    tone: "purple",
    title: "You stay in control of your data",
    body: "You decide which solutions are used, who has access, and what is shared between them. Your students’ work and results belong to your school, not to us.",
  },
  {
    icon: Eye,
    tone: "coral",
    title: "Reporting is for helping students",
    body: "Reporting exists so your educators can find the students who need help. We do not use it to advertise to your students or their families.",
  },
  {
    icon: SlidersHorizontal,
    tone: "gold",
    title: "Access reflects each person’s role",
    body: "District, school, and classroom access can be set up around the responsibilities of each person on your team.",
  },
];

const roles = [
  {
    icon: PencilRuler,
    label: "Teachers",
    body: "Teachers see the classes they teach. They can edit AI-assisted materials before sharing them with students.",
  },
  {
    icon: GraduationCap,
    label: "Students",
    body: "Your students see their own resources, practice, and progress — only what you have made available to them.",
  },
  {
    icon: Lock,
    label: "School & district leaders",
    body: "You see engagement and performance for the schools and classrooms you oversee, at the level of detail your role requires.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="trust-page">
        <section className="tp-hero">
          <div className="wrap">
            <a className="tp-breadcrumb" href="/">
              The ecosystem <ChevronRight size={14} /> Trust &amp; Privacy
            </a>
            <div className="tp-hero-grid">
              <div>
                <div className="eyebrow">TRUST &amp; PRIVACY</div>
                <h1>
                  Built for your classrooms.
                  <br />
                  <em>Answerable to you.</em>
                </h1>
                <p>
                  TuritoSchools works with student learning activity and results, so how it handles
                  that information matters as much as what the product can do. These principles
                  explain our approach.
                </p>
                <a className="button" href="/request-demo">
                  Talk through the details <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="tp-hero-mark">
                <Lock size={34} />
                <span>
                  Teacher judgment stays
                  <br />
                  <em>in the loop.</em>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="tp-principles">
          <div className="wrap">
            <div className="tp-heading">
              <div>
                <div className="eyebrow">HOW WE APPROACH IT</div>
                <h2>
                  Four commitments
                  <br />
                  <em>behind the product.</em>
                </h2>
              </div>
              <p>You can see each one in how the product behaves, not just in a policy document.</p>
            </div>
            <div className="tp-grid">
              {principles.map((p, i) => (
                <article key={p.title}>
                  <span className={`tp-icon ${p.tone}`}>
                    <p.icon size={23} />
                  </span>
                  <span className="tp-number">0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tp-roles">
          <div className="wrap">
            <div className="tp-heading">
              <div>
                <div className="eyebrow">ACCESS BY ROLE</div>
                <h2>
                  You decide
                  <br />
                  <em>who sees what.</em>
                </h2>
              </div>
              <p>
                Access follows the structure of your school, so information reaches the people
                responsible for acting on it and stops there.
              </p>
            </div>
            <div className="tp-role-grid">
              {roles.map((r) => (
                <article key={r.label}>
                  <r.icon size={25} />
                  <h3>{r.label}</h3>
                  <p>{r.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="tp-ai">
          <div className="wrap tp-ai-grid">
            <img
              src="/learning-together.png"
              width={1536}
              height={1024}
              alt="A teacher working through a problem with two students"
              loading="lazy"
            />
            <div>
              <div className="eyebrow">WHERE AI FITS</div>
              <h2>
                AI prepares the draft.
                <br />
                <em>Your educators make the call.</em>
              </h2>
              <p>
                Across Teacher Tools, Academic Support, and reporting, AI provides a starting point:
                a generated worksheet, a suggested question set, a suggested score, or a class
                summary. Educators can review the supporting work, make changes, or set the
                suggestion aside.
              </p>
              <ul>
                <li>
                  <Check size={17} /> Your teachers can edit any generated material before it is
                  used.
                </li>
                <li>
                  <Check size={17} /> Answer keys and generated materials are open for them to
                  review.
                </li>
                <li>
                  <Check size={17} /> Every summary links back to the results it came from.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="tp-closing">
          <div className="wrap">
            <div>
              <div className="eyebrow">YOUR SCHOOL&rsquo;S REQUIREMENTS</div>
              <h2>Bring your questions.</h2>
              <p>
                Your district will have its own requirements around student data, access, and
                review. Bring them and we&rsquo;ll explain how TuritoSchools can be set up for your
                organization.
              </p>
            </div>
            <a className="button" href="/request-demo">
              Request a demo <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const metadata = pageMetadata(
  "Trust & Privacy",
  "How TuritoSchools handles student work: teachers review what AI produces, schools stay in control of their data, and access follows the structure of the school.",
  "/learning-together.png",
);
