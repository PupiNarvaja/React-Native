import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelected(item)} style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.details}>Weight: {item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
