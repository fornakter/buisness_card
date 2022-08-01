import { changeNavbar } from "./navbar.js";
const validateForm = () => {
  const btnSubmit = document.querySelector(".submit-btn");
  const inputEmail = document.querySelector(".input__email");
  const inputPhone = document.querySelector(".input__phone");
  const inputName = document.querySelector(".input__name");
  const inputMessage = document.querySelector(".input__message");
  const inputs = document.querySelectorAll(".input");
  const errorField = document.querySelector(".contact__error-mesages");
  const confirmMessage = document.querySelector(".confirmation");
  const confirmMessageOverlay = document.querySelector(".overlay");
  const btnCloseMessage = document.querySelector(".confirmation__btn-close");

  let message = [];

  //hellpers functions
  // reset warnings
  const removeWarnings = () => {
    inputs.forEach((input) =>
      input.classList.remove("wrong", "weaker-warning")
    );
  };

  //check name
  const checkName = () => {
    const name = [...inputName.value];
    return name.length <= 0
      ? (inputName.classList.add("wrong"),
        message.push("The name field is empty"))
      : true;
  };

  //check phone
  const checkPhone = () => {
    const phone = [...inputPhone.value];

    return phone.length === 9 || phone.length === 12 ? true : false;
  };

  //check email
  const chackEmail = () => {
    const email = [...inputEmail.value];
    return email.includes("@") && email.includes(".") ? true : false;
  };
  //   check if email  or phone are filled
  const checkContact = () => {
    return chackEmail() || checkPhone()
      ? true
      : (message.push("Please leave any contact to you "),
        inputPhone.classList.add("weaker-warning"),
        inputEmail.classList.add("weaker-warning"));
  };
  // check message
  const checkMessage = () => {
    const text = [...inputMessage.value];

    return text.length > 0
      ? true
      : (message.push("Message field is empty"),
        inputMessage.classList.add("wrong"));
  };
  // showing error messages
  const showErrorMessage = () => {
    errorField.textContent = "";
    message.forEach((mes) =>
      errorField.insertAdjacentText("afterbegin", ` *-${mes} `)
    );
  };
  // showing confirmation message
  const showConfirmeMessage = () => {
    confirmMessage.classList.toggle("confirmation--show");
    confirmMessageOverlay.classList.toggle("overlay-show");
  };
  // close confirmation message
  btnCloseMessage.addEventListener("click", () => {
    showConfirmeMessage();
  });

  btnSubmit.addEventListener("click", (e) => {
    message = [];
    removeWarnings();

    if ((checkName(), checkContact(), checkMessage())) {
      e.preventDefault();
      showConfirmeMessage();
      errorField.textContent = "";
      //   return true;
    } else {
      e.preventDefault();
      showErrorMessage();
      console.log(message);
    }
  });
};
validateForm();
changeNavbar();
