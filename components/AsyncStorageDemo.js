import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { getData, storeData, removeData } from "../util/api";

class AsyncStorageDemo extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.handleReadData();
  }

  handleAddData = () => {
    const key = Date.now();

    console.log("add", key);

    const value = {
      name: "Tom",
      age: 20,
      traits: {
        hair: "black",
        eyes: "blue",
      },
    };

    storeData({ value, key }).then(() => {
      this.handleReadData();
    });
  };

  handleReadData = () => {
    getData().then((results) => {
      console.log("read", results);
      this.setState(() => ({ data: results }));
    });
  };

  handleRemoveData = () => {
    console.log("remove");

    removeData(1600264773472).then(() => {
      this.handleReadData();
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button onPress={this.handleAddData} title="Add Data" color="#841584" />
        <Button
          onPress={this.handleReadData}
          title="Read Data"
          color="#841584"
        />
        <Button
          onPress={this.handleRemoveData}
          title="Remove Data"
          color="#841584"
        />
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}

export default AsyncStorageDemo;
