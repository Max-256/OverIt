import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" items={categories} />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
