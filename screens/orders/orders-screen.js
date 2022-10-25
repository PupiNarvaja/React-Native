import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../../components/order-item/order-item";
import { deleteOrder, getOrders } from "../../store/actions/order-actions";
import { styles } from "./styles";

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  useFocusEffect( // CUando esta en foco, ejecuta un callback o funcion. El usecallback lo usa en memoria. React entiende cuando hay nuevo elemento o no.
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const onCancel = (id) =>
    dispatch(deleteOrder(id));

  const renderItem = ({ item }) => (
    <OrderItem item={item} onCancel={onCancel} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Orders;
