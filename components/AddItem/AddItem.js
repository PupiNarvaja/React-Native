import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const AddItem = ({ item, title, onChangeText, placeholder, addItem, selectionColor, color }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        selectionColor={selectionColor}
        onChangeText={onChangeText}
        value={item}
      />
      <Button title={title} onPress={addItem} color={color} />
    </View>
  );
};

export default AddItem;
