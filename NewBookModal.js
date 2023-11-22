export default function NewBookModal() {
  const HTML = document.querySelector("dialog");
  const newBookTitle = HTML.querySelector("#new-book-title");
  const newBookAuthor = HTML.querySelector("#new-book-author");
  const newBookHaveRead = HTML.querySelector("#new-book-read");
  const cancelBtn = HTML.querySelector("#cancel-btn");
  const submitBtn = HTML.querySelector("#submit-btn");

  function displayModal() {
    HTML.showModal();
  }

  function clearModal() {
    newBookTitle.value = "";
    newBookAuthor.value = "";
    newBookHaveRead.checked = false;
  }

  function closeModal() {
    HTML.close();
  }

  function collectModalInput() {
    const title = newBookTitle.value;
    const author = newBookAuthor.value;
    const haveRead = newBookHaveRead.checked;

    return {
      title,
      author,
      haveRead,
    };
  }

  function addSubmitBtnClickFunc(clickFunc) {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal();
      clickFunc();
      clearModal();
    });
  }

  function cancelModal() {
    closeModal();
    clearModal();
  }

  cancelBtn.addEventListener("click", cancelModal);

  return {
    HTML,
    displayModal,
    addSubmitBtnClickFunc,
    collectModalInput,
  };
}
