import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cart-item/cart-item";
import { confirmCart, removeFromCart } from "../../store/actions";
import { styles } from "./styles";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const onDelete = (id) =>
    dispatch(removeFromCart(id));

  const onConfirm = () => 
    dispatch(confirmCart(items, total));

  const renderItem = ({ item }) =>
    <CartItem item={item} onDelete={onDelete} />

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View>
        <TouchableOpacity
          style={styles.btnConfirm}
          onPress={onConfirm}
          disabled={items.length === 0}
        >
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
