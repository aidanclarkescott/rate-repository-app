import React from "react";
import Text from "./Text";
import { Pressable } from "react-native";

const AppBarTabFlex = ({ tabText, handler }) => {
  return (
    <Pressable onPress={handler}>
      <Text
        fontWeight="bold"
        fontSize="subheading"
        style={[
          {
            color: "white",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 20,
            paddingBottom: 20,
          },
        ]}
      >
        {tabText}
      </Text>
    </Pressable>
  );
};

export default AppBarTabFlex;
