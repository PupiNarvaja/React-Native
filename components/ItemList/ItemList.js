import React from "react";
import { FlatList } from "react-native";
import { styles } from "./styles";

const ItemList = ({ data, renderItem, keyExtractor, showsVerticalScrollIndicator }) => {
  return (
    <FlatList
      style={styles.itemList}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    />
  )
}

export default ItemList;
