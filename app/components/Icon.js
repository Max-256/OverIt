import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        iconColor,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5,
      }}
    >
      <MaterialCommunityIcons color={iconColor} size={size / 2} name={name} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Icon;
