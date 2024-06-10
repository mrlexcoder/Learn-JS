import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

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
      
        <LinearGradient
          // colors={['#006400', '#FFFFFF', '#006400']} // Green, Black, Deep Blue
          colors={['#24223B', '#FFFFFF', '#24223B']} // Green, Black, Deep Blue
          style={styles.container}
        >
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.text}
        >
          <Text style={{ color: '#4285F4' }}>H</Text>
          <Text style={{ color: '#EA4335' }}>.</Text>
          <Text style={{ color: '#FBBC05' }}>P</Text>
          <Text style={{ color: '#34A853' }}> </Text>
          <Text style={{ color: '#4285F4' }}>G</Text>
          <Text style={{ color: '#EA4335' }}>O</Text>
          <Text style={{ color: '#FBBC05' }}>V</Text>
          <Text style={{ color: '#34A853' }}>T</Text>
        </Animatable.Text>
      </LinearGradient>
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
    fontSize: 40, // Adjust the font size as needed
    fontWeight: 'bold',
  },
});
