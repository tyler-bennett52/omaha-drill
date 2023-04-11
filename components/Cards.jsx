import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cards = ({ playerHand }) => {
  return (
    <View style={styles.cards}>
      {playerHand.map((card, index) => (
        <Text key={index} style={styles.card}>
          {card.value + card.suit}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    marginTop: 20,
  },
  card: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10,
  },
});

export default Cards;
