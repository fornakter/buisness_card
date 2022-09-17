export const faq = () => {
  const faqItem = document.querySelectorAll(".faq__item");

  const openFaqItem = (e) => {
    const markerBar = e.currentTarget.children[0].children[1].children[0];
    const answer = e.currentTarget.children[1].children[0];
    const answerContainer = e.currentTarget.children[1];
    console.log(answerContainer);

    markerBar.classList.toggle("status-marker__bar--open");
    answerContainer.classList.toggle("faq__item__answer-container--open");
    answer.classList.toggle("faq__item__answer-container__answer--open");
  };
  faqItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      openFaqItem(e);
    });
  });
};
