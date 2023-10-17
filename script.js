function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
    this._id = null;
};

const ui = {
    _main: document.querySelector('main'),
    _newBookButton: document.querySelector('header img'),
    _newBookModal: document.querySelector('dialog'),
    _newBookTitle: document.getElementById('new-book-title'),
    _newBookAuthor: document.getElementById('new-book-author'),
    _newBookRead: document.getElementById('new-book-read'),
    _cancelBtn: document.getElementById('cancel-btn'),
    _submitBtn: document.getElementById('submit-btn'),

    initialize() {
        ui._newBookButton.addEventListener('click', () => {
            ui._newBookModal.showModal();
        })

        ui._cancelBtn.addEventListener('click', () => {
            ui._newBookModal.close();
            ui._newBookTitle.value = '';
            ui._newBookAuthor.value = '';
            ui._newBookRead.checked = false;
        })

        ui._submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            ui._newBookModal.close();
            const newTitle = ui._newBookTitle.value;
            const newAuthor = ui._newBookAuthor.value;
            const newRead = ui._newBookRead.checked;
            myLibrary.addBook(new Book(newTitle, newAuthor, newRead));
            ui._newBookTitle.value = '';
            ui._newBookAuthor.value = '';
            ui._newBookRead.checked = false;
        })
    },

    refreshLibraryCards() {
        ui._main.innerHTML = '';
        for (let book of myLibrary.books) {
            const newCard = ui.createNewCard(book);
            ui.addDeleteEventListener(newCard, book);
            ui.addReadCheckEventListener(newCard, book);
            ui._main.appendChild(newCard);
        }
    },

    addDeleteEventListener(card, book) {
        card.querySelector('button').addEventListener('click', () => {
                myLibrary.removeBook(book);
            });
    },

    addReadCheckEventListener(card, book) {
        card.querySelector('input').addEventListener('change', () => {
                myLibrary.toggleHaveRead(book);
        })
    },

    createNewCard(libraryBook) {
        const cardElem = document.createElement('div');
        cardElem.classList.add('card');
        cardElem.setAttribute('id', `card-${libraryBook._id}`)
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
        inputElem.setAttribute('id', `read-book-check-${libraryBook._id}`);
        if (libraryBook.haveRead) {inputElem.setAttribute('checked', '')};
        const btnElem = document.createElement('button');
        btnElem.setAttribute('type', 'button');
        btnElem.setAttribute('id', `trash-button-${libraryBook._id}`)
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
    _nextBookId: 0,

    addBook(newBook) {
        newBook._id = myLibrary._nextBookId;
        myLibrary._nextBookId += 1;
        myLibrary.books.push(newBook);
        ui.refreshLibraryCards();
    },

    removeBook(bookToRemove) {
        const deleteIndex = myLibrary.books.findIndex((book) => {
            return bookToRemove._id === book._id;
        })
        myLibrary.books.splice(deleteIndex, 1)
        ui.refreshLibraryCards();
    },

    toggleHaveRead(bookToToggle) {
        bookToToggle.haveRead = !bookToToggle.haveRead;
    },
}

ui.initialize();
// myLibrary.addBook(new Book('Dune', 'Frank Herbert', true));
// myLibrary.addBook(new Book('Grapes of Wrath', 'John Steinbeck', false));
// myLibrary.addBook(new Book('Where the Sidewalk Ends', 'Shel Silverstein', false));
// myLibrary.addBook(new Book('Orlando', 'Virginia Woolf', false));
// myLibrary.addBook(new Book('Throne of Glass', 'Sarah J. Maas', true));