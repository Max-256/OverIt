import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color={colors.primary}
          onPress={() => console.log("login")}
        />
        <AppButton
          title="register"
          color={colors.secondary}
          onPress={() => console.log("register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  buttonsContainer: {
    width: "100%",
    padding: 13,
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
  tagline: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default WelcomeScreen;
