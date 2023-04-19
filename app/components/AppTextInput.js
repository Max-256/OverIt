import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} size={18} name={icon} />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 3,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
  textInput: {
    fontSize: 17,
  },
});

export default AppTextInput;
