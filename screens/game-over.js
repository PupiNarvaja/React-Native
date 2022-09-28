import { Button, Text, StyleSheet, View } from "react-native"

const GameOver = ({ rounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
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
  resultContainer: {
    marginBottom: 30,
    padding: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: 'center',
  },
})