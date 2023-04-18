import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  const handlePress = () => {
    console.log("button Pressed");
  };

  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({});
