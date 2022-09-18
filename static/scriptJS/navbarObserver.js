export const navbarObserver = () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");

  const navObserverOptions = {
    rootMargin: "200px 0px -200px 0px ",
    threshold: 1.0,
  };
  //   const navObserver = new IntersectionObserver((e) => {
  //     !e[0].isIntersecting
  //       ? (navbar.classList.add("navbar--small"),
  //         navbar.classList.remove("navbar"))
  //       :
  //       ;
  //   }, navObserverOptions);

  //   navObserver.observe(navbar);

  const logoObserver = new IntersectionObserver((e) => {
    console.log(e);

    !e[0].isIntersecting
      ? navbar.classList.add("navbar--small")
      : navbar.classList.remove("navbar--small");
  }, navObserverOptions);
  logoObserver.observe(logo);
};
