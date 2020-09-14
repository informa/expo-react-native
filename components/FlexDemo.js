import React from "react";
import { View } from "react-native";

const FlexDemo = (props) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1, backgroundColor: "red" }} />
    <View style={{ flex: 1, backgroundColor: "green" }} />
    <View style={{ height: 50, backgroundColor: "blue" }} />
  </View>
);

export default FlexDemo;
