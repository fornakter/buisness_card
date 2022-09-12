export const changeNavbar = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".navbar__menu-mobile");
  const currentPageTracker = document.querySelector(".current-page-tracker");
  const navbarMenuDesktop = document.querySelector(".menu-desktop");
  const titleMiddle = document.querySelector(".middle");

  // Open & close navbar menu.

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("navbar__menu-mobile--open");
    hamburgerButton.classList.toggle("hamburger--open");
  });

  // Move page tracker
  navbarMenuDesktop.addEventListener("click", (e) => {
    console.log(e.target);

    e.target.dataset.trackerpos;
    currentPageTracker.style.transform = `translateX(${
      e.target.dataset.trackerpos * 100
    }%)`;
  });
};
