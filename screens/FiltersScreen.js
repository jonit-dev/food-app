import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Colors } from "../constants/colors";
import DefaultSwitch from "../components/DefaultSwitch";

const FiltersScreen = props => {
  const { screen, titleStyle, filterContainer, filtersStyle } = styles;

  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);


  // useCallback will make sure this appliedFilters would update only when isGlutenFree,isVegan,isLactoseFree or isVegetarian are updated.
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isVegan, isLactoseFree, isVegetarian]);


  // use effect is like a "componentDidUpdate" for a functional component. It runs whenever the component updates.
  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={screen}>
      <Text style={titleStyle}>Available Filters / Restrictions</Text>
      <View style={filtersStyle}>
        <DefaultSwitch
          state={isGlutenFree}
          onChange={newValue => setIsGlutenFree(newValue)}
        >
          Gluten-Free
        </DefaultSwitch>
        <DefaultSwitch
          state={isVegan}
          onChange={newValue => setIsVegan(newValue)}
        >
          Vegan
        </DefaultSwitch>
        <DefaultSwitch
          state={isLactoseFree}
          onChange={newValue => setIsLactoseFree(newValue)}
        >
          Lactose-Free
        </DefaultSwitch>
        <DefaultSwitch
          state={isVegetarian}
          onChange={newValue => setIsVegetarian(newValue)}
        >
          Vegetarian
        </DefaultSwitch>
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  filtersStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  titleStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default FiltersScreen;
