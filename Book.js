export default class Book {
  constructor(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
    this.id = null;
  }

  toggleHaveRead() {
    this.haveRead = !this.haveRead;
  }
}
