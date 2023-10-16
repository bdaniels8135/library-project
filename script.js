function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
};

const myLibrary = [];
const main = document.querySelector('main');
const newBookButton = document.querySelector('header img');

function createNewCard(newBook) {
    const cardElem = document.createElement('div');
    cardElem.classList.add('card');
    cardElem.setAttribute('id', `card-${myLibrary.length}`)
    const titleElem = document.createElement('p');
    titleElem.classList.add('title');
    titleElem.innerText = `${newBook.title}`;
    const authorElem = document.createElement('p');
    authorElem.classList.add('author');
    authorElem.innerText = `${newBook.author}`;
    const checkWrapperElem = document.createElement('div');
    checkWrapperElem.classList.add('checkbox-wrapper');
    const checkLabelElem = document.createElement('p');
    checkLabelElem.innerText = 'Already Read:';
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'checkbox');
    inputElem.setAttribute('name', 'read-book-check');
    inputElem.setAttribute('id', `read-book-check-${myLibrary.length}`);
    if (newBook.haveRead) {inputElem.setAttribute('checked', '')};
    const btnElem = document.createElement('button');
    btnElem.setAttribute('type', 'button');
    btnElem.setAttribute('id', `trash-button-${myLibrary.length}`)
    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', './img/trash-can-outline.svg');
    imgElem.setAttribute('alt', 'Trash Icon');

    cardElem.appendChild(titleElem);
    cardElem.appendChild(authorElem);
    cardElem.appendChild(checkWrapperElem);
    cardElem.appendChild(btnElem);
    checkWrapperElem.appendChild(checkLabelElem);
    checkWrapperElem.appendChild(inputElem);
    btnElem.appendChild(imgElem);

    return cardElem;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function refreshLibraryCards() {
    for (let book of myLibrary) {
        main.appendChild(createNewCard(book));
    }
}



// Add some books by default

addBookToLibrary(new Book('Dune', 'Frank Herbert', true));
addBookToLibrary(new Book('Grapes of Wrath', 'John Steinbeck', false));
addBookToLibrary(new Book('Where the Sidewalk Ends', 'Shel Silverstein', false));
addBookToLibrary(new Book('Orlando', 'Virginia Woolf', false));
addBookToLibrary(new Book('Throne of Glass', 'Sarah J. Maas', true));
refreshLibraryCards();