export const singleProject = () => {
  const workMiniature = document.querySelector(".work__image");
  const projectFullView = document.querySelector(".work__project-fullView");
  const closeFullViewBtn = document.querySelector(".close-fullView");

  // Opening full view of project
  const openCloseFullView = () => {
    workMiniature.addEventListener("click", () => {
      projectFullView.classList.add("work__project-fullView--activ");
      projectFullView.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
    closeFullViewBtn.addEventListener("click", () => {
      projectFullView.classList.remove("work__project-fullView--activ");
    });
  };

  const resizeObserver = new ResizeObserver((elements, observer) => {
    elements[0].contentRect.width < 1050
      ? console.log("małe")
      : openCloseFullView();

    //
  });
  resizeObserver.observe(document.querySelector("body"));
};
