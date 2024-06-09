import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import {LinearGradient} from 'expo-linear-gradient';

export default function SignupScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [valid, setValid] = useState(false);
  const phoneRef = React.createRef();

  const handleSignup = () => {
    if (phoneRef.current.isValidNumber()) {
      // Add your signup logic here
      console.log('Mobile Number:', phoneRef.current.getValue());
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Mobile Number</Text>
      <PhoneInput
        ref={phoneRef}
        initialCountry="us"
        textStyle={styles.phoneInputText}
        textProps={{
          placeholder: 'Mobile Number',
        }}
        onChangePhoneNumber={(number) => {
          setMobileNumber(number);
          setValid(phoneRef.current.isValidNumber());
        }}
        style={styles.phoneInput}
      />
      <TouchableOpacity onPress={handleSignup} style={styles.buttonContainer} disabled={!valid}>
        <LinearGradient
          colors={['#00c6ff', '#0072ff']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#006400',
    fontWeight:"600"
  },
  phoneInput: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  phoneInputText: {
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
