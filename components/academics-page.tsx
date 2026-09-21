"use client";
import { AutoStoryTabs } from "./auto-story-tabs";
import { ScaledAsset } from "./scaled-asset";
import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bookmark,
  Check,
  ChevronRight,
  FileText,
  Headphones,
  Layers3,
  Lightbulb,
  Link2,
  ListChecks,
  Mic,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
function DemoLink({
  children = "Request an Academic Support demo",
}: {
  children?: React.ReactNode;
}) {
  return (
    <a className="button" href="/request-demo?interest=academics">
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
function ProductFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <ScaledAsset baseWidth={520}>
      <div className="ac-product">
        <div className="ac-product-bar">
          <div className="solution-app-brand">
            <img src="/turito-logo.svg" alt="Turito" width={80} height={24} />
            <span>Schools</span>
          </div>
          <span>{title}</span>
        </div>
        {children}
      </div>
    </ScaledAsset>
  );
}
function Library() {
  return (
    <ProductFrame title="Academic Support">
      <div className="ac-library">
        <div className="ac-library-head">
          <div>
            <small>MY COURSES</small>
            <h3>Grade 8</h3>
          </div>
          <span className="ac-chip">Curriculum</span>
        </div>
        <div className="ac-subjects">
          <b>English</b>
          <span>Mathematics</span>
        </div>
        <div className="ac-search">
          <Search size={15} /> Study materials, videos, and practice
        </div>
        <div className="ac-chapter">
          <div>
            <BookOpen size={21} />
            <h4>Writing an essay</h4>
            <span>In progress</span>
          </div>
          <div className="ac-resource-row">
            <span className="ac-resource-icon coral">
              <FileText size={18} />
            </span>
            <div>
              <b>Build a clear argument</b>
              <small>Study material · Read & revisit</small>
            </div>
            <Bookmark size={16} />
          </div>
          <div className="ac-resource-row">
            <span className="ac-resource-icon green">
              <Play size={18} />
            </span>
            <div>
              <b>From an idea to an outline</b>
              <small>Lesson video · Learn at your pace</small>
            </div>
            <ChevronRight size={16} />
          </div>
          <div className="ac-resource-row">
            <span className="ac-resource-icon gold">
              <ListChecks size={18} />
            </span>
            <div>
              <b>Practice argumentative writing</b>
              <small>Practice test · Check your progress</small>
            </div>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </ProductFrame>
  );
}
function TutorEntry() {
  return (
    <ProductFrame title="AI Tutor">
      <div className="ac-tutor-entry">
        <span className="ac-spark">
          <Sparkles size={26} />
        </span>
        <h3>What can I help you with?</h3>
        <p>Start with a question. Bring the material you’re learning.</p>
        <div className="ac-input-options">
          {[
            [Upload, "Upload", "Your study files"],
            [Link2, "Paste a link", "A video or website"],
            [Mic, "Record", "Audio to learn from"],
            [ListChecks, "Practice", "Prepare for an exam"],
          ].map(([Icon, title, sub], i) => {
            const I = Icon as typeof Upload;
            return (
              <div key={i}>
                <I size={23} />
                <b>{title as string}</b>
                <span>{sub as string}</span>
              </div>
            );
          })}
        </div>
        <div className="ac-question">
          <span>How do I turn my idea into a strong argument?</span>
          <ArrowRight size={19} />
        </div>
      </div>
    </ProductFrame>
  );
}
function StudyFormats() {
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  return (
    <div className="ac-formats">
      <AutoStoryTabs values={["summary", "flashcards", "quiz", "podcast"]}>
        <TabsList className="ac-format-tabs">
          <TabsTrigger value="summary">
            <FileText size={16} /> Summary
          </TabsTrigger>
          <TabsTrigger value="flashcards">
            <Layers3 size={16} /> Flashcards
          </TabsTrigger>
          <TabsTrigger value="quiz">
            <ListChecks size={16} /> Quiz
          </TabsTrigger>
          <TabsTrigger value="podcast">
            <Headphones size={16} /> Podcast
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="ac-format-panel">
          <span className="ac-demo-label">ARGUMENTATIVE WRITING</span>
          <h3>Structure an argument</h3>
          <ol>
            <li>
              <b>Make a claim.</b> State the position you want to support.
            </li>
            <li>
              <b>Bring evidence.</b> Use relevant facts or examples.
            </li>
            <li>
              <b>Explain the connection.</b> Show how the evidence supports your claim.
            </li>
          </ol>
        </TabsContent>
        <TabsContent value="flashcards" className="ac-format-panel">
          <span className="ac-demo-label">ACTIVE RECALL</span>
          <button
            className={`ac-flashcard ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped((v) => !v)}
            aria-label={flipped ? "Show flashcard question" : "Reveal flashcard answer"}
          >
            <small>{flipped ? "ANSWER" : "QUESTION"}</small>
            <span>
              {flipped
                ? "A clear position that the writer supports with evidence."
                : "What is a claim in an argumentative essay?"}
            </span>
            <em>
              <RotateCcw size={15} />
              {flipped ? "Show question" : "Reveal the answer"}
            </em>
          </button>
        </TabsContent>
        <TabsContent value="quiz" className="ac-format-panel">
          <span className="ac-demo-label">CHECK UNDERSTANDING</span>
          <h3>What makes evidence useful?</h3>
          <div className="ac-quiz-options">
            {[
              "It is relevant to the claim.",
              "It makes the essay longer.",
              "It repeats the writer’s opinion.",
            ].map((a, i) => (
              <button
                key={a}
                className={answer === i ? "chosen" : ""}
                onClick={() => setAnswer(i)}
                aria-pressed={answer === i}
              >
                <span>{String.fromCharCode(65 + i)}</span>
                {a}
              </button>
            ))}
          </div>
          <p className="ac-quiz-feedback" aria-live="polite">
            {answer === null
              ? "Choose an answer to see feedback."
              : answer === 0
                ? "Exactly. Evidence should support the specific claim you are making."
                : "Try again: look for the connection between evidence and the claim."}
          </p>
        </TabsContent>
        <TabsContent value="podcast" className="ac-format-panel">
          <span className="ac-demo-label">PODCAST · ARGUMENTATIVE WRITING</span>
          <h3>Review the lesson by listening.</h3>
          <div className="ac-podcast-player">
            <Headphones size={25} />
            <div>
              <strong>Building a clear argument</strong>
              <span>Lesson recap</span>
            </div>
          </div>
          <div className="ac-podcast-wave" aria-hidden="true">
            {Array.from({ length: 24 }, (_, i) => (
              <i key={i} style={{ height: 12 + ((i * 13) % 35), animationDelay: `${i * 0.07}s` }} />
            ))}
          </div>
          <p className="ac-podcast-caption">
            “Start with your claim. Choose evidence that supports it, then explain the connection.”
          </p>
        </TabsContent>
      </AutoStoryTabs>
    </div>
  );
}
function ProgressView() {
  return (
    <ProductFrame title="Learning outcomes">
      <div className="ac-progress-view">
        <small>GRADE 8 · ENGLISH</small>
        <h3>Review topic performance</h3>
        <div className="ac-outcome">
          <span>Building a clear argument</span>
          <b>Developing</b>
        </div>
        <div className="ac-progress-pair">
          <div>
            <Check size={19} />
            <b>A strength to build on</b>
            <p>Identifying a clear claim</p>
          </div>
          <div>
            <Lightbulb size={19} />
            <b>A topic to revisit</b>
            <p>Connecting evidence to the claim</p>
          </div>
        </div>
        <div className="ac-recommendation">
          <span>RECOMMENDED PRACTICE</span>
          <div>
            <FileText size={24} />
            <div>
              <h4>Evidence that supports your argument</h4>
              <p>Study material → focused practice</p>
            </div>
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </ProductFrame>
  );
}
export function AcademicsSections() {
  return (
    <>
      <div className="ac-journey-strip" id="academic-journey">
        <div className="wrap">
          {[
            ["01", "Find the right material", "#academic-resources"],
            ["02", "Ask Virtual AI Tutor", "#academic-tutor"],
            ["03", "Practice and review", "#academic-practice"],
            ["04", "Review progress", "#academic-progress"],
          ].map(([n, t, href]) => (
            <a href={href} key={n}>
              <span>{n}</span>
              {t}
              <ArrowRight size={16} />
            </a>
          ))}
        </div>
      </div>
      <section className="ac-section" id="academic-resources">
        <div className="wrap ac-section-grid">
          <div className="ac-copy">
            <span className="ac-section-label green">01 / SUBJECT RESOURCES</span>
            <h2>
              Resources for each subject
              <br />
              <em>ready to revisit.</em>
            </h2>
            <p>
              Students can find videos, study materials, and practice by course, subject, and
              chapter. Bookmarks and notes help them return to useful explanations.
            </p>
          </div>
          <div className="ac-visual green">
            <Library />
          </div>
        </div>
      </section>
      <section className="ac-section ac-soft" id="academic-tutor">
        <div className="wrap ac-section-grid reverse">
          <div className="ac-copy">
            <span className="ac-section-label coral">02 / AI LEARNING SUPPORT</span>
            <h2>
              When a student is stuck,
              <br />
              <em>guided AI support is available.</em>
            </h2>
            <p>
              Students can ask the included Virtual AI Tutor a question or bring their own files,
              links, and recordings for help working through the material.
            </p>
          </div>
          <div className="ac-visual coral">
            <TutorEntry />
          </div>
        </div>
      </section>
      <section className="ac-section" id="academic-practice">
        <div className="wrap ac-section-grid">
          <div className="ac-copy">
            <span className="ac-section-label purple">03 / AI STUDY TOOLS</span>
            <h2>
              Turn review
              <br />
              <em>into active practice.</em>
            </h2>
            <p>
              Students can turn study material into summaries, flashcards, quizzes, and practice
              assessments. They can check their understanding and return to saved materials.
            </p>
          </div>
          <div className="ac-visual purple">
            <ScaledAsset baseWidth={520}>
              <StudyFormats />
            </ScaledAsset>
          </div>
        </div>
      </section>
      <section className="ac-section ac-soft" id="academic-progress">
        <div className="wrap ac-section-grid reverse">
          <div className="ac-copy">
            <span className="ac-section-label gold">04 / LEARNING OUTCOMES</span>
            <h2>
              Students can see
              <br />
              <em>what to practice next.</em>
            </h2>
            <p>
              Topic-level results help students recognize strengths and choose what to revisit. They
              can return to the relevant material, practice again, and review their results.
            </p>
          </div>
          <div className="ac-visual gold">
            <ProgressView />
          </div>
        </div>
      </section>
    </>
  );
}
const collegeReadinessHighlights = [
  {
    icon: ListChecks,
    title: "Test preparation",
    body: "Practice focused on each student’s needs, by topic.",
  },
  {
    icon: FileText,
    title: "Student profile",
    body: "Academics, interests, and activities in one place.",
  },
  {
    icon: Search,
    title: "College exploration",
    body: "Compare options and build a shortlist.",
  },
  {
    icon: Sparkles,
    title: "Virtual AI Counselor",
    body: "Prepare questions for counselor conversations.",
  },
];
export function AcademicsRelated() {
  return (
    <section className="ac-related" id="academic-college-readiness">
      <div className="wrap ac-related-grid">
        <div>
          <div className="eyebrow">RELATED SOLUTION · COLLEGE READINESS</div>
          <h2>
            Plan what comes
            <br />
            <em>after the coursework.</em>
          </h2>
          <p>
            For students working toward college, College Readiness adds test preparation, a student
            profile, college exploration, and the Virtual AI Counselor. It is a separate solution
            that builds on the subject support here.
          </p>
          <a href="/for-students/college-readiness" className="text-link">
            Explore College Readiness <ArrowUpRight size={17} />
          </a>
        </div>
        <ul className="ac-related-list">
          {collegeReadinessHighlights.map((item) => {
            const I = item.icon;
            return (
              <li key={item.title}>
                <I size={20} aria-hidden="true" />
                <div>
                  <b>{item.title}</b>
                  <span>{item.body}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export function AcademicsRollout() {
  return (
    <>
      <section className="ac-school-start">
        <div className="wrap">
          <div className="ac-school-start-head">
            <div className="eyebrow">BRING IT INTO YOUR SCHOOL</div>
            <h2>
              Let’s work out
              <br />
              <em>what your school needs.</em>
            </h2>
            <p>
              Tell us your academic priorities and we’ll work through the course scope and what your
              students would actually experience, with your team, in a demo.
            </p>
          </div>
          <div className="ac-rollout">
            {[
              [
                "01",
                "Pick where you start",
                "Tell us the grades, subjects, and learners you want to support first.",
              ],
              [
                "02",
                "Fit it to your school day",
                "Discuss how students could use the resources for homework, review, or additional support within your school’s routines.",
              ],
              [
                "03",
                "Build a consistent routine",
                "Help students understand when to use each resource and where to go when they need support.",
              ],
            ].map(([n, t, p]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="ac-final">
            <DemoLink>Request an Academic Support demo</DemoLink>
            <a href="/for-teachers">
              Connect with Teacher Tools <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
