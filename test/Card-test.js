const chai = require('chai');
const expect = chai.expect;

const {createCard, evaluateGuess, createDeck, createRound, takeTurn} = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
  
  it('should evaluate if a guess is correct or incorrect', function() {
    expect(evaluateGuess('object', 'object')).to.equal('correct!');
    expect(evaluateGuess('array', 'object')).to.equal('incorrect!');
  })
});

describe('deck', function() {
  it('should create an array of card objects', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.deep.equal([card1, card2, card3]);
  })
})

describe('round', function() {
  let round;
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach('setup tests', function() {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = createDeck([card1, card2, card3]);
    round = createRound(deck);
  })
  it('should hold on to the deck object', function() {
    expect (round.deck).to.deep.equal([card1, card2, card3]);
  })

  it('should assign the currentCard as the first card in the deck', function() {
    expect (round.currentCard).to.equal(deck[0])
  })

  it ('should give round.turns a default value of 0', function() {
    expect (round.turns).to.equal(0)
  });

  it ('should store incorrect guessed cards', function() {
    expect (round.incorrectGuesses).to.deep.equal([])
  })

  describe ('takeTurn', function() {
    it('should update the turns count', function() {
      expect(round.turns).to.equal(0)
      takeTurn('pug', round)
      expect(round.turns).to.equal(1)
    });

    it('should assign the next card in the deck as the currentCard', function(){
      expect(round.currentCard).to.deep.equal(deck[0])
      takeTurn('pug', round)
      expect(round.currentCard).to.deep.equal(deck[1])
    });

    it('should evaluate the guess', function() {
      expect(round.incorrectGuesses.length).to.deep.equal(0);
      takeTurn('pug', round);
      expect(round.incorrectGuesses.length).to.deep.equal(1);
    })
  })
})