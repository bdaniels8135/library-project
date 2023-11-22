function buildCardHtml(title, author, haveRead) {
  const cardHtml = document.createElement("div");
  cardHtml.classList.add("card");

  const titleElem = document.createElement("p");
  titleElem.classList.add("title");
  titleElem.innerText = `${title}`;

  const authorElem = document.createElement("p");
  authorElem.classList.add("author");
  authorElem.innerText = `${author}`;

  const checkWrapperElem = document.createElement("div");
  checkWrapperElem.classList.add("checkbox-wrapper");

  const checkLabelElem = document.createElement("p");
  checkLabelElem.innerText = "Already Read:";

  const inputElem = document.createElement("input");
  inputElem.type = "checkbox";
  inputElem.name = "read-book-check";
  if (haveRead) inputElem.checked = true;

  const btnElem = document.createElement("button");
  btnElem.type = "button";

  const imgElem = document.createElement("img");
  imgElem.src = "./img/trash-can-outline.svg";
  imgElem.alt = "Trash Icon";

  cardHtml.append(titleElem, authorElem, checkWrapperElem, btnElem);
  checkWrapperElem.append(checkLabelElem, inputElem);
  btnElem.appendChild(imgElem);

  return cardHtml;
}

export default class Card {
  constructor(title, author, haveRead) {
    this.HTML = buildCardHtml(title, author, haveRead);
  }
}
