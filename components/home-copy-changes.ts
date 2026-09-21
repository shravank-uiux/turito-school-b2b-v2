export type CopyChange = {
  /** Text as it was on origin/main (fbdf9df). */
  before: string;
  /** Text as it is now. Used to locate the string in the rendered page. */
  after: string;
  /** Why it changed. */
  reason: string;
  /** Grouping shown in the panel. */
  kind:
    | "US English"
    | "Terminology"
    | "Grammar"
    | "Consistency"
    | "Clarity"
    | "Tone"
    | "Positioning";
  /** True when the change is not visible in the page body. */
  offPage?: boolean;
};

export const homeCopyChanges: CopyChange[] = [
  {
    kind: "Positioning",
    before: "For Schools",
    after: "School & District Insights",
    reason: "Names the solution while keeping its school and district audience clear.",
  },
  {
    kind: "Clarity",
    before: "See where students need help—and where to focus next.",
    after: "See where students need support across your district, schools, and classrooms.",
    reason: "Explains the reporting scope and uses supportive language.",
  },
  {
    kind: "Positioning",
    before: "For Teachers",
    after: "Teacher Tools",
    reason: "Names the purchasable solution instead of repeating the audience label.",
  },
  {
    kind: "Clarity",
    before: "Spend less time preparing for your next class.",
    after: "Plan lessons, prepare materials, build assessments, and review student work.",
    reason: "States what Teacher Tools includes instead of making an unmeasured time-saving claim.",
  },
  {
    kind: "Positioning",
    before: "Student support",
    after: "Student Solutions",
    reason: "Introduces the two student offerings without adding a duplicate package section.",
  },
  {
    kind: "Clarity",
    before: "Give every student guided practice whenever they get stuck.",
    after:
      "Academic Support with Virtual AI Tutor, plus College Readiness with Virtual AI Counselor.",
    reason:
      "Makes both student solutions and their included AI capabilities visible on the homepage.",
  },
  {
    kind: "Positioning",
    before: "Who it’s for",
    after: "Solutions by audience",
    reason: "The cards now connect each audience to the solution they can explore.",
  },
  {
    kind: "Clarity",
    before: "Start where your school needs support most. Every part connects to the rest.",
    after:
      "Choose the support that fits your priorities. Student Solutions brings Academic Support and College Readiness together in one place.",
    reason: "Explains the two student solutions without adding a duplicate package section.",
  },
  {
    kind: "Positioning",
    before: "Why schools switch",
    after: "How TuritoSchools helps",
    reason:
      "The company does not yet have customers, so the previous wording implied adoption evidence that is not available.",
  },
  {
    kind: "Clarity",
    before: "Meets every student where they are",
    after: "See where students need support",
    reason: "Describes the practical value without making a broad outcome claim.",
  },
  {
    kind: "Clarity",
    before:
      "Topic-level results show where a student actually is, not where the lesson assumes they are.",
    after:
      "Topic-level results help educators identify strengths, learning needs, and useful next steps.",
    reason: "Centers educator action and removes the implied criticism of lesson planning.",
  },
  {
    kind: "Clarity",
    before: "Gives teachers their evenings back",
    after: "Reduce time spent preparing",
    reason: "Keeps the time-saving benefit without promising an unverified personal outcome.",
  },
  {
    kind: "Clarity",
    before:
      "Planning, teaching materials, and first-pass grading drafted in minutes. The teacher still holds the pen.",
    after:
      "Draft lesson plans, teaching materials, and first-pass grading while keeping teachers in control.",
    reason: "Keeps the workflow benefit without an unsupported speed claim or metaphor.",
  },
  {
    kind: "Clarity",
    before: "Surfaces problems while they can still be fixed",
    after: "Identify learning needs sooner",
    reason: "Uses direct school language and avoids framing students as problems.",
  },
  {
    kind: "Tone",
    before:
      "Engagement and subject results show who needs help now, while you can still act on it.",
    after: "Review engagement and subject results while there is still time to adjust support.",
    reason: "Focuses on the educator workflow and avoids labeling students as problems.",
  },
  {
    kind: "Clarity",
    before:
      "A teacher asks for a Grade 8 science lesson on photosynthesis. TuritoSchools drafts the objective, the starter, the practice, and a check for understanding. The teacher changes whatever does not suit the class, then assigns it.",
    after:
      "A teacher asks for a Grade 8 science lesson on photosynthesis. TuritoSchools drafts an objective, a warm-up, guided practice, and a check for understanding. The teacher reviews the draft, adapts it for the class, and decides what to assign.",
    reason: "Uses US classroom language and makes teacher review part of the workflow.",
  },
  {
    kind: "US English",
    before: "with a marking key for the teacher",
    after: "with an answer key for the teacher",
    reason: '"Marking key" is British. US teachers say answer key.',
  },
  {
    kind: "Terminology",
    before: "Starter · 5 min",
    after: "Warm-up · 5 min",
    reason: '"Starter" is British teaching vocabulary. US teachers say warm-up or bell ringer.',
  },
  {
    kind: "Grammar",
    before: "the questions you want to solve",
    after: "the problems you want to solve",
    reason: "You answer questions; you solve problems.",
  },
  {
    kind: "Consistency",
    before: "where students need help — nothing else.",
    after: "where students need help—nothing else.",
    reason:
      "The page used two em dash styles. Closed (unspaced) is standard US and matches the other one.",
  },
  {
    kind: "Clarity",
    before: "Teachers review what AI produces",
    after: "Teachers review AI-assisted materials",
    reason:
      "Scopes teacher review to teaching materials and avoids implying that teachers preapprove every student interaction with AI.",
  },
  {
    kind: "Clarity",
    before: "A teacher edits and approves before anything reaches a student.",
    after:
      "Teachers can edit generated materials and review suggested scores before sharing them with students.",
    reason:
      "Explains the specific controls instead of making an absolute statement that conflicts with the on-demand Virtual AI Tutor.",
  },
  {
    kind: "Consistency",
    before: "Sign-in & rostering",
    after: "Sign-in and rostering",
    reason: 'The sentence below these labels uses "and". Ampersands were inconsistent.',
  },
  {
    kind: "Consistency",
    before: "Sign-in, rostering & marketplace",
    after: "Sign-in, rostering, and marketplace",
    reason: "Same as above, plus the serial comma used elsewhere on the page.",
  },
  {
    kind: "Consistency",
    before: "LET’S START WITH YOUR SCHOOL",
    after: "Let’s start with your school",
    reason:
      "Every other eyebrow is sentence case in the source. No visual change: .eyebrow applies text-transform: uppercase, so all eyebrows render uppercase either way.",
  },
  {
    kind: "Consistency",
    offPage: true,
    before: "One Intelligent Learning Ecosystem, Built for Schools, Teachers, and Students.",
    after: "One intelligent learning ecosystem. Built for schools, teachers, and students.",
    reason:
      "Page title. Now matches the agreed hero wording exactly, instead of Title Case with a comma. Not visible in the page body — check the browser tab.",
  },
];
