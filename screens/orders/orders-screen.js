import { View, Text, FlatList } from "react-native";
import OrderItem from "../../components/order-item/order-item";
import { orders } from "../../consts/data";
import { styles } from "./styles";

const Orders = ({ navigation }) => {

  const onCancel = (id) => {
    console.warn(id)
  }

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
