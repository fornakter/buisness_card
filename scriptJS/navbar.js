export const openNavbar = () => {
  let isOpen = false;

  const hamburgerButton = document.querySelector(".hamburger");
  const bars = document.querySelectorAll(".bar");

  hamburgerButton.addEventListener("click", (e) => {
    if (!isOpen) {
      hamburgerButton.style.justifyContent = "center";
      bars[0].style.transform = "translateY(5px) rotate(225deg)";
      bars[2].style.transform = "translateY(-5px) rotate(-225deg)";
      bars[1].style.opacity = "0";
      isOpen = true;
    } else {
      hamburgerButton.style.justifyContent = "space-between";
      bars[0].style.transform = "translateY(5px) rotate(0deg)";
      bars[2].style.transform = "translateY(-5px) rotate(0deg)";
      bars[1].style.opacity = "1";
      isOpen = false;
    }
    console.log(isOpen);
  });
};
