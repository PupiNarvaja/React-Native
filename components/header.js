import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../consts/colors';


const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 100,
    marginTop: 80,
    marginHorizontal: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Figtree-Regular",
    color: colors.TEXT,
  },
})