import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "grey",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ error, ...props }) => {
  const textInputStyle = [styles.inputField, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
