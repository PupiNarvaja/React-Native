import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions";
import { styles } from "./styles";

const Product = ({ navigation }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  const addCartItem = () => {
    dispatch(addToCart(product));
  };

  const { id, title, description, price, weight } = product || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
      <Text style={styles.title}>${price}</Text>
      <Text style={styles.title}>Weight: {weight}</Text>
      <Button title="Add to cart" onPress={addCartItem} />
    </View>
  );
};

export default Product;
