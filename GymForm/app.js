import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const App = () => {
  const [message, setMessage] = useState('');

  const handleSquatsPress = () => {
    setMessage('Squats is done');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <CustomButton onPress={handleSquatsPress} text="Squats" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
