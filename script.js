function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.haveRead ? 'have' : 'have not'} read`;
    };
};

