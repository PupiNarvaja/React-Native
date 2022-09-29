import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, ActivityIndicator, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { colors, fonts } from "./consts";
import AppNavigator from "./navigation";

export default function App() {

  const [loaded] = useFonts({
    "Figtree-Regular": require("./assets/fonts/Figtree-Regular.ttf"),
    "Figtree-Black": require("./assets/fonts/Figtree-Black.ttf"),
    "Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf"),
    "Figtree-Light": require("./assets/fonts/Figtree-Light.ttf"),
  });

  if (!loaded) return <ActivityIndicator />

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
