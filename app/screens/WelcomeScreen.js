import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell what you are done with.</Text>
      </View>

      <View style={{ width: "100%", backgroundColor: "tomato", height: 40 }} />
      <View style={{ width: "100%", backgroundColor: "skyblue", height: 40 }} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageContainer: {
    alignItems: "center",
    top: -350,
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default WelcomeScreen;
