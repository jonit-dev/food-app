import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { Colors } from "../constants/colors";

const DefaultSwitch = props => {
  const { filterContainer } = styles;

  return (
    <View style={filterContainer}>
      <Text>{props.children}</Text>
      <Switch
        value={props.state}
        trackColor={{
          true: Colors.primary
          // false: Colors.accent
        }}
        thumbColor={Colors.accent}
        onValueChange={newValue => props.onChange(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  }
});

export default DefaultSwitch;
