import { View, Text, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View>
      <Text style={styles.summaryChoice}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  summaryChoice: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 10,
  },
})
