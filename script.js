import Library from "./Library.js";
import Card from "./Card.js";
import Book from "./Book.js";
import CardsDisplay from "./CardsDisplay.js";

const library = Library();

const cardsDisplay = CardsDisplay();

const UI = {
  main: document.querySelector("main"),
  newBookBtn: document.querySelector("header img"),
  newBookModal: document.querySelector("dialog"),
  newBookTitle: document.getElementById("new-book-title"),
  newBookAuthor: document.getElementById("new-book-author"),
  newBookHaveRead: document.getElementById("new-book-read"),
  cancelBtn: document.getElementById("cancel-btn"),
  submitBtn: document.getElementById("submit-btn"),
};

function displayModal() {
  UI.newBookModal.showModal();
}

function clearModal() {
  UI.newBookTitle.value = "";
  UI.newBookAuthor.value = "";
  UI.newBookHaveRead.checked = false;
}

function closeModal() {
  UI.newBookModal.close();
}

function collectModalInput() {
  const title = UI.newBookTitle.value;
  const author = UI.newBookAuthor.value;
  const haveRead = UI.newBookHaveRead.checked;

  return {
    title,
    author,
    haveRead,
  };
}

function cancelModal() {
  closeModal();
  clearModal();
}

UI.newBookBtn.addEventListener("click", displayModal);

UI.cancelBtn.addEventListener("click", cancelModal);

UI.submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeModal();
  const { title, author, haveRead } = collectModalInput();
  const newBook = new Book(title, author, haveRead);
  library.addBook(newBook);
  const newCard = new Card(title, author, haveRead);
  newCard.addDeleteBtnClickFunc(() => {
    library.removeBook(newBook);
    cardsDisplay.removeCard(newCard);
  });
  newCard.addCheckboxChangeFunc(() => {
    newBook.toggleHaveRead();
  });
  cardsDisplay.addCard(newCard);
  clearModal();
});

UI.main.appendChild(cardsDisplay.HTML);
