import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Buttons = ({ promptNextHand, answer, handleClick, nextTurn }) => {
  return promptNextHand ? (
    <View style={styles.buttons}>
      <Text style={styles.card}>{answer}</Text>
      <TouchableOpacity style={styles.button} onPress={nextTurn}>
        <Text style={styles.buttonText}>Next Hand</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.buttons}>
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
  );
};

const styles = StyleSheet.create({
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
  card: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10,
  },
});

export default Buttons;
