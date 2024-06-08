import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  const [timeoutDone, setTimeoutDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutDone(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (timeoutDone) {
      navigation.replace('Auth'); // Replace 'Main' with 'Auth' if you want to navigate to the Auth screen
    }
  }, [timeoutDone, navigation]);

  if (!timeoutDone) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    );
  } else {
    return null; // Return null when timeout is done to hide the splash screen
  }
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
