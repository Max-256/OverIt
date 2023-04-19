import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} size={20} name={icon} />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
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
    marginVertical: 20,
  },
  icon: {
    marginRight: 8,
    color: colors.medium,
  },
});

export default AppTextInput;
