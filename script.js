import Library from "./Library.js";
import Card from "./Card.js";

const myLibrary = Library();

const UI = {
  MAIN: document.querySelector("main"),
  NEW_BOOK_BUTTON: document.querySelector("header img"),
  NEW_BOOK_MODAL: document.querySelector("dialog"),
  NEW_BOOK_TITLE: document.getElementById("new-book-title"),
  NEW_BOOK_AUTHOR: document.getElementById("new-book-author"),
  NEW_BOOK_READ: document.getElementById("new-book-read"),
  CANCEL_BTN: document.getElementById("cancel-btn"),
  SUBMIT_BTN: document.getElementById("submit-btn"),
};

UI.NEW_BOOK_BUTTON.addEventListener("click", () => {
  UI.NEW_BOOK_MODAL.showModal();
});

UI.CANCEL_BTN.addEventListener("click", () => {
  UI.NEW_BOOK_MODAL.close();
  UI.NEW_BOOK_TITLE.value = "";
  UI.NEW_BOOK_AUTHOR.value = "";
  UI.NEW_BOOK_READ.checked = false;
});

const refreshLibraryCards = () => {
  UI.MAIN.innerHTML = "";
  myLibrary.getBooks().forEach((book) => {
    const newCard = new Card(book);
    addDeleteEventListener(newCard.html, book);
    addReadCheckEventListener(newCard.html, book);
    UI.MAIN.appendChild(newCard.html);
  });
};

UI.SUBMIT_BTN.addEventListener("click", (event) => {
  event.preventDefault();
  UI.NEW_BOOK_MODAL.close();
  const newTitle = UI.NEW_BOOK_TITLE.value;
  const newAuthor = UI.NEW_BOOK_AUTHOR.value;
  const newHaveRead = UI.NEW_BOOK_READ.checked;
  myLibrary.addBook(newTitle, newAuthor, newHaveRead);
  refreshLibraryCards();
  UI.NEW_BOOK_TITLE.value = "";
  UI.NEW_BOOK_AUTHOR.value = "";
  UI.NEW_BOOK_READ.checked = false;
});

const addDeleteEventListener = (card, book) => {
  card.querySelector("button").addEventListener("click", () => {
    myLibrary.removeBook(book);
    refreshLibraryCards();
  });
};

const addReadCheckEventListener = (card, book) => {
  card.querySelector("input").addEventListener("change", () => {
    book.toggleHaveRead();
  });
};
