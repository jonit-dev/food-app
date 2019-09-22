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
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
