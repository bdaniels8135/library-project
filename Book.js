export default class Book {
  constructor(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
  }

  toggleHaveRead() {
    this.haveRead = !this.haveRead;
  }
}
