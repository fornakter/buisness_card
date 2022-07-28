export const intro = () => {
  const headerBtn = document.querySelector(".header__button");
  const sectionIntro = document.querySelector(".intro");
  console.log(headerBtn);
  headerBtn.addEventListener("click", () => {
    sectionIntro.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};
