export default function CardsDisplay() {
  const HTML = document.createElement("div");
  HTML.classList.add("cards-display");
  const cards = [];

  function addCard(cardToAdd) {
    cards.push(cardToAdd);
    HTML.appendChild(cardToAdd.HTML);
  }

  function removeCard(cardToRemove) {
    const deleteIndex = cards.indexOf(cardToRemove);
    cards.splice(deleteIndex, 1);
    HTML.removeChild(HTML.childNodes[deleteIndex]);
  }

  return {
    HTML,
    addCard,
    removeCard,
  };
}
