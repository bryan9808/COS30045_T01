// Shared behaviour across all pages
document.addEventListener("DOMContentLoaded", function () {
  // Highlight the current page in the top navigation
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".topnav a.navlink").forEach(function (link) {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Keep the footer year correct automatically
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});