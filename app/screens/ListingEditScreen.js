import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          autoCorrect={false}
          autoCapitalize="none"
          name="title"
          placeholder="Title"
        />

        <AppFormField
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="numeric"
          name="price"
          placeholder="price"
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />

        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={2}
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
