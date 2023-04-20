import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  style,
  IconComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}

            <View style={styles.details}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
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
    alignItems: "center",
  },
  details: {
    justifyContent: "center",
    flex: 1,
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
