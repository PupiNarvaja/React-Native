import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";
import Orders from "../screens/orders/orders-screen";
import { colors, fonts } from "../consts";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        name="Orders"
        component={Orders}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
