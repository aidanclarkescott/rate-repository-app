import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { useHistory } from "react-router-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import AppBarTabFlex from "./AppBarTabFlex";
import { useQuery, useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { AUTHORIZED_USER } from "../graphql/queries";

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
  const { data, loading } = useQuery(AUTHORIZED_USER);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();

  if (loading) return null;
  const { authorizedUser: user } = data;

  const signOut = async () => {
    history.push("/sign-in");
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {user && <AppBarTab tabText="Repositories" link="/" />}
        {!user && <AppBarTab tabText="Sign In" link="/sign-in" />}
        {user && <AppBarTabFlex tabText="Sign Out" handler={signOut} />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
