window.addEventListener("load", () => {
  const slider = document.querySelector('[data-slider="model1"]');
  if (!slider) return;

  const slides = slider.querySelector('.slides');
  const images = slider.querySelectorAll('img');

  let index = 0;

  function slideNext() {
    const slideWidth = slider.offsetWidth;
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  setInterval(slideNext, 1500); // 1.5 sec auto slide
});
