import React from "react";
import { View, StyleSheet } from "react-native";
import Stats from "./Stats";
import RepoInfo from "./RepoInfo";

const styles = StyleSheet.create({
  repoItem: {
    backgroundColor: "white",
    paddingBottom: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.repoItem}>
      <RepoInfo item={item} />
      <Stats item={item} />
    </View>
  );
};

export default RepositoryItem;
