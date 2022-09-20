import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { AddItem, CustomModal, ItemList, Item } from "./components/index";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (text) => setSearchValue(text);

  const addItem = () => {
    setItems((prevItems) => [ // Al usar el callback, se mantiene una copia fiel del estado previo.
      ...prevItems,
      {
        id: Date.now(), // Encontrar un algoritmo más adecuado.
        value: searchValue,
      },
    ]);
    setSearchValue("");
  };
  
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id != id));
    setSelectedItem(null);
    setOpenModal((prev) => !prev);
  };

  const openDeleteModal = (id) => {
    setOpenModal((prev) => !prev);
    setSelectedItem(items.find((item) => item.id == id));
  };
  
  const closeDeleteModal = () => setOpenModal((prev) => !prev);

  const renderItem = ({ item }) => (
    <Item item={item} openDeleteModal={openDeleteModal} />
  );

  return (
    <View style={styles.container}>
      <AddItem
        item={searchValue}
        title="Add"
        onChangeText={handleSearch}
        placeholder="New item"
        addItem={addItem}
        selectionColor="#d52b1e"
        color="#d52b1e"
      />
      <ItemList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <CustomModal visible={openModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalMsg}>
           <Text>¿Estas seguro de que quieres eliminar "{selectedItem?.value}"?</Text>
        </View>
        <View style={styles.actionBtns}>
          <Button
            title="Delete"
            onPress={() => deleteItem(selectedItem?.id)}
          />
          <Button
            title="Cancelar"
            onPress={closeDeleteModal}
          />
        </View>
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems:"center",
    paddingVertical: 20,
    marginTop: 20,
  },
  modalTitle: {
    justifyContent: "center",
    alignItems:"center",
    paddingVertical: 20,
  },
  modalMsg: {
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
});

// Render Item