import React from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { Headers } from "../constants";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const { categoryMealsScreenContainer } = styles;

  const categoryId = props.navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(categoryId)
  );
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  const renderMealItem = item => {
    return (
      <MealItem
        item={item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: item.id
            }
          });
        }}
      />
    );
  };

  return (
    <View style={categoryMealsScreenContainer}>
      <FlatList
        data={displayMeals}
        renderItem={({ item, index }) => renderMealItem(item)}
        keyExtractor={({ id }) => id.toString()}
        style={{ width: "100%" }}
      />

      {/* <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate("MealDetail")}
      ></Button> */}
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  categoryMealsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
