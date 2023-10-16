function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
};

const MY_LIBRARY = [];

const MAIN = document.querySelector('main');

function addBookToLibrary(newBook) {
    MY_LIBRARY.push(newBook);
    MAIN.appendChild(createNewCard(newBook));
}

function createNewCard(newBook) {
    const cardElem = document.createElement('div');
    cardElem.classList.add('card');
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
    inputElem.setAttribute('name', 'read-book');
    inputElem.setAttribute('id', `read-book-${MY_LIBRARY.length}`);
    if (newBook.haveRead) {inputElem.setAttribute('checked', '')};
    const btnElem = document.createElement('button');
    btnElem.setAttribute('type', 'button');
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

const newBookButton = document.querySelector('header img');

// Add some books by default

addBookToLibrary(new Book('Dune', 'Frank Herbert', true))
addBookToLibrary(new Book('Grapes of Wrath', 'John Steinbeck', false))
addBookToLibrary(new Book('Where the Sidewalk Ends', 'Shel Silverstein', false))
addBookToLibrary(new Book('Orlando', 'Virginia Woolf', false))
addBookToLibrary(new Book('Throne of Glass', 'Sarah J. Maas', true))