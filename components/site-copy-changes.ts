import { homeCopyChanges, type CopyChange } from "./home-copy-changes";

export type { CopyChange };

export const pageNames: Record<string, string> = {
  "/": "homepage",
  "/for-administration": "School & District Insights",
  "/for-teachers": "Teacher Tools",
  "/for-students/academic-support": "Academic Support",
  "/for-students/college-readiness": "College Readiness",
  "/trust-privacy": "Trust & Privacy",
  "/request-demo": "demo request",
};

export const schoolCopyChanges: CopyChange[] = [
  {
    kind: "Positioning",
    before: "SCHOOL PERFORMANCE",
    after: "SCHOOL & DISTRICT INSIGHTS",
    reason: "Uses the agreed solution name and makes the district audience visible.",
  },
  {
    kind: "Tone",
    before: "Find the problem",
    after: "See where support is needed",
    reason:
      "Frames the report around student support instead of calling students or learning needs problems.",
  },
  {
    kind: "Tone",
    before: "while you can still fix it.",
    after: "while there is time to respond.",
    reason: "Uses calmer, more respectful language for school leaders.",
  },
  {
    kind: "US English",
    before: "County",
    after: "District",
    reason: "US school systems are generally organized by district rather than county.",
  },
  {
    kind: "Clarity",
    before: "Start with a county view.",
    after: "Start with your school or district.",
    reason: "Uses the US reporting hierarchy consistently.",
  },
  {
    kind: "Tone",
    before: "Working hard",
    after: "See participation",
    reason: "Describes the signal being compared without judging student effort.",
  },
  {
    kind: "Clarity",
    before: "is not the same as learning.",
    after: "alongside understanding.",
    reason: "States what the combined view shows in direct school language.",
  },
  {
    kind: "US English",
    before: "Lectures",
    after: "Lessons",
    reason: "Lessons is the more natural term for US K–12 classrooms.",
  },
  {
    kind: "Tone",
    before: "A class average",
    after: "Look beyond",
    reason: "Invites deeper analysis without criticizing the school’s current reporting.",
  },
  {
    kind: "Tone",
    before: "hides the student who needs you.",
    after: "the class average.",
    reason:
      "Avoids an emotionally loaded claim while preserving the need for student-level detail.",
  },
  {
    kind: "Clarity",
    before: "Your team should not have to",
    after: "Start with a summary.",
    reason: "Explains the intended workflow rather than positioning reports as a burden.",
  },
  {
    kind: "Clarity",
    before: "read every report.",
    after: "Open the evidence.",
    reason: "Makes educator review of the underlying results explicit.",
  },
  {
    kind: "Tone",
    before: "Find the gap. Act on it.",
    after: "Identify the need. Choose support.",
    reason: "Uses supportive language and describes the educator’s next action.",
  },
  {
    kind: "Positioning",
    before: "Connect to Academics",
    after: "Explore Academic Support",
    reason: "Uses the agreed name of the student solution.",
  },
  {
    kind: "Positioning",
    before: "See your own numbers in it.",
    after: "Explore the reporting your team needs.",
    reason: "Ends with a clear invitation for district and school teams.",
  },
  {
    kind: "Grammar",
    before: "Linear equations needs attention",
    after: "Linear equations need attention",
    reason: "Corrects subject–verb agreement.",
  },
  {
    kind: "Positioning",
    offPage: true,
    before: "For Schools — School Performance & Learning Insights",
    after: "School & District Insights — Engagement & Learning Performance",
    reason: "Browser title now uses the agreed solution name.",
  },
  {
    kind: "Clarity",
    before: "End at one student.",
    after: "Follow the detail.",
    reason: "Includes single-school visitors in the reporting flow.",
  },
  {
    kind: "Clarity",
    before: "Explore School Performance",
    after: "Request an insights demo",
    reason: "Makes the destination of the call to action explicit.",
  },
  {
    kind: "Clarity",
    before:
      "See engagement and subject-level results across your county, your schools, your classrooms, and individual students — with AI summaries that tell you where to look first.",
    after:
      "Bring learning activity and assessment results into the same conversation. Review patterns across schools, classrooms, and individual students, with AI summaries to help your team decide where to look first.",
    reason: "Explains the reporting benefit and keeps the decision with educators.",
  },
  {
    kind: "Clarity",
    before:
      "You can follow a number from a school comparison all the way down to the student it came from, with engagement and test results explaining it at every step.",
    after:
      "District leaders can compare patterns across schools. Principals can focus on classrooms and subjects within their school. Both can use the detail to prepare more focused conversations with their teams.",
    reason: "Gives district leaders and principals a clear use case.",
  },
  {
    kind: "Clarity",
    before: "What students understand",
    after: "What assessment results show",
    reason: "Avoids implying that a score fully measures understanding.",
  },
  {
    kind: "Clarity",
    before: "Resource participation",
    after: "Students who used topic resources",
    reason: "Defines what the illustrative percentage represents.",
  },
  {
    kind: "Clarity",
    before: "Test performance",
    after: "Average topic assessment score",
    reason: "Defines the example score.",
  },
  {
    kind: "Clarity",
    before:
      "Participation is strong, but results suggest a learning gap. Review incorrect answers and plan focused practice.",
    after:
      "Many students used the resources, while the average assessment score was 62%. Review individual responses to understand which concepts need more attention.",
    reason: "Separates the observed measures from the educator’s interpretation.",
  },
  {
    kind: "Clarity",
    before: "Plan teaching support",
    after: "See what to review next",
    reason: "Keeps the example linked to student evidence on this page.",
  },
  {
    kind: "Clarity",
    before: "Connect to Teacher Tools",
    after: "Explore Teacher Tools",
    reason: "Describes a related solution link without implying a configured integration.",
  },
  {
    kind: "Clarity",
    before: "Check that it moved.",
    after: "Review progress.",
    reason: "Uses clear language for follow-up assessment.",
  },
];

export const teacherCopyChanges: CopyChange[] = [
  {
    kind: "Clarity",
    before:
      "Planning, teaching materials, tests, and marking all sit in the same place, so your teachers stop moving between four tools to get through one week.",
    after:
      "Plan lessons, prepare materials, build assessments, and review grading in one connected workflow. Adapt each step to your class.",
    reason: "Uses US terminology and names the connected parts of the workflow more precisely.",
  },
  {
    kind: "Clarity",
    before: "Your teachers review and edit everything the AI produces.",
    after: "Teachers review and edit AI-assisted materials and suggested scores.",
    reason: "Scopes the promise to the parts of the workflow teachers can review.",
  },
  {
    kind: "Positioning",
    before: "Test creation",
    after: "Assessment creation",
    reason: "Uses broader US K–12 language for quizzes, tests, and other checks for understanding.",
  },
  {
    kind: "US English",
    before: "AI evaluation",
    after: "AI-assisted grading",
    reason: "US educators say grading rather than marking.",
  },
  {
    kind: "Clarity",
    before: "AI prepares the draft.",
    after: "AI prepares a starting point.",
    reason: "Describes AI as workflow support without implying that every task is automated.",
  },
  {
    kind: "Positioning",
    before: "Somewhere for students to turn after class",
    after: "Academic support beyond class",
    reason: "Connects Teacher Tools to the agreed Academic Support solution name.",
  },
  {
    kind: "Positioning",
    before: "A read on how your schools are doing",
    after: "Insights for schools and districts",
    reason: "Connects Teacher Tools to School & District Insights clearly.",
  },
  {
    kind: "Clarity",
    before: "Tests built from",
    after: "Build assessments from",
    reason: "Focuses on teacher choice and uses the broader term assessment.",
  },
  {
    kind: "US English",
    before: "Marking comes back done.",
    after: "Review suggested scores",
    reason: "Uses US terminology and explains what teachers actually review.",
  },
  {
    kind: "Clarity",
    before: "from planning to marked papers.",
    after: "from planning to reviewed results.",
    reason: "Summarizes the demonstrated workflow in concrete terms.",
  },
  {
    kind: "Clarity",
    before: "drafted in minutes.",
    after: "ready for teacher review.",
    reason: "Removes an unsupported speed claim and makes teacher review explicit.",
  },
  {
    kind: "Grammar",
    before:
      "Units and teaching days, materials and homework, all tied to the class schedule your school already runs.",
    after:
      "Tie units, teaching days, materials, and homework to the class schedule your school already uses.",
    reason: "Replaces a sentence fragment with a direct description of the planning workflow.",
  },
  {
    kind: "Tone",
    before:
      "Bring the department that struggles most with preparation, and we'll walk through their week with you.",
    after:
      "Bring a unit or assessment your team is preparing, and we’ll walk through the workflow together.",
    reason: "Invites a relevant example without describing a department as a problem.",
  },
  {
    kind: "Positioning",
    offPage: true,
    before: "For Teachers — Planning, AI Tools, Tests & Marking",
    after: "Teacher Tools — Planning, Materials, Assessments & Grading",
    reason: "Browser title uses the solution name and US education terms.",
  },
  {
    kind: "Clarity",
    before: "Give your teachers",
    after: "Your teaching week.",
    reason: "Speaks directly to the teacher visiting the page.",
  },
  {
    kind: "Clarity",
    before: "one place to plan,",
    after: "Plan, create,",
    reason: "Introduces the tasks in direct teacher language.",
  },
  {
    kind: "Clarity",
    before: "create, and grade.",
    after: "and grade in one place.",
    reason: "Completes the teacher-focused headline.",
  },
  {
    kind: "Clarity",
    before: "Explore Teacher Tools",
    after: "Request a Teacher Tools demo",
    reason: "Makes the demo destination explicit.",
  },
  {
    kind: "Clarity",
    before: "Your teachers decide what to use.",
    after: "You decide what to use.",
    reason: "Keeps the page voice consistent.",
  },
  {
    kind: "Clarity",
    before: "Your teachers plan the year,",
    after: "Plan your teaching year,",
    reason: "Speaks directly to teachers throughout the workflow.",
  },
];

export const studentCopyChanges: CopyChange[] = [
  {
    kind: "Positioning",
    before: "Somewhere to turn",
    after: "Support for today’s learning.",
    reason: "Introduces the immediate learning need in direct language.",
  },
  {
    kind: "Positioning",
    before: "when class ends.",
    after: "Preparation for what comes next.",
    reason: "Makes College Readiness visible in the overview hero.",
  },
  {
    kind: "Clarity",
    before: "Explore the student experience",
    after: "Request a student-solutions demo",
    reason: "Signals that the page introduces two purchasable solutions.",
  },
  {
    kind: "Positioning",
    before: "Academics",
    after: "Academic Support",
    reason: "Uses the agreed solution name.",
  },
  {
    kind: "Positioning",
    before: "Help with today’s homework, not just this term’s syllabus.",
    after: "Help students keep learning beyond the lesson.",
    reason: "Summarizes Academic Support without limiting it to homework.",
  },
  {
    kind: "Positioning",
    before: "Give every student a path after school.",
    after: "Help students prepare for college with a clearer plan.",
    reason: "States the College Readiness purpose directly.",
  },
  {
    kind: "Positioning",
    before: "Virtual Counselor",
    after: "Virtual AI Counselor",
    reason: "Identifies the included capability as AI-supported.",
  },
  {
    kind: "Positioning",
    offPage: true,
    before: "For Students — Academics & College Readiness",
    after: "For Students — Academic Support & College Readiness",
    reason: "Browser title uses the agreed solution name.",
  },
];

export const academicSupportCopyChanges: CopyChange[] = [
  {
    kind: "Positioning",
    before: "Help with today’s homework,",
    after: "Help students keep learning",
    reason: "Broadens the solution beyond homework.",
  },
  {
    kind: "US English",
    before: "not just this term’s syllabus.",
    after: "beyond the lesson.",
    reason: "Uses natural US school language.",
  },
  {
    kind: "Clarity",
    before: "Subject-wise resources",
    after: "Resources by subject",
    reason: "Uses natural US phrasing.",
  },
  {
    kind: "Positioning",
    before: "School Academics",
    after: "Academic Support",
    reason: "Uses the agreed solution name inside the product example.",
  },
  {
    kind: "Clarity",
    before: "Everything for a subject",
    after: "Resources for each subject",
    reason: "Tells visitors what the section contains.",
  },
  {
    kind: "Clarity",
    before: "someone answers.",
    after: "guided AI support is available.",
    reason: "Presents AI as available support without personifying it.",
  },
  {
    kind: "US English",
    before: "Reading it once",
    after: "Turn review",
    reason: "Uses the US term review.",
  },
  {
    kind: "Clarity",
    before: "is not revision.",
    after: "into active practice.",
    reason: "Explains the study-tool benefit directly.",
  },
  {
    kind: "US English",
    before: "where they are losing marks.",
    after: "what to practice next.",
    reason: "Uses US terminology and focuses on the next learning action.",
  },
  {
    kind: "Clarity",
    before: "in one place they can find.",
    after: "ready to revisit.",
    reason: "Explains the benefit of organized learning materials.",
  },
];

export const collegeReadinessCopyChanges: CopyChange[] = [
  {
    kind: "Positioning",
    before: "Give every student",
    after: "Help students prepare for college",
    reason: "States the solution purpose directly.",
  },
  {
    kind: "Clarity",
    before: "a path after school.",
    after: "with a clearer plan.",
    reason: "Describes the planning benefit without promising a single path.",
  },
  {
    kind: "Positioning",
    before: "Virtual Counselor",
    after: "Virtual AI Counselor",
    reason: "Identifies the included capability as AI-supported.",
  },
  {
    kind: "Clarity",
    before: "A record of each student",
    after: "A fuller picture of each student",
    reason: "Frames the profile as context for planning.",
  },
  {
    kind: "Tone",
    before: "worth sending to a college.",
    after: "for college planning.",
    reason: "Avoids judging the value of a student’s record.",
  },
  {
    kind: "US English",
    before: "Planned college intake",
    after: "Expected college entry term",
    reason: "Uses terminology familiar to US college-bound students and counselors.",
  },
  {
    kind: "Clarity",
    before: "Preparation aimed at",
    after: "Test preparation focused on",
    reason: "Names the section purpose clearly.",
  },
  {
    kind: "Clarity",
    before: "A shortlist built from",
    after: "A shortlist shaped by",
    reason: "Presents recommendations as an input to exploration.",
  },
  {
    kind: "Tone",
    before: "who the student actually is.",
    after: "each student’s priorities.",
    reason: "Focuses on relevant planning inputs without claiming to define the student.",
  },
  {
    kind: "Positioning",
    before: "03 / COLLEGE RECOMMENDATIONS",
    after: "03 / COLLEGE EXPLORATION",
    reason: "Makes clear that students compare options rather than receive a final answer.",
  },
  {
    kind: "Positioning",
    before: "Your counselors cannot",
    after: "Help students prepare",
    reason: "Positions the AI capability as preparation for human counseling.",
  },
  {
    kind: "Positioning",
    before: "sit with every student.",
    after: "for counselor conversations.",
    reason: "Shows that school counselors remain part of the workflow.",
  },
  {
    kind: "Tone",
    before: "Build the readiness program",
    after: "Strengthen the readiness program",
    reason: "Respects the school’s existing college-readiness work.",
  },
  {
    kind: "Tone",
    before: "your school is missing.",
    after: "your school already has.",
    reason: "Avoids criticizing the school’s current program.",
  },
];

export const trustCopyChanges: CopyChange[] = [
  {
    kind: "Clarity",
    before: "Your teachers review what the AI produces",
    after: "Teachers review AI-assisted work",
    reason: "Avoids implying that teachers preapprove every student interaction with AI.",
  },
  {
    kind: "Clarity",
    before:
      "AI prepares materials, questions, and grading. One of your teachers reviews it, edits it, and decides what reaches the classroom. Nothing reaches your students automatically.",
    after:
      "Teachers can edit generated materials, review questions and answer keys, and adjust suggested scores before sharing them with students.",
    reason: "Names the controls educators have without making an absolute product claim.",
  },
  {
    kind: "Positioning",
    before: "Start small, expand when you want to",
    after: "Access reflects each person’s role",
    reason: "Keeps this section focused on privacy and role-based access.",
  },
  {
    kind: "Tone",
    before: "Here is what you are agreeing to.",
    after: "These principles explain our approach.",
    reason: "Uses an informative tone and avoids presenting marketing copy as a legal agreement.",
  },
  {
    kind: "US English",
    before: "Teacher judgement stays",
    after: "Teacher judgment stays",
    reason: "Judgment is the standard US spelling.",
  },
  {
    kind: "Positioning",
    before: "Across Teacher Tools, Academics, and reporting",
    after: "Across Teacher Tools, Academic Support, and reporting",
    reason: "Uses the agreed Academic Support solution name.",
  },
  {
    kind: "US English",
    before: "an assisted mark",
    after: "a suggested score",
    reason: "Suggested score is clearer and more natural for US educators.",
  },
  {
    kind: "Clarity",
    before: "Every answer key and every mark is open for them to review.",
    after: "Answer keys, suggested scores, and feedback are open for them to review.",
    reason: "Names the reviewable outputs and uses US terminology.",
  },
  {
    kind: "Tone",
    before: "walk through exactly how this would be set up for your school.",
    after: "explain how TuritoSchools can be set up for your organization.",
    reason: "Avoids promising an exact configuration before requirements are known.",
  },
];

export const demoCopyChanges: CopyChange[] = [
  {
    kind: "Tone",
    before:
      "Come with the problem you actually want solved. We'll show you the part of this that addresses it, and be honest about the parts that don't.",
    after:
      "Tell us what your school or district wants to improve. We’ll focus the conversation on the solutions that fit your priorities.",
    reason: "Invites a practical conversation without sounding defensive or critical.",
  },
  {
    kind: "Clarity",
    before: "We walk through the solutions you asked about.",
    after: "We’ll walk through the solutions you want to explore.",
    reason: "Uses a natural invitation and consistent future tense.",
  },
  {
    kind: "Clarity",
    before: "You see what your teachers and students would actually use.",
    after: "See what teachers, students, and school leaders would use.",
    reason: "Includes the district and school leader audience and removes filler.",
  },
  {
    kind: "Positioning",
    before: "We work out whether you start with one solution or several.",
    after: "Discuss whether one solution or a connected set is the right starting point.",
    reason: "Explains that schools can adopt one solution or a connected set.",
  },
  {
    kind: "US English",
    offPage: true,
    before: "School leader",
    after: "Principal / school leader",
    reason: "Adds the role title commonly used in US schools.",
  },
  {
    kind: "US English",
    offPage: true,
    before: "Teacher / department lead",
    after: "Teacher / department chair",
    reason: "Department chair is the more common US school title.",
  },
  {
    kind: "Positioning",
    before: "Academics",
    after: "Academic Support",
    reason: "Uses the agreed student solution name in the form.",
  },
  {
    kind: "Positioning",
    before: "School Performance",
    after: "School & District Insights",
    reason: "Uses the agreed reporting solution name in the form.",
  },
];

export const copyChangesByRoute: Record<string, CopyChange[]> = {
  "/": homeCopyChanges,
  "/for-administration": schoolCopyChanges,
  "/for-teachers": teacherCopyChanges,
  "/for-students/academic-support": academicSupportCopyChanges,
  "/for-students/college-readiness": collegeReadinessCopyChanges,
  "/trust-privacy": trustCopyChanges,
  "/request-demo": demoCopyChanges,
};
