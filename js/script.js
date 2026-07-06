// Mobile menu toggle
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
const links = document.querySelectorAll("#mobile-menu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});