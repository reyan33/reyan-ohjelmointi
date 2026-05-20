/* ── PAGE SWITCHING ── */
function showPage(id) {
  // hide all pages
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  // show target page
  document.getElementById("page-" + id).classList.add("active");
  // scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
  // update active nav link
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === id);
  });
  closeNav();
}

/* ── MOBILE NAV ── */
function toggleNav() {
  document.getElementById("navLinks").classList.toggle("open");
}
function closeNav() {
  document.getElementById("navLinks").classList.remove("open");
}

/* ── TYPING EFFECT ── */
const roles = ["Web Developer", "Ohjelistokehittäjä", "ICT Opiskelija"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const tagEl = document.getElementById("heroTag");

function type() {
  const current = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // pause at full word
  if (!isDeleting && charIndex > current.length) {
    isDeleting = true;
    setTimeout(type, 1800);
    return;
  }

  // pause before typing next word
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 350);
    return;
  }

  tagEl.innerHTML =
    '<span class="hero-tag-dot"></span>&nbsp;' +
    current.slice(0, charIndex) +
    '<span style="border-right:2px solid var(--accent);animation:blink 0.7s step-end infinite">&nbsp;</span>';

  setTimeout(type, isDeleting ? 55 : 95);
}

// start typing after a short delay
setTimeout(type, 1200);
