import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>Red Jacket for sale</Text>
        <Text style={styles.subtitle}>$ 100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;
