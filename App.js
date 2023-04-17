import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";

export default function App() {
  const handlePress = () => {
    console.log("button Pressed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppButton title="login" onPress={handlePress} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({});
