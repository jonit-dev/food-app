import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FavoritesScreen = props => {
  const { favoritesScreenContainer } = styles;
  const {} = props;

  return (
    <View style={favoritesScreenContainer}>
      <Text>[FAVORITES SCREEN]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoritesScreen;
