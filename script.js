function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.haveRead ? 'have' : 'have not'} read`;
    };
};

const myLibrary = []

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}


// ADDING TEST BOOKS TO LIBRARY FOR DEVELOPMENT
const TEST_BOOKS = [
    new Book('Dune', 'Frank Herbert', 896, true),
    new Book('iRobot', 'Isaac Asimov', 253, true),
    new Book('Throne of Glass', 'Sarah J. Maas', 432, true),
]

for (let book of TEST_BOOKS) {
    addBookToLibrary(book);
}