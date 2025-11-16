// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mainMenu = document.getElementById("main-menu");

menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu after clicking a link
    if (mainMenu.classList.contains("active")) {
      mainMenu.classList.remove("active");
    }
  });
});
