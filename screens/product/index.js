import { View, Text } from "react-native";
import { products } from "../../consts/data";
import { styles } from "./styles";

const Product = ({ navigation, route }) => {
  const { productId } = route.params;

  const product = products.find((product) => product.id === productId)

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
