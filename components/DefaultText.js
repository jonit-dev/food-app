import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = props => {
  const { defaultTextStyle } = styles;

  return (
    <Text style={{ ...props.style, ...defaultTextStyle }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: "open-sans"
  }
});

export default DefaultText;
