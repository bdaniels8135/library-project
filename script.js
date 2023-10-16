function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
    this.libraryIndex = null;
};

const ui = {
    main: document.querySelector('main'),
    newBookButton: document.querySelector('header img'),
    
    refreshLibraryCards() {
        ui.main.innerHTML = '';
        for (let book of myLibrary.books) {
            const newCard = ui.createNewCard(book);
            ui.addDeleteEventListener(newCard, book);
            ui.main.appendChild(newCard);
        }
    },

    addDeleteEventListener(card, book) {
        card.querySelector('button').addEventListener('click', () => {
                myLibrary.removeBook(book.libraryIndex);
            });
    },

    createNewCard(libraryBook) {
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
}

const myLibrary = {
    books: [],
    _nextBookID: 0,

    addBook(newBook) {
        newBook.libraryIndex = myLibrary._nextBookID;
        myLibrary._nextBookID += 1;
        myLibrary.books.push(newBook);
        ui.refreshLibraryCards();
    },

    removeBook(bookLibraryIndex) {
        myLibrary.books = myLibrary.books.filter((book) => {
            return book.libraryIndex != bookLibraryIndex
        })
        ui.refreshLibraryCards();
    },
}

ui.newBookButton.addEventListener('click', (event) => console.log(event));

// Add some books by default
myLibrary.addBook(new Book('Dune', 'Frank Herbert', true));
myLibrary.addBook(new Book('Grapes of Wrath', 'John Steinbeck', false));
myLibrary.addBook(new Book('Where the Sidewalk Ends', 'Shel Silverstein', false));
myLibrary.addBook(new Book('Orlando', 'Virginia Woolf', false));
myLibrary.addBook(new Book('Throne of Glass', 'Sarah J. Maas', true));