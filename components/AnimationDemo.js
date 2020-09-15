import React from "react";
import { View, Animated, Image, StyleSheet } from "react-native";

class AnimationDemo extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    scale: new Animated.Value(0),
  };
  componentDidMount() {
    const { opacity, scale } = this.state;

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.spring(scale, {
      toValue: 1,
      speed: 5,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { opacity, scale } = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: "https://picsum.photos/200/200" }}
          style={[styles.image, { opacity, transform: [{ scale: scale }] }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 25,
    backgroundColor: "yellow",
  },
});

export default AnimationDemo;
