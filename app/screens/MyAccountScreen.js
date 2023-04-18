import React from "react";
import { FlatList, Text } from "react-native";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <ListItem
        title="Mosh Hamedani"
        subtitle="react-native@gmail.com"
        image={require("../assets/mosh.jpg")}
        style={styles.background}
      />

      <View style={styles.flatlist}>
        <FlatList
          ItemSeparatorComponent={ListItemSeperator}
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => console.log()}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        style={styles.background}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.light,
  },
  flatlist: {
    backgroundColor: colors.white,
    marginVertical: 35,
  },
});

export default MyAccountScreen;
