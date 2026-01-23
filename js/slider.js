const slider = document.querySelector('[data-slider="model1"]');

if (slider) {
  const slides = slider.querySelector('.slides');
  const images = slides.querySelectorAll('img');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * images[0].clientWidth}px)`;
  }, 1500);
}
