export const changeNavbar = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const menu = document.querySelector(".navbar__menu-mobile");
  const links = document.querySelectorAll(".link");

  hamburgerButton.addEventListener("click", (e) => {
    menu.classList.toggle("navbar__menu-mobile-open");
    hamburgerButton.classList.toggle("hamburger-open");
  });
  links.forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.toggle("navbar__menu-mobile-open");
      hamburgerButton.classList.toggle("hamburger-open");
    })
  );
};
