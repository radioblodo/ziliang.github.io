// Rotate multiple subtitles on the home banner
(function () {
  function startTyped() {
    var el = document.getElementById('subtitle');
    if (!el) return;

    var lines = [
      "Patching bugs and shipping joy.",
      "I make decisions easier—with code.",
      "Flutter, Vue, bots… and bad puns.",
      "From 'what to eat?' to 'let’s eat.'"
    ];

    // Prefer Fluid's helper if it accepts arrays; otherwise fall back to Typed.js directly
    try {
      if (window.Fluid && Fluid.plugins && typeof Fluid.plugins.typing === 'function') {
        Fluid.plugins.typing(lines);
        return;
      }
    } catch (_) {}

    if (window.Typed) {
      new Typed('#subtitle', {
        strings: lines,
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1200,
        loop: true,
        smartBackspace: true,
        cursorChar: '_'
      });
    } else {
      // last resort: show first line without typing effect
      el.textContent = lines[0];
    }
  }

  // run after page scripts load
  window.addEventListener('load', startTyped);
})();
