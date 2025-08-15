/* home-typing.js
 * Rotate multiple subtitle lines on the HOME page only (Hexo + Fluid).
 */
(function () {
  "use strict";

  // 10 lines you want to rotate
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

  var TYPE_SPEED = 70, BACK_SPEED = 40, BACK_DELAY = 1200, CURSOR_CHAR = "_";

  function root() { return (window.CONFIG && CONFIG.root) || "/"; }
  function norm(s){ return s.endsWith("/") ? s : s + "/"; }
  function isHome() {
    var r = norm(root()), p = norm(location.pathname);
    return p === r || location.pathname === r + "index.html" ||
           (r === "/" && location.pathname === "/index.html");
  }

  function stopTyping(el) {
    if (!el) return;
    var next = el.nextElementSibling;
    if (next && /\btyped-cursor\b/.test(next.className)) { try { next.remove(); } catch(e){} }
    var text = el.getAttribute("data-typed-text") || el.textContent.trim();
    var clone = el.cloneNode(false); clone.id = el.id; clone.textContent = text;
    el.parentNode.replaceChild(clone, el);
  }

  function startHome() {
    var el = document.getElementById("subtitle");
    if (!el || !isHome()) { if (el) stopTyping(el); return; }

    stopTyping(el); // clear theme’s one-shot typing, if any

    if (window.Typed) {
      var inst = new Typed("#subtitle", {
        strings: LINES,
        typeSpeed: TYPE_SPEED,
        backSpeed: BACK_SPEED,
        backDelay: BACK_DELAY,
        loop: true,
        smartBackspace: true,
        cursorChar: CURSOR_CHAR
      });
      document.getElementById("subtitle")._typed = inst;
    } else {
      // fallback: just show first line
      el.textContent = LINES[0];
    }
  }

  window.addEventListener("load", function(){ setTimeout(startHome, 0); });
  document.addEventListener("pjax:complete", function(){ setTimeout(startHome, 0); });
})();
