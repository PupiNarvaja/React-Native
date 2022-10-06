import { StyleSheet } from "react-native";
import { colors, fonts } from "../../consts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    elevation: 4,
  },
  title: {
    fontFamily: fonts.TITLE,
    color: colors.TEXT,
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
