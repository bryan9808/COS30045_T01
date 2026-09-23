# Domestic Energy Efficiency in Australia

**Unit:** COS30045 Data Visualisation  
**Task:** T01 (a): Build Appliance Energy Consumption Website  
**Author:** Bryan Ngu Qi Xian  
**Live Site:** [https://your-project-name.vercel.app/](https://your-project-name.vercel.app/)  
**Repository:** [https://github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name)

---

## 1. Project Overview

This project is an interactive single-page demonstration website focused on household appliance energy consumption in the Australian market. It establishes the base front-end layout and deployment workflow required for the data visualisations planned for later tasks in COS30045.

### Core Features

* **Three Functional Views:** Home, Televisions, and About Us.
* **JavaScript Dynamic Navigation:** Seamlessly swaps views without full-page browser reloads, using hash-based routing (`history.pushState`) so back/forward buttons and page refreshes keep the user on the correct view.
* **Brand-Consistent Dark Theme:** Deep charcoal/navy surfaces with amber and cyan accents derived from the lightning-bolt "power" logo, implemented entirely through CSS custom properties.
* **Interactive Feedback:** Hover glow on navigation links, a spinning logo animation, lifting stat tiles, and a glowing amber pill indicator on the active tab.
* **Data-Story Framework:** The Televisions view defines seven key analysis questions, each with a dedicated chart placeholder slot ready for interactive D3.js visualisations in later tasks.
* **Continuous Deployment:** Version-controlled with GitHub Desktop (commits and pushes) and auto-deployed to Vercel on every push.

---

## 2. GenAI Usage Log

| File / Component | Prompt / Trigger Context | GenAI Contribution |
| :--- | :--- | :--- |
| `index.html` | Prompted for starter copy on appliance energy consumption in Australia (Energy Rating Labels, standby power, star ratings). | Generated the semantic HTML structure for all three views, placeholder content, and the seven key analysis questions with suggested chart types. |
| `css/styles.css` | Dark colour theme request and navigation styling. | Suggested CSS variables (`:root`), the `.page-section` show/hide pattern, flexbox navbar layout, and hover/active transition effects. |
| `js/script.js` | Tab switching without page reloads. | Drafted the SPA router: `e.preventDefault()` on nav clicks, `history.pushState` hash routing, `.active` class toggling, `popstate` handling, and the auto-updating footer year. |
| `images/logo.svg` | Needed a "power" logo to anchor the theme. | Generated the lightning-bolt badge SVG, reused as both the navbar logo and the browser tab favicon. |

---

## 3. Reflection on Using GenAI

### Workflow & Productivity

GenAI significantly accelerated the scaffolding phase. Repetitive structures — three views with consistent navbars and footers, the footer year updater, the card/chart-placeholder markup for seven questions — were drafted in seconds rather than written by hand. This left more time for the parts that mattered: verifying content accuracy and refining the visual design.

### Challenges & Verification

While GenAI produced functional starter code, every suggestion required human review before it was committed:

* **Requirement Alignment:** Early drafts used traditional multi-page links (`<a href="televisions.html">`). The architecture had to be explicitly reworked into a Single-Page Application (SPA) using section show/hide, both to satisfy the "swap pages using JavaScript" requirement and to avoid full page reloads.
* **Content Accuracy:** Generated claims about energy consumption (e.g. standby power figures, TV wattages) were checked against the Australian Government's Energy Rating program descriptions and marked as placeholder where the real GEMS registration data still needs to be analysed.
* **Visual Accuracy:** Initial colour suggestions were generic dark-theme defaults. The palette was manually refined to the amber/cyan accent scheme that echoes the power logo, and spacing bugs (such as excess margin on headings inside cards) were diagnosed and fixed by hand.

### Conclusion

GenAI acts as an efficient drafting partner for boilerplate HTML, CSS patterns, and JavaScript syntax. However, understanding the underlying DOM manipulation, CSS specificity, and box model remains essential — the model can produce code that *works*, but only a human can confirm it meets the brief, looks right, and can be defended during a demonstration.

---

## 4. Code Architecture & Demonstration Notes

* **Page Swapping (`js/script.js`):**  
  The site uses a Single-Page Application pattern. All three views exist in `index.html` inside `<section class="page-section">` containers. In `css/styles.css`, `.page-section` is set to `display: none;` while `.page-section.active` is set to `display: block;`. When a nav link (or the power logo) is clicked, JavaScript reads the element's `data-page` attribute and toggles the `.active` class on both the matching section and the corresponding nav link.
* **Hash Routing:**  
  Each view swap calls `history.pushState`, updating the URL to `#home`, `#televisions`, or `#about`. A `popstate` listener re-renders the correct view on back/forward navigation, and the initial load reads `location.hash` — so a browser refresh returns the user to the view they were on.
* **Logo Button:**  
  The logo carries `data-page="home"` and shares the same click handler as the nav links, resetting the view to Home and scrolling to the top of the viewport.
* **CSS Custom Properties:**  
  All theme colours (`--bg`, `--surface`, `--accent`, `--accent-2`, etc.) are centralised in the `:root` pseudo-class in `css/styles.css`, so the entire palette can be re-themed from one location.
* **Chart Placeholders:**  
  Each of the seven analysis questions on the Televisions view has a `.chart-slot` container with a suggested visualisation type (pie/donut, bar, box plot, scatter). These slots are the integration points for D3.js charts built from the Energy Rating registration dataset in later tasks.
