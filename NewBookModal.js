export default function NewBookModal() {
  const HTML = document.querySelector("dialog");
  const newBookTitleInput = HTML.querySelector("#new-book-title");
  const newBookAuthorInput = HTML.querySelector("#new-book-author");
  const newBookHaveReadInput = HTML.querySelector("#new-book-read");
  const cancelBtn = HTML.querySelector("#cancel-btn");
  const submitBtn = HTML.querySelector("#submit-btn");

  function displayModal() {
    HTML.showModal();
  }

  function clearModal() {
    newBookTitleInput.value = "";
    newBookAuthorInput.value = "";
    newBookHaveReadInput.checked = false;
  }

  function closeModal() {
    HTML.close();
  }

  function collectModalInput() {
    const title = newBookTitleInput.value;
    const author = newBookAuthorInput.value;
    const haveRead = newBookHaveReadInput.checked;

    return {
      title,
      author,
      haveRead,
    };
  }

  function validateInput(input) {
    if (input.value) input.setCustomValidity("");
    else {
      input.setCustomValidity("This field is required.");
      input.reportValidity();
    }
    return input.validity.valid;
  }

  newBookTitleInput.addEventListener("focusout", () => {
    validateInput(newBookTitleInput);
  });

  newBookAuthorInput.addEventListener("focusout", () => {
    validateInput(newBookAuthorInput);
  });

  function addSubmitBtnClickFunc(clickFunc) {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        validateInput(newBookTitleInput) &&
        validateInput(newBookAuthorInput)
      ) {
        closeModal();
        clickFunc();
        clearModal();
      }
    });
  }

  cancelBtn.addEventListener("click", () => {
    closeModal();
    clearModal();
  });

  return {
    HTML,
    displayModal,
    addSubmitBtnClickFunc,
    collectModalInput,
  };
}
