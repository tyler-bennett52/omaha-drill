import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DisplayedCards = ({ cards }) => {
  return (
    <View style={styles.cards}>
      {cards.map((card, index) => (
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

export default DisplayedCards;
