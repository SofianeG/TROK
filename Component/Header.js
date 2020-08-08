import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import ArrowIcon from "../assets/Icons/ArrowIcon";

import Colors from "../assets/Style/Colors";

import normalize from "react-native-normalize";

const Header = () => {
  return (
    <View style={styles.wrapper_top}>
      <TouchableOpacity>
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper_top: {
    backgroundColor: Colors.main_green,
    height: normalize(70),
    paddingTop: normalize(31),
    paddingLeft: normalize(11),
  },
});
