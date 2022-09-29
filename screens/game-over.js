import { useState, useEffect } from "react";
import { Button, Text, StyleSheet, View, Dimensions } from "react-native"

const GameOver = ({ rounds, userNumber, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dimension = Dimensions.get("screen")
    return dimension.height >= dimension.width
  }

  const statePortrait = () => {
    setIsPortrait(onPortrait)
  }

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait());

    return () => {
      Dimensions.removeEventListener("change", statePortrait());
    };
  });
  
  console.warn("Is portrait", isPortrait)

  return (
    <View style={isPortrait ? styles.screen : styles.screenLandscape}>
      <Text>Yaaaaaaaaaaaay</Text>
      <View style={styles.resultContainer}>
        <Text>Trys: {rounds}</Text>
        <Text>The number was: {userNumber}</Text>
      </View>
      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  )
}

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenLandscape: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
  },
  resultContainer: {
    marginBottom: 30,
    padding: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: 'center',
  },
})