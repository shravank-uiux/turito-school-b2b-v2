"use client";
import { useState, useEffect } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  Layers3,
  Lightbulb,
  ListChecks,
  MessageCircle,
  PencilRuler,
  Play,
  Plus,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { solutions, SolutionLink } from "./marketing";

const journeys = [
  {
    id: "teacher-tools",
    eyebrow: "01 / PREPARE",
    title: "A good lesson starts with a great plan.",
    body: "Give teachers a place to shape lessons, prepare materials, and build assessments—then make them their own.",
    teacher: "Plan, create, and review",
    student: "Arrive ready to explore",
    foot: "AI tools · Academic planning · Test builder",
  },
  {
    id: "academics",
    eyebrow: "02 / EXPLORE",
    title: "Make space for the “I get it” moment.",
    body: "Keep students moving with study resources, guided explanations, and opportunities to practice at their own pace.",
    teacher: "Offer another way to learn",
    student: "Ask, practice, and revisit",
    foot: "Study materials · Practice & quizzes · Virtual AI Tutor",
  },
  {
    id: "school-performance",
    eyebrow: "03 / UNDERSTAND",
    title: "Find the story behind a score.",
    body: "Explore classroom patterns and individual learning needs to make the next conversation more focused.",
    teacher: "See where support is needed",
    student: "Understand the next learning step",
    foot: "School insights · Classroom performance · Student progress",
  },
  {
    id: "college-readiness",
    eyebrow: "04 / LOOK AHEAD",
    title: "Give future ambitions a place to begin.",
    body: "Bring test preparation, profile building, college exploration, and counselor support into the readiness journey.",
    teacher: "Support future-readiness conversations",
    student: "Prepare and explore possibilities",
    foot: "SAT & ACT · College recommendations · Virtual Counselor",
  },
];
export function MiniLesson({ stage = "plan" }: { stage?: string }) {
  return (
    <div className="product-window">
      <div className="window-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>Teacher workspace</span>
        <span className="window-mark">turito</span>
      </div>
      <div className="product-body">
        <div className="product-breadcrumb">
          Grade 8 <ChevronRight size={12} /> Math <ChevronRight size={12} /> Linear equations
        </div>
        <div className="product-heading">
          <div>
            <span className="micro">
              {stage === "review"
                ? "REVIEW & ASSIGN"
                : stage === "questions"
                  ? "TEST BUILDER"
                  : stage === "materials"
                    ? "AI TEACHING TOOLS"
                    : "MY LESSON PLAN"}
            </span>
            <h3>
              {stage === "questions"
                ? "A quick check for understanding"
                : stage === "materials"
                  ? "A fresh way to explain it"
                  : stage === "review"
                    ? "Ready for your classroom"
                    : "Making algebra click"}
            </h3>
          </div>
          <span className="pill">{stage === "review" ? "Ready" : "Draft"}</span>
        </div>
        {stage === "plan" ? (
          <>
            <div className="objective">
              <Target size={18} />
              <div>
                <strong>Our learning goal</strong>
                <p>Solve a one-variable equation and explain each step.</p>
              </div>
            </div>
            <div className="lesson-rows">
              {[
                ["01", "Start with a question", "What keeps an equation balanced?", "5 min"],
                ["02", "Explore together", "Model both sides of the equation.", "15 min"],
                ["03", "Try it independently", "Practice, explain, and compare.", "10 min"],
              ].map((r) => (
                <div key={r[0]}>
                  <span className="row-no">{r[0]}</span>
                  <div>
                    <b>{r[1]}</b>
                    <p>{r[2]}</p>
                  </div>
                  <span>{r[3]}</span>
                </div>
              ))}
            </div>
          </>
        ) : stage === "materials" ? (
          <>
            <div className="objective">
              <Lightbulb size={18} />
              <div>
                <strong>Try a balance-scale explanation</strong>
                <p>Whatever we remove from one side, we remove from the other.</p>
              </div>
            </div>
            <div className="material-grid">
              {["Lesson outline", "Practice worksheet", "Assessment rubric", "Teaching notes"].map(
                (t) => (
                  <div key={t}>
                    <BookOpen size={20} />
                    <b>{t}</b>
                    <span>Review & personalize</span>
                  </div>
                ),
              )}
            </div>
          </>
        ) : stage === "questions" ? (
          <>
            <div className="question-card">
              <span className="micro">QUESTION 01 · MULTIPLE CHOICE</span>
              <h4>Solve for x: 2x + 6 = 14</h4>
              <div className="answer-grid">
                {["x = 2", "x = 4", "x = 7", "x = 10"].map((s, i) => (
                  <div key={s} className={i === 1 ? "correct" : ""}>
                    <span>{String.fromCharCode(65 + i)}</span>
                    {s}
                    {i === 1 && <Check size={15} />}
                  </div>
                ))}
              </div>
            </div>
            <div className="review-note">
              <Check size={15} /> Answer and explanation ready for teacher review
            </div>
          </>
        ) : (
          <>
            <div className="review-list">
              {[
                "Lesson plan reviewed",
                "Questions and answers checked",
                "Grade 8 · Math selected",
                "Assessment schedule set",
              ].map((t) => (
                <div key={t}>
                  <Check size={18} />
                  {t}
                </div>
              ))}
            </div>
            <div className="objective">
              <Users size={18} />
              <div>
                <strong>Your class. Your final say.</strong>
                <p>Review the plan and assessment before assigning.</p>
              </div>
            </div>
          </>
        )}
        <div className="product-bottom">
          <span>
            <Clock3 size={12} /> Designed around your lesson
          </span>
          <span className="fake-button">
            {stage === "review" ? "Ready to assign" : "Teacher review"} <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
export function TutorVisual() {
  return (
    <div className="tutor-visual">
      <div className="tutor-top">
        <span>
          <Sparkles size={16} /> Virtual AI Tutor
        </span>
        <span className="pill">Let's explore</span>
      </div>
      <div className="tutor-board">
        <span className="micro">LINEAR EQUATIONS · ONE STEP AT A TIME</span>
        <div className="board-equation">2x + 6 = 14</div>
        <div className="board-working">2x = 14 − 6</div>
        <div className="board-answer">
          x = 4 <Check size={23} />
        </div>
        <span className="board-annotation">Same change. Both sides.</span>
      </div>
      <div className="tutor-prompt">
        <MessageCircle size={20} />
        <p>Why do you think we subtract 6 from both sides?</p>
      </div>
      <div className="input-illustration">
        Think it through. Show your working. <PencilRuler size={17} />
      </div>
    </div>
  );
}
export function InsightVisual() {
  return (
    <div className="insight-visual">
      <div className="tutor-top">
        <span>
          <ChartNoAxesCombined size={17} /> Classroom snapshot
        </span>
      </div>
      <h3>Where could we focus next?</h3>
      <p>Grade 8 · Math · Concept understanding</p>
      <div className="concepts">
        {[
          ["One-step equations", 82],
          ["Two-step equations", 61],
          ["Writing an equation", 46],
        ].map(([label, value]) => (
          <div key={label}>
            <div>
              <span>{label}</span>
              <b>{value}%</b>
            </div>
            <div className="bar-track">
              <span style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="insight-callout">
        <Target size={20} />
        <div>
          <b>A useful starting point</b>
          <p>Explore student responses to writing an equation.</p>
        </div>
        <ArrowRight size={18} />
      </div>
    </div>
  );
}
export function CollegeVisual() {
  return (
    <div className="college-visual">
      <div className="college-orbit">
        <GraduationCap size={35} />
        <span>THE POSSIBILITIES AHEAD</span>
      </div>
      <div className="milestones">
        {[
          [BookOpen, "Prepare", "SAT & ACT practice"],
          [Layers3, "Build", "Your student profile"],
          [Target, "Explore", "College recommendations"],
          [MessageCircle, "Get guidance", "Virtual Counselor"],
        ].map(([Icon, title, sub], i) => {
          const I = Icon as typeof BookOpen;
          return (
            <div key={i}>
              <span className="milestone-index">0{i + 1}</span>
              <I size={20} />
              <div>
                <b>{title as string}</b>
                <p>{sub as string}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export function Ecosystem() {
  return (
    <section className="section ecosystem" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow teal">The connected school</div>
            <h2>
              Great learning happens
              <br />
              when the pieces <span className="serif">come together.</span>
            </h2>
          </div>
          <p>
            For the teacher with a plan. The student with a question. And the school with a bigger
            vision.
          </p>
        </div>
        <Tabs defaultValue="teacher-tools" className="ecosystem-tabs">
          <TabsList className="journey-tabs">
            {solutions.map((s, i) => (
              <TabsTrigger className={`journey-trigger ${s.color}`} key={s.id} value={s.id}>
                <span className="journey-icon">
                  <s.icon size={23} />
                </span>
                <span>
                  <small>0{i + 1}</small>
                  <b>{s.name}</b>
                </span>
                <ArrowRight size={17} />
              </TabsTrigger>
            ))}
          </TabsList>
          {journeys.map((j, i) => (
            <TabsContent value={j.id} key={j.id} className={`journey-panel ${solutions[i].color}`}>
              <div className="journey-story">
                <span className="micro">{j.eyebrow}</span>
                <h3>{j.title}</h3>
                <p>{j.body}</p>
                <div className="paired-journey">
                  <div>
                    <span>FOR EDUCATORS</span>
                    <b>{j.teacher}</b>
                  </div>
                  <div>
                    <span>FOR STUDENTS</span>
                    <b>{j.student}</b>
                  </div>
                </div>
                <SolutionLink id={j.id} className="text-link">
                  Explore {solutions[i].name} <ArrowUpRight size={17} />
                </SolutionLink>
              </div>
              <div className="journey-preview">
                {i === 0 ? (
                  <MiniLesson />
                ) : i === 1 ? (
                  <TutorVisual />
                ) : i === 2 ? (
                  <InsightVisual />
                ) : (
                  <CollegeVisual />
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="ecosystem-foot">
          <span>Different starting points. A shared purpose.</span>
          <span>
            Help every learner take their next step. <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}
export function SchoolStory() {
  return (
    <section className="school-story">
      <div className="wrap">
        <div className="story-heading">
          <div className="eyebrow">A week in the life of learning</div>
          <h2>
            One concept.
            <br />
            <span>More ways forward.</span>
          </h2>
          <p>
            Follow a Grade 8 math journey—from the teacher's plan to the student's next question.
          </p>
        </div>
        <div className="story-steps">
          {[
            {
              time: "BEFORE CLASS",
              title: "A teacher shapes the lesson.",
              copy: "A clear objective. A worked example. A few questions to find out what clicks.",
              icon: PencilRuler,
            },
            {
              time: "BEYOND CLASS",
              title: "A student tries another way.",
              copy: "A tutor explanation, room to practice, and a chance to ask “why?”",
              icon: Sparkles,
            },
            {
              time: "THE NEXT LESSON",
              title: "An insight opens a conversation.",
              copy: "Question-level results help a teacher decide what to revisit together.",
              icon: ChartNoAxesCombined,
            },
          ].map((s, i) => (
            <div className="story-step" key={s.time}>
              <span className="story-dot">
                <s.icon size={22} />
              </span>
              <span className="micro">{s.time}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
              <span className="story-number">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SolutionChapters() {
  return (
    <section className="section chapters" id="solutions">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Support for every part of the journey.</div>
            <h2>
              Built for the everyday.
              <br />
              <span className="serif">And everything ahead.</span>
            </h2>
          </div>
        </div>
        <article className="chapter" id="teacher-tools">
          <div className="chapter-copy">
            <span className="solution-label blue">
              <PencilRuler size={18} /> Teacher Tools
            </span>
            <h3>
              More room for the work
              <br />
              only teachers can do.
            </h3>
            <p>
              Bring lesson planning, AI-assisted materials, and assessment creation into the
              teaching week. Keep teacher judgment at the center.
            </p>
            <ul>
              <li>AI tools for preparation and review</li>
              <li>Academic planning with resources in context</li>
              <li>Tests built around your learning objectives</li>
            </ul>
            <a className="text-link" href="/for-teachers">
              Explore Teacher Tools <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="chapter-art blue-art">
            <MiniLesson stage="questions" />
          </div>
        </article>
        <article className="chapter reverse" id="academics">
          <div className="chapter-copy">
            <span className="solution-label teal">
              <BookOpen size={18} /> Academics
            </span>
            <h3>
              Curiosity doesn't stop
              <br />
              at the classroom door.
            </h3>
            <p>
              Give students more ways to work through a concept—with study materials, practice, and
              a Virtual AI Tutor.
            </p>
            <ul>
              <li>Study materials, videos, and tests</li>
              <li>Quizzes and flashcards for practice</li>
              <li>Guided explanations with Virtual AI Tutor</li>
            </ul>
            <a className="text-link" href="/for-students/academic-support">
              Explore Academics <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="chapter-art teal-art">
            <TutorVisual />
          </div>
        </article>
        <article className="chapter" id="school-performance">
          <div className="chapter-copy">
            <span className="solution-label violet">
              <ChartNoAxesCombined size={18} /> School Performance
            </span>
            <h3>
              Behind every number,
              <br />a next step.
            </h3>
            <p>
              Understand performance across your school, classrooms, and individual students. Bring
              clearer learning questions to your team.
            </p>
            <ul>
              <li>School-level performance insights</li>
              <li>Classroom patterns and concept understanding</li>
              <li>Student progress and assessment detail</li>
            </ul>
            <a className="text-link" href="/for-administration">
              Explore School Performance <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="chapter-art violet-art">
            <InsightVisual />
          </div>
        </article>
        <article className="chapter reverse" id="college-readiness">
          <div className="chapter-copy">
            <span className="solution-label gold">
              <GraduationCap size={18} /> College Readiness
            </span>
            <h3>
              Big futures.
              <br />
              Thoughtful first steps.
            </h3>
            <p>
              Connect preparation with possibility. Help students strengthen their skills and
              explore where they want to go.
            </p>
            <ul>
              <li>SAT and ACT preparation with AI study tools</li>
              <li>Profile building and college recommendations</li>
              <li>Virtual Counselor support</li>
            </ul>
            <a className="text-link" href="/for-students/college-readiness">
              Explore College Readiness <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="chapter-art gold-art">
            <CollegeVisual />
          </div>
        </article>
      </div>
    </section>
  );
}
export function Adoption() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <section className="section adoption" id="your-school">
      <div className="wrap adoption-grid">
        <div>
          <div className="eyebrow teal">Your priorities. Your starting point.</div>
          <h2>
            Start with what you need.
            <br />
            <span className="serif">Grow around your goals.</span>
          </h2>
          <p>
            One solution or several working toward your school's goals. Let's explore the right
            starting point together.
          </p>
        </div>
        <div>
          <div className="adoption-options">
            {solutions.map((s) => (
              <label key={s.id} className={selected.includes(s.id) ? "selected" : ""}>
                <s.icon size={20} className={s.color} />
                <span>{s.name}</span>
                <Checkbox
                  aria-label={s.name}
                  checked={selected.includes(s.id)}
                  onCheckedChange={(v) =>
                    setSelected((p) => (v ? [...p, s.id] : p.filter((x) => x !== s.id)))
                  }
                />
              </label>
            ))}
          </div>
          <div className="adoption-action">
            <a
              href={`/request-demo${selected.length ? "?interest=" + selected.join(",") : ""}`}
              className="button ink"
            >
              {selected.length ? "Discuss these solutions" : "Help us find our starting point"}{" "}
              <ArrowUpRight size={17} />
            </a>
            <span aria-live="polite">
              {selected.length
                ? `${selected.length} solution${selected.length > 1 ? "s" : ""} selected`
                : "Choose any combination"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Closing({ teacher = false }: { teacher?: boolean }) {
  return (
    <section className="closing">
      <div className="wrap closing-inner">
        <div>
          <div className="eyebrow">
            {teacher ? "TEACHER TOOLS FOR YOUR SCHOOL" : "Let’s make the next step count"}
          </div>
          <h2>{teacher ? "See how Teacher Tools fits your week." : "What would you fix first?"}</h2>
          <p>
            {teacher
              ? "Bring a unit or assessment your team is preparing, and we’ll walk through the workflow together."
              : "Bring the problem you want solved. We'll work through it with your team."}
          </p>
        </div>
        <a href={`/request-demo${teacher ? "?interest=teacher-tools" : ""}`} className="button">
          Request a demo <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
export function TeacherWorkflow() {
  const [stage, setStage] = useState("plan");
  const stages = [
    {
      id: "plan",
      title: "Start with a clear plan.",
      body: "Choose your topic, shape the learning objective, and organize the teaching sequence. Keep resources and homework close to the lesson.",
      label: "Plan the lesson",
      icon: BookOpen,
    },
    {
      id: "materials",
      title: "Make the material your own.",
      body: "Create lesson outlines, worksheets, and rubrics with AI-assisted tools. Review, edit, and bring your own approach to the classroom.",
      label: "Prepare materials",
      icon: Sparkles,
    },
    {
      id: "questions",
      title: "Ask the questions that matter.",
      body: "Build a test using AI-assisted questions, school resources, the Turito question bank, or your own material. Review the answers before moving on.",
      label: "Build the assessment",
      icon: ListChecks,
    },
    {
      id: "review",
      title: "Your classroom. Your final say.",
      body: "Review the content, select your students, and set the schedule. Teacher review stays part of the workflow.",
      label: "Review & assign",
      icon: Users,
    },
  ];
  return (
    <section className="section" id="teacher-workflow">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow blue">From objective to classroom</div>
            <h2>
              A teaching workflow.
              <br />
              <span className="serif">With you at the center.</span>
            </h2>
          </div>
          <p>Explore a lesson sequence. Every stage leaves space for your expertise.</p>
        </div>
        <Tabs value={stage} onValueChange={(v) => setStage(String(v))} className="teacher-tabs">
          <TabsList className="teacher-tab-list">
            {stages.map((s, i) => (
              <TabsTrigger className="teacher-tab" value={s.id} key={s.id}>
                <span>0{i + 1}</span>
                <s.icon size={18} />
                {s.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {stages.map((s) => (
            <TabsContent value={s.id} key={s.id} className="teacher-panel">
              <div>
                <span className="micro blue">TEACHER TOOLS / {s.label.toUpperCase()}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="teacher-review">
                  <Check size={18} /> Review it. Refine it. Make it yours.
                </div>
              </div>
              <MiniLesson stage={s.id} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
