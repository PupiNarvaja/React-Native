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
  btnConfirm: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalContainer: {
    width: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalTitle: {
    fontFamily: fonts.TITLE,
  },
  total: {
    fontFamily: fonts.TEXT,
  },
});
