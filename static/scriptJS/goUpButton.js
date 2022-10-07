export const goUp = (button) => {
  console.log(button);
  const navbar = document.querySelector(".navbar");

  const showGoUpButton = () => {
    button.classList.add("goUp--active");
  };
  const hideGoUpButton = () => {
    button.classList.remove("goUp--active");
  };

  const options = {
    rootMargin: "500px 0px 0px 0px",
  };

  const navbarObserver = new IntersectionObserver((e) => {
    !e[0].isIntersecting ? showGoUpButton() : hideGoUpButton();
  }, options);
  navbarObserver.observe(navbar);
};
