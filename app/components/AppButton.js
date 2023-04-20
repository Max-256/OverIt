import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppButton({ title, onPress, color = colors.primary }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    textTransform: "uppercase",
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default AppButton;
