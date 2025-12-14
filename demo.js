const menuToggle = document.getElementById("menu-toggle");
const navbarMenu = document.querySelector(".navbar__menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-open");
});

// (Opcional) Cerrar menú al dar clic en un link
document.querySelectorAll(".navbar__menu a").forEach(link => {
  link.addEventListener("click", () => navbarMenu.classList.remove("is-open"));
});

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});
