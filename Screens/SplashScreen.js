import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";

import normalize from "react-native-normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SplashScreenIcon from "../assets/Icons/SplashScreenIcon";
import Colors from "../assets/Style/Colors";

function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_logo}>
        <SplashScreenIcon />
        <Text style={styles.text}>Le troc participatif et solidaire</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_green,
    paddingTop: hp("29.8%"),
  },
  wrapper_logo: {
    marginHorizontal: normalize(55),
  },
  text: {
    // fontFamily: Pangolin Regular
    fontSize: normalize(21.4),
    color: Colors.splash_screen_text,
    marginTop: normalize(41),
    letterSpacing: wp(-0.24),
  },
});

export default SplashScreen;
