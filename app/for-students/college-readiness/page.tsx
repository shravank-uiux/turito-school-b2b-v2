import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Header, Footer } from "@/components/marketing";
import { SolutionHeroArt } from "@/components/solution-hero-art";
import {
  CollegeReadinessSections,
  CollegeReadinessClosing,
} from "@/components/college-readiness-page";
import "../academics.css";
import "../college-readiness.css";
import "../for-students.css";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="academics-page college-page students-page">
        <section className="ac-hero st-hero st-college-hero">
          <div className="wrap">
            <nav className="ac-breadcrumb" aria-label="Breadcrumb">
              <span>For Students</span> <ChevronRight size={14} aria-hidden="true" />{" "}
              <span aria-current="page">College Readiness</span>
            </nav>
            <div className="ac-hero-grid">
              <div>
                <div className="eyebrow">COLLEGE READINESS</div>
                <h1>
                  Help students prepare for college
                  <br />
                  <span>with a clearer plan.</span>
                </h1>
                <p>
                  Bring SAT and ACT preparation, student profiles, college exploration, and the
                  included Virtual AI Counselor into one readiness program.
                </p>
                <a className="button" href="/request-demo?interest=college-readiness">
                  Request a College Readiness demo <ArrowUpRight size={18} />
                </a>
                <a className="st-workflow-link text-link" href="#readiness-profile">
                  See how it works <ChevronRight size={17} />
                </a>
              </div>
              <SolutionHeroArt solution="college-readiness" />
            </div>
          </div>
        </section>
        <CollegeReadinessSections />
        <CollegeReadinessClosing />
      </main>
      <Footer />
    </>
  );
}

export const metadata = pageMetadata(
  "College Readiness — Test Preparation & Virtual AI Counselor",
  "Connect SAT and ACT preparation, student profiles, college exploration, and the included Virtual AI Counselor in one school readiness program.",
  "/college-hero.png",
);
