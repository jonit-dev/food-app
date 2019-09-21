import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FiltersScreen = props => {
  const { filtersScreenContainer } = styles;
  const {} = props;

  return (
    <View style={filtersScreenContainer}>
      <Text>Some text here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filtersScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FiltersScreen;
