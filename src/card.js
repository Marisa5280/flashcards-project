const createDeck = (cards) => {
  let deck = cards; 
  return deck
};

const createCard = (id, question, answers, correctAnswer) => ({
  id,
  question,
  answers,
  correctAnswer
});

const createRound = (deck) => 
  ({
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: []
  })

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer){
    return 'correct!';
  } 
  
  return 'incorrect!';
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  createRound
};