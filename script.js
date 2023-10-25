class Book {
    constructor(title, author, haveRead) {
        this.title = title;
        this.author = author;
        this.haveRead = haveRead;
        this.id;
    };
};

class Card {
    constructor(book) {
        this.html = document.createElement('div');
        this.html.classList.add('card');
        this.html.setAttribute('id', `card-${book._id}`);
        const titleElem = document.createElement('p');
        titleElem.classList.add('title');
        titleElem.innerText = `${book.title}`;
        const authorElem = document.createElement('p');
        authorElem.classList.add('author');
        authorElem.innerText = `${book.author}`;
        const checkWrapperElem = document.createElement('div');
        checkWrapperElem.classList.add('checkbox-wrapper');
        const checkLabelElem = document.createElement('p');
        checkLabelElem.innerText = 'Already Read:';
        const inputElem = document.createElement('input');
        inputElem.setAttribute('type', 'checkbox');
        inputElem.setAttribute('name', 'read-book-check');
        inputElem.setAttribute('id', `read-book-check-${book._id}`);
        if (book.haveRead) inputElem.setAttribute('checked', '');
        const btnElem = document.createElement('button');
        btnElem.setAttribute('type', 'button');
        btnElem.setAttribute('id', `trash-button-${book._id}`)
        const imgElem = document.createElement('img');
        imgElem.setAttribute('src', './img/trash-can-outline.svg');
        imgElem.setAttribute('alt', 'Trash Icon');
    
        this.html.appendChild(titleElem);
        this.html.appendChild(authorElem);
        this.html.appendChild(checkWrapperElem);
        this.html.appendChild(btnElem);
        checkWrapperElem.appendChild(checkLabelElem);
        checkWrapperElem.appendChild(inputElem);
        btnElem.appendChild(imgElem);
    };
};

const displayController = (function() {
    const _UI = {
        MAIN: document.querySelector('main'),
        NEW_BOOK_BUTTON: document.querySelector('header img'),
        NEW_BOOK_MODAL: document.querySelector('dialog'),
        NEW_BOOK_TITLE: document.getElementById('new-book-title'),
        NEW_BOOK_AUTHOR: document.getElementById('new-book-author'),
        NEW_BOOK_READ: document.getElementById('new-book-read'),
        CANCEL_BTN: document.getElementById('cancel-btn'),
        SUBMIT_BTN: document.getElementById('submit-btn'),
    };

    _UI.NEW_BOOK_BUTTON.addEventListener('click', () => {
        _UI.NEW_BOOK_MODAL.showModal();
    });

    _UI.CANCEL_BTN.addEventListener('click', () => {
        _UI.NEW_BOOK_MODAL.close();
        _UI.NEW_BOOK_TITLE.value = '';
        _UI.NEW_BOOK_AUTHOR.value = '';
        _UI.NEW_BOOK_READ.checked = false;
    });

    _UI.SUBMIT_BTN.addEventListener('click', event => {
        event.preventDefault();
        _UI.NEW_BOOK_MODAL.close();
        const newTitle = _UI.NEW_BOOK_TITLE.value;
        const newAuthor = _UI.NEW_BOOK_AUTHOR.value;
        const newRead = _UI.NEW_BOOK_READ.checked;
        myLibrary.addBook(new Book(newTitle, newAuthor, newRead));
        _UI.NEW_BOOK_TITLE.value = '';
        _UI.NEW_BOOK_AUTHOR.value = '';
        _UI.NEW_BOOK_READ.checked = false;
    });

    const _addDeleteEventListener = (card, book) => {
        card.querySelector('button').addEventListener('click', () => {
                myLibrary.removeBook(book);
        });
    };

    const _addReadCheckEventListener = (card, book) => {
        card.querySelector('input').addEventListener('change', () => {
                myLibrary.toggleBookHaveRead(book);
        });
    };

    const refreshLibraryCards = () => {
        _UI.MAIN.innerHTML = '';
        myLibrary.getBooks().forEach(book =>{
            const newCard = new Card(book);           
            _addDeleteEventListener(newCard.html, book);
            _addReadCheckEventListener(newCard.html, book);
            _UI.MAIN.appendChild(newCard.html);
        });
    };

    return {
        refreshLibraryCards,
    };
})();

const myLibrary = (function() {
    const _books = [];
    let _nextBookId = 0;

    const getBooks = () => _books;

    const addBook = bookToAdd => {
        bookToAdd.id = _nextBookId;
        _nextBookId += 1;
        _books.push(bookToAdd);
        displayController.refreshLibraryCards();
    };

    const removeBook = bookToRemove => {
        const deleteIndex = _books.findIndex(book => book === bookToRemove);
        _books.splice(deleteIndex, 1);
        displayController.refreshLibraryCards();
    };

    const toggleBookHaveRead = bookToToggle => {bookToToggle.haveRead = !bookToToggle.haveRead};

    return {
        getBooks,
        addBook,
        removeBook,
        toggleBookHaveRead,
    };
})();