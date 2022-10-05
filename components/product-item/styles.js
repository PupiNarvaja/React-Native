import { StyleSheet } from "react-native";
import { colors, fonts } from "../../consts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.SECONDARY,
  },
  title: {
    fontFamily: fonts.TITLE,
    color: "white",
    fontSize: 20,
  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
  },
  price: {
    fontFamily: fonts.TITLE,
    color: "white",
    fontSize: 18,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    fontFamily: fonts.TITLE,
    color: "white",
    fontSize: 14,
  },
});
