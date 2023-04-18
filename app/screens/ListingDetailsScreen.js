import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/couch.jpg")} />
      <View style={styles.stylesContainer}>
        <AppText style={styles.title}>Red Jacket for Sale</AppText>
        <AppText style={styles.price}>$ 100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  image: {
    width: "100%",
    height: 300,
  },
  stylesContainer: {
    padding: 10,
  },
  title: {
    fontSize: 17,
  },
  price: {
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 25,
  },
});

export default ListingDetailsScreen;
