const suits = ['♠', '♣', '♥', '♦'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const buildDeck = () => {
  const deck = [];
  for (const suit of suits) {
    for (const value of values) {
      const numValue = value === 'J' ? 11
                     : value === 'Q' ? 12
                     : value === 'K' ? 13
                     : value === 'A' ? 14
                     : parseInt(value);
      deck.push({ suit, value, numValue });
    }
  }
  return deck;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const shuffledDeck = shuffle(buildDeck());

export default shuffledDeck;
