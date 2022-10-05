import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors, fonts } from "../consts";
import { Categories, Products, Product } from "../screens";
import { isAndroid } from "../utils"

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
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
        name="Categories"
        component={Categories}
        options={{
          title: "Categories and more",
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

//Contenedor tiene toda la app. Hace que todos los stacks de navegacion
// funcionen. Se puede tener 20 stacks con 20 pantallas cada una y asi.