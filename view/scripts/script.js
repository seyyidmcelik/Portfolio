let burger = document.querySelector(".burger");
let mobileMenu = document.querySelector(".mobile-menu");
let links = document.querySelectorAll(".mobile-menu ul li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active-burger");
  mobileMenu.classList.toggle("active-mobile-menu");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    mobileMenu.classList.toggle("active-mobile-menu");
  });
});
