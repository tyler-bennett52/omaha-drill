import React, { useEffect, useState } from 'react';
import { View, Platform, Text, Vibration } from 'react-native';

import Header from './components/Header.jsx';
import HandDescription from './components/HandDescription.jsx';
import Cards from './components/Cards.jsx';
import Buttons from './components/Buttons.jsx';
import PositionSelector from './components/PositionSelector.jsx';

import isPlayable from './helper';
import shuffledDeck from './deck';

export default function App() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [promptNextHand, setPromptNextHand] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setDeck(shuffledDeck);
    setPlayerHand(shuffledDeck.slice(0, 4));
  }, []);

  const handleClick = (action) => {
    const correct = (isPlayable(playerHand) && action === 'Raise') || (!isPlayable(playerHand) && action === 'Fold');
    if (correct) {
      setAnswer('Correct');
      setStreak(streak + 1);
    } else {
      setAnswer('Incorrect, try again');
      setStreak(0);
      Vibration.vibrate();
    }
    setPromptNextHand(true);
  };

  const nextTurn = () => {
    let newShuffledDeck = [...shuffledDeck].sort(() => Math.random() - 0.5);
    setDeck(newShuffledDeck);
    setPlayerHand(newShuffledDeck.slice(0, 4));
    setPromptNextHand(false);
  };

  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'ios' ? 60 : 0,
        width: '100%',
      }}
    >
      <Header />
      <HandDescription />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white' }}>🔥</Text>
        <Text style={{ fontSize: 20, marginLeft: 5, color: 'white' }}>{streak}</Text>
      </View>
      <Cards playerHand={playerHand} />
      <Buttons
        promptNextHand={promptNextHand}
        answer={answer}
        handleClick={handleClick}
        nextTurn={nextTurn}
      />
    </View>
      <PositionSelector />
      </>
  );
}