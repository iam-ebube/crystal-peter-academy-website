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

