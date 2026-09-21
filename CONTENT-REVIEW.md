# Content review record

Updated: 2026-09-21. Read PROJECT-BRIEF.md for the agreed positioning and package structure.

## Current review implementation

The user authorized a content pass across the public site on `Review-Version`: the homepage, School & District Insights, Teacher Tools, Student Solutions overview, Academic Support, College Readiness, Trust & Privacy, and Request a Demo. The review uses `origin/main` at `fbdf9df` and the deployed Vercel site as the previous-wording baseline.

The review copy now:

- presents the four purchasable solutions without adding a duplicate package section;
- treats Virtual AI Tutor and Virtual AI Counselor as included capabilities;
- uses US K–12 terminology such as district, grading, scores, assessment, review, and department chair;
- describes AI as support within educator and student workflows;
- scopes teacher-review promises to generated materials, answer keys, feedback, and suggested scores;
- replaces criticism of schools, teachers, counselors, and students with practical descriptions;
- avoids unsupported customer-adoption and speed claims; and
- uses a concise For Students overview with separate Academic Support and College Readiness detail pages.

The fixed review bar is available on every public route. It is off by default. Turn on **Show previous wording** to mark deployed wording in red and current wording in green. `?copy-review=1` opens a route with review mode enabled for direct review links.

This remains review-branch work. It has not been committed or deployed.

## Historical scope and evidence

The assistant reviewed main commit fbdf9df in /tmp/turito-main-review, previously served at http://localhost:3100. Verify checkout and server status before reuse. Review covered the homepage, For Teachers, For Students (including both academics and college readiness), For Administration, Trust & Privacy, and Request a Demo. It did not cover the separate unfinished Legal Centre work in the main workspace.

The review included source/content reading, desktop and 390px mobile screenshots, and mobile navigation, flashcard, and quiz interaction checks. It was an expert walkthrough from audience perspectives, not research conducted with actual customers or users. No full accessibility conformance audit was performed.

## Findings to revalidate against the next reviewed version

1. The demo form was a design preview and did not send/store requests.
2. Specific audit/compliance claims lacked linked supporting documentation. This does not establish that the claims are false; verify evidence and scope.
3. The student page combined two long journeys, with an apparent closing before college readiness. At the tested mobile size it was approximately 10,000px tall. Separate pages were one recommendation, not a requirement or approved change.
4. US terminology and audience voice were inconsistent. For Teachers spoke primarily to administrators using “your teachers.”
5. Some headlines sounded critical of educators, including “Your counselors cannot sit with every student” and “Build the readiness program your school is missing.”
6. Universal teacher-approval statements conflicted with the apparent student-facing AI tutor unless scoped to particular workflows.
7. Teacher control, finding learning gaps, starting with one module, and AI study tools repeated without adding much new information.
8. The teacher workflow was a strong narrative foundation; interactive flashcards and quiz feedback worked.
9. Embedded product panels and controls became small on mobile. No horizontal page overflow was found at the tested 390px width.
10. Some “Explore” calls to action led to a demo form instead of an example or product experience.
11. Grade/subject coverage, standards, data sources, integration depth, onboarding, and licensing approach needed clearer explanations.
12. The homepage and several internal pages reused the same classroom photograph. Relevant product evidence could replace some repetitions.
13. SAT and ACT were both advertised, but the detailed preparation example showed SAT only.
14. Trust content was primarily principles; buyers needed operational details, contacts, and supporting document access.

## User corrections to retain

- No customers exist yet, so do not require customer proof as a present launch asset. Avoid adoption language such as “Why schools switch” unless supported.
- Keep the preferred ecosystem headline and practical description recorded in PROJECT-BRIEF.md.
- AI should be explicit where relevant, not removed or repeated everywhere.
- There are four packages, not separate packages for the tutor and counselor.
- No prices displayed for now.
- The student-page architecture is still being discussed.

## Visual direction proposed, not approved

Use motion to explain a meaningful change: prompt to draft to teacher edit; student attempt to guided feedback; district view to student evidence. Prefer manual controls for content visitors must read. Keep flashcard and quiz interaction. A podcast example should either play with an available transcript or be clearly presented as a preview. Trust information benefits more from readable diagrams and documents than decorative animation.

## External references consulted during review

- FERPA vendor guidance: https://studentprivacy.ed.gov/resources/responsibilities-third-party-service-providers-under-ferpa
- COPPA FAQs: https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions
- Public-sector web accessibility guidance: https://www.ada.gov/resources/web-rule-first-steps/
- Digital SAT practice: https://satsuite.collegeboard.org/practice/bluebook
- ACT educator changes: https://www.act.org/content/act/en/products-and-services/the-act-educator/the-act-test/enhancements-k12.html

Recheck current guidance before making detailed legal, accessibility, or exam-format claims. These references do not verify Turito product capabilities or compliance.

## Implemented: School & District Insights flow

The latest authorized pass completes /for-administration first. It now explains the distinct district-leader and principal use cases before showing reporting measures. One labeled AI example replaces repeated summaries; student evidence leads into a concrete team-review routine. Demo CTAs describe their destination, and related solutions describe their role in the ecosystem. Student-detail text uses responsive layout rather than scaled artwork.

The old/current wording toggle tracks 27 inline edits on this route. Structural changes (removing the duplicate AI section, relocating the example, adding a reporting anchor and ecosystem context) are documented here rather than presented as an old-layout toggle. No customer outcomes were introduced. Product scope and data availability still need the existing product-team verification before launch.

## Implemented: teacher and student solution clarity

For Teachers now uses direct teacher language; demo labels and walkthrough links make the next step explicit. For Students introduces Academic Support and College Readiness as distinct choices. College Readiness's core flow stays together, and its Academic Support cross-link now clearly names that separate solution. Removed wording implying that College Readiness's individual capabilities are separately purchased modules. Academic copy explains the learning routine with fewer broad promises. Build, mobile layout, section links, tracked comparisons, and detail-page demo selection were checked.
