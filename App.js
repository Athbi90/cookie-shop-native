import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import CookieItem from "./components/CookieItem";
import CookieList from "./components/CookieList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme.dark}>
        <NavigationContainer>
          <Navigator initialRouteName="Home">
            <Screen name="OtherHome" component={CookieItem} />
            <Screen name="Home" component={Home} />
            <Screen name="List" component={CookieList} />
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
