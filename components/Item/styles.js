import { StyleSheet } from "react-native";

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
    color: "#212121",
    fontSize: 16,
  },
  deleteBtn: {
    color: "#212121",
    fontSize: 18,
  },
});