// ==============================
// Menu Mobile
// ==============================
const nav = document.getElementById("nav");
const hamburguer = document.getElementById("hamburguer");
const links = document.querySelectorAll(".nav__link");

// Toggle do menu ao clicar no hamburguer
hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fechar menu ao clicar em um link
links.forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
