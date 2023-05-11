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
module.exports = {
  createCard,
  evaluateGuess,
  createDeck
};