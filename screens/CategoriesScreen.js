import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    const category = itemData.item;

    return (
      <CategoryGridTile
        itemData={itemData}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: category.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={({ id }) => id.toString()}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    ></FlatList>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Categories"
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
