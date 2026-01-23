/* slider */
const slider = document.querySelector("[data-slider='model1']");
if (slider) {
  const slides = slider.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");

  let index = 0;
  const width = 320;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * width}px)`;
  }

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateSlide();
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });
}
