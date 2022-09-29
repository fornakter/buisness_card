export const contact = () => {
  const form = document.querySelector(".form");
  const confirmCloseBtn = document.querySelector(
    ".confirm-container__btn-close"
  );
  const confirmContainer = document.querySelector(".confirmation");
  const overlay = document.querySelector(".contact__overlay");
  const submitBtn = document.querySelector(".button");

  //inputs
  const inputs = document.querySelectorAll(".form__input");

  const inputName = document.querySelector(".form__name");
  const inputPhone = document.querySelector(".form__phone");
  const inputEmail = document.querySelector(".form__email");
  const inputMessage = document.querySelector(".form__message");

  // Open/close service options
  const serviceOptions = document.querySelector(".wraper");
  const optionsTypesContainer = document.querySelector(".service-types");
  const serviceOptionsImg = document.querySelector(".show-options");

  serviceOptions.addEventListener("click", () => {
    optionsTypesContainer.classList.toggle("service-typse-activ");
    serviceOptionsImg.classList.toggle("show-options-active");
  });

  let formErrors = [];

  // errors info

  //show error messag
  const displayError = (parentElement, message) => {
    const errorField = parentElement.parentNode.lastElementChild;
    errorField.style.display = "block";
    errorField.innerText = message;
  };

  // hide error message
  const hideError = (parentElement) => {
    parentElement.parentNode.lastElementChild.style.display = "none";
  };

  // reset warnings
  const resetWarnings = () => {
    inputs.forEach((input) => {
      input.classList.remove("input-error");
      input.classList.remove("input-error-2");
    });
  };

  // inputs vailidation functions

  // validate name
  const checkName = () => {
    let errorMessage = "";
    const name = [...inputName.value];
    return name.length > 0
      ? (true, hideError(inputName), true)
      : (false,
        (errorMessage = "Name field is empty"),
        displayError(inputName, errorMessage),
        inputName.classList.add("input-error"));
  };

  // validate phone

  const phoneInput = window.intlTelInput(inputPhone, {
    utilsScript: "../../node_modules/intl-tel-input/build/js/utils.js",
    initialCountry: "PL",
  });

  function checkPhone(e) {
    const phoneNumber = phoneInput.getNumber();
    if (phoneInput.isValidNumber(e)) {
      return true;
    } else {
      return false;
    }
  }

  // validate Email
  const checkEmail = (mail) => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.value.match(mailFormat)) {
      return true;
    }
    return false;
  };

  // check phone and email
  const checkContact = () => {
    let errorMessage = "";
    if (checkEmail() || checkPhone()) {
      true, hideError(inputEmail);
      return true;
    } else {
      errorMessage = "Please leave some contact";
      displayError(inputEmail, errorMessage);
      inputPhone.classList.add("input-error-2");
      inputEmail.classList.add("input-error-2");
      return false;
    }
  };

  //check message
  const checkMessage = () => {
    let errorMessage = "";
    const text = [...inputMessage.value];

    if (text.length > 1) {
      hideError(inputMessage);
      return true;
    } else {
      errorMessage = "Message field is empty";
      displayError(inputMessage, errorMessage);
      inputMessage.classList.add("input-error");
      return false;
    }
  };

  // showing and hiding confirmation message
  const showHideConfirmMessage = () => {
    confirmContainer.classList.toggle("confirmation-active");
    overlay.classList.toggle("contact__overlay--active");
  };

  //validate all contitions
  const validate = () => {
    if (checkName() && checkContact() && checkMessage()) {
      return true;
    } else {
      checkContact();
      checkMessage();
      return false;
    }
  };

  // listener for close button in confirm message
  // confirmCloseBtn.addEventListener("click", () => showHideConfirmMessage());

  //listener for submit button
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetWarnings();
    if (validate()) {
      showHideConfirmMessage();
      setTimeout(() => {
        form.submit();
      }, 4000);
    } else return false;
  });
};

contact();
