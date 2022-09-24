export const projectObserver = (elementToObserve) => {
  const projectsMiniatures = document.querySelectorAll(".project__img-filter");

  // intersection Observer
  const options = {
    rootMargin: "10px 0px -250px 0px",
    threshold: 1,
  };

  const removeFilter = (entries) => {
    entries[0].isIntersecting
      ? entries[0].target.classList.add("project__img-filter--clear")
      : entries[0].target.classList.remove("project__img-filter--clear");
  };

  const miniatruesObserver = new IntersectionObserver(removeFilter, options);

  // resize Observer
  const resizeObserver = new ResizeObserver((elements, observer) => {
    elements[0].contentRect.width < 850
      ? projectsMiniatures.forEach((miniature) => {
          miniatruesObserver.observe(miniature);
        })
      : projectsMiniatures.forEach((miniature, i) => {
          miniature.classList.remove("project__img-filter--clear");
          miniatruesObserver.unobserve(miniature);
        });

    //
  });

  resizeObserver.observe(elementToObserve);
};
