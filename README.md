# Domestic Energy Efficiency in Australia

**Unit:** COS30045 Data Visualisation  
**Task:** T01 (a): Build Appliance Energy Consumption Website  
**Author:** Bryan Ngu Qi Xian 104391562
**Live Site:** [https://cos-30045-t01.vercel.app/](https://cos-30045-t01.vercel.app/)  
**Repository:** [https://github.com/bryan9808/COS30045_T01](https://github.com/bryan9808/COS30045_T01)  

---

## 1. Project Overview

This project is an interactive single-page demonstration website focused on household appliance energy consumption in the Australian market. It establishes the base front-end layout and deployment workflow required for upcoming data visualisations in COS30045.

### Core Features

* **Three Functional Views:** Home, Televisions, and About Us.
* **JavaScript Dynamic Navigation:** Seamlessly swaps views without full-page browser reloads.
* **Brand-Consistent Theme:** Dark charcoal styling with amber and cyan accents derived from the power logo.
* **Interactive Feedback:** Hover glow on links, visual active tab indicator, and a power logo home link.
* **Continuous Deployment:** Managed with GitHub Desktop and deployed via Vercel.

---

## 2. GenAI Usage Log

| File / Component | Prompt / Trigger Context | GenAI Contribution |
| :--- | :--- | :--- |
| `index.html` | Prompted GenAI to draft placeholder copy on Australian appliance energy use (star ratings, standby power). | Generated semantic HTML structure, section containers, and the seven key analysis questions with suggested chart types. |
| `styles.css` | Dark colour theme request and navigation styling. | Suggested CSS variables (`:root`), the `.page-section` show/hide pattern, and hover transition effects. |
| `script.js` | Tab switching logic without reloading | Drafted the navigation code using `e.preventDefault()`, `classList.toggle` on the `.active` class, and hash-based routing. |
| `images/logo.svg` | Needed a "power" logo to anchor the theme. | Generated the lightning-bolt badge SVG used for the navbar logo and favicon. |

---

## 3. Reflection on Using GenAI

### Workflow & Productivity

Using GenAI significantly accelerated boilerplate scaffolding. Instead of writing repetitive DOM queries and CSS resets from scratch, prompts provided working syntax and structure almost instantaneously. It was particularly effective at standard patterns, such as toggling CSS classes across a NodeList.

### Challenges & Verification

While GenAI produced functional starter code, it required human review to ensure it aligned with the assignment brief:

* **Requirement Alignment:** Initial suggestions used traditional multi-page links (`<a href="about.html">`). I had to explicitly adjust the architecture to Single-Page Application (SPA) DOM manipulation as required by the task.

* **Visual Accuracy:** Colour palette and spacing suggestions were generic defaults. I manually refined the hex values and fixed layout issues (such as excess heading margins inside cards) to match my intended dark theme.

### Conclusion

GenAI acts as an efficient coding partner for syntax autocomplete and structural drafting. However, understanding the core DOM manipulation mechanics remains essential to debug layout quirks and defend design decisions during demonstrations.

---

## 4. Code Architecture & Demonstration Notes

* **Page Swapping (`js/script.js`):**  
  The site uses a Single-Page Application pattern. All three views exist in `index.html` under `<section class="page-section">`. In `css/styles.css`, `.page-section` is set to `display: none;`, while `.page-section.active` is set to `display: block;`. When a nav link or the power logo is clicked, JavaScript reads the `data-page` attribute and toggles the `.active` class on both the matching content container and the corresponding navigation link.
* **Logo Button:**  
  The logo shares the same click handler as the nav links, resetting the view to the Home tab and scrolling to the top of the viewport.
* **CSS Custom Properties:**  
  All theme colours are centralised inside the `:root` pseudo-class in `css/styles.css` for easy adjustments across components.
