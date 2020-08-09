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
          },
        ]}
      >
        <Text
          style={[
            styles.btn_text,
            {
              backgroundColor: props.backgroundColor,
              color: props.color,
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
    marginHorizontal: normalize(80),
    color: Colors.main_white,
    // font-family: Open Sans Regular;
    fontSize: normalize(16),
    width: normalize(72),
  },
});
