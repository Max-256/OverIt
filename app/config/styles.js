import colors from "./colors";
import { Platform } from "react-native";

export default {
  text: {
    color: colors.dark,
    fontSize: 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
