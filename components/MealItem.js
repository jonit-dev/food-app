import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import { Typography } from "../constants/typography";

const MealItem = props => {
  const {
    mealItem,
    mealRow,
    mealHeader,
    mealDetail,
    mealImage,
    mealTitle
  } = styles;
  const {
    id,
    title,
    duration,
    complexity,
    affordability,
    imageUrl
  } = props.item;

  return (
    <View key={id} style={mealItem}>
      <TouchableOpacity onPress={() => props.onSelectMeal()}>
        <View>
          <View style={{ ...mealRow, ...mealHeader }}>
            <ImageBackground source={{ uri: imageUrl }} style={mealImage}>
              <Text style={mealTitle} numberOfLines={1}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...mealRow, ...mealDetail }}>
            <Text style={{ ...Typography.p, ...{ fontSize: 12 } }}>
              {duration}min
            </Text>
            <Text style={{ ...Typography.p, ...{ fontSize: 12 } }}>
              {complexity.toUpperCase()}
            </Text>
            <Text style={{ ...Typography.p, ...{ fontSize: 12 } }}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    padding: 10
  },
  mealTitle: {
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",

    marginLeft: 5,
    fontFamily: "open-sans-bold",
    fontSize: 15,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  mealImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  mealRow: {},
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default MealItem;
