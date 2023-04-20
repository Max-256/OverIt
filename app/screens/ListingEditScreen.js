import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppPicker from "../components/AppPicker";
import { Alert } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(50).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().required().min(3).label("Description"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function ListingEditScreen(props) {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
        }}
        onSubmit={(values) => {
          if (!selectedItem) {
            Alert.alert("Please select a category");
            return;
          }
          console.log({ ...values, category: selectedItem.label });
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          name="title"
          placeholder="Title"
        />

        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="number-pad"
          name="price"
          placeholder="price"
        />

        <AppPicker
          icon="apps"
          items={categories}
          selectedItem={selectedItem}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="description"
        />

        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ListingEditScreen;
