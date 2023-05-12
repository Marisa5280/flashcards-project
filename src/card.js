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
  // console.log('current', round.currentCard)
  if (evaluateGuess(guess, round.currentCard.correctAnswer) === 'incorrect!'){
    round.incorrectGuesses.push(guess)
  }
  round.turns += 1;
  round.currentCard = round.deck[round.turns];
  return round
};

const calculatePercentCorrect = (round) => {
  const rightCount = round.deck.length - round.incorrectGuesses.length;
  const percentCorrect =   (rightCount / round.deck.length) * 100;
  return percentCorrect.toFixed(2)
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  createRound,
  takeTurn,
  calculatePercentCorrect
};