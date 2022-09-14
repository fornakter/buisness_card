export const changeNavbar = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".navbar__menu-mobile");
  const currentPageTracker = document.querySelector(".current-page-tracker");
  const navbarMenuDesktop = document.querySelector(".menu-desktop");
  const navbar = document.querySelector(".navbar");
  console.log(navbar);

  const headers = document.querySelector(".header");

  // Open & close navbar menu.

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("navbar__menu-mobile--open");
    hamburgerButton.classList.toggle("hamburger--open");
  });

  // Move page tracker
  navbarMenuDesktop.addEventListener("click", (e) => {
    e.target.dataset.trackerpos;
    currentPageTracker.style.transform = `translateX(${
      e.target.dataset.trackerpos * 100
    }%)`;
  });
  // Move navbar to top of viewport
};
