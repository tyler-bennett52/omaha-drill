import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import isPlayable from './helper';

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

export default function App() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [promptNextHand, setPromptNextHand] = useState(false);
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    const shuffledDeck = shuffle(buildDeck());
    setDeck(shuffledDeck);
    setPlayerHand(shuffledDeck.slice(0, 4))
  }, []);
  
  const handleClick = (action) => {
    console.log(isPlayable(playerHand))
    if (isPlayable(playerHand) && action === 'Raise') {
      console.log('Correct');
      setAnswer('Correct');
    } else if (!isPlayable(playerHand) && action === 'Fold') {
      setAnswer('Correct')
      console.log('Correct');
    } else {
      setAnswer('Incorrect, try again')
      console.log('u suck')
    }
    setPromptNextHand(true);
  };

  const nextTurn = () => {
    let shuffledDeck = shuffle(deck);
    setDeck(shuffledDeck)
    setPlayerHand(shuffledDeck.slice(0, 4))
    setPromptNextHand(false);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      {Platform.OS === 'android' && (
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          translucent
        />
      )}
      <Text style={styles.h1}>POT LIMIT OMAHA TRAINER</Text>
      {Platform.OS === 'ios' && (
        <StatusBar barStyle="light-content" />
      )}

      <Text style={styles.description}>
        Below is your hand. Evaluate the hand's connectedness, suitedness and the raw value of its cards. Use that information to decide if you would play this hand (assume UTG, 100bb stacks)
      </Text>

      <View style={styles.cards}>
        {playerHand.map((card, index) => (
          <Text key={index} style={styles.card}>
            {card.value + card.suit}
          </Text>
        ))}
      </View>

      {
        promptNextHand 
        ? <View style={styles.buttons}>
          <Text style={styles.card}>{answer}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={nextTurn}
        >
          <Text style={styles.buttonText}>Next Hand</Text>
        </TouchableOpacity>
      </View>
        : <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClick('Raise')}
        >
          <Text style={styles.buttonText}>Raise</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleClick('Fold')}
        >
          <Text style={styles.buttonText}>Fold</Text>
        </TouchableOpacity>
      </View>
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 60 : 0,
    width: '50%'
  },
  h1: { fontSize: 20, fontWeight: '700', color: 'white'},
  cards: {
    flexDirection: 'row',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: 'white'
  }
  ,
  card: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
