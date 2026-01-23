const elements = document.querySelectorAll(".reveal");

function revealOnScroll(){
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight * 0.85){
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
