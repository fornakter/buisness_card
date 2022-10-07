import { changeNavbar } from "./navbar.js";
import { faq } from "./faq.js";
import { projectObserver } from "./projects.js";
import { goUp } from "./goUpButton.js";

changeNavbar();
faq();

// run goUpButton script if goUpButton is available
const goUpButton = document.querySelector(".goUp");
goUpButton ? goUp(goUpButton) : console.log("no button");

// run project observer script if projects page is loaded.
const sectionContainer = document.querySelector(".projects__container");
sectionContainer ? projectObserver(sectionContainer) : false;

///

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
