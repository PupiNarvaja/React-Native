import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ShopNavigator from "./shop-stack";
import OrderNavigator from "./orders-stack";
import CartNavigator from "./cart-stack";
import { colors, fonts } from "../consts";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: fonts.TEXT,
          color: colors.SECONDARY,
        }
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"}
              size={22}
              color={focused ? colors.PRIMARY : colors.SECONDARY}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrderNavigator}
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? "file-tray-full" : "file-tray-full-outline"}
            size={22}
            color={focused ? colors.PRIMARY : colors.SECONDARY}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? "cart" : "cart-outline"}
            size={22}
            color={focused ? colors.PRIMARY : colors.SECONDARY}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;