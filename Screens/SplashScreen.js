import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import SplashScreenIcon from "../assets/Icons/SplashScreenIcon";
import normalize from "react-native-normalize";

import Colors from "../assets/Style/Colors";

function SplashScreen() {
  return (
    <View style={styles.container}>
      <View>
        <SplashScreenIcon />
      </View>
      <Text style={styles.text}>Le troc participatif et solidaire</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main_green,
    height: normalize(812),
    width: normalize(375),
    paddingHorizontal: normalize(54),
    paddingTop: normalize(242),
  },
  text: {
    // fontFamily: Pangolin Regular
    fontSize: normalize(21.4),
    color: Colors.splash_screen_text,
    paddingTop: normalize(41),
    letterSpacing: -0.24, //le normalize ne passe pas ici avec une valeur negative
    lineHeight: normalize(28),
  },
});

export default SplashScreen;
