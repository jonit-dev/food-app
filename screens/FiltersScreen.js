import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = props => {
  const { filtersScreenContainer } = styles;
  const {} = props;

  return (
    <View style={filtersScreenContainer}>
      <Text>Some text here</Text>
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
    )
  };
};

const styles = StyleSheet.create({
  filtersScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FiltersScreen;
