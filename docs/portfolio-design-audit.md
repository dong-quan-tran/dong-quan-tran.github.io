# Portfolio design audit

Impeccable 4.11.1 inspected the source and rendered the page at 1440 × 900 and 390 × 844. Additional Chromium checks covered 320px width, keyboard operation of the project dialog and research slider, and a synthetic touch swipe of More Projects.

| Area | Score | Observation |
| --- | --- | --- |
| Accessibility | 3/4 | The project dialog and slider work by keyboard. The heading outline jumps from h1 to h3 in Experience. |
| Performance | 3/4 | The site runs on plain HTML, CSS, and JavaScript. The 196 KB portrait and 65 KB stylesheet are the main local assets on the first screen. |
| Theming | 2/4 | The dark palette has a clear identity. Colors, type, and spacing are set separately across cards and breakpoints. |
| Responsive design | 3/4 | No page overflow at the widths checked. The carousel swipes on touch, but its mobile dots are only 20px wide. |
| Implementation integrity | 2/4 | The artwork gives each project character, but hover summaries and inconsistent ways to open details make the work harder to scan. |
| **Total** | **13/20** | **Acceptable. Improve project discovery and hierarchy first.** |

Impeccable flagged 11 findings on each rendered view, with overlap between the two sets. Static flags and advisory patterns were reviewed in context. For example, the spacing between BlinkChilling's Morse symbols is intentional.

## Recommended changes

1. **P1 · Make the six featured projects understandable at a glance.** The text summaries appear on hover or keyboard focus. The touch layout has no visible details control, and the detail button follows external links in the desktop tab order. Give each card a short visible summary and a labeled case study action. Show a verified contribution, award, or result where available. Use `$impeccable clarify` and `$impeccable layout`.
2. **P2 · Put work closer to the top.** At 390 × 844 the introductory title starts at 476px and the first project starts at 1548px. Put a short role statement and a View projects link near the top, with the portrait alongside or below the introduction on phones. Keep the experience entries available below it. Use `$impeccable layout`.
3. **P2 · Increase the size of small labels and controls.** The Loan Wick and FareForge awards and FareForge comparison captions are 11px. Make room for larger text and increase mobile carousel hit areas. Unify card padding and type sizes into shared rules. Use `$impeccable typeset` and `$impeccable adapt`.
4. **P2 · Fix the Experience heading outline.** Add an Experience h2 or make the role names labels inside a list so screen-reader users have a meaningful heading before the job entries. Use `$impeccable harden`.
5. **P3 · Make the research result faster to understand.** Keep the interactive Tamaraw chart and CSV. Add a plain-language takeaway beside the chart, with the experiment limits and source next to it. Use `$impeccable clarify`.

Finish with `$impeccable polish` and re-run `$impeccable audit` on the rendered layout. The interaction checks used Chromium emulation. Physical touch devices and screen readers were outside this pass.
