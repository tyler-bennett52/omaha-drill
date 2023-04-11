import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PositionSelector = () => {
  const positions = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];

  return (
    <View style={styles.container}>
      {positions.map((position, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, position === 'UTG' ? styles.selected : styles.disabled]}
          disabled={position !== 'UTG'}
        >
          <Text style={styles.buttonText}>{position}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: 'green',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default PositionSelector;
