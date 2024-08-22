import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputAge, setInputAge] = useState('')
  // console.log('inputage on nyt: ' +  Number(inputAge))

  const lowerLimit = (220  - Number(inputAge)) * 0.65
  const noDecimalLowerLimit = lowerLimit.toFixed(0);
  const upperLimit = (220  - Number(inputAge)) * 0.85
  const noDecimalUpperLimit = upperLimit.toFixed(0);

  return (
    <View style={styles.container}>
      <View style={styles.taskBox}>
        <Text style={styles.text}>
          Age
        </Text>
        <TextInput
          keyboardType='number-pad'
          value={inputAge}
          style={styles.input}
          placeholder='Enter your age'
          onChangeText={setInputAge}
        />
        <Text style={styles.text}>
          Hr limits:
        </Text>
        <Text style={styles.answerText}>
          {noDecimalLowerLimit} - {noDecimalUpperLimit}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1dbdd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff'

  },
  text : {
    fontWeight: 'bold',
    fontSize: 18,
  },
  answerText : {
    marginTop: 15,
  },
  taskBox: {
    borderWidth: 1,
    padding: 25,
    backgroundColor: '#cdddde'

  }
});
