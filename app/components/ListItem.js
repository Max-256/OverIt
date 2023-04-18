import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
  },
  details: {
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
