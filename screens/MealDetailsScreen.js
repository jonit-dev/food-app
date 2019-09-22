import React from "react";
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from "react-native";

import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { Typography } from "../constants/typography";

const MealDetailsScreen = props => {
  const {
    titleStyle,
    textStyle,
    imageStyle,
    detailsStyle,
    listItemStyle
  } = styles;
  const mealId = props.navigation.getParam("mealId");

  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps
  } = MEALS.find(meal => meal.id === mealId);

  const ListItem = props => {
    return (
      <View style={listItemStyle}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    );
  };

  const onRenderIngredientsList = ingredients => {
    return ingredients.map(ingredient => (
      <ListItem key={ingredient}>{ingredient}</ListItem>
    ));
  };

  const onRenderSteps = steps => {
    return steps.map(step => <ListItem key={step}>{step}</ListItem>);
  };

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={imageStyle} />
      <View style={detailsStyle}>
        <DefaultText>{duration}min</DefaultText>
        <DefaultText>{complexity.toUpperCase()}</DefaultText>
        <DefaultText>{affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={titleStyle}>Ingredients</Text>
      {onRenderIngredientsList(ingredients)}
      <Text style={titleStyle}>Steps</Text>
      {onRenderSteps(steps)}
    </ScrollView>
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
  imageStyle: {
    width: "100%",
    height: 200
  },
  listItemStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#CCC",
    borderWidth: 1,
    padding: 10
  },
  titleStyle: {
    fontFamily: "open-sans-bold",
    textAlign: "center"
  },
  textStyle: {
    textAlign: "center"
  },
  detailsStyle: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  }
});

export default MealDetailsScreen;
