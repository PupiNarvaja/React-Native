import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 30,
  },
  input: {
    width: "75%",
    borderBottomColor: colors.PRIMARY_RED,
    borderBottomWidth: 2,
    height: 40,
    color: colors.TEXT,
    fontSize: 16,
  },
});