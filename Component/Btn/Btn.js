import React from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../../assets/Style/Colors";

import normalize from "react-native-normalize";

const Btn = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.btn,
          {
            backgroundColor: props.backgroundColor,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
          },
        ]}
      >
        <Text
          style={[
            styles.btn_text,
            {
              backgroundColor: props.backgroundColor,
              color: props.color,
              alignContent: props.alignContent,
              alignItems: props.alignItems,
              fontSize: props.fontSize,
            },
          ]}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    height: normalize(42),
    borderRadius: normalize(26),
    backgroundColor: Colors.btn_AccountScreenValidate,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: normalize(70),
  },
  btn_text: {
    color: Colors.main_white,
    // font-family: Open Sans Regular;
    fontSize: normalize(16),
  },
});
