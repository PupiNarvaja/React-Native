import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

import Header from "./components/header";
import StartGame from "./screens/start-game";
import OnGame from "./screens/on-game";
import { colors } from "./consts/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(0);
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

  if (!loaded) {
    return (
      <View style={styles.containerLoaded}>
        <ActivityIndicator  size="large" color={colors.PRIMARY_RED} />
      </View>
    )
  }

  let content = <StartGame onStartGame={onStartGame} />  

  if (userNumber) {
    content = <OnGame selectedNumber={userNumber} />
  }

  return (
    <>
      <Header title={title} />
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
