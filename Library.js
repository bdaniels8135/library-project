import Book from "./Book.js";

export default function Library() {
  const books = [];

  const getBooks = () => books;

  const addBook = (title, author, haveRead) => {
    const bookToAdd = new Book(title, author, haveRead);
    books.push(bookToAdd);
  };

  const removeBook = (bookToRemove) => {
    const deleteIndex = books.findIndex((book) => book === bookToRemove);
    books.splice(deleteIndex, 1);
  };

  return {
    getBooks,
    addBook,
    removeBook,
  };
}
