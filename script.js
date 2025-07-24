document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileNav = document.getElementById("mobile-nav");

  menuToggle.addEventListener("click", function () {
    mobileNav.style.display = "block";
    menuToggle.style.display = "none";
    menuClose.style.display = "block";
  });

  menuClose.addEventListener("click", function () {
    mobileNav.style.display = "none";
    menuToggle.style.display = "block";
    menuClose.style.display = "none";
  });
});

