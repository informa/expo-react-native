import * as React from "react";
import { Text, View, Platform, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import FlatListDemo from "./FlatListDemo";
import FlexDemo from "./FlexDemo";
import CardDemo from "./CardDemo";
import AnimationDemo from "./AnimationDemo";

const ios = Platform.OS === "ios";

const TextButton = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: "royalblue",
        alignSelf: "center",
        borderRadius: 5,
        margin: 20,
        ...style,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{children}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Home!</Text>
      <TextButton
        onPress={() => {
          props.navigation.navigate("Flat List Demo");
        }}
      >
        Flat List Demo
      </TextButton>
      <TextButton
        onPress={() => {
          props.navigation.navigate("Flex Demo");
        }}
      >
        Flex Demo
      </TextButton>
      <TextButton
        onPress={() => {
          props.navigation.navigate("Animation Demo");
        }}
      >
        Animation Demo
      </TextButton>
      <TextButton
        onPress={() => {
          props.navigation.navigate("Card Demo");
        }}
      >
        Card Demo
      </TextButton>
    </View>
  );
};

const SettingsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Settings!</Text>
      <TextButton
        onPress={() => {
          props.navigation.navigate("ChildScreen");
        }}
      >
        Go to child screen
      </TextButton>
    </View>
  );
};

const ChildScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>Child screen!</Text>
    </View>
  );
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = ios ? createBottomTabNavigator() : createMaterialTopTabNavigator();

const TabNavigation = ({ navigation }) => {
  const iosTabStyle = ios && {
    tabStyle: {
      height: 50,
    },
  };

  const iosTabBarStyle = ios && {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const tabConfig = {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      ...iosTabStyle,
      activeTintColor: Platform.OS === "ios" ? "dodgerblue" : "white",
      pressColor: "skyblue",
      indicatorStyle: {
        backgroundColor: "yellow",
      },
      style: {
        ...iosTabBarStyle,
        flex: 0,
        height: Platform.OS === "ios" ? 120 : 56,
        backgroundColor: Platform.OS === "ios" ? "white" : "royalblue",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  };

  const TabRouteConfig = {
    HomeScreen: {
      name: "HomeScreen",
      component: HomeScreen,
      options: {
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-bookmarks" size={30} color={color} />
        ),
        title: "HomeScreen",
      },
    },
    SettingsScreen: {
      component: SettingsScreen,
      name: "SettingsScreen",
      options: {
        tabBarIcon: ({ color }) => (
          <FontAwesome name="plus-square" size={30} color={color} />
        ),
        title: "SettingsScreen",
      },
    },
  };

  return (
    <Tab.Navigator {...tabConfig}>
      <Tab.Screen {...TabRouteConfig["HomeScreen"]} />
      <Tab.Screen {...TabRouteConfig["SettingsScreen"]} />
    </Tab.Navigator>
  );
};

const StackNavigation = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TabNavigation}
      options={{
        headerTitleAlign: "center",
        headerLeftContainerStyle: { paddingLeft: 20 },
        headerLeft: () => (
          <Ionicons
            name="md-menu"
            size={24}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <Stack.Screen name="Flat List Demo" component={FlatListDemo} />
    <Stack.Screen name="Flex Demo" component={FlexDemo} />
    <Stack.Screen name="Animation Demo" component={AnimationDemo} />
    <Stack.Screen name="Card Demo" component={CardDemo} />
    <Stack.Screen name="ChildScreen" component={ChildScreen} />
  </Stack.Navigator>
);

const NavigationDemo = ({ navigation }) => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={StackNavigation} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default NavigationDemo;
