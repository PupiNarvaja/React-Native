import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Item = ({ item, openDeleteModal }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.item}>{item.value}</Text>
    <TouchableOpacity onPress={() => openDeleteModal(item.id)}>
      <Text style={styles.deleteBtn}>X</Text>
    </TouchableOpacity>
  </View>
)

export default Item;