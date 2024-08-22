import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputAge, setInputAge] = useState('')
  const [lowerLimit, setLowerLimit] = useState(0)
  const [upperLimit, setUpperLimit] = useState(0)

  return (
    <View style={styles.container}>
      <View>
        <Text>Age</Text>
        <TextInput
          keyboardType='number-pad'
          value={inputAge}
          style={styles.input}
          onChange={setInputAge}
        />
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
  input :{
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff'
  }
});
