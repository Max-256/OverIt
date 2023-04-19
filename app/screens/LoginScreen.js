import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <AppButton title="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
