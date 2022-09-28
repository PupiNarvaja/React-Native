import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer/NumberContainer';
import { colors } from '../consts/colors';
import generateRandomNumberBetween from "../utils/generateRandomNumberBetween"

const OnGame = ({ selectedNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100); // Genera una referencia de un objeto. Este valor persiste en todo el ciclo de vida de react.

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onGameOver(rounds)
    }
  }, [currentGuess, selectedNumber, onGameOver])
  
  const onHandleNextGuess = (direction) => {
    if ((direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)) {
        console.warn("No mientas, tu sabes que está mal...");
        return
      }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(prevRounds => prevRounds + 1)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game screen</Text>
      <Text style={styles.title}>The guess was:</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonContainer}>
        <Button title="MENOR" onPress={() => onHandleNextGuess("lower")} />
        <Button title="MAYOR" onPress={() => onHandleNextGuess("greater")} />
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