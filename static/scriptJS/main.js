import { changeNavbar } from "./navbar.js";
import { faq } from "./faq.js";
import { projectObserver } from "./projects.js";
import { navbarObserver } from "./navbarObserver.js";

changeNavbar();
faq();
projectObserver();
navbarObserver();

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");

  const addShadow = () => {
    if (window.scrollY >= 30) {
      nav.classList.add("bg-shadow");
    } else {
      nav.classList.remove("bg-shadow");
    }
  };

  window.addEventListener("scroll", addShadow);
});
