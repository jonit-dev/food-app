import { Colors } from "./colors";
import { Platform } from "react-native";

const Headers = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.accent
  },
  headerTintColor: "white"
};
export { Headers };
