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
  } else {
  return 'incorrect!';
  }
}

const takeTurn = (guess, round) => {
  console.log('guess', guess);
  round.turns += 1;
  round.currentCard = round.deck[round.turns];
  evaluateGuess(guess, round.currentCard.correctAnswer);
  if (evaluateGuess(guess, round.currentCard.correctAnswer) === 'incorrect!'){
    round.incorrectGuesses.push(guess)
  }
 return round
} 
module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  createRound,
  takeTurn
};