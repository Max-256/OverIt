import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you don't need</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "tomato", height: 40 }} />
      <View style={{ width: "100%", backgroundColor: "skyblue", height: 40 }} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default WelcomeScreen;
