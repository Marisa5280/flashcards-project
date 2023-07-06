const { createCard, createDeck, createRound, countCards } = require ('./card');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const start = () => {
  const cards = prototypeQuestions.map((card) => createCard(card.id, card.question, card.answers, card.correctAnswer))
  const deck = createDeck(cards);
  console.log('deck', deck);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, start };
