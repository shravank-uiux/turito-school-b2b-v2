import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Header, Footer } from "@/components/marketing";
import { SolutionHeroArt } from "@/components/solution-hero-art";
import {
  AcademicsSections,
  AcademicsRelated,
  AcademicsRollout,
} from "@/components/academics-page";
import "../academics.css";
import "../for-students.css";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="academics-page students-page">
        <section className="ac-hero st-hero">
          <div className="wrap">
            <nav className="ac-breadcrumb" aria-label="Breadcrumb">
              <span>For Students</span> <ChevronRight size={14} aria-hidden="true" />{" "}
              <span aria-current="page">Academic Support</span>
            </nav>
            <div className="ac-hero-grid">
              <div>
                <div className="eyebrow">ACADEMIC SUPPORT</div>
                <h1>
                  Help students keep learning
                  <br />
                  <span>beyond the lesson.</span>
                </h1>
                <p>
                  Give students resources by subject, guided explanations, practice, and progress
                  views—with the Virtual AI Tutor included when they need help working through a
                  question.
                </p>
                <a className="button" href="/request-demo?interest=academics">
                  Request an Academic Support demo <ArrowUpRight size={18} />
                </a>
                <a className="st-workflow-link text-link" href="#academic-journey">
                  See how it works <ChevronRight size={17} />
                </a>
              </div>
              <SolutionHeroArt solution="academics" />
            </div>
          </div>
        </section>
        <AcademicsSections />
        <AcademicsRelated />
        <AcademicsRollout />
      </main>
      <Footer />
    </>
  );
}

export const metadata = pageMetadata(
  "Academic Support — Resources, Practice & Virtual AI Tutor",
  "Support learning with resources by subject, guided explanations, AI study tools, practice, progress views, and the included Virtual AI Tutor.",
  "/academics-hero.png",
);
