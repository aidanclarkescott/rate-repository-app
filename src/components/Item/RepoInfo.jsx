import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 15,
  },
  top: {
    display: "flex",
    flexDirection: "row",
  },
  languageBox: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 8,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    color: "white",
    padding: 4,
    paddingTop: 3,
  },
  description: {
    paddingTop: 6,
  },
});

const RepoInfo = ({ item }) => {
  return (
    <View style={styles.top}>
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />

      <View>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={[{ paddingTop: 17 }]}
        >
          {item.fullName}
        </Text>
        <Text style={[styles.description]}>{item.description}</Text>
        <View style={styles.languageBox}>
          <Text style={[styles.language]}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepoInfo;
