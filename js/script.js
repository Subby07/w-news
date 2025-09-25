document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".mobile-menu .close");
  const overlay = document.querySelector(".overlay");

  // Open menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    overlay.classList.remove("hidden");
  });

  // Close menu
  const closeMenu = () => {
    mobileMenu.classList.remove("show");
    overlay.classList.add("hidden");
  };

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});
