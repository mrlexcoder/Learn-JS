import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Screen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});
