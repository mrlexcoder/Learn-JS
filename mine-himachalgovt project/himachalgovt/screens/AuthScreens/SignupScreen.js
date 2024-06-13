import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    setEmailValid(validateEmail(email));
  };

  const isFormValid = name.length > 0 && emailValid && email.length > 0 && password.length > 0;

  const handleSignup = () => {
    if (isFormValid) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    } else {
      alert('Please enter valid details');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ top: "-3%", left: -4, width: "97%" }}>
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>
          Create your account it takes less than a minute, Enter your email and password
        </Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={[styles.inputContainer, !emailValid && styles.inputContainerInvalid]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
          <Icon name={passwordVisible ? "eye-slash" : "eye"} size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignup} style={[styles.buttonContainer, !isFormValid && { opacity: 0.5 }]} disabled={!isFormValid}>
        <LinearGradient
          colors={['#82C341', '#82C341']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or</Text>
      
      <TouchableOpacity style={styles.googleButton}>
        <Icon name="google" size={20} color="#fff" />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Sign In</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#24223B',
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 8,
    color: '#fff',
    fontWeight: '600',
    justifyContent: "flex-start"
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 20,
    color: '#aaa',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    marginBottom: 15,
    backgroundColor: '#030024',
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderColor:"#030024"
  },
  inputContainerInvalid: {
    borderColor: '#82C341',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  iconContainer: {
    padding: 5,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
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
  orText: {
    color: '#aaa',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#4285F4',
    borderRadius: 10,
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInContainer: {
    marginTop: 20,
  },
  signInText: {
    color: '#aaa',
    fontSize: 14,
  },
  signInLink: {
    color: '#82C341',
    fontWeight: 'bold',
  },
});
