"use client";
import { useEffect, useRef } from "react";
import { AutoStoryTabs } from "./auto-story-tabs";
import { ScaledAsset } from "./scaled-asset";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Compass,
  FileText,
  GraduationCap,
  Heart,
  Layers3,
  ListChecks,
  MapPin,
  MessageCircle,
  Sparkles,
  UserRound,
} from "lucide-react";
import { TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
function Demo({ children = "Request a College Readiness demo" }: { children?: React.ReactNode }) {
  return (
    <a href="/request-demo?interest=college-readiness" className="button">
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.dataset.visible = String(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <ScaledAsset baseWidth={520}>
      <div ref={ref} className="cr-product">
        <div className="cr-product-top">
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
function ProfileView() {
  return (
    <Frame title="College Readiness / Profile">
      <div className="cr-profile">
        <div className="cr-profile-title">
          <span>
            <UserRound size={24} />
          </span>
          <div>
            <small>THE STUDENT’S STARTING POINT</small>
            <h3>Student profile</h3>
          </div>
        </div>
        <AutoStoryTabs values={["academics", "interests", "activities"]}>
          <TabsList className="cr-tabs">
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="academics" className="cr-tab-panel">
            <h4>Academic details</h4>
            <div className="cr-profile-fields">
              <span>School and curriculum</span>
              <span>Academic level & grade</span>
              <span>Expected college entry term</span>
              <span>Grades & academic scores</span>
              <span>Standardized test scores</span>
              <span>AP scores, where relevant</span>
            </div>
            <p>
              A place for academic context, including students who have not yet taken standardized
              tests.
            </p>
          </TabsContent>
          <TabsContent value="interests" className="cr-tab-panel">
            <h4>What matters to the student?</h4>
            <div className="cr-interest">
              <Heart size={21} />
              <div>
                <b>Areas of interest</b>
                <p>Subjects and fields they want to explore</p>
              </div>
            </div>
            <div className="cr-interest">
              <MapPin size={21} />
              <div>
                <b>Location preferences</b>
                <p>Country of residence and preferred countries for college</p>
              </div>
            </div>
            <p>A starting point for a more personal college conversation.</p>
          </TabsContent>
          <TabsContent value="activities" className="cr-tab-panel">
            <h4>Activities and experience</h4>
            <div className="cr-activity">
              <span>ACTIVITY</span>
              <h5>Community science club</h5>
              <p>Role & leadership · Organization · Accomplishments</p>
              <div>
                <span>Participation grades</span>
                <span>Hours / week</span>
                <span>Weeks / year</span>
              </div>
            </div>
            <p>Capture the commitment behind an activity, as well as its name.</p>
          </TabsContent>
        </AutoStoryTabs>
      </div>
    </Frame>
  );
}
function TestPrep() {
  return (
    <Frame title="SAT Test Prep">
      <div className="cr-prep">
        <span className="cr-kicker">DIAGNOSTIC & LEARNING PLAN</span>
        <h3>Prepare by topic</h3>
        <p className="cr-muted">Identify focus topics with a diagnostic test.</p>
        <AutoStoryTabs values={["score", "plan", "materials", "tests"]} initial="plan">
          <TabsList className="cr-prep-tabs">
            <TabsTrigger value="score">Score Board</TabsTrigger>
            <TabsTrigger value="plan">Learning Plan</TabsTrigger>
            <TabsTrigger value="materials">Study Materials</TabsTrigger>
            <TabsTrigger value="tests">SAT Tests</TabsTrigger>
          </TabsList>
          <TabsContent value="score" className="cr-tab-panel">
            <div className="cr-exam-heading">
              <Compass size={30} />
              <div>
                <h4>Understand the starting point</h4>
                <p>Review answers and explore performance by subject and topic.</p>
              </div>
            </div>
            <div className="cr-profile-fields">
              <span>Accuracy</span>
              <span>Completion</span>
              <span>Difficult questions</span>
              <span>Incorrect responses</span>
            </div>
            <div className="cr-next-step">
              <Sparkles size={19} />
              <span>Turn diagnostic insights into a personalized learning plan.</span>
            </div>
          </TabsContent>
          <TabsContent value="plan" className="cr-tab-panel">
            <div className="cr-plan-heading">
              <div>
                <h4>Your learning plan</h4>
                <p>Read. Watch. Put it into practice.</p>
              </div>
              <span>
                <Sparkles size={15} /> Ask AI Tutor
              </span>
            </div>
            <div className="cr-topic-route">
              {["Linear equations", "Quadratic equations"].map((topic, i) => (
                <div className="cr-topic" key={topic}>
                  <span className="cr-topic-number">{i + 1}</span>
                  <div>
                    <h5>{topic}</h5>
                    <p>Read content · Watch video · Practice test</p>
                    <small>
                      {["Build understanding", "Apply the concept", "Keep moving forward"][i]}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="materials" className="cr-tab-panel">
            <h4>Resources, organized by topic.</h4>
            <p>Move between mathematics and English materials.</p>
            <div className="cr-prep-path">
              {["Algebra", "Data interpretation", "Geometry"].map((topic) => (
                <div key={topic}>
                  <BookOpen size={20} />
                  <div>
                    <b>{topic}</b>
                    <span>Tests · Study materials · Videos</span>
                  </div>
                  <ChevronRight size={16} />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tests" className="cr-tab-panel">
            <h4>Full-length SAT tests</h4>
            <p>Complete a full-length test to unlock the next one.</p>
            <div className="cr-prep-path">
              {["Full-length SAT test 1", "Full-length SAT test 2", "Full-length SAT test 3"].map(
                (test, i) => (
                  <div key={test}>
                    <ListChecks size={20} />
                    <div>
                      <b>{test}</b>
                      <span>
                        {i === 0 ? "Begin full-length practice" : "Unlock after the preceding test"}
                      </span>
                    </div>
                    <small>{i === 0 ? "Ready" : "Locked"}</small>
                  </div>
                ),
              )}
            </div>
          </TabsContent>
        </AutoStoryTabs>
      </div>
    </Frame>
  );
}
function CollegeView() {
  return (
    <Frame title="College Readiness / Colleges">
      <div className="cr-colleges">
        <div className="cr-list-heading">
          <Compass size={24} />
          <div>
            <h3>Compare college options</h3>
            <p>Recommendations informed by the student profile</p>
          </div>
        </div>
        {[
          [GraduationCap, "Academic fit", "Programs, interests, and score information"],
          [MapPin, "Place", "Location and the student’s preferences"],
          [FileText, "Cost context", "Tuition and room-and-board information"],
        ].map(([Icon, t, d], i) => {
          const I = Icon as typeof Compass;
          return (
            <div className="cr-compare-row" key={i}>
              <I size={22} />
              <div>
                <b>{t as string}</b>
                <p>{d as string}</p>
              </div>
              <ChevronRight size={17} />
            </div>
          );
        })}
        <div className="cr-college-actions">
          <span>Explore details</span>
          <span>Refine the profile</span>
        </div>
        <p className="cr-muted">
          Recommendations guide exploration; they do not predict admission.
        </p>
      </div>
    </Frame>
  );
}
function Counselor() {
  return (
    <Frame title="Virtual AI Counselor">
      <div className="cr-counselor">
        <div className="cr-counselor-icon">
          <MessageCircle size={30} />
        </div>
        <h3>Plan with Virtual AI Counselor</h3>
        <p>Explore interests, compare programs, and plan actions.</p>
        <AutoStoryTabs values={["conversation", "explore", "next"]}>
          <TabsList className="cr-prep-tabs">
            <TabsTrigger value="conversation">Conversation</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="next">Plan actions</TabsTrigger>
          </TabsList>
          <TabsContent value="conversation" className="cr-tab-panel">
            <div className="cr-guidance-student">
              I enjoy biology, but I’m unsure what I want to study.
            </div>
            <div className="cr-guidance-response">
              <Sparkles size={19} />
              <p>
                Let’s explore that. What do you enjoy most: experiments, understanding living
                systems, or helping people?
              </p>
            </div>
            <p className="cr-muted">
              Begin with a question. Clarify interests through a guided conversation.
            </p>
          </TabsContent>
          <TabsContent value="explore" className="cr-tab-panel">
            <h4>Compare your options.</h4>
            <div className="cr-profile-fields">
              <span>Subjects that interest me</span>
              <span>Experiences I enjoy</span>
              <span>Programs to explore</span>
              <span>Questions to ask</span>
            </div>
            <p>Use a shared visual workspace to organize ideas and compare what matters.</p>
          </TabsContent>
          <TabsContent value="next" className="cr-tab-panel">
            <h4>Choose a planning task.</h4>
            <div className="cr-prep-path">
              <div>
                <Compass size={20} />
                <div>
                  <b>Explore a field</b>
                  <span>Read about a program that connects to your interests.</span>
                </div>
              </div>
              <div>
                <UserRound size={20} />
                <div>
                  <b>Reflect on your experience</b>
                  <span>Identify an activity to discuss in your profile.</span>
                </div>
              </div>
              <div>
                <MessageCircle size={20} />
                <div>
                  <b>Bring it to your school counselor</b>
                  <span>Take your questions into a guidance conversation.</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </AutoStoryTabs>
      </div>
    </Frame>
  );
}
export function CollegeReadinessSections() {
  return (
    <>
      <div className="cr-modules">
        <div className="wrap">
          <span>Support, shaped around your school.</span>
          <a href="#readiness-profile">
            Student profiles <ArrowRight size={15} />
          </a>
          <a href="#readiness-tests">
            SAT & ACT preparation <ArrowRight size={15} />
          </a>
          <a href="#readiness-colleges">
            College exploration <ArrowRight size={15} />
          </a>
          <a href="#readiness-counselor">
            Virtual AI Counselor <ArrowRight size={15} />
          </a>
        </div>
      </div>
      <section className="ac-section" id="readiness-profile">
        <div className="wrap ac-section-grid">
          <div className="ac-copy">
            <span className="ac-section-label gold">01 / STUDENT PROFILES</span>
            <h2>
              A fuller picture of each student
              <br />
              <em>for college planning.</em>
            </h2>
            <p>
              Bring grades, test scores, interests, preferred locations, and activities into one
              profile, so counselors can begin with shared context.
            </p>
          </div>
          <div className="ac-visual gold">
            <ProfileView />
          </div>
        </div>
      </section>
      <section className="ac-section ac-soft" id="readiness-tests">
        <div className="wrap ac-section-grid reverse">
          <div className="ac-copy">
            <span className="ac-section-label coral">02 / SAT & ACT PREPARATION</span>
            <h2>
              Test preparation focused on
              <br />
              <em>each student’s needs.</em>
            </h2>
            <p>
              A diagnostic identifies focus areas, then the test-prep plan brings together relevant
              topics, videos, practice, and full-length tests.
            </p>
          </div>
          <div className="ac-visual coral">
            <TestPrep />
          </div>
        </div>
      </section>
      <section className="ac-section" id="readiness-colleges">
        <div className="wrap ac-section-grid">
          <div className="ac-copy">
            <span className="ac-section-label purple">03 / COLLEGE EXPLORATION</span>
            <h2>
              A shortlist shaped by
              <br />
              <em>each student’s priorities.</em>
            </h2>
            <p>
              Recommendations draw on the student’s interests, preferences, and academic record.
              Students can compare programs, location, score information, and cost as they refine
              their list.
            </p>
          </div>
          <div className="ac-visual purple">
            <CollegeView />
          </div>
        </div>
      </section>
      <section className="ac-section ac-soft" id="readiness-counselor">
        <div className="wrap ac-section-grid reverse">
          <div className="ac-copy">
            <span className="ac-section-label green">04 / VIRTUAL AI COUNSELOR</span>
            <h2>
              Help students prepare
              <br />
              <em>for counselor conversations.</em>
            </h2>
            <p>
              The Virtual AI Counselor helps students explore interests, study paths, and next
              steps, then bring clearer questions and ideas to their school counselor.
            </p>
          </div>
          <div className="ac-visual green">
            <Counselor />
          </div>
        </div>
      </section>
      <section className="cr-ai-module" id="readiness-study-tools">
        <div className="wrap cr-ai-grid">
          <div>
            <div className="eyebrow">RELATED SOLUTION · ACADEMIC SUPPORT</div>
            <h2>
              Add subject support between
              <br />
              <em>the practice tests.</em>
            </h2>
            <p>
              For students who also need help with subject learning, explore Academic Support. This
              separate solution includes the Virtual AI Tutor and study tools shown here.
            </p>
            <a href="/for-students/academic-support#academic-practice" className="text-link">
              Explore Academic Support <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="cr-tools-tabs">
            <AutoStoryTabs values={studyTools.map((t) => t.id)}>
              <TabsList className="crt-list">
                {studyTools.map((t) => {
                  const I = t.icon;
                  return (
                    <TabsTrigger key={t.id} value={t.id} className="crt-trigger">
                      <I size={17} aria-hidden="true" />
                      <span>{t.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
              {studyTools.map((t) => {
                const I = t.icon;
                return (
                  <TabsContent key={t.id} value={t.id} className="crt-panel">
                    <span className="crt-panel-icon">
                      <I size={26} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{t.title}</h3>
                      <p>{t.body}</p>
                    </div>
                  </TabsContent>
                );
              })}
            </AutoStoryTabs>
          </div>
        </div>
      </section>
    </>
  );
}
const studyTools = [
  { id: "tutor", icon: Sparkles, title: "AI Tutor", body: "A place to ask about a concept" },
  { id: "flashcards", icon: Layers3, title: "Flashcards", body: "Practice recalling key ideas" },
  {
    id: "quizzes",
    icon: ListChecks,
    title: "Quizzes & exams",
    body: "Check understanding through practice",
  },
  {
    id: "summaries",
    icon: FileText,
    title: "Summaries & podcasts",
    body: "Revisit material in another format",
  },
];
export function CollegeReadinessClosing() {
  return (
    <>
      <section className="cr-closing">
        <div className="wrap">
          <div>
            <div className="eyebrow">COLLEGE READINESS FOR YOUR SCHOOL</div>
            <h2>
              Strengthen the readiness program
              <br />
              <em>your school already has.</em>
            </h2>
            <p>
              College Readiness brings together test preparation, student profiles, college
              exploration, and the Virtual AI Counselor. Choose a starting focus for your school’s
              program and explore the full solution in a demo.
            </p>
            <div className="cr-bundle">
              <span>SAT / ACT</span>
              <span>Student profile</span>
              <span>College discovery</span>
              <span>Virtual AI Counselor</span>
            </div>
          </div>
          <div className="cr-demo-card">
            <CalendarDays size={28} />
            <h3>Let’s plan it around your school.</h3>
            <p>
              Bring your grade levels, college-planning priorities, and current program. We’ll work
              through the modules and a practical starting point together.
            </p>
            <Demo>Request a College Readiness demo</Demo>
          </div>
        </div>
      </section>
    </>
  );
}
