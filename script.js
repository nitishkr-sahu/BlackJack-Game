
let cards = []
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum");
let cardEl = document.getElementById("cards-el");

function getRandomNum() {
  randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}



function startGame() {
  isAlive = true;
  firstCard = getRandomNum();
  secondCard = getRandomNum();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}



function renderGame() {
  cardEl.textContent = "Cards :";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum :" + sum;

  if (sum < 21) {
    message = "Do you want to draw new card?🙂";

  }
  else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;

  }
  else {
    message = "You're out of the game! 😭";
    isAlive = false;

  }
  messageEl.innerText = message;


}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newcard = getRandomNum();
    cards.push(newcard);
    sum += newcard;
    renderGame();
  }

}
