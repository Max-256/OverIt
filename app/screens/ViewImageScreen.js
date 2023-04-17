import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.DeleteIcon} />

      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    width: 35,
    height: 35,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 25,
  },
  DeleteIcon: {
    width: 35,
    height: 35,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 25,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ViewImageScreen;
