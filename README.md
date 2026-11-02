# Johnny Tran — Personal portfolio

A static portfolio for Dong Quan Tran, focused on software engineering, AI, and security. Built with HTML, CSS, and JavaScript. No build step, backend, API keys, or paid hosting required.

## Preview locally

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. Opening `index.html` directly also works, except clipboard access can be restricted by the browser.

## Publish with GitHub Pages

1. Push this folder as the public repository `dong-quan-tran.github.io`.
2. Open repository **Settings → Pages**.
3. Choose **Deploy from a branch**, then **main** and **/ (root)**.
4. The website will be published at https://dong-quan-tran.github.io/.

## Edit content

- `index.html`: layout, biography, project cards, links, contact information.
- `styles.css`: colors, responsive layouts, typography, artwork, reduced-motion support.
- `app.js`: case studies, card interactions, and the research chart.
- `assets/tamaraw-results.csv`: recorded research data.
- `assets/research-source.json`: source URL and revision for the data snapshot.
- `assets/resume.pdf`: downloadable résumé, if supplied.

Google Fonts is optional; local font fallbacks keep the site usable if it is unavailable. All artwork is CSS or SVG. No trackers, cookies, or analytics are included.

## Content accuracy

The About section and experience row introduce the site. Project-card hover summaries and detail dialogs are separate from their external action buttons. Card artwork uses illustrative data and does not run project backends. Research chart values are taken from the bundled CSV for `legacyPadl100_pin0p015_pout0p045_L1_G{1,3,5,7,9}`, with 95 one-page tasks per record. The bar scale is 0-100%; its dashed marker is 50%.

The two DueScope repositories are represented by one case study. Research phases are linked as one sequence. Team work is labeled; individual contribution claims should be added only after confirmation. Benchmark discussion links to the original project and keeps the original scope and limitations.

## Before updating the résumé

Replace `assets/resume.pdf` with the intended public version. The résumé link opens the PDF; visitors can save it through their browser. Keep personal information limited to what you want publicly accessible.
