import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { Colors } from "../../constants";
import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";
import MealDetailsScreen from "../../screens/MealDetailsScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";
import FiltersScreen from "../../screens/FiltersScreen.js";

// Configuration ========================================

const defaultNavigationOptionsConfig = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.accent
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  }
};

// Stack navigators ========================================

const MealsStackNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: {
      screen: MealDetailsScreen
    }
  },
  {
    // initialRouteName: 'CategoryMeals', //with this option you can specify which route will be triggered first!
    defaultNavigationOptions: defaultNavigationOptionsConfig
  }
);

const favoriteStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultNavigationOptionsConfig
  }
);

const FiltersStackNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultNavigationOptionsConfig
  }
);

export { MealsStackNavigator, favoriteStackNavigator, FiltersStackNavigator };
