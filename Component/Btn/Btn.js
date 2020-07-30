import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import GoogleIcon from "../../assets/Icons/GoogleIcon/GoogleIcon";
import FacebookIcon from "../../assets/Icons/FacebookIcon/FacebookIcon";

import normalize from "react-native-normalize";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Btn = (props) => {
  return (
    <View
      style={[
        styles.button,
        {
          backgroundColor: props.backgroundColor,
          marginHorizontal: props.marginHorizontal,
          flexDirection: props.flexDirection,
          alignItems: props.alignItems,
          justifyContent: props.justifyContent,
          paddingRight: props.paddingRight,
          paddingHorizontal: props.paddingHorizontal,
        },
      ]}
    >
      <View style={[styles.Logo, { paddingLeft: props.paddingLeft }]}>
        {(title = props.title ? <GoogleIcon /> : <FacebookIcon />)}
      </View>
      <View>
        <Text
          style={[
            styles.text,
            {
              color: props.color,
              fontSize: props.fontSize,
              fontFamily: props.fontFamily,
            },
          ]}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp("63.03%"),
    borderRadius: normalize(26),
    height: normalize(52),
    paddingVertical: hp("1.97%"),
  },
});

export default Btn;
