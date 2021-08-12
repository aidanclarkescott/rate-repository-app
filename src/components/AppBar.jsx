import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.headerBackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabText="Repositories" link="/" />
        <AppBarTab tabText="Sign In" link="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
