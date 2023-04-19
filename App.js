import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <Screen>
      <AppPicker />
    </Screen>
  );
}

const styles = StyleSheet.create({});
