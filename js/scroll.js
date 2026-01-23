const header = document.getElementById("mainHeader");
const reveals = document.querySelectorAll(".reveal");

function onScroll() {
  const scrollY = window.scrollY;

  if (scrollY > window.innerHeight * 0.6) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
