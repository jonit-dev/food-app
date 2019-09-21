import React, { Component } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator";
import { useScreens } from "react-native-screens";

useScreens(); //improve screens transition performance.

export default class App extends Component {
  state = { dataLoaded: false };

  onFetchFonts() {
    return Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });
  }

  render() {
    if (!this.state.dataLoaded) {
      return (
        <AppLoading
          startAsync={() => this.onFetchFonts()}
          onFinish={() => this.setState({ dataLoaded: true })}
          onError={err => console.log(err)}
        />
      );
    } else {
      return <MealsNavigator />;

      // return (
      //   <View style={appContainer}>
      //     <Text style={Typography.p}>My New Component</Text>
      //   </View>
      // );
    }
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
