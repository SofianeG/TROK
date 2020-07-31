import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImagePropTypes,
  processColor,
} from "react-native";

import normalize from "react-native-normalize";

const Input = ({ placeholder, style }) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={([styles.input], { fontSize: normalize(12) })}
        autoCapitalize={"none"}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: normalize(20, "height"),
  },
});
