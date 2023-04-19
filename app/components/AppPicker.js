import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Modal,
  Button,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "../components/AppText";
import { TouchableWithoutFeedback } from "react-native";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, selectedItem, onSelectItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons style={styles.icon} size={20} name={icon} />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : "Category"}
          </AppText>

          <MaterialCommunityIcons
            style={{ color: colors.medium }}
            size={20}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 8,
    color: colors.medium,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
