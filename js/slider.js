const slider = document.querySelector('[data-slider="model1"]');

if (slider) {
  const slidesContainer = slider.querySelector('.slides');
  const slides = slider.querySelectorAll('.slides img');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function updateSlider() {
    slidesContainer.style.transform =
      `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    updateSlider();
  });

  // Safety: resize handle
  window.addEventListener('resize', () => {
    updateSlider();
  });
}
