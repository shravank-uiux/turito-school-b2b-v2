# Current handoff

Updated: 2026-09-21.

## Read first

1. `AGENTS.md` for repository instructions.
2. `PROJECT-BRIEF.md` for the agreed positioning, four-solution structure, and constraints.
3. `CONTENT-REVIEW.md` for the review findings and unresolved product checks.

`HOMEPAGE-REVIEW.md` is historical. The current source of truth for review comparisons is `components/home-copy-changes.ts` plus `components/site-copy-changes.ts`.

## Branch and baseline

- Current branch: `Review-Version`.
- `Review-Version`, `origin/main`, and the deployed Vercel baseline were all at `fbdf9df` before these working-tree edits.
- `Legal-Centre` has a separate local commit, `a3d8924`; do not mix it into this review without a deliberate merge.
- No commit, push, merge, or deployment has been performed for the current review.

## Implemented for review

The user authorized a site-wide US content pass across:

- `/`
- `/for-administration`
- `/for-teachers`
- `/for-students`
- `/for-students/academic-support`
- `/for-students/college-readiness`
- `/trust-privacy`
- `/request-demo`

The copy now presents four solutions: School & District Insights, Teacher Tools, Academic Support with Virtual AI Tutor, and College Readiness with Virtual AI Counselor. It keeps the agreed homepage hero unchanged, describes AI as workflow support, uses US school language, removes unsupported adoption and speed claims, and avoids copy that criticizes educators or students.

The For Students section now uses a short overview plus separate Academic Support and College Readiness pages. The split gives each solution a direct URL and removes the false ending that appeared when the two long journeys were stacked on one page. No pricing or package-comparison page was added.

## Review toggle

`CopyReview` is mounted in `app/layout.tsx`, so every public route gets the same review tool. It is off by default.

- Turn on **Show previous wording** for inline red previous text and green current text.
- Open **All … changes** for the reason behind each edit.
- Add `?copy-review=1` to a route to load with review mode enabled.
- Previous wording comes directly from deployed `origin/main`, not an intermediate draft.

Key files:

| File | Responsibility |
| --- | --- |
| `components/copy-review.tsx` | Route-aware toggle and DOM annotation |
| `components/copy-review.module.css` | Review-bar and inline comparison styles |
| `components/home-copy-changes.ts` | Homepage comparison manifest |
| `components/site-copy-changes.ts` | Other route manifests and review reasons |

## Verification

- `npm run typecheck`: pass.
- `npm run build`: pass; all eight public routes generated successfully.
- `git diff --check`: pass.
- Headless Chrome loaded all eight routes with `?copy-review=1`.
- Inline review counts match on every route: homepage 25/25, School & District Insights 16/16, Teacher Tools 13/13, Student Solutions 7/7, Academic Support 9/9, College Readiness 14/14, Trust & Privacy 9/9, and Request a Demo 6/6.
- No application JavaScript errors were found during the rendered-page checks. Headless Chrome emitted only environment/display shutdown messages when the test processes were terminated.

## Product checks still required

- Verify every homepage certification and compliance claim before launch: SOC 2 Type II, FERPA, COPPA, GDPR/UK GDPR, ISO 27001, and WCAG 2.2 AA.
- The demo form is still explicitly a design preview and does not send or store requests.
- Confirm final feature availability, package boundaries, integrations, and cross-solution data flows with the product team.

## Authorization

The current copy is implemented for review on `Review-Version`. It is not approved for production merely because it is present in the working tree.

## Header update

The shared header now uses scoped styles in `components/site-header.module.css` and route-aware navigation in `components/marketing.tsx`. Desktop navigation includes Schools & Districts, For Teachers, a For Students menu with overview and both solution links, and Trust & Privacy. The mobile menu exposes the same destinations directly; Request a demo remains visible beside the menu button. Current links carry `aria-current` and the student parent has an active visual state.

Verified in Chrome at 1440, 1050, 768, 390, and 320px: menu opening, destination visibility, Escape dismissal, focus restoration, header/menu bounds, and navigation to College Readiness. No page errors were observed. Production build passed. Header navigation changes are outside the body-only copy-review toggle.

## School & District Insights flow update — September 21, 2026

Completed this solution first at the user's request. The six-section flow is now: benefit → reporting hierarchy and leader use cases → activity/assessment measures with one AI example → student evidence → educator follow-up and related solutions → demo.

- Hero explains the reporting benefit; primary CTA explicitly requests an insights demo, secondary CTA jumps to reporting.
- District leaders and principals each have a concrete starting point.
- Combined the repeated AI story into the measurement example. Defined the illustrative percentages, labeled example data, and kept interpretation and response with educators.
- Replaced scaled student-detail artwork with responsive content so mobile text remains readable.
- Related solution links explain lesson preparation and student practice without promising a configured integration.
- Removed unused tab imports and unused reporting datasets.
- Updated the comparison manifest against origin/main. It tracks wording, not a reconstruction of removed sections or layout. New content and structural changes are recorded here.

Validation: production build passed; Chrome at 1440, 768, 390, and 320px had no horizontal overflow or application errors. All 27 inline comparisons rendered; toggle reset, both page anchors, and demo preselection passed. Mobile full-page screenshot inspected. git diff --check passed.

Teacher Tools and student solution pages have not received this additional flow pass yet. No commit or deployment was performed. The existing demo remains a design preview.

## Footer and on-page legal panel — September 21, 2026

User authorized improving the footer, including legal/privacy without redirection. Shared Footer now delegates to components/site-footer.tsx with scoped CSS. It includes the four solution destinations, Student overview, Trust & Privacy, demo CTA, and three legal buttons. Privacy Policy, Terms of Service, and Cookie Notice open a native modal dialog with Base UI tabs; the URL remains unchanged. Escape and close dismiss the panel and native dialog restores trigger focus.

Legal text is preserved from the Legal-Centre branch a3d8924 in components/legal-documents.ts. These are incomplete drafts, explicitly labeled not yet in effect; this task does not establish approved policies or verify their operational claims. No legal branch merge or redirects were added. Footer changes are outside the main-body copy comparison toggle.

Validation: production build and git diff --check passed. Chrome tested all three legal triggers, switching tabs, unchanged URL, Escape, focus return, and 1440/768/390/320px page widths with no overflow or application errors. Mobile footer and legal dialog screenshots inspected. No deployment performed.

## Teacher and student solution flow — September 21, 2026

Updated For Teachers, the student overview, Academic Support, and College Readiness. Teacher copy now addresses teachers directly through the workflow. Student overview explicitly distinguishes the two solutions. Detail-page demo CTAs describe the destination and offer walkthrough anchors. Academic Support copy clarifies resource → tutor → practice → progress steps and removes the unsupported promise of no schedule impact. College Readiness keeps profile → test preparation → exploration → counselor together, then presents Academic Support as a separate related solution; closing no longer implies separately purchasable internal modules or includes AI study tools in its bundle.

Footer labels now match header audiences, with the two student solutions nested under For Students. Existing legal panel retained.

Verification: build passed; four routes at 1440, 390, and 320px had no horizontal overflow, broken section anchors, or browser application errors. Tracked wording comparisons render 19/19 teacher, 7/7 student overview, 10/10 academic, 14/14 college. Demo selection verified for all three detail pages. Structural and additional copy edits are described here; the comparison toggle is not a full layout-history view. No deployment or commit.

User confirmed 50+ AI tools. Added “50+ AI teaching tools” to the Teacher Tools benefit heading and preparation-step description. Student overview menu entry was discussed, not removed in this update.

## Student overview removed — September 21, 2026

User explicitly removed the overview requirement. Deleted app/for-students/page.tsx. Header dropdown now contains only Academic Support and College Readiness; footer For Students is a grouping label with both child links. Breadcrumbs no longer link to the overview. Homepage shows direct cards for both student solutions in a two-column audience grid. Old /for-students requests redirect to Academic Support, and legacy solution URLs redirect directly to their corresponding detail pages. Removed overview registration from copy-review routes. Header active states use text color without filled boxes or border lines; keyboard focus behavior remains available.

Build passed; Chrome verified exactly two desktop dropdown options, mobile destinations, transparent active header styling, College Readiness navigation, old-URL redirect, and absence of overview links on homepage and both detail pages. No application errors. No deployment.

## Assessment Management card rebuilt (For Teachers, step 04)

The card for "Assign it to a class, or to individual students" was the one sparse
surface in the five-step teacher workflow. It showed a single row (a date, a
class, a check) inside a 265px-min-height card, so most of it was empty, and it
demonstrated only one of the three things the section copy promises.

The beat's own body and notes say: choose who takes the assessment, when it
opens, and how it is delivered. The card now shows all three, and invents no
capability beyond what that copy already claims.

- WHO TAKES IT: two selected targets, a whole class and a set of individual
  students, which is exactly what the headline promises and what the old card
  never showed.
- WHEN IT OPENS: date, time, duration.
- HOW IT IS DELIVERED: Online / Printed paper as a visible choice.

Files: `components/journey-motion.tsx` (the index === 3 branch) and
`app/journey.css`. Reuses existing icons already imported in the file, so no new
imports. Styling reuses the established tokens: the chosen-chip treatment from
`.focused-options .correct`, the tinted panel and green top rule from
`.focused-week > div`, and the label/body type scale from `.focused-sheet`.
Matching `.scaled-asset-canvas` overrides were added so the card stays legible
when the asset is proportionally scaled. The now-unused `.focused-schedule`
rules were removed.

One gotcha for later: in `app/journey.css` the base rules sit AFTER the
`@media(max-width:400px)` blocks, so a mobile override placed in those blocks is
beaten by the base rule on source order. The stacking rule for this card is
appended at the end of the file instead. Verified with matchMedia plus computed
style, not by eye.

Verified: typecheck clean, `git diff --check` clean, no console errors, grid is
2 columns at 1440px and 1 column at 390px, no horizontal overflow.

## Concurrent work warning

Another session is editing this repo. `components/journey-motion.tsx` was last
written at 08:44 today by that work, and an earlier site-wide US-English pass of
mine was overwritten in five files (the outcome survived; their pass fixed the
same terms differently). Check mtimes and re-read files before editing, and
expect conflicts in journey-motion.tsx, the solution pages, and the new
site-header / site-footer / site-copy-changes files.

## Card motion added site-wide

One shared layer rather than edits scattered across pages, to reduce conflict
with the concurrent session.

| File | Responsibility |
| --- | --- |
| components/card-motion.tsx | Tags card groups, staggers them, observes scroll. |
| app/card-motion.css | Reveal transition, hover lift, reduced-motion opt-out. |
| app/layout.tsx | Imports the stylesheet and mounts CardMotion once. |

Motion: a 14px rise and fade over 0.55s on scroll into view, staggered 60ms and
capped at 5 steps, plus a 6px hover/focus lift on cards that contain a link or
button. Easing and lift distance match the existing `.eh-path-card` treatment
rather than introducing a new style.

Covers 48 cards across 6 pages: homepage 20, For Teachers 11, Trust & Privacy 7,
College Readiness 4, For Schools & Districts 3, Academic Support 3. Selectors
that match nothing are skipped, so the one list serves every page.
`/request-demo` is deliberately excluded: the only card there is the form itself,
and animating the conversion surface is not worth the risk.

Decisions worth keeping:

- The hidden resting state is applied by JavaScript, never in the served HTML,
  so with JS off or failed every card renders normally. Nothing depends on the
  script to be readable.
- Cards already in the viewport are marked revealed synchronously in the same
  pass, so the first paint never flashes empty cards.
- `prefers-reduced-motion: reduce` returns before touching the DOM, and the CSS
  neutralises the rules as well, so it is covered whether or not the script runs.
- Re-runs on `usePathname` change, because client-side Link navigation does not
  remount the layout. Verified by clicking through from For Teachers.
- `[data-card-motion][data-revealed]` sets opacity only; `transform: none` is
  scoped with `:not(:hover):not(:focus-within)`. Without that it ties on
  specificity with existing hover rules like `.eh-path-card:hover` and the winner
  would depend on stylesheet order, which can differ in a production build.

Verified: typecheck clean, `git diff --check` clean, no console errors on a clean
load, every page reaches zero unrevealed cards after scrolling, no card is ever
left invisible while on screen, no horizontal overflow, and client-side
navigation re-tags the new page.

Not verified in this harness: the hover lift itself. `$B hover` does not produce
a CSS `:hover` state here, confirmed by a control test where the pre-existing
`.eh-path-card:hover` also failed to register. The hover rules were checked by
reading the served CSSOM and by specificity, not by a simulated pointer. Worth a
human click.

A React "state update on a component that hasn't mounted" error appears
intermittently while the other session saves files. It is Fast Refresh noise:
CardMotion holds no state, and a clean load logs no errors.

## Homepage cards reduced, feature cards turned into auto-playing tabs

User decisions: the homepage audience section returns to three normal cards, and
the For Teachers hero capabilities and the College Readiness study tools become
auto-advancing tab sets.

### Homepage: four big cards to three normal ones

`audiencePaths` in components/home-ecosystem.tsx now has three audience entries
(For Schools & Districts, For Teachers, For Students) instead of four solution
entries. The For Students card names both Academic Support and College
Readiness and links to /for-students/academic-support, which is also where
/for-students redirects. Card names now match the nav labels.

In app/home-ecosystem.css, `.eh-paths` went from 2 columns to 3. The portrait
`aspect-ratio:3/4` is unchanged: the user confirmed with a reference screenshot
that the original portrait proportion is what they want, so only the column
count changed. Cards went from 569x759 to 372x496 (ratio 0.75, matching the
0.74 measured from the reference). The existing responsive overrides at 900px
and 760px were left alone, so the stack is 844x528 at 900px and 346x260 at
390px.

### Auto-playing tabs

Both reuse the existing `AutoStoryTabs`, which advances every 4.8s, pauses on
hover, pauses when off-screen or when the tab is hidden, stops permanently on
first interaction, and skips entirely under prefers-reduced-motion. No new
timer or animation code was written.

- For Teachers: the four `.teacher-benefits` columns are now `.teacher-benefits-tabs`.
- College Readiness: the `.cr-study-tools` 2x2 is now `.cr-tools-tabs`.

Both use new class names rather than restyling the old ones. `.cr-study-tools`
in particular carries `!important` rules in two stylesheets, so reusing it would
have meant fighting them. The old rules are untouched and still valid if either
block is reverted.

Copy was not changed in either conversion. The study-tool descriptions are still
the same four one-line strings; only the presentation changed. Making those
panels genuinely useful, for example a working flashcard or quiz, is still open.

### Card motion list updated

Three selectors were removed from components/card-motion.tsx:

- `.eh-path-card` already has its own `eh-rise` entry animation. Running both
  meant two competing transforms, and an animation with `both` fill wins over a
  transition, so the reveal would have been unreliable.
- `.teacher-benefits > div` and `.cr-study-tools > div` no longer exist as card
  grids.

Counts are now homepage 16, Trust & Privacy 7, For Teachers 7, For Schools &
Districts 3, Academic Support 3.

Verified at 1440px and 390px: typecheck clean, `git diff --check` clean, no
console errors, zero unrevealed cards on every page after scrolling, no
horizontal overflow, three homepage cards at 372x279 with all content fitting,
and both tab sets auto-advancing (Teacher Tools moved tools to assessment,
College Readiness moved AI Tutor to Flashcards, each within 6 seconds).

## Homepage For Students card: link target decided, and the dead end fixed

The card keeps a single `EXPLORE` to `/for-students/academic-support`. Two
links inside the card were mocked into the live DOM and rejected: the second
link adds a row, which pushes that card's title about 20px above the other two
and breaks the baseline across the row. Academic Support is the right single
target because it is the broader offering (all grades, all subjects, where
College Readiness is a subset), it is the step that closes the ecosystem loop,
it is first in the package order, and it is already what `/for-students`
redirects to.

The actual problem was not the card. `components/academics-page.tsx` had no
link to College Readiness at all, while College Readiness linked back to it, so
anyone who wanted College Readiness landed in a one-way street.

Added `AcademicsRelated` in `components/academics-page.tsx`, rendered between
`AcademicsSections` and `AcademicsRollout` in
`app/for-students/academic-support/page.tsx`, with styles in
`app/for-students/academics.css`. It mirrors the block College Readiness uses to
point here, in the Academic Support green rather than the readiness purple.
`.cr-ai-module` could not be reused: its grid and type rules live only in
college-readiness.css, which this page does not import.

The four highlights are taken from College Readiness's own headings, so nothing
new is claimed. Test preparation is described as "practice focused on each
student's needs, by topic" rather than naming SAT and ACT, because
CONTENT-REVIEW.md flags that both are advertised while the detailed example
shows SAT only. Icons already imported in the file were reused, so no new
imports.

Verified: typecheck clean, `git diff --check` clean, two links to College
Readiness now present on the page, two columns at 1440px and one at 390px, no
horizontal overflow.

Bug caught during this change, worth remembering: a `\u00b7` escape written
into JSX *text* renders literally as the characters backslash-u-0-0-b-7. JS
string literals interpret those escapes, JSX text nodes do not. Two pre-existing
`\u2019` in journey-motion.tsx and home-ecosystem.tsx are inside string
literals and are correct. When writing TSX through a script, put the real
character in JSX text.

## For Teachers hero capabilities reverted to four static columns

The user reviewed the auto-advancing tab version and asked for the original
layout back: four columns, all visible at once. Reverted.

- `app/for-teachers/page.tsx` renders `.teacher-benefits` as a four-column grid
  again, from the same `teacherBenefits` data introduced for the tabs. The
  `AutoStoryTabs` and `Tabs*` imports were removed from that file.
- The `.teacher-benefits-tabs` / `.tbt-*` rules were removed from
  `app/journey.css`. No `tbt-` or `teacher-benefits-tabs` references remain.
- `.teacher-benefits > div` is back in the `components/card-motion.tsx` list, so
  the columns keep the subtle staggered fade without changing the layout. Say so
  if that reveal should come off too.

Copy was not reverted. The columns keep the current wording (Academic planning,
50+ AI teaching tools, Assessment creation, AI-assisted grading), not the older
administrator-voiced wording visible in the reference screenshot. The request
was about layout.

Verified: typecheck clean, `git diff --check` clean, four columns all visible at
once, zero tab triggers left, 4 columns at 1440px and 1000px, 1 column at 390px,
no horizontal overflow, zero unrevealed cards.

Still outstanding: the College Readiness study tools are STILL the auto-advancing
tab set (`.cr-tools-tabs`). The user pointed at the For Teachers section only, so
that one was left alone. Confirm whether it should be reverted to a 2x2 grid too.

## AI evaluation removed from Teacher Tools; real AI tools added

### Removed

At the user's request, AI evaluation / AI-assisted grading is gone from Teacher
Tools entirely.

- `components/journey-motion.tsx`: the fifth workflow beat ("Review results" /
  module "AI Evaluations"), its `photoStories` entry, and the `Review` surface
  component. `surfaces` is now four entries and the intro reads "four steps".
  The workflow is Plan the year, Prepare the day, Build the assessment, Manage
  the assessment.
- `app/for-teachers/page.tsx`: the "AI-assisted grading" capability column, the
  H1 ("and grade in one place" is now "and assess in one place"), the hero
  paragraph, the hero note, the teacher-control paragraph, and the page title
  and description.

Verified: the rendered For Teachers page contains none of grading, AI
evaluation, suggested scores, review results, or rubric-guided.

STILL PRESENT ELSEWHERE, needs a decision: the homepage
(`components/home-ecosystem.tsx`, "first-pass grading" and "review suggested
scores") and Trust & Privacy (`app/trust-privacy/page.tsx`, three mentions of
suggested scores). The request was scoped to Teacher Tools, and the Trust &
Privacy mentions are part of a teacher-oversight commitment, so removing them
changes a trust claim rather than a feature description.

### Added: AI teaching tools section

New `.tt-tools` section on For Teachers, between the capability columns and the
workflow. Five tools chosen from the product's own AI Tools library (supplied by
the user as a screenshot), picked for US K-12 relevance:

Lesson Plan, Worksheet Generator, Rubric Generator, Multiple Explanations, Text
Dependent Questions.

Rationale: lesson plans and worksheets are the daily staples; rubrics are how US
teachers grade; Multiple Explanations serves differentiation; Text Dependent
Questions is Common Core close-reading language, and Common Core alignment is
confirmed. Writing Feedback was deliberately NOT chosen despite being trending
in the product, because it reads as evaluation, which is what we just removed.

Descriptions are condensed from the product's own tool descriptions. Nothing is
invented.

Motion, both CSS-only and both disabled under prefers-reduced-motion:
- each card shows an input-to-output pair (Topic to Lesson plan) whose arrow
  nudges on a stagger, so the animation says what the tool does
- ten further tool names sit below as chips with a slow float

Cards are also in the card-motion list for the scroll reveal.

Layout: 5 columns at 1440px, 3 at 1100px, 2 at 760px, 1 at 480px.

Verified: typecheck clean, `git diff --check` clean, no console errors on a
clean load, no horizontal overflow at four widths, zero unrevealed cards.

### Incident worth remembering

The first removal attempt cut from `function Review(` to
`function TeacherPhotoStory(`, which swallowed `photoStories`, `details` and
`JourneyHero` as well, 5975 chars instead of 2889. Typecheck caught it
immediately. The file had no clean git baseline (uncommitted, and the other
session had rewritten it), so it was recovered from `sourcesContent` in
`.next/server/chunks/ssr/*.js.map`, which still held the pre-edit source. Worth
knowing: the dev build's sourcemaps are a usable undo for an uncommitted file.
When deleting a function, find the NEXT top-level declaration rather than
assuming which one follows.

## AI evaluation removed site-wide; tools moved into the product card

### 1. Site-wide removal

Extended beyond Teacher Tools at the user's request. Also edited:

- `components/home-ecosystem.tsx`: "first-pass grading" and "review suggested
  scores" in the why-points and trust-points.
- `app/trust-privacy/page.tsx`: three mentions of suggested scores, in the
  principles, the Teachers role, and the oversight checklist.

Verified on the rendered pages: all seven routes report clean for grading, AI
evaluation, suggested scores and rubric-guided.

### 2. Tools moved into the "Prepare the day" card

The standalone `.tt-tools` section was removed, along with its CSS and its
card-motion selector. The five tools now live inside the product mockup itself,
which is what the card was always for.

`TeacherPhotoStory` index 1 renders a tool picker plus the draft that tool
produces. The card heading and icon follow the selection. It auto-advances every
3.6s, pauses when off-screen, when the browser tab is hidden and on hover, skips
entirely under prefers-reduced-motion, and stops permanently once a chip is
clicked. The output panel animates on swap. Verified: auto-advance moves
Worksheet Generator to Multiple Explanations in 7s, and clicking Rubric
Generator pins it and matches the panel.

Tools and their illustrative outputs: Lesson Plan, Worksheet Generator, Rubric
Generator, Multiple Explanations, Text Dependent Questions.

### 3. "Illustrative example"

The footer of all four workflow cards now reads "Illustrative example" in place
of the per-card status, so the mockups are labeled as mockups. This matters for
a company with no customers.

### Repairs made along the way

- The sourcemap restore had rolled back the earlier Assessment Management card
  while its `.focused-assign` CSS stayed in journey.css, leaving the card
  rendering unstyled `.focused-schedule` with no rules. The richer markup was
  re-applied.
- The fifth branch of `TeacherPhotoStory` (WRITTEN RESPONSE / teacher review)
  was unreachable after the beat removal and still carried the removed
  evaluation concept. Deleted, along with its "Adjust scores as needed" footer.

Verified: typecheck clean, `git diff --check` clean, no console errors, five
chips at 1440/760/390px, no horizontal overflow, zero unrevealed cards.

