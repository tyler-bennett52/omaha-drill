import React from 'react';
import { Text, StatusBar, Platform, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <>
      {Platform.OS === 'android' && (
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          translucent
        />
      )}
      <Text style={styles.h1}>POT LIMIT OMAHA TRAINER</Text>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
    </>
  );
};

const styles = StyleSheet.create({
  h1: { fontSize: 20, fontWeight: '700', color: 'white' },
});

export default Header;
