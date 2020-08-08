import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AccountPictureIcon from "../assets/Icons/AccountPictureIcon";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Header from "../Component/Header";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AccountPictureScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper_green_line}>
        <Text style={styles.green_line}>-</Text>
      </View>
      <View style={styles.wrapper_bottom}>
        <Text style={styles.choose_picture}>choisir ma photo </Text>
        <Text style={styles.more_chance_picture}>
          Vous aurez plus de chance d’échanger avec votre photo !
        </Text>
        <View style={styles.icon}>
          <AccountPictureIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_green_line: {
    paddingTop: normalize(10),
  },
  green_line: {
    backgroundColor: Colors.main_green,
    lineHeight: normalize(2),
  },
  wrapper_bottom: {
    marginHorizontal: normalize(15),
    height: hp("82%"),
    paddingTop: normalize(30),
  },
  choose_picture: {
    color: Colors.main_green,
    fontSize: normalize(16),
    // font-family: Open Sans Bold;
  },
  more_chance_picture: {
    marginVertical: normalize(11),
    color: Colors.main_grey,
    fontSize: normalize(12),
    width: normalize(309),
    // font-family: Open Sans Regular;
  },
  icon: {
    paddingTop: normalize(43),
    alignItems: "center",
  },
});

export default AccountPictureScreen;
