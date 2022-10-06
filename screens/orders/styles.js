import { StyleSheet } from "react-native";
import { colors, fonts } from "../../consts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fonts.TITLE,
    color: colors.TEXT,
  },
});
