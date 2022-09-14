import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleSearch = (text) => setSearchValue(text);

  const addItem = () => {
    setItemList((prevItems) => [
      ...prevItems,
      {
        id: Date.now(), //Encontrar un algoritmo más adecuado.
        value: searchValue,
      },
    ]);
    setSearchValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          selectionColor={"#d52b1e"}
          onChangeText={handleSearch}
          value={searchValue}
        />
        <Button
          title="+"
          onPress={addItem}
          color="#d52b1e"
        />
      </View>
      <View style={styles.itemList}>
        {itemList.map((item) => (
          <View key={`item-${item.id}`} style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 30,
  },
  input: {
    width: "75%",
    borderBottomColor: "#d52b1e",
    borderBottomWidth: 2,
    height: 40,
    color: "#212121",
    fontSize: 16,
  },
  itemList: {
    marginHorizontal: 20,
  },
  itemContainer: {
    marginVertical: 5,
  },
  item: {
    color: "#212121",
    fontSize: 16,
  },
});
