import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { Platform } from "react-native";
import { Colors } from "../constants";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  MealsStackNavigator,
  favoriteStackNavigator,
  FiltersStackNavigator
} from "./StackNavigators/StackNavigators";
import { Text } from "react-native";

const tabBarLabelStyle = {
  fontFamily: "open-sans-bold"
};

const tabScreenConfig = {
  Meals: {
    screen: MealsStackNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={tabBarLabelStyle}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favorites: {
    screen: favoriteStackNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!", //you can overwrite the default label
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent
    }
  }
};

// Tab navigator ========================================
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accent,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Colors.accent
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    FavMeals: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Favorites"
      }
    },
    Filters: {
      screen: FiltersStackNavigator,
      navigationOptions: {
        drawerLabel: "Filters"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans"
      }
    }
  }
);

//see how we export the TAB navigator here (Stack navigator goes nested inside it!)
export default createAppContainer(MainNavigator);
