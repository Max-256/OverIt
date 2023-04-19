import { StyleSheet } from "react-native";
import Screen from "./app/components/Screen";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const [category, setCategory] = useState();

  return <LoginScreen />;
}

const styles = StyleSheet.create({});
