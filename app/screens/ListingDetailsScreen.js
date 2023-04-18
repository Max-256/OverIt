import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import Card from "../components/Card";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for sale"
        subtitle="$ 100"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 7,
    paddingTop: 30,
  },
});

export default ListingDetailsScreen;
