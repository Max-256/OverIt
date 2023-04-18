import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipable from "react-native-gesture-handler/Swipeable";

function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  style,
}) {
  return (
    <GestureHandlerRootView>
      <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container, style]}>
            <Image source={image} style={styles.image} />

            <View style={styles.details}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipable>
    </GestureHandlerRootView>
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
