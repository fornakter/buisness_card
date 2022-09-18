export const navbarObserver = () => {
  const navbar = document.querySelector(".navbar");

  const navObserverOptions = {
    rootMargin: "200px 0px -200px 0px ",
    threshold: 1.0,
  };
  const navObserver = new IntersectionObserver((e) => {
    console.log(e);
    console.log(navbar);

    !e[0].isIntersecting
      ? (navbar.classList.remove("navbar"),
        navbar.classList.add("navbar--small"))
      : (navbar.classList.add("navbar"),
        navbar.classList.remove("navbar--small"));
  }, navObserverOptions);
  navObserver.observe(navbar);
};
