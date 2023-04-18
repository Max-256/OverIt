import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 5,
  },
});

export default ListingDetailsScreen;
