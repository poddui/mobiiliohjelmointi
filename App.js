import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function App() {

  const [item, setItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setShoppingList([...shoppingList, item]);
      setItem('');
    }
  };

  const clearList = () => {
    setShoppingList([]);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputContainer}>
        <Text style={styles.baseText}>Shopping List</Text>
        <TextInput
          style={styles.input}
          value={item}
          onChangeText={setItem}
          placeholder="Enter item"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearList}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flatListContainer}>
          <Text style={styles.baseText}>Items:</Text>
          <ScrollView>
            <FlatList
              data={shoppingList}
              renderItem={({ item }) => <Text style={styles.baseText}>{item}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  baseText: {
    fontSize: 30,
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
  flatListContainer: {
    marginTop: 20,
  },
});