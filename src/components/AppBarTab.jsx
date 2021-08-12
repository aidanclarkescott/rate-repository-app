import React from "react";
import Text from "./Text";
import { Link } from "react-router-native";

const AppBarTab = ({ tabText, link }) => {
  return (
    <Link to={link}>
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
    </Link>
  );
};

export default AppBarTab;
