document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-icon');
  const sidebar = document.getElementById('sidebar');
  const closeIcon = document.getElementById('close-icon');
  const sidebarLinks = sidebar.querySelectorAll('a');

  // Open sidebar when hamburger is clicked
  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  // Close sidebar when 'X' is clicked
  closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });

  // Close sidebar when any link is clicked
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });
});


//carousel image slide show
let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-image');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 3000);// Change every 3 seconds 


 

