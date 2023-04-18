import React from "react";
import { FlatList, Text } from "react-native";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../components/Icon";

function MyAccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <Icon name="email" size={50} backgroundColor="gray" iconColor="white" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;
