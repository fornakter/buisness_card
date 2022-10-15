export const goUp = (button) => {
  //Elements
  const navbar = document.querySelector(".navbar");

  // showing and hiding button
  const showGoUpButton = () => {
    button.classList.add("goUp--active");
  };
  const hideGoUpButton = () => {
    button.classList.remove("goUp--active");
  };

  // move to top after click
  button.addEventListener("click", (e) => {
    navbar.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  // Observer
  const options = {
    rootMargin: "900px 0px 0px 0px",
  };

  const navbarObserver = new IntersectionObserver((e) => {
    !e[0].isIntersecting ? showGoUpButton() : hideGoUpButton();
  }, options);
  navbarObserver.observe(navbar);
};
