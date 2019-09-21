import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const CategoryGridTile = props => {
  const { gridItem, gridStyle, gridTitle } = styles;

  const { itemData } = props;

  const category = itemData.item;

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={gridItem}>
      <TouchableComponent
        style={{ height: 150 }}
        onPress={() => props.onSelect()}
      >
        <View style={{ ...gridStyle, ...{ backgroundColor: category.color } }}>
          <Text style={gridTitle} numberOfLines={2}>
            {category.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21 ? "hidden" : "visible"
  },
  gridStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    padding: 10
  },
  gridTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    color: "white",
    textAlign: "right"
  }
});

export default CategoryGridTile;
