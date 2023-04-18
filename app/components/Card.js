import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

function Card({ image, title, subtitle }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
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
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 190,
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
