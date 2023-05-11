const createCard = (id, question, answers, correctAnswer) => ({
  id,
  question,
  answers,
  correctAnswer
});

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer){
    return 'correct!';
  } 
  return 'incorrect!';
}

const createDeck = (cards) => {
  let deck = cards; 
  return deck
}

const createRound = (deck) => {
  const round = {};
  round.deck = deck;
  round.currentCard = deck[0];
  round.turns = 0
  // console.log(round)
  return round
}
module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  createRound
};