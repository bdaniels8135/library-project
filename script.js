import Library from "./Library.js";
import Card from "./Card.js";
import Book from "./Book.js";
import CardsDisplay from "./CardsDisplay.js";
import NewBookModal from "./NewBookModal.js";

const library = Library();

const cardsDisplay = CardsDisplay();

const newBookModal = NewBookModal();

function submitBtnClickFunc() {
  const { title, author, haveRead } = newBookModal.collectModalInput();
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
}

newBookModal.addSubmitBtnClickFunc(submitBtnClickFunc);

const newBookBtn = document.querySelector("header img");

newBookBtn.addEventListener("click", newBookModal.displayModal);

const main = document.querySelector("main");

main.appendChild(cardsDisplay.HTML);
