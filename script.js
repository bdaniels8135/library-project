function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
    this.libraryIndex = null;
};

const myLibrary = {
    books: [],
    _nextBookID: 0,

    addBook(newBook) {
        newBook.libraryIndex = myLibrary._nextBookID;
        myLibrary._nextBookID += 1;
        myLibrary.books.push(newBook);
        refreshLibraryCards();
    },

    removeBook(bookLibraryIndex) {
        myLibrary.books = myLibrary.books.filter((book) => {
            return book.libraryIndex != bookLibraryIndex
        })
        refreshLibraryCards();
    },
}

const main = document.querySelector('main');
const newBookButton = document.querySelector('header img');

function createNewCard(libraryBook) {
    const cardElem = document.createElement('div');
    cardElem.classList.add('card');
    cardElem.setAttribute('id', `card-${libraryBook.libraryIndex}`)
    const titleElem = document.createElement('p');
    titleElem.classList.add('title');
    titleElem.innerText = `${libraryBook.title}`;
    const authorElem = document.createElement('p');
    authorElem.classList.add('author');
    authorElem.innerText = `${libraryBook.author}`;
    const checkWrapperElem = document.createElement('div');
    checkWrapperElem.classList.add('checkbox-wrapper');
    const checkLabelElem = document.createElement('p');
    checkLabelElem.innerText = 'Already Read:';
    const inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'checkbox');
    inputElem.setAttribute('name', 'read-book-check');
    inputElem.setAttribute('id', `read-book-check-${libraryBook.libraryIndex}`);
    if (libraryBook.haveRead) {inputElem.setAttribute('checked', '')};
    const btnElem = document.createElement('button');
    btnElem.setAttribute('type', 'button');
    btnElem.setAttribute('id', `trash-button-${libraryBook.libraryIndex}`)
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

function refreshLibraryCards() {
    main.innerHTML = '';
    for (let book of myLibrary.books) {
        const newCard = createNewCard(book);
        const trashBtn = newCard.querySelector(`#trash-button-${book.libraryIndex}`);
        trashBtn.addEventListener('click', (event) => {
            const bookLibraryIndex = Number(event.target.parentElement.id.slice(-1));
            myLibrary.removeBook(bookLibraryIndex);
        });
        main.appendChild(newCard);
    }
}

// Add some books by default
myLibrary.addBook(new Book('Dune', 'Frank Herbert', true));
myLibrary.addBook(new Book('Grapes of Wrath', 'John Steinbeck', false));
myLibrary.addBook(new Book('Where the Sidewalk Ends', 'Shel Silverstein', false));
myLibrary.addBook(new Book('Orlando', 'Virginia Woolf', false));
myLibrary.addBook(new Book('Throne of Glass', 'Sarah J. Maas', true));