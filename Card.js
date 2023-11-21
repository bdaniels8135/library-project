export default class Card {
  constructor(book) {
    this.html = document.createElement("div");
    this.html.classList.add("card");
    this.html.setAttribute("id", `card-${book.id}`);
    const titleElem = document.createElement("p");
    titleElem.classList.add("title");
    titleElem.innerText = `${book.title}`;
    const authorElem = document.createElement("p");
    authorElem.classList.add("author");
    authorElem.innerText = `${book.author}`;
    const checkWrapperElem = document.createElement("div");
    checkWrapperElem.classList.add("checkbox-wrapper");
    const checkLabelElem = document.createElement("p");
    checkLabelElem.innerText = "Already Read:";
    const inputElem = document.createElement("input");
    inputElem.setAttribute("type", "checkbox");
    inputElem.setAttribute("name", "read-book-check");
    inputElem.setAttribute("id", `read-book-check-${book.id}`);
    if (book.haveRead) inputElem.setAttribute("checked", "");
    const btnElem = document.createElement("button");
    btnElem.setAttribute("type", "button");
    btnElem.setAttribute("id", `trash-button-${book.id}`);
    const imgElem = document.createElement("img");
    imgElem.setAttribute("src", "./img/trash-can-outline.svg");
    imgElem.setAttribute("alt", "Trash Icon");

    this.html.appendChild(titleElem);
    this.html.appendChild(authorElem);
    this.html.appendChild(checkWrapperElem);
    this.html.appendChild(btnElem);
    checkWrapperElem.appendChild(checkLabelElem);
    checkWrapperElem.appendChild(inputElem);
    btnElem.appendChild(imgElem);
  }
}
