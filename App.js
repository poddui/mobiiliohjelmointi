import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Modal} from 'react-native';

export default function App() {

  const [number, setNumber] = useState('0');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState(0);
  const [guesText, setGuessText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const comparing = () => {
    setGuess(guess + 1)
    if (randomNumber == parseInt(number)){
      toggleModal()
    }
    else if (randomNumber > parseInt(number)) {
      setGuessText(`Your guess ${number} is too low`);
    }
    else{
      setGuessText(`Your guess ${number} is too high`);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const reset = () => {
    toggleModal()
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess(0)
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputContainer}>
      <Text style={styles.baseText}>{guesText}</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          placeholder="Numero"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={comparing}>
            <Text style={styles.buttonText}>Make a guess
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You guessed the number in {guess} guesses</Text>
            <TouchableOpacity style={styles.modalButton} onPress={reset}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});