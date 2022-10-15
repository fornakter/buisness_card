export const changeNavbar = () => {
  const hamburgerButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".navbar__menu-mobile");
  const currentPageTracker = document.querySelector(".current-page-tracker");
  const navbarMenuDesktop = document.querySelector(".menu-desktop");
  const navbar = document.querySelector(".navbar");
  const headers = document.querySelector(".header");

  // move tracking loop

  const moveTrackingLoop = (e) => {
    const trackerPosition = e.target.dataset.trackerpos;
    currentPageTracker.style.transition = "0.3s all ";
    currentPageTracker.style.transform = `translateX(${
      trackerPosition * 100
    }%)`;
  };

  const navbarChildren = document.querySelectorAll(".navbar a");
  navbarChildren.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      moveTrackingLoop(e);
    });
    el.addEventListener("mouseleave", (e) => {
      const trackerPosition = navbar.dataset.currentpos;
      currentPageTracker.style.transform = `translateX(${
        trackerPosition * 100
      }%)`;
    });
  });
  // set pageTracker on current element
  window.addEventListener("load", () => {
    const trackerPosition = navbar.dataset.currentpos;
    currentPageTracker.style.transform = `translateX(${
      trackerPosition * 100
    }%)`;
    currentPageTracker.style.opacity = "1";
  });

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
};
