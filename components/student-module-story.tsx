"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  FileText,
  GraduationCap,
  Layers3,
  Link,
  Upload,
  ClipboardList,
  Mic,
  MousePointer2,
  Play,
  Presentation,
  Sparkles,
  Volume2,
} from "lucide-react";
type Module = "learn" | "practice" | "reflect" | "college";
const steps: Record<Module, string[]> = {
  learn: ["Subjects", "Resources", "Lesson", "Whiteboard"],
  practice: ["Start", "Material", "Study tools", "Flashcards", "Quiz", "Feedback"],
  reflect: ["Dashboard", "Mathematics", "Topic analysis", "Support"],
  college: ["Profile", "Diagnostic", "Learning plan", "Colleges", "Action plan", "Counselor"],
};
export function StudentModuleStory({ module }: { module: Module }) {
  const [step, setStep] = useState(0),
    [auto, setAuto] = useState(true),
    [hold, setHold] = useState(false),
    [phase, setPhase] = useState("reading"),
    [cursor, setCursor] = useState({ x: 0, y: 0 }),
    [answer, setAnswer] = useState<number | null>(null),
    [flipped, setFlipped] = useState(false),
    [speaking, setSpeaking] = useState(false),
    [format, setFormat] = useState("Flashcards"),
    [input, setInput] = useState("Upload"),
    [college, setCollege] = useState("Colorado State University"),
    [planned, setPlanned] = useState<number[]>([]),
    [resource, setResource] = useState({ name: "Solving equations", kind: "Video" });
  const root = useRef<HTMLDivElement>(null);
  const last = steps[module].length - 1;
  const go = (n: number) => {
    setAuto(false);
    setStep(n);
    setAnswer(null);
    setFlipped(false);
  };
  const advance = () => go(Math.min(last, step + 1));
  useEffect(
    () => () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window)
        window.speechSynthesis.cancel();
    },
    [],
  );
  const hear = () => {
    setAuto(false);
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (speaking) {
      setSpeaking(false);
      return;
    }
    const line =
      module === "college"
        ? "Your interest in engineering can guide your college search. Compare programs, project opportunities, and cost with your school counselor."
        : "Subtract five from both sides to keep the equation balanced. Three x equals fifteen. Divide both sides by three. X equals five.";
    const speech = new SpeechSynthesisUtterance(line);
    speech.rate = 0.88;
    speech.onend = () => setSpeaking(false);
    speech.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(speech);
  };
  useEffect(() => {
    setPhase("reading");
    if (!auto || hold) return;
    let elapsed = 0;
    const timer = setInterval(() => {
      const el = root.current;
      if (
        !el ||
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        el.closest("[data-motion=off]")
      )
        return;
      const box = el.getBoundingClientRect();
      if (box.width === 0 || box.bottom < 0 || box.top > innerHeight) return;
      elapsed += 100;
      const choosing = module === "practice" && (step === 3 || step === 4) && elapsed < 2300;
      const target = el.querySelector<HTMLElement>(
        choosing ? "[data-story-choice]" : "[data-story-action]",
      );
      if (!target) return;
      const t = target.getBoundingClientRect();
      setCursor({
        x: (t.left - box.left + t.width * 0.7) / (box.width / el.offsetWidth),
        y: (t.top - box.top + t.height * 0.6) / (box.width / el.offsetWidth),
      });
      if (choosing) {
        setPhase(elapsed >= 1600 ? "clicking" : elapsed >= 900 ? "moving" : "reading");
        if (elapsed >= 1900) {
          if (step === 3) setFlipped(true);
          else setAnswer(1);
        }
        return;
      }
      if (elapsed >= 4700) {
        setStep((s) => (s + 1) % steps[module].length);
        setAnswer(null);
        setFlipped(false);
        return;
      }
      setPhase(elapsed >= 4250 ? "clicking" : elapsed >= 3500 ? "moving" : "reading");
    }, 100);
    return () => clearInterval(timer);
  }, [module, step, auto, hold]);
  const action = (label: string) => (
    <button className="sm-primary" data-story-action onClick={advance}>
      {label}
      <ArrowRight size={14} />
    </button>
  );
  const title = (label: string, heading: string) => (
    <header className="sm-heading">
      <small>{label}</small>
      <h4>{heading}</h4>
    </header>
  );
  return (
    <div
      className="sm-story ap-story"
      ref={root}
      data-cursor-phase={phase}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocusCapture={() => setHold(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHold(false);
      }}
    >
      <nav className="sm-steps" aria-label="Learning workflow">
        {steps[module].map((label, i) => (
          <button
            key={label}
            data-story-action={step === last && i === 0 ? true : undefined}
            aria-current={i === step ? "step" : undefined}
            onClick={() => go(i)}
          >
            <span />
            {i === step && label}
          </button>
        ))}
      </nav>
      <div className="sm-screen" key={step}>
        {module === "learn" && (
          <>
            {step === 0 && (
              <>
                {title("SCHOOL ACADEMICS", "Choose a subject.")}
                <div className="sm-subjects">
                  {["Mathematics", "Science", "English", "History"].map((s, i) =>
                    i === 0 ? (
                      <button key={s} data-story-action onClick={() => go(1)}>
                        <BookOpen size={19} />
                        <strong>{s}</strong>
                        <span>Materials · Videos · Practice</span>
                      </button>
                    ) : (
                      <div key={s}>
                        <BookOpen size={19} />
                        <strong>{s}</strong>
                        <span>Materials · Videos · Practice</span>
                      </div>
                    ),
                  )}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                {title("MATHEMATICS / LINEAR EQUATIONS", "Everything for this topic.")}
                <div className="sm-resource-list">
                  {[
                    [Play, "Solving equations", "Video · Lesson explanation"],
                    [Presentation, "Keeping equations balanced", "PPT · Class presentation"],
                    [FileText, "Inverse operations", "PDF · Worked examples"],
                    [BookOpen, "Key ideas and vocabulary", "Text · Lesson notes"],
                  ].map(([Icon, name, meta], i) => {
                    const I = Icon as typeof Play;
                    return (
                      <button
                        key={String(name)}
                        data-story-action={i === 0 ? true : undefined}
                        onClick={() => {
                          setResource({
                            name: String(name),
                            kind:
                              i === 0
                                ? "Video"
                                : i === 1
                                  ? "Presentation · Slide 1"
                                  : i === 2
                                    ? "PDF"
                                    : "Text notes",
                          });
                          go(2);
                        }}
                      >
                        <I size={18} />
                        <span>
                          <strong>{String(name)}</strong>
                          <small>{String(meta)}</small>
                        </span>
                        <ArrowRight size={14} />
                      </button>
                    );
                  })}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                {title(resource.kind.toUpperCase(), resource.name)}
                {resource.kind === "Video" ? (
                  <div
                    className="sm-lesson-video"
                    role="img"
                    aria-label="Video lesson showing how to solve a linear equation"
                  >
                    <div className="sm-video-label">
                      <Play size={14} /> LESSON VIDEO
                    </div>
                    <div className="sm-video-teaching">
                      <small>Solving linear equations</small>
                      <strong>3x + 5 = 20</strong>
                      <span>Subtract 5 from both sides</span>
                      <strong>3x = 15</strong>
                    </div>
                    <div className="sm-video-caption">
                      Keep the equation balanced: subtract the same amount from each side.
                    </div>
                    <div className="sm-video-controls">
                      <Play size={15} />
                      <span className="sm-video-timeline">
                        <i />
                      </span>
                      <span>0:42 / 3:15</span>
                      <Volume2 size={15} />
                    </div>
                  </div>
                ) : (
                  <div className="sm-document">
                    <small>MATHEMATICS · LESSON MATERIAL</small>
                    <h5>Undo each operation.</h5>
                    <p>To solve 3x + 5 = 20, subtract 5 from both sides, then divide by 3.</p>
                    <div className="sm-formula">
                      3x + 5 = 20
                      <br />
                      3x = 15
                      <br />
                      <b>x = 5</b>
                    </div>
                  </div>
                )}
                {action("Ask Virtual AI Tutor")}
              </>
            )}
            {step === 3 && (
              <>
                {title("VIRTUAL AI TUTOR / EXPLANATION", "Keep both sides equal.")}
                <div className="sm-board">
                  <small>TUTOR WHITEBOARD</small>
                  <div className="sm-board-line">3x + 5 = 20</div>
                  <div className="sm-board-line sm-board-second">
                    − 5 <span>on both sides</span>
                  </div>
                  <div className="sm-board-line sm-board-third">
                    3x = 15 <span>÷ 3</span>
                  </div>
                  <div className="sm-board-line sm-board-final">
                    x = 5 <Check size={19} />
                  </div>
                </div>
                <div className="sm-tutor-captions">
                  <span className="sm-wave is-speaking" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i key={n} />
                    ))}
                  </span>
                  <div>
                    <small>Virtual AI Tutor</small>
                    <p>
                      “Subtract five from both sides to keep them equal. Now divide by three. That
                      gives us x equals five.”
                    </p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
        {module === "practice" && (
          <>
            {step === 0 && (
              <>
                <div className="sm-study-welcome">
                  <Sparkles size={25} />
                  <h4>What can I help you with?</h4>
                  <p>Start with a question. Bring the material you’re learning.</p>
                </div>
                <div className="sm-input-grid">
                  {[
                    [Upload, "Upload", "Your study files"],
                    [Link, "Paste a link", "A video or website"],
                    [Mic, "Record", "Audio to learn from"],
                    [ClipboardList, "Practice", "Prepare for an exam"],
                  ].map(([Icon, label, detail], i) => {
                    const I = Icon as typeof Upload;
                    return (
                      <button
                        key={String(label)}
                        data-story-action={i === 0 ? true : undefined}
                        onClick={() => {
                          setInput(String(label));
                          go(1);
                        }}
                      >
                        <I size={21} />
                        <strong>{String(label)}</strong>
                        <small>{String(detail)}</small>
                      </button>
                    );
                  })}
                </div>
                <button
                  className="sm-question-entry"
                  onClick={() => {
                    setInput("Question");
                    go(1);
                  }}
                >
                  <span>How do I solve linear equations?</span>
                  <ArrowRight size={17} />
                </button>
              </>
            )}
            {step === 1 && (
              <>
                {title(
                  "YOUR STUDY MATERIAL",
                  input === "Upload"
                    ? "Your material is ready."
                    : input === "Paste a link"
                      ? "Learn from a link."
                      : input === "Record"
                        ? "Turn audio into study tools."
                        : input === "Practice"
                          ? "Prepare for your exam."
                          : "Explore your question.",
                )}
                <div className="sm-document sm-source-card">
                  <FileText size={26} />
                  <h5>
                    {input === "Upload"
                      ? "Linear equations.pdf"
                      : input === "Paste a link"
                        ? "Solving linear equations · Video"
                        : input === "Record"
                          ? "Class lesson · Audio recording"
                          : input === "Practice"
                            ? "Mathematics · Linear equations"
                            : "How do I solve linear equations?"}
                  </h5>
                  <p>
                    {input === "Upload"
                      ? "Lesson notes and worked examples"
                      : input === "Paste a link"
                        ? "Video explanation and worked examples"
                        : input === "Record"
                          ? "Lesson explanation captured as audio"
                          : "Key ideas and worked examples"}
                  </p>
                  <span className="sm-source-ready">
                    <Check size={14} /> Ready to create study resources
                  </span>
                </div>
                {action("Generate study tools")}
              </>
            )}
            {step === 2 && (
              <>
                {title("YOUR RESOURCES", "Choose how to study.")}
                <div className="sm-subjects">
                  {["Flashcards", "Quiz", "Summary", "Podcast"].map((v, i) => (
                    <button
                      key={v}
                      data-story-action={i === 0 ? true : undefined}
                      onClick={() => {
                        setFormat(v);
                        go(i === 1 ? 4 : 3);
                      }}
                    >
                      <Layers3 size={20} />
                      <strong>{v}</strong>
                      <span>Linear equations</span>
                    </button>
                  ))}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                {title(
                  format.toUpperCase() + " / LINEAR EQUATIONS",
                  format === "Flashcards" ? "Recall the key idea." : "Review the key ideas.",
                )}
                {format === "Flashcards" ? (
                  <button
                    className="sm-flip"
                    data-story-choice
                    onClick={() => {
                      setAuto(false);
                      setFlipped((v) => !v);
                    }}
                    aria-pressed={flipped}
                  >
                    <small>{flipped ? "ANSWER" : "QUESTION"}</small>
                    <h5>
                      {flipped
                        ? "To preserve equality."
                        : "Why use the same operation on both sides?"}
                    </h5>
                    <p>
                      {flipped
                        ? "Both sides remain equal when you change them by the same amount."
                        : "Click to reveal the answer."}
                    </p>
                  </button>
                ) : (
                  <div className="sm-document">
                    <h5>Solving an equation</h5>
                    <p>
                      1. Undo addition or subtraction.
                      <br />
                      2. Undo multiplication or division.
                      <br />
                      3. Substitute the answer to check.
                    </p>
                    {format === "Podcast" && (
                      <div className="sm-voice">
                        <button onClick={hear} aria-pressed={speaking}>
                          <Volume2 size={17} />
                          {speaking ? "Stop audio" : "Listen to recap"}
                        </button>
                      </div>
                    )}
                  </div>
                )}
                {action("Practice with a quiz")}
              </>
            )}
            {step === 4 && (
              <>
                {title("QUIZ / QUESTION 1", "Solve 2x + 6 = 14.")}
                <div className="sm-answers">
                  {["x = 10", "x = 4", "x = 7"].map((v, i) => (
                    <button
                      key={v}
                      data-story-choice={i === 1 ? true : undefined}
                      className={answer === i ? "chosen" : ""}
                      aria-pressed={answer === i}
                      onClick={() => {
                        setAuto(false);
                        setAnswer(i);
                      }}
                    >
                      <span>{String.fromCharCode(65 + i)}</span>
                      {v}
                    </button>
                  ))}
                </div>
                <p className="sm-caption">
                  {answer === null ? "Choose your answer." : "Answer selected."}
                </p>
                <button
                  className="sm-primary"
                  data-story-action
                  onClick={() => {
                    if (answer !== null) go(5);
                  }}
                  disabled={answer === null}
                >
                  Check answer
                  <ArrowRight size={14} />
                </button>
              </>
            )}
            {step === 5 && (
              <>
                {title("QUIZ / ANSWER REVIEW", "Understand the method.")}
                <div className="sm-result">
                  <Check size={22} />
                  <strong>Correct answer: x = 4</strong>
                </div>
                <div className="sm-document">
                  <h5>Subtract, then divide.</h5>
                  <p>
                    2x + 6 = 14
                    <br />
                    2x = 8<br />x = 4
                  </p>
                  <p>Check your answer: 2 × 4 + 6 = 14.</p>
                </div>
                <div className="sm-insight">
                  <Sparkles size={16} />
                  <p>Revisit inverse operations, then try another question.</p>
                </div>
              </>
            )}
          </>
        )}
        {module === "reflect" && (
          <>
            {step === 0 && (
              <>
                <div className="sm-dashboard-heading">
                  <div>
                    <small>STUDENT DASHBOARD</small>
                    <h4>Liam Carter</h4>
                    <span>Grade 8 · September</span>
                  </div>
                  <span className="sm-dashboard-avatar">LC</span>
                </div>
                <div className="sm-stats sm-dashboard-stats">
                  <div>
                    <small>Average test score</small>
                    <strong>73%</strong>
                    <span className="sm-dash-track">
                      <i style={{ width: "73%" }} />
                    </span>
                  </div>
                  <div>
                    <small>Resource participation</small>
                    <strong>86%</strong>
                    <span className="sm-dash-track sm-dash-engagement">
                      <i style={{ width: "86%" }} />
                    </span>
                  </div>
                </div>
                <div className="sm-dashboard-summary">
                  <Sparkles size={16} />
                  <div>
                    <strong>AI performance summary</strong>
                    <p>
                      English is a strength. Regular participation in mathematics isn’t yet
                      reflected in test scores.
                    </p>
                  </div>
                </div>
                <div className="sm-subject-dashboard">
                  <div className="sm-dash-table-title">
                    <strong>Subject performance</strong>
                    <small>Test score</small>
                  </div>
                  {[
                    ["Mathematics", 58],
                    ["Science", 76],
                    ["English", 84],
                  ].map(([name, score], i) =>
                    i === 0 ? (
                      <button key={name} data-story-action onClick={() => go(1)}>
                        <span>{name}</span>
                        <span className="sm-dash-track">
                          <i style={{ width: score + "%" }} />
                        </span>
                        <strong>{score}%</strong>
                        <ArrowRight size={14} />
                      </button>
                    ) : (
                      <div key={name}>
                        <span>{name}</span>
                        <span className="sm-dash-track">
                          <i style={{ width: score + "%" }} />
                        </span>
                        <strong>{score}%</strong>
                        <span />
                      </div>
                    ),
                  )}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <button className="sm-dashboard-back" onClick={() => go(0)}>
                  ← Liam’s dashboard
                </button>
                {title("MATHEMATICS / TOPIC PERFORMANCE", "Mathematics")}
                <div className="sm-stats">
                  <div>
                    <small>Test score</small>
                    <strong>58%</strong>
                  </div>
                  <div>
                    <small>Resource participation</small>
                    <strong>86%</strong>
                  </div>
                </div>
                <div className="sm-subject-dashboard">
                  <div className="sm-dash-table-title">
                    <strong>Topic performance</strong>
                    <small>Accuracy</small>
                  </div>
                  {[
                    ["Linear equations", 42],
                    ["Geometry", 76],
                    ["Data interpretation", 56],
                  ].map(([name, score], i) =>
                    i === 0 ? (
                      <button key={name} data-story-action onClick={() => go(2)}>
                        <span>{name}</span>
                        <span className="sm-dash-track">
                          <i style={{ width: score + "%" }} />
                        </span>
                        <strong>{score}%</strong>
                        <ArrowRight size={14} />
                      </button>
                    ) : (
                      <div key={name}>
                        <span>{name}</span>
                        <span className="sm-dash-track">
                          <i style={{ width: score + "%" }} />
                        </span>
                        <strong>{score}%</strong>
                        <span />
                      </div>
                    ),
                  )}
                </div>
                <div className="sm-insight">
                  <Sparkles size={16} />
                  <p>Start with linear equations to understand which skills need practice.</p>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <button className="sm-dashboard-back" onClick={() => go(1)}>
                  ← Mathematics
                </button>
                {title("LINEAR EQUATIONS / ANALYSIS", "Read activity alongside accuracy.")}
                <div className="sm-stats">
                  <div>
                    <small>Accuracy</small>
                    <strong>42%</strong>
                  </div>
                  <div>
                    <small>Questions attempted</small>
                    <strong>18 / 20</strong>
                  </div>
                </div>
                <div className="sm-insight">
                  <Sparkles size={18} />
                  <p>
                    Attempts are consistent. Errors cluster around inverse operations and multi-step
                    equations.
                  </p>
                </div>
                <div className="sm-document">
                  <h5>Strength: one-step equations</h5>
                  <p>Focus: choosing and applying inverse operations.</p>
                </div>
                {action("View recommended practice")}
              </>
            )}
            {step === 3 && (
              <>
                {title("RECOMMENDATIONS", "Work on inverse operations.")}
                <div className="sm-resource-list">
                  <a href="/for-students/academic-support">
                    <Play size={18} />
                    <span>
                      <strong>Revisit the explanation</strong>
                      <small>Video · Inverse operations</small>
                    </span>
                    <ArrowRight size={14} />
                  </a>
                  <a href="/for-students/academic-support">
                    <Sparkles size={18} />
                    <span>
                      <strong>Work with Virtual AI Tutor</strong>
                      <small>Guided explanation and practice</small>
                    </span>
                    <ArrowRight size={14} />
                  </a>
                  <a href="/for-students/academic-support">
                    <Layers3 size={18} />
                    <span>
                      <strong>Check understanding</strong>
                      <small>Practice test · Linear equations</small>
                    </span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </>
            )}
          </>
        )}
        {module === "college" && (
          <>
            {step === 0 && (
              <>
                {title("COLLEGE READINESS / PROFILE", "Build a picture beyond grades.")}
                <div className="sm-profile-fields">
                  <div>
                    <small>Academic interests</small>
                    <strong>Engineering · Mathematics</strong>
                  </div>
                  <div>
                    <small>Activities & experience</small>
                    <strong>Robotics club · Community volunteering</strong>
                  </div>
                  <div>
                    <small>College preferences</small>
                    <strong>United States · Hands-on learning</strong>
                  </div>
                </div>
                {action("Start SAT preparation")}
              </>
            )}
            {step === 1 && (
              <>
                {title("SAT PREP / DIAGNOSTIC", "Establish a starting point.")}
                <div className="sm-document">
                  <small>MATH / QUESTION 1</small>
                  <h5>If 3x + 5 = 20, what is x?</h5>
                  <div className="sm-selected-answer">
                    <Check size={15} /> x = 5
                  </div>
                </div>
                <div className="sm-test-progress">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                {action("View diagnostic results")}
              </>
            )}
            {step === 2 && (
              <>
                {title("SAT PREP / LEARNING PLAN", "Focus preparation by topic.")}
                <div className="sm-stats">
                  <div>
                    <small>Diagnostic accuracy</small>
                    <strong>60%</strong>
                  </div>
                  <div>
                    <small>Focus topic</small>
                    <strong>Algebra</strong>
                  </div>
                </div>
                <div className="sm-resource-list">
                  <div>
                    <BookOpen size={18} />
                    <span>
                      <strong>Linear equations</strong>
                      <small>Read content · Watch video · Practice test</small>
                    </span>
                  </div>
                  <div>
                    <Layers3 size={18} />
                    <span>
                      <strong>Full-length test</strong>
                      <small>Apply what you have practiced</small>
                    </span>
                  </div>
                </div>
                {action("Explore college options")}
              </>
            )}
            {step === 3 && (
              <>
                {title("COLLEGES / YOUR PROFILE", "Recommended colleges")}
                <p className="sm-college-intro">
                  Explore your options by academic fit and interests.
                </p>
                <div className="sm-college-list">
                  {[
                    [
                      "Colorado State University",
                      "Colorado",
                      "Likely",
                      "92%",
                      "$12,774",
                      "$33,738",
                      "$14,322",
                    ],
                    [
                      "University of Arkansas",
                      "Arkansas",
                      "Target",
                      "82%",
                      "$9,504",
                      "$27,530",
                      "$12,998",
                    ],
                  ].map(([name, state, fit, match, inState, outState, housing], i) => (
                    <div className="sm-college-row sm-college-detailed" key={name}>
                      <GraduationCap size={21} />
                      <div>
                        <strong>{name}</strong>
                        <small>{state}</small>
                      </div>
                      <div className="sm-college-match">
                        <strong>{match}</strong>
                        <small>Profile match</small>
                        <span className={"sm-fit sm-fit-" + i}>{fit}</span>
                      </div>
                      <div className="sm-college-fees">
                        <span>
                          In-state tuition<b>{inState}</b>
                        </span>
                        <span>
                          Out-of-state<b>{outState}</b>
                        </span>
                        <span>
                          Room & board<b>{housing}</b>
                        </span>
                      </div>
                      <button
                        data-story-action={i === 0 ? true : undefined}
                        onClick={() => {
                          setCollege(name);
                          setPlanned([]);
                          go(4);
                        }}
                      >
                        <Sparkles size={13} /> Improve my chances
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
            {step === 4 && (
              <>
                <button className="sm-dashboard-back" onClick={() => go(3)}>
                  ← Recommended colleges
                </button>
                {title("IMPROVE MY CHANCES", college)}
                <div className="sm-task-list">
                  {[
                    ["This week", "Compare program requirements", "Academics"],
                    ["This month", "Build a focused SAT practice routine", "Test prep"],
                    ["This term", "Document a robotics project", "Activities"],
                  ].map(([date, task, category], i) => (
                    <div key={task}>
                      <div>
                        <small>
                          {date} · {category}
                        </small>
                        <strong>{task}</strong>
                      </div>
                      <button
                        aria-pressed={planned.includes(i)}
                        onClick={() => {
                          setAuto(false);
                          setPlanned((v) => (v.includes(i) ? v.filter((n) => n !== i) : [...v, i]));
                        }}
                      >
                        {planned.includes(i) ? (
                          <>
                            <Check size={13} /> Added
                          </>
                        ) : (
                          "Add to planner"
                        )}
                      </button>
                    </div>
                  ))}
                </div>
                <button className="sm-primary" data-story-action onClick={() => go(5)}>
                  <Sparkles size={14} /> Ask Virtual Counselor
                  <ArrowRight size={14} />
                </button>
              </>
            )}
            {step === 5 && (
              <>
                {title("VIRTUAL COUNSELOR", "Build your college action plan.")}
                <div className="sm-board sm-counselor-board">
                  <small>YOUR PLANNING WHITEBOARD</small>
                  <div className="sm-board-line">Explore programs</div>
                  <p>Compare curriculum, projects & cost</p>
                  <div className="sm-board-line sm-board-second">Build experience</div>
                  <p>Document your role in a robotics project</p>
                  <div className="sm-board-line sm-board-third">Review your plan</div>
                  <p>Discuss your shortlist with your school counselor</p>
                </div>
                <div className="sm-tutor-captions">
                  <span className="sm-wave is-speaking" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <i key={n} />
                    ))}
                  </span>
                  <div>
                    <small>Virtual Counselor</small>
                    <p>
                      “Let’s connect your interest in engineering to a plan. Compare programs,
                      document a project, and review your shortlist with your counselor.”
                    </p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      <span className="ap-demo-cursor" aria-hidden="true" style={{ left: cursor.x, top: cursor.y }}>
        <MousePointer2 size={22} />
        <i />
      </span>
    </div>
  );
}
