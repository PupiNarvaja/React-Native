import { StyleSheet } from "react-native";
import { colors, fonts } from "../../consts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 150,
  },
  title: {
    fontFamily: fonts.TITLE,
    color: colors.TEXT,
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
