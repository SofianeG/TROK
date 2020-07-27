import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import GoogleIcon from "../../assets/Icons/googleIcon/GoogleIcon";
import FacebookIcon from "../../assets/Icons/facebookIcon/FacebookIcon";

const CustomButton = (props) => {
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
    width: 236,
    borderRadius: 26,
    height: 52,
    paddingVertical: 16,
  },
});

export default CustomButton;
