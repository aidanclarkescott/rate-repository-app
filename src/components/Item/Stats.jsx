import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  stats: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 16,
    paddingBottom: 4,
  },
  statItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Stats = ({ item }) => {
  const formatNumber = (number) => {
    return number > 1000 ? Math.round((number / 1000) * 10) / 10 + "k" : number;
  };

  return (
    <View style={styles.stats}>
      <View style={styles.statItem}>
        <Text fontWeight="bold" style={[{ paddingBottom: 5 }]}>
          {formatNumber(item.stargazersCount)}
        </Text>
        <Text>Stars</Text>
      </View>

      <View style={styles.statItem}>
        <Text fontWeight="bold" style={[{ paddingBottom: 5 }]}>
          {formatNumber(item.forksCount)}
        </Text>
        <Text>Forks</Text>
      </View>

      <View style={styles.statItem}>
        <Text fontWeight="bold" style={[{ paddingBottom: 5 }]}>
          {formatNumber(item.reviewCount)}
        </Text>
        <Text>Reviews</Text>
      </View>

      <View style={styles.statItem}>
        <Text fontWeight="bold" style={[{ paddingBottom: 5 }]}>
          {formatNumber(item.ratingAverage)}
        </Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default Stats;
