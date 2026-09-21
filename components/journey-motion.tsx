"use client";
import { ScaledAsset } from "./scaled-asset";
import { useEffect, useRef, useState, type CSSProperties } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LayoutGrid,
  Lightbulb,
  ListChecks,
  Mail,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const beats = [
  {
    label: "Plan the year",
    title: "Plan your teaching year,\nlesson by lesson.",
    body: "Organize units and lessons, with the resources you need alongside each lesson.",
    module: "Academic Planning",
    color: "#a4690a",
    wash: "#fff2bf",
    icon: CalendarDays,
    notes: [
      "Shape the yearly plan",
      "Open a unit and its teaching days",
      "Bring resources into the lesson",
    ],
  },
  {
    label: "Prepare the day",
    title: "Teaching materials,\nready for teacher review.",
    body: "Choose from 50+ AI teaching tools for lesson plans, worksheets, rubrics, and more. Add your topic and teaching context, then review and adapt the draft for your class.",
    module: "AI Tools",
    color: "#b84329",
    wash: "#ffe1d4",
    icon: Sparkles,
    notes: [
      "Choose a tool for today’s task",
      "Give it your topic and teaching context",
      "Review the material before class",
    ],
  },
  {
    label: "Build the assessment",
    title: "Build assessments from\nquestions you trust.",
    body: "Choose question sources, types, difficulty, and point values, then review the answer key before assigning.",
    module: "Test Builder",
    color: "#7252a2",
    wash: "#eee3fc",
    icon: ListChecks,
    notes: [
      "Choose where questions come from",
      "Set question types, difficulty, and points",
      "Review questions and answers",
    ],
  },
  {
    label: "Manage the assessment",
    title: "Assign it to a class,\nor to individual students.",
    body: "Choose who takes the assessment, when it opens, and how it is delivered.",
    module: "Assessment Management",
    color: "#24765a",
    wash: "#dcf0df",
    icon: Users,
    notes: [
      "Review the assessment before scheduling",
      "Choose students, timing, and delivery",
      "Follow the assessment through completion",
    ],
  },
];
const tools = [
  ["Worksheet Generator", "Generate topic-based practice", FileText],
  ["Multiple Explanations", "Explain a concept in different ways", Lightbulb],
  ["Lesson Plan", "Draft lesson objectives and activities", BookOpen],
  ["Rubric Generator", "Create assessment criteria", ClipboardCheck],
  ["Email Family", "Draft messages to families", Mail],
  ["Presentation Generator", "Create lesson slides", LayoutGrid],
] as const;
function Badge({ children }: { children: React.ReactNode }) {
  return <span className="teach-badge">{children}</span>;
}
function Plan({ detail }: { detail: number }) {
  return (
    <>
      <div className="app-heading">
        <div>
          <small>ACADEMIC YEAR · 2026–27</small>
          <h3>Yearly Academic Plan</h3>
        </div>
        <Badge>{detail === 0 ? "Draft" : "Reviewed"}</Badge>
      </div>
      <div className="plan-summary">
        <span>
          <b>Grade 8 · Mathematics</b>Year → units → teaching days
        </span>
        <span>36 weeks</span>
      </div>
      <div className="year-map">
        {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"].map((m, i) => (
          <span key={m} className={i === 2 ? "month-current" : ""}>
            {m}
            <i
              style={{
                background: ["#f3ce59", "#ed997f", "#b5d5b0", "#c5afdf"][Math.floor(i / 3)],
              }}
            />
          </span>
        ))}
      </div>
      <div className="unit-grid">
        <div className="unit-item">
          <small>UNIT 01</small>
          <b>Number systems</b>
          <span>Foundations & operations</span>
        </div>
        <div className="unit-item unit-selected">
          <small>
            UNIT 02 <ArrowRight size={14} />
          </small>
          <b>Linear equations</b>
          <span>Represent · solve · explain</span>
        </div>
        <div className="unit-item">
          <small>UNIT 03</small>
          <b>Geometry</b>
          <span>Patterns & relationships</span>
        </div>
      </div>
      <div className={`lesson-detail detail-${detail}`}>
        <div className="detail-heading">
          <CalendarDays size={16} />
          <b>Inside the unit</b>
          <span>Week 7</span>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Teaching day</TableHead>
              <TableHead>Focus</TableHead>
              <TableHead>Resources</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Monday", "Keeping equations balanced", "Teaching notes"],
              ["Tuesday", "Solving two-step equations", "Worksheet + AI Plan"],
              ["Wednesday", "Explain your reasoning", "Practice & feedback"],
            ].map((r, i) => (
              <TableRow key={r[0]} className={i === 1 ? "selected-row" : ""}>
                {r.map((x) => (
                  <TableCell key={x}>{x}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
function Prepare({ detail }: { detail: number }) {
  return (
    <>
      <div className="app-heading">
        <div>
          <small>PLANNING · TEACHING · COMMUNICATION</small>
          <h3>AI Tools</h3>
        </div>
        <Badge>Teacher workspace</Badge>
      </div>
      <div className="ai-workspace">
        <div className="tool-gallery">
          {tools.map(([name, desc, Icon], i) => (
            <div className={`tool-item ${i === 0 ? "tool-chosen" : ""}`} key={name}>
              <Icon size={19} />
              <b>{name}</b>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className={`worksheet-sheet detail-${detail}`}>
          <div className="sheet-top">
            <FileText size={18} />
            <b>Worksheet Generator</b>
          </div>
          <div className="context-field">
            <small>TOPIC & CONTEXT</small>
            <p>
              Grade 8 · Two-step equations
              <br />
              Practice solving and explaining each step.
            </p>
          </div>
          <div className="worksheet-content">
            <small>PREVIEW · TEACHER REVIEW</small>
            <h4>Solving two-step equations</h4>
            <p>
              <b>01.</b> Solve 2x + 6 = 14.
              <br />
              <span>Explain why you subtract 6 from both sides.</span>
            </p>
            <p>
              <b>02.</b> Write an equation for:
              <br />
              <span>Three notebooks and a $2 pen cost $14.</span>
            </p>
            <div className="teacher-note">
              <Check size={16} /> Review and edit before assigning.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Build({ detail }: { detail: number }) {
  return (
    <>
      <div className="app-heading">
        <div>
          <small>LINEAR EQUATIONS · GRADE 8</small>
          <h3>Test Builder</h3>
        </div>
        <Badge>Practice test</Badge>
      </div>
      <div className="builder-steps">
        {["Test details", "Question setup", "Preview questions", "Schedule"].map((s, i) => (
          <span className={i === detail ? "current" : ""} key={s}>
            {i + 1} {s}
          </span>
        ))}
      </div>
      <div className="question-sources">
        {["AI Generated", "School Question Bank", "Turito Question Bank", "Manual Upload"].map(
          (s, i) => (
            <div key={s} className={i === 1 ? "source-picked" : ""}>
              {i === 0 ? <Sparkles size={18} /> : <FileText size={18} />}
              <span>{s}</span>
              {i === 1 && <Check size={14} />}
            </div>
          ),
        )}
      </div>
      <div className="test-composition">
        <div className="pattern-card">
          <small>QUESTION PATTERN</small>
          <div>
            <b>Multiple choice</b>
            <span>5 × 2 points</span>
          </div>
          <div>
            <b>Short answer</b>
            <span>5 × 2 points</span>
          </div>
          <p>10 questions · 20 points</p>
          <div className="difficulty">
            <span>Easy</span>
            <b>Medium</b>
            <span>Hard</span>
          </div>
        </div>
        <div className={`question-preview detail-${detail}`}>
          <small>PREVIEW QUESTIONS · 01</small>
          <h4>Solve: 2x + 6 = 14</h4>
          <div className="question-options">
            {["x = 2", "x = 4", "x = 7", "x = 10"].map((a, i) => (
              <span key={a} className={i === 1 ? "answer-key" : ""}>
                {a}
                {i === 1 && <Check size={14} />}
              </span>
            ))}
          </div>
          <p>Answer key: subtract 6, then divide by 2.</p>
          <div className="teacher-note">
            <Check size={16} /> Questions checked before assignment
          </div>
        </div>
      </div>
    </>
  );
}
function Conduct({ detail }: { detail: number }) {
  return (
    <>
      <div className="app-heading">
        <div>
          <small>TEST SCHEDULING & DELIVERY</small>
          <h3>Tests Management</h3>
        </div>
        <Badge>{["Draft", "Scheduled", "Completed"][detail]}</Badge>
      </div>
      <div className="test-summary">
        <FileText size={29} />
        <div>
          <h4>Linear equations · Unit check</h4>
          <p>Grade 8A · 10 questions · 20 points</p>
        </div>
        <span className="approval-stamp">
          <Check size={16} /> Reviewed
        </span>
      </div>
      <div className="delivery-grid">
        <div>
          <small>STUDENTS</small>
          <b>Grade 8A</b>
          <p>Selected class & students</p>
          <div className="student-chips">
            <span>AL</span>
            <span>JS</span>
            <span>MR</span>
            <span>+21</span>
          </div>
        </div>
        <div>
          <small>SCHEDULE</small>
          <b>Oct 16 · 9:15 AM</b>
          <p>30-minute assessment</p>
          <div className="mode-options">
            <b>Online</b>
            <span>Offline available</span>
          </div>
        </div>
      </div>
      <div className="assessment-track">
        {["Ready", "Assigned", "Scheduled", "Completed"].map((s, i) => (
          <div className={i <= detail + 1 ? "track-done" : ""} key={s}>
            <span>{i <= detail + 1 ? <Check size={16} /> : i + 1}</span>
            <b>{s}</b>
          </div>
        ))}
      </div>
      <div className="delivery-note">
        <CalendarDays size={19} />
        <p>
          {detail < 2
            ? "Online: timed delivery and student progress monitoring."
            : "Assessment complete. Responses are ready for review."}
          <br />
          <span>Offline: download a question paper for classroom use.</span>
        </p>
      </div>
    </>
  );
}
export function JourneyHero() {
  return (
    <section className="ecosystem-hero">
      <div className="wrap ecosystem-hero-grid">
        <div>
          <div className="eyebrow">MORE POSSIBILITIES. EVERY SCHOOL DAY.</div>
          <h1>
            Connected support.
            <br />
            <span>Bigger possibilities.</span>
          </h1>
          <p>
            Empower teachers. Help students build understanding. Connect everyday learning with the
            opportunities ahead.
          </p>
          <div className="actions">
            <a href="/request-demo" className="button">
              Explore it with us <ArrowUpRight size={19} />
            </a>
            <a href="#how-it-works" className="text-link">
              Meet the ecosystem <ArrowRight size={17} />
            </a>
          </div>
        </div>
        <div className="ecosystem-hero-image">
          <img
            src="/learning-together.png"
            alt="Illustration of a teacher helping students explore a problem together"
            width={1536}
            height={1024}
          />
          <span className="ecosystem-image-note">
            A question today.
            <br />
            <em>A possibility tomorrow.</em>
          </span>
        </div>
      </div>
    </section>
  );
}
const details = [
  "Tie units, teaching days, materials, and homework to the class schedule your school already uses.",
  "Worksheets, slides, rubrics, a second way to explain a hard idea, even the message home to families.",
  "Use AI, your school\u2019s question bank, the Turito question bank, or an uploaded assessment, then choose question types, difficulty, and point values.",
  "Assign the assessment to a class or selected students, online or on paper, and track submissions.",
  "Review rubric-based suggestions, evidence behind an incorrect response, and any score that needs adjustment.",
];
const photoStories = [
  {
    image: "/teacher-tools-hero.png",
    alt: "Teacher preparing lessons at a classroom desk",
    heading: "Grade 8 · Mathematics",
    rows: [
      ["Monday", "Linear equations"],
      ["Resources", "Lesson notes + worksheet"],
    ],
    status: "Academic plan",
  },
  {
    image: "/learning-together.png",
    alt: "Teacher helping students with a lesson",
    heading: "Worksheet Generator",
    rows: [
      ["Topic", "Two-step equations"],
      ["Materials", "Practice + answer key"],
    ],
    status: "Ready to edit",
  },
  {
    image: "/academics-hero.png",
    alt: "Student working with study materials and a notebook",
    heading: "Linear equations · Unit test",
    rows: [
      ["Questions", "Multiple choice + written"],
      ["Answer key", "Solutions and scoring criteria"],
    ],
    status: "Question preview",
  },
  {
    image: "/classroom-support.png",
    alt: "Students working in a classroom with teacher support",
    heading: "Grade 8 · Unit assessment",
    rows: [
      ["Schedule", "Oct 16 · 9:15 AM"],
      ["Delivery", "Online or printed paper"],
    ],
    status: "Scheduled",
  },
];
const teacherTools = [
  {
    name: "Lesson Plan",
    icon: BookOpen,
    label: "LESSON PLAN \u00b7 TWO-STEP EQUATIONS",
    lines: ["Objective: solve equations that take two operations.", "Warm-up, guided practice, then a check for understanding."],
    note: "Standards-aligned",
  },
  {
    name: "Worksheet Generator",
    icon: FileText,
    label: "WORKSHEET \u00b7 TWO-STEP EQUATIONS",
    lines: ["1. Solve 2x + 6 = 14.", "2. Explain each step of your solution."],
    note: "Answer key included",
  },
  {
    name: "Rubric Generator",
    icon: ClipboardCheck,
    label: "RUBRIC \u00b7 SHOWING YOUR WORK",
    lines: ["4 \u2014 Correct answer, every step shown.", "3 \u2014 Correct answer, one step missing."],
    note: "Consistent across the class",
  },
  {
    name: "Multiple Explanations",
    icon: Lightbulb,
    label: "THREE WAYS TO EXPLAIN \u00b7 BALANCING",
    lines: ["Balance scale: keep both sides equal.", "Inverse operations: undo in reverse order."],
    note: "Pick what fits the student",
  },
  {
    name: "Text Dependent Questions",
    icon: ListChecks,
    label: "TEXT QUESTIONS \u00b7 GRADE 8 READING",
    lines: ["What evidence supports the author\u2019s claim?", "Quote the sentence you used."],
    note: "Answers cite the text",
  },
];
function TeacherPhotoStory({ index }: { index: number }) {
  const c = photoStories[index];
  const [tool, setTool] = useState(1);
  const [manual, setManual] = useState(false);
  const toolRef = useRef<HTMLDivElement>(null);

  // Only the "Prepare the day" card cycles through the tool library.
  useEffect(() => {
    if (index !== 1 || manual) return;
    const el = toolRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0.4 });
    observer.observe(el);
    const timer = setInterval(() => {
      if (!visible || document.hidden || el.matches(":hover")) return;
      setTool((v) => (v + 1) % teacherTools.length);
    }, 3600);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [index, manual]);

  const active = teacherTools[tool];
  const Icon = index === 1 ? active.icon : beats[index].icon;
  return (
    <figure className="teacher-focused-asset">
      <div className="photo-detail-brand">
        <div className="teacher-app-brand">
          <img src="/turito-logo.svg" alt="Turito" width={80} height={24} />
          <span>Schools</span>
        </div>
        <span>{beats[index].module}</span>
      </div>
      <div className="focused-asset-heading">
        <Icon size={23} />
        <h3>{index === 1 ? active.name : c.heading}</h3>
      </div>
      {index === 0 ? (
        <div className="focused-week">
          {[
            ["Mon", "Linear equations"],
            ["Tue", "Guided practice"],
            ["Wed", "Problem solving"],
          ].map(([day, topic]) => (
            <div key={day}>
              <small>{day}</small>
              <strong>{topic}</strong>
              <span>Lesson + resources</span>
            </div>
          ))}
        </div>
      ) : index === 1 ? (
        <div className="focused-tools" ref={toolRef} data-auto={!manual}>
          <div className="focused-tool-picker" role="tablist" aria-label="AI teaching tools">
            {teacherTools.map((t, i) => {
              const T = t.icon;
              return (
                <button
                  type="button"
                  key={t.name}
                  role="tab"
                  aria-selected={i === tool}
                  data-active={i === tool ? "" : undefined}
                  onClick={() => {
                    setManual(true);
                    setTool(i);
                  }}
                >
                  <T size={14} aria-hidden="true" />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>
          <div className="focused-sheet" key={active.name}>
            <small>{active.label}</small>
            {active.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <span>
              <Check size={14} /> {active.note}
            </span>
          </div>
        </div>
      ) : index === 2 ? (
        <div className="focused-sheet">
          <small>QUESTION 1 · MULTIPLE CHOICE</small>
          <p>Solve 2x + 6 = 14.</p>
          <div className="focused-options">
            <span>x = 2</span>
            <span className="correct">
              x = 4 <Check size={13} />
            </span>
            <span>x = 7</span>
          </div>
          <span>Answer: subtract 6, then divide by 2.</span>
        </div>
      ) : index === 3 ? (
        <div className="focused-assign">
          <div className="focused-assign-block">
            <small>WHO TAKES IT</small>
            <div className="focused-assign-who">
              <span className="chosen">
                <Users size={14} /> Grade 8A · whole class <Check size={13} />
              </span>
              <span className="chosen">
                <GraduationCap size={14} /> 4 students · Grade 8B <Check size={13} />
              </span>
            </div>
          </div>
          <div className="focused-assign-split">
            <div className="focused-assign-block">
              <small>WHEN IT OPENS</small>
              <strong>
                <CalendarDays size={15} /> October 16 · 9:15 AM
              </strong>
              <span>30 minutes</span>
            </div>
            <div className="focused-assign-block">
              <small>HOW IT IS DELIVERED</small>
              <div className="focused-assign-how">
                <span className="chosen">
                  <LayoutGrid size={13} /> Online
                </span>
                <span>
                  <FileText size={13} /> Printed paper
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="focused-asset-bottom">
        <span>
          <Check size={13} />
          {c.status}
        </span>
        <span>
          {index === 0
            ? "Materials attached"
            : index === 1
              ? "Edit before assigning"
              : index === 2
                ? "Question & answer review"
                : "Online or printed paper"}
        </span>
      </div>
    </figure>
  );
}
export function TeacherSolutionSections() {
  const surfaces = [Plan, Prepare, Build, Conduct];
  return (
    <div className="teacher-solution-sections" id="teacher-workflow">
      <div className="wrap solution-sections-intro">
        <div className="eyebrow">PLANNING, TEACHING & ASSESSMENT</div>
        <h2>
          Follow one unit
          <br />
          <span className="serif">from planning to the assessment.</span>
        </h2>
        <p>
          Explore the four steps below, from planning a unit to running the assessment. Use the
          examples to see where you can edit the work and make the next teaching decision.
        </p>
        <nav aria-label="Teacher Tools capabilities">
          {beats.map((b, i) => (
            <a href={`#teacher-capability-${i + 1}`} key={b.label}>
              <b>0{i + 1}</b>
              {b.label}
              <ArrowRight size={15} />
            </a>
          ))}
        </nav>
      </div>
      {beats.map((b, i) => {
        const Surface = surfaces[i];
        return (
          <section
            className={`teacher-capability capability-${i}`}
            id={`teacher-capability-${i + 1}`}
            key={b.label}
            style={{ "--beat-color": b.color, "--beat-wash": b.wash } as CSSProperties}
          >
            <div className="wrap capability-grid">
              <div className="capability-copy">
                <span className="capability-label">
                  <b.icon size={21} />0{i + 1} / {b.module}
                </span>
                <h2>
                  {b.title.split("\n").map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </h2>
                <p>
                  {b.body} {details[i]}
                </p>
                <a href="/request-demo?interest=teacher-tools" className="text-link">
                  See {b.module} in a demo <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="capability-visual">
                <ScaledAsset baseWidth={545}>
                  <TeacherPhotoStory index={i} />
                </ScaledAsset>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
