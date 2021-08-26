import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.7}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
