export const singleProject = () => {
  const workMiniature = document.querySelector(".work__image");
  const projectFullView = document.querySelector(".work__project-fullView");
  const closeFullViewBtn = document.querySelector(".close-fullView");

  // Opening full view of project
  const openFullView = () => {
    projectFullView.classList.remove("work__project-fullView--hide");
    projectFullView.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  closeFullViewBtn.addEventListener("click", () => {
    projectFullView.classList.add("work__project-fullView--hide");
  });

  const resizeObserver = new ResizeObserver((elements, observer) => {
    elements[0].contentRect.width < 1050;

    if (elements[0].contentRect.width >= 1050) {
      workMiniature.addEventListener(
        "click",

        openFullView,

        false
      );
    } else {
      workMiniature.removeEventListener("click", openFullView, false);
      projectFullView.classList.add("work__project-fullView--hide");
    }
  });
  resizeObserver.observe(document.querySelector("body"));
};
