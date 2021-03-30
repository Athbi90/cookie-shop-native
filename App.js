import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";

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
export default function App() {
  return (
    <ThemeProvider theme={theme["dark"]}>
      <Home />
    </ThemeProvider>
  );
}
