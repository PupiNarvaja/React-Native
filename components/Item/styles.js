import { StyleSheet } from "react-native";
import { colors } from "../../consts/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
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
  item: {
    color: colors.TEXT,
    fontSize: 16,
  },
  deleteBtn: {
    color: colors.TEXT,
    fontSize: 18,
  },
});