// ===============================
// ELEMENTS
// ===============================
const header = document.getElementById("mainHeader");
const revealElements = document.querySelectorAll(".reveal");

// ===============================
// SCROLL HANDLER
// ===============================
function onScroll() {
  const scrollY = window.scrollY;

  // 🔹 Header activation (after hero)
  if (scrollY > window.innerHeight * 0.6) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  // 🔹 Reveal animations
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

// ===============================
// INIT
// ===============================
window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
