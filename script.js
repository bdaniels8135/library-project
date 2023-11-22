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

UI.main.appendChild(cardsDisplay.HTML);

UI.newBookBtn.addEventListener("click", () => {
  UI.newBookModal.showModal();
});

UI.cancelBtn.addEventListener("click", () => {
  UI.newBookModal.close();
  UI.newBookTitle.value = "";
  UI.newBookAuthor.value = "";
  UI.newBookHaveRead.checked = false;
});

const addReadCheckEventListener = (card, book) => {
  card.HTML.querySelector("input").addEventListener("change", () => {
    book.toggleHaveRead();
  });
};

const addDeleteEventListener = (card, book) => {
  card.HTML.querySelector("button").addEventListener("click", () => {
    library.removeBook(book);
    cardsDisplay.removeCard(card);
  });
};

UI.submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  UI.newBookModal.close();
  const newTitle = UI.newBookTitle.value;
  const newAuthor = UI.newBookAuthor.value;
  const newHaveRead = UI.newBookHaveRead.checked;
  const newBook = new Book(newTitle, newAuthor, newHaveRead);
  library.addBook(newBook);
  const newCard = new Card(newTitle, newAuthor, newHaveRead);
  addDeleteEventListener(newCard, newBook);
  addReadCheckEventListener(newCard, newBook);
  cardsDisplay.addCard(newCard);
  UI.newBookTitle.value = "";
  UI.newBookAuthor.value = "";
  UI.newBookHaveRead.checked = false;
});
