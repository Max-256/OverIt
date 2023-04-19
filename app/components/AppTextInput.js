import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} size={20} name={icon} />
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
    paddingLeft: 10,
  },
  icon: {
    marginRight: 8,
    color: colors.medium,
  },
  textInput: {
    fontSize: 17,
    color: colors.dark,
  },
});

export default AppTextInput;
