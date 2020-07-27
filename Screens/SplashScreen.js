import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import SplashScreenIcon from "../assets/Icons/SplashScreenIcon";
import normalize from "react-native-normalize";

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
    backgroundColor: "#40CE6A",
    height: normalize(812),
    width: normalize(375),
    paddingHorizontal: normalize(54),
    paddingTop: normalize(242),
  },
  text: {
    fontSize: 21.6,
    color: "#FFFFFF",
    paddingTop: normalize(41),
    letterSpacing: -0.24,
    lineHeight: 28,
  },
});

export default SplashScreen;
