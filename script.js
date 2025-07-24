document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-icon');
  const sidebar = document.getElementById('sidebar');
  const closeIcon = document.getElementById('close-icon');

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-image');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // Change every 3 seconds
