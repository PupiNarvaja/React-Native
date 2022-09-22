import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { colors } from '../consts/colors';
import generateRandomNumberBetween from "../utils/generateRandomNumberBetween"

const OnGame = ({ selectedNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game screen</Text>
      <Text style={styles.title}>The guess was:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <Button title="MENOR" onPress={() => null} />
        <Button title="MAYOR" onPress={() => null} />
      </View>
    </View>
  )
}

export default OnGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    width: '75%',
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  title: {
    fontFamily: "Figtree-Regular",
  },
})