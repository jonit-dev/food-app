import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import { MEALS } from "../data/dummy-data";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
  const { mealDetailsScreen } = styles;
  const mealId = props.navigation.getParam("mealId");

  const { title } = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={mealDetailsScreen}>
      <Text>{title}</Text>
      <Button
        title="Get out of here!!!"
        onPress={() => {
          props.navigation.goBack();
        }}
      ></Button>
      <Button
        title="Back to top!"
        onPress={() => props.navigation.popToTop()}
      ></Button>
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => console.log("mark as favourite")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  mealDetailsScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailsScreen;
