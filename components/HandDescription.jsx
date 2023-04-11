import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HandDescription = () => {
  return (
    <Text style={styles.description}>
      Below is your hand. Evaluate the hand's connectedness, suitedness and the
      raw value of its cards. Use that information to decide if you would play
      this hand (assume UTG, 100bb stacks)
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: 'white',
  },
});

export default HandDescription;
