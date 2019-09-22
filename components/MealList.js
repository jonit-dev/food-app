import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = props => {
  const { categoryMealsScreenContainer } = styles;

  const { listData, navigation } = props;

  const renderMealItem = item => {
    return (
      <MealItem
        item={item}
        onSelectMeal={() => {
          navigation.navigate({
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
        data={listData}
        renderItem={({ item, index }) => renderMealItem(item)}
        keyExtractor={({ id }) => id.toString()}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryMealsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
