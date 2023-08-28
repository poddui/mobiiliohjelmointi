import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {

  const [number1, onChangeNumber1] = useState('0');
  const [number2, onChangeNumber2] = useState('0');
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum)
  };

  const minNumbers = () => {
    const diff = number1 - number2;
    setResult(diff)
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputContainer}>
      <Text style={styles.baseText}>Result: {result}</Text>
        <TextInput
          style={styles.input}
          value={number1}
          onChangeText={onChangeNumber1}
          placeholder="Numero 1"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={number2}
          onChangeText={onChangeNumber2}
          placeholder="Numero 2"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addNumbers}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={minNumbers}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  baseText: {
    fontSize: '30px',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});