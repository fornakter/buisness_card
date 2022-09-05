export const changeNavbar = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".navbar__menu-mobile");
  const currentPageTracker = document.querySelector(".current-page-tracker");
  const navbarItemsDesktop = document.querySelectorAll(".menu__item-desktop");
  const navbarMenuDesktop = document.querySelector(".menu-desktop");
  console.log(navbarMenuDesktop);

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("navbar__menu-mobile--open");
    hamburgerButton.classList.toggle("hamburger--open");
  });

  navbarMenuDesktop.addEventListener("click", (e) => {
    e.target.dataset.trackerpos;
    currentPageTracker.style.transform = `translateX(${
      e.target.dataset.trackerpos * 100
    }%)`;
  });
};
