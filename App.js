import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigationDemo from "./components/NavigationDemo";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <NavigationDemo />
    </SafeAreaView>
  );
}
