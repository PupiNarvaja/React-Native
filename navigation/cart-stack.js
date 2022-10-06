import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";
import Cart from "../screens/cart/cart-screen";
import { colors, fonts } from "../consts";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.PRIMARY : colors.SECONDARY,
          headerTintColor: colors.TEXT,
          headerTitleStyle: {
            fontFamily: fonts.TITLE,
          },
        }
      }}
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
