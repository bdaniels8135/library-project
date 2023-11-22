export default function Library() {
  const books = [];

  function getBooks() {
    return [...books];
  }

  function addBook(bookToAdd) {
    books.push(bookToAdd);
  }

  function removeBook(bookToRemove) {
    const deleteIndex = books.findIndex((book) => book === bookToRemove);
    books.splice(deleteIndex, 1);
  }

  return {
    getBooks,
    addBook,
    removeBook,
  };
}
