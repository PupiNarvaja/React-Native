import { View, Text, Button } from "react-native";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to a Product"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};

export default Products;
