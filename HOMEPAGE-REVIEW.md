# Homepage review implementation

> SUPERSEDED as of 2026-09-20. This describes a review harness and proposal built
> against the pre-fbdf9df homepage. Review-Version is now at fbdf9df and the
> harness lives on Legal-Centre (a3d8924). Retained for reference only.


Branch: Review-Version. Started September 20, 2026.

## How to review

Open http://localhost:3001 (the server must run from this workspace).

- The proposed homepage appears by default.
- Turn **Show original** ON to see the original homepage; OFF returns to the proposal.
- **What changed (7)** opens Before, Proposed, reason, and View this section for each changed section.
- Only one version mounts at a time: no duplicate main landmarks or competing section IDs.
- The toolbar is local to the homepage. It is an editorial preview, not final customer-facing content.
- A fresh page load defaults to the proposal; the preference is not persisted.

## Baseline definition

The baseline is the WORKING homepage on Review-Version before this task, including existing uncommitted /trust links. It is not origin/main or the earlier dark-green main hero.

Original source: components/home-ecosystem.tsx. SHA-256 at task start:
`31482c7dbe089e1bb888d87e4a498e6dedc8f0894ce3b51c61819a5c5ddeb1bb`.

Keep that file and app/home-ecosystem.css unchanged during review. If those must change later, first preserve a named baseline snapshot. Shared Header/Footer and global styles remain current in both versions; this comparison is not a frozen historical whole-site build.

## Implementation and reuse for Claude

| File | Responsibility |
| --- | --- |
| app/page.tsx | Composes original and proposed homepage. Existing metadata retained. |
| components/home-ecosystem.tsx | Original homepage; do not edit for this iteration. |
| components/home-proposed.tsx | Proposed content and section structure. |
| components/home-proposed.module.css | Proposed styles, scoped to preserve the baseline. |
| components/page-review.tsx | Reusable review shell, switch, and change panel. |
| components/page-review.module.css | Scoped toolbar and change panel styles. |
| components/home-review-changes.ts | Seven before/after summaries, reasons, and section selectors. |

To apply the pattern to another page AFTER authorization:
1. Preserve its actual starting component and relevant styles.
2. Create a separate proposed component with scoped styles.
3. Pass both as ReactNode props to PageReview, plus a change manifest and truthful baseline label.
4. Record every changed/replaced/added section. Map beforeSelector and afterSelector to corresponding sections. For a new section, map the original to the nearest context and label it Added.
5. Verify both versions, keyboard/mobile controls, links, and section comparison; update the handoff.

Do not silently overwrite the original. Do not treat proposed copy as approved simply because it renders.

## Proposed sections

1. **Hero:** approved wording; static audience phrase proposed; Request a demo and See how it connects. Existing classroom image with revised treatment.
2. **Audience paths:** leader, teacher, student benefits; both student offerings named; US district terminology. Existing imagery with readable text underneath.
3. **Connected workflow:** replaces Why schools switch with an illustrative prepare → practice → review → respond story. No customer adoption or automatic data-transfer claims.
4. **Four solutions:** replaces generic feedback/photo section with four cards. Tutor included in Academic Support; Counselor included in College Readiness. Existing page/anchor destinations; no prices or new routes.
5. **Trust:** scopes teacher review to materials/assessments and links to existing trust/privacy/accessibility routes. Omits audit/certification claims flagged as unverified in the original source; baseline retains them.
6. **Integrations:** retains existing names and described sign-in/rostering roles, softens absolute setup promises, and omits marketplace assertion. Actual integration availability still needs product confirmation.
7. **Closing:** invites grade-level, current-tool, and support questions; existing portrait without an implied customer endorsement.

The proposal retains the cream/green palette, serif accents, red demo buttons, and existing assets. No new decorative animation or automatic carousel was added. Shared header/footer and existing legal pages were not changed.

## Verification and remaining work

- Browser verification passed: full-page switching, original content restored, approved hero copy, four solutions with tutor/counselor inclusions, keyboard switch activation, corresponding section position, seven change records and section jumps, 1440px desktop and 390px/320px mobile layouts, internal links/anchors, and no browser exceptions.
- Original homepage source hash matches the starting baseline.
- Final `npm run typecheck` and `git diff --check` passed after browser verification. A production build was not run for this review iteration.
- Temporary browser script/screenshots: /tmp/turito-home-review-check; may not persist in another environment.
- No commit, merge, or deployment performed.
- Demo request submission remains the existing preview experience, outside this homepage task.
- Product connections, certifications, integration availability, and outcomes are not verified by rendering the marketing page.
