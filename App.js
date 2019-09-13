import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class App extends Component {
  state = {};

  render() {
    const { appContainer } = styles;

    return (
      <View style={appContainer}>
        <Text>My New Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
