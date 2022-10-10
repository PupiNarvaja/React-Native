import { FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { selectedCategory } from "../../store/actions";

const Categories = ({ navigation }) => { 
  const dispatch = useDispatch();   // estado global -> reducer -> estados
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", { title: item.title })
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.containerList}
    />
  );
};

export default Categories;
