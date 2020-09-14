import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import data from "../data/data";

const User = ({ name, bio, avatar }) => {
  return (
    <View style={styles.user}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View>
        <Text style={{ fontSize: 20 }}>{name}</Text>
        <Text>{bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    margin: 10,
    flexDirection: "row",
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

const FlatListDemo = (props) => {
  const renderItem = ({ item }) => {
    return <User {...item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default FlatListDemo;
