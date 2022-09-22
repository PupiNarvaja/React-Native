import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { colors } from '../consts/colors';
import Input from '../components/Input/Input';
import { useState } from 'react';
import NumberContainer from '../components/NumberContainer/NumberContainer';

const StartGame = ({ onStartGame }) => {
  const [number, setNumber] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const handleChangeText = (text) => (
    setNumber(text.replace(/[^0-9]/g, ""))
  );

  const handleStartGame = () => {
    onStartGame(selectedNumber)
  }

  const onConfirm = () => {
    const chosen = parseInt(number, 10);
    if (isNaN(chosen) || chosen <= 0 || chosen > 99) return;
    setConfirmed(true);
    setSelectedNumber(chosen);
    setNumber("");
  };

  const onReset = () => {
    setNumber("");
    setSelectedNumber(0);
    setConfirmed(false);
  };

  const confirmedOutput = () => confirmed && (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>Your Choice</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button
        title="Start game"
        onPress={handleStartGame}
      />
    </View>
  )

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.StartGame}>
        <Text style={styles.title}>Start screen</Text>
        <Text style={styles.title}>Choose a number</Text>
        <View style={styles.inputContainer}>
          {/*  ojo. Al ser custom component, no existe el autocompletado y puede haber errores de types. */}
          <Input value={number} onChangeText={(text) => handleChangeText(text)} keyboardType="numeric" maxLength={2} blurOnSubmit={true} autoCapitalize="none" autoCorrect={false} />
        </View>
        <View style={styles.playBtns}>
          <Button
            title="Clear"
            onPress={onReset}
          />
          <Button
            title="Confirm"
            onPress={onConfirm}
          />
        </View>
        {confirmedOutput()}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGame;

const styles = StyleSheet.create({
  StartGame: {
    marginTop: 20,
    marginHorizontal: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: colors.TEXT,
    alignSelf: "center",
    fontFamily: "Figtree-Regular",
  },
  playBtns: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
  },
  inputContainer: {
    width: 90,
    marginVertical: 50,
  },
  summaryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  summaryText: {
    fontSize: 18,
    textAlign: "center",
  },
})