/* home-typing.js
 * Rotate multiple subtitle lines on the HOME page only (Hexo + Fluid theme).
 * Requires Typed.js (already loaded by Fluid).
 */
(function () {
  "use strict";

  // === Customize your rotating lines here ===
  var LINES = [
    "Patching bugs and shipping joy.",
    "I make decisions easier with code.",
    "Flutter, Vue, bots... and bad puns.",
    "Secure by design, delightful by default.",
    "From 'what to eat?' to 'let’s eat'.",
    "Maps, mobile, and meaningful UX.",
    "Ship fast, break nothing.",
    "Automate the boring, elevate the useful.",
    "Turning ideas into useful tools.",
    "Code, cyber, and clean interfaces."
  ];

  // Typing settings
  var TYPE_SPEED = 70;
  var BACK_SPEED = 40;
  var BACK_DELAY = 1200;
  var CURSOR_CHAR = "_";

  function isHomePage() {
    // Fluid exposes CONFIG.root, e.g. "/ziliang.github.io/" (or "/")
    var root = (window.CONFIG && CONFIG.root) || "/";
    var path = window.location.pathname;

    // Accept root with or without trailing slash, and index.html
    var rootNoSlash = root.endsWith("/") ? root.slice(0, -1) : root;
    return (
      path === root ||
      path === rootNoSlash ||
      path === root + "index.html" ||
      (root === "/" && (path === "/" || path === "/index.html"))
    );
  }

  function destroyExisting(el) {
    try {
      if (el && el._typed && typeof el._typed.destroy === "function") {
        el._typed.destroy();
        el._typed = null;
      }
    } catch (_) {}
  }

  function startTypingHome() {
    var el = document.getElementById("subtitle");
    if (!el) return;

    // Only run on the HOME page
    if (!isHomePage()) return;

    // Kill the theme's one-shot instance (if any) and clear the text
    destroyExisting(el);
    el.textContent = "";

    if (window.Typed) {
      var inst = new window.Typed("#subtitle", {
        strings: LINES,
        typeSpeed: TYPE_SPEED,
        backSpeed: BACK_SPEED,
        backDelay: BACK_DELAY,
        loop: true,              // loop ONLY on home
        smartBackspace: true,
        cursorChar: CURSOR_CHAR
      });
      el._typed = inst;
    } else if (window.Fluid && Fluid.plugins && typeof Fluid.plugins.typing === "function") {
      // Fallback to Fluid helper (it usually accepts a string, so join with a separator)
      Fluid.plugins.typing(LINES.join("  •  "));
    } else {
      // Last resort: show first line without typing effect
      el.textContent = LINES[0];
    }
  }

  // On normal load
  window.addEventListener("load", startTypingHome);

  // If PJAX is enabled in Fluid, re-run after partial navigations
  document.addEventListener("pjax:complete", startTypingHome);
})();
