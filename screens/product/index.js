import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const Product = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.id}</Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.title}>{product.description}</Text>
      <Text style={styles.title}>${product.price}</Text>
      <Text style={styles.title}>Weight: {product.weight}</Text>
    </View>
  );
};

export default Product;
