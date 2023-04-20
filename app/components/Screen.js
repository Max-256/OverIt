import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

export default function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});
