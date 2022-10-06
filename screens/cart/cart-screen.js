import { View, Text, FlatList, TouchableOpacity } from "react-native";
import CartItem from "../../components/cart-item/cart-item";
import { cart } from "../../consts/data"
import { styles } from "./styles";

const Cart = ({ navigation }) => {

  const total = 200
  const onDelete = (id) => {
    console.warn(id)
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={onDelete} />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View>
        <TouchableOpacity style={styles.btnConfirm} onPress={() => null} >
          <Text>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalTitle}>Total: </Text>
            <Text style={styles.total}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
