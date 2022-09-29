import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

import Header from "./components/header";
import StartGame from "./screens/start-game";
import OnGame from "./screens/on-game";
import GameOver from "./screens/game-over";
import { colors } from "./consts/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
  const [rounds, setRounds] = useState(0);

  const [loaded] = useFonts({
    "Figtree-Regular": require("./assets/fonts/Figtree-Regular.ttf"),
    "Figtree-Black": require("./assets/fonts/Figtree-Black.ttf"),
    "Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf"),
    "Figtree-Light": require("./assets/fonts/Figtree-Light.ttf"),
  });

  const title = !userNumber ? "Guess a number" : "Let's start the game!"

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const onGameOver = (roundsNumber) => {
    setRounds(roundsNumber)
  }

  const onRestart = () => {
    setUserNumber(0)
    setRounds(0)
  }

  if (!loaded) {
    return (
      <SafeAreaView style={styles.containerLoaded}>
        <ActivityIndicator  size="large" color={colors.PRIMARY_RED} />
      </SafeAreaView>
    )
  }

  let content = <StartGame onStartGame={onStartGame} />  

  if (userNumber && rounds <= 0) {
    content = <OnGame selectedNumber={userNumber} onGameOver={onGameOver} />
  }

  if (rounds > 0) {
    content = <GameOver rounds={rounds} userNumber={userNumber} onRestart={onRestart} />
  }

  return (
    <>
      <Header title={rounds > 0 ? "Game Over" : title} />
      {content}   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems:"center",
    paddingVertical: 20,
    marginTop: 20,
  },
  modalTitle: {
    justifyContent: "center",
    alignItems:"center",
    paddingVertical: 20,
  },
  modalMsg: {
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  containerLoaded: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
