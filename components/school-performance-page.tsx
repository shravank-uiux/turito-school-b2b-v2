"use client";
import { SolutionHeroArt } from "./solution-hero-art";

import {
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  ChevronRight,
  Compass,
  FileCheck2,
  GraduationCap,
  Layers3,
  School,
  Sparkles,
  Users,
} from "lucide-react";
import { Header, Footer } from "./marketing";
function Demo() {
  return (
    <a href="/request-demo?interest=school-performance" className="button">
      Request an insights demo <ArrowUpRight size={18} />
    </a>
  );
}
function Explorer() {
  return (
    <div className="sp-simple-explorer">
      <div className="sp-scope-path">
        {[
          [Layers3, "District", "Compare school-level patterns"],
          [School, "School", "Find classrooms to review"],
          [Users, "Classroom", "Identify topics to revisit"],
          [GraduationCap, "Student", "Review individual responses"],
        ].map(([Icon, label, detail], i) => {
          const I = Icon as typeof School;
          return (
            <div key={String(label)}>
              <span className="sp-scope-icon">
                <I size={22} />
              </span>
              <strong>{String(label)}</strong>
              <p>{String(detail)}</p>
              {i < 3 && <ChevronRight className="sp-scope-arrow" size={18} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export function SchoolPerformancePage() {
  return (
    <>
      <Header />
      <main className="performance-page" id="main">
        <section className="sp-hero">
          <div className="wrap">
            <nav className="sp-breadcrumb" aria-label="Breadcrumb">
              <a href="/">The ecosystem</a>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">School &amp; District Insights</span>
            </nav>
            <div className="sp-hero-grid">
              <div>
                <div className="eyebrow">SCHOOL &amp; DISTRICT INSIGHTS</div>
                <h1>
                  See where support is needed
                  <br />
                  <em>while there is time to respond.</em>
                </h1>
                <p>
                  Bring learning activity and assessment results into the same conversation. Review
                  patterns across schools, classrooms, and individual students, with AI summaries to
                  help your team decide where to look first.
                </p>
                <div className="sp-hero-actions">
                  <Demo />
                  <a href="#performance-explorer" className="sp-text-link">
                    See how reporting works <ChevronRight size={17} />
                  </a>
                </div>
              </div>
              <SolutionHeroArt solution="school-performance" />
            </div>
          </div>
        </section>
        <section className="sp-explore" id="performance-explorer">
          <div className="wrap">
            <div className="sp-section-heading">
              <div>
                <div className="eyebrow">REPORTING AT EVERY LEVEL</div>
                <h2>
                  Start with your school or district.
                  <br />
                  <em>Follow the detail.</em>
                </h2>
              </div>
              <p>
                District leaders can compare patterns across schools. Principals can focus on
                classrooms and subjects within their school. Both can use the detail to prepare more
                focused conversations with their teams.
              </p>
            </div>
            <Explorer />
          </div>
        </section>
        <section className="sp-signals">
          <div className="wrap">
            <div className="sp-section-heading">
              <div>
                <div className="eyebrow">ACTIVITY + UNDERSTANDING</div>
                <h2>
                  See participation
                  <br />
                  <em>alongside understanding.</em>
                </h2>
              </div>
            </div>
            <div className="sp-signal-grid">
              <article>
                <span className="sp-icon coral">
                  <BookOpen />
                </span>
                <h3>How students are engaging</h3>
                <p>
                  See how students use videos, study materials, lessons, and practice assessments,
                  and identify where participation changes.
                </p>
                <div className="sp-tags">
                  <span>Lessons</span>
                  <span>Videos</span>
                  <span>Study materials</span>
                  <span>Practice & mock tests</span>
                </div>
              </article>
              <div className="sp-plus">+</div>
              <article>
                <span className="sp-icon green">
                  <FileCheck2 />
                </span>
                <h3>What assessment results show</h3>
                <p>
                  Review performance by subject and topic, then look at accuracy, attempts,
                  difficulty, and time spent for more context.
                </p>
                <div className="sp-tags">
                  <span>Subject & topic detail</span>
                  <span>Strengths</span>
                  <span>Learning gaps</span>
                  <span>Assessment patterns</span>
                </div>
              </article>
            </div>
            <div className="sp-example-intro">
              <div className="eyebrow">AI SUMMARY + EDUCATOR REVIEW</div>
              <h3>Start with a summary. Open the evidence.</h3>
              <p>
                AI summaries highlight patterns worth reviewing. Your team checks the underlying
                results and decides how to respond.
              </p>
            </div>
            <div className="sp-focused-report">
              <div className="sp-focused-heading">
                <div className="solution-app-brand">
                  <img src="/turito-logo.svg" alt="Turito" width={80} height={24} />
                  <span>Schools</span>
                </div>
                <span>Illustrative example · Grade 8 Mathematics</span>
              </div>
              <div className="sp-focused-body">
                <div>
                  <h3>Linear equations need attention</h3>
                  <p>Example reporting period · Linear equations</p>
                  <div className="sp-inline-metrics">
                    <div>
                      <strong>
                        83<small>%</small>
                      </strong>
                      <span>Students who used topic resources</span>
                    </div>
                    <div>
                      <strong>
                        62<small>%</small>
                      </strong>
                      <span>Average topic assessment score</span>
                    </div>
                  </div>
                </div>
                <div className="sp-focused-insight">
                  <span>
                    <Sparkles size={17} /> AI performance summary
                  </span>
                  <p>
                    Many students used the resources, while the average assessment score was 62%.
                    Review individual responses to understand which concepts need more attention.
                  </p>
                  <a href="#student-detail">
                    See what to review next <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
              <p className="sp-example-note">
                Illustrative data, not customer results. Resource use and assessment scores describe
                different measures; they do not explain why a student is struggling.
              </p>
            </div>
          </div>
        </section>
        <section className="sp-detail" id="student-detail">
          <div className="wrap sp-detail-grid">
            <div>
              <div className="eyebrow">CLASSROOM → STUDENT</div>
              <h2>
                Look beyond
                <br />
                <em>the class average.</em>
              </h2>
              <p>
                Compare class results and subject strengths, then review the individual responses
                behind them. Filter by reporting period and assessment type to focus the analysis.
              </p>
            </div>
            <div className="sp-responsive-preview">
              <div className="sp-student-card">
                <div className="sp-card-header">
                  <GraduationCap />
                  <div>
                    <h3>Student learning outcomes</h3>
                  </div>
                </div>
                <div className="sp-student-subject">
                  <b>Mathematics</b>
                  <span>Illustrative student profile</span>
                </div>
                <div className="sp-student-columns">
                  <div>
                    <span>Strong chapters</span>
                    <h4>Geometry</h4>
                    <p>Build on an area of confidence.</p>
                  </div>
                  <div>
                    <span>Areas for improvement</span>
                    <h4>Linear equations</h4>
                    <p>Review how the student approached the question.</p>
                  </div>
                </div>
                <div className="sp-detail-labels">
                  <span>Accuracy</span>
                  <span>Attempts</span>
                  <span>Difficulty & time</span>
                  <span>Topic performance</span>
                </div>
                <div className="sp-student-question">
                  <Compass size={21} />
                  <p>
                    Is the student missing practice, misunderstanding a concept, or struggling with
                    particular question types?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sp-loop">
          <div className="wrap">
            <div className="eyebrow">USING PERFORMANCE INSIGHTS</div>
            <h2>
              Identify the need. Choose support. <em>Review progress.</em>
            </h2>
            <div className="sp-loop-grid">
              {[
                [
                  ChartNoAxesCombined,
                  "Notice the pattern",
                  "Bring a specific subject or topic pattern to a school or grade-level team meeting.",
                ],
                [
                  BookOpen,
                  "Choose the support",
                  "Review student responses together, then decide whether to reteach a concept or offer focused practice.",
                ],
                [
                  Compass,
                  "Review progress",
                  "Agree when to revisit the topic. Compare the next assessment with the earlier results to guide your follow-up.",
                ],
              ].map(([Icon, t, d], i) => {
                const I = Icon as typeof Compass;
                return (
                  <article key={i}>
                    <span>0{i + 1}</span>
                    <I size={27} />
                    <h3>{t as string}</h3>
                    <p>{d as string}</p>
                  </article>
                );
              })}
            </div>
            <div className="sp-ecosystem-note">
              <h3>Connect insight with the next learning activity.</h3>
              <p>
                Explore Teacher Tools for lesson and assessment preparation, or Academic Support for
                student practice with a Virtual AI Tutor.
              </p>
              <div className="sp-related">
                <a href="/for-teachers">
                  Explore Teacher Tools <ArrowUpRight size={17} />
                </a>
                <a href="/for-students/academic-support">
                  Explore Academic Support <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="sp-closing">
          <div className="wrap">
            <div>
              <div className="eyebrow">REPORTING FOR YOUR DISTRICT OR SCHOOL</div>
              <h2>Explore the reporting your team needs.</h2>
              <p>
                Use School &amp; District Insights on its own or alongside the teaching and student
                solutions. Tell us which schools or grade levels you support and what your team
                needs to review. We’ll walk through the relevant reporting views.
              </p>
            </div>
            <Demo />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
