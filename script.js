document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const trigger = window.innerHeight / 1.2;

    if(rect.top < trigger){
      section.classList.add("show");
    }
  });
});
