import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import ArrowIcon from "../assets/Icons/ArrowIcon";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import { Checkbox } from "react-native-paper";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AccountFinishScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <TouchableOpacity>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper_green_line}>
        <Text style={styles.green_line}>-</Text>
      </View>
      <View style={styles.wrapper_bottom}>
        <View>
          <Text style={styles.to_finish}>Pour finir !</Text>
          <Text style={styles.gender}>Vous êtes </Text>
          <View style={styles.wrapper_gender_man}>
            <Checkbox status="Unchecked" />
            <View style={styles.gender_man}>
              <Text style={styles.man}>Un homme</Text>
            </View>
          </View>
          <View style={styles.wrapper_gender_woman}>
            <Checkbox status="checked" />
            <View style={styles.gender_woman}>
              <Text style={styles.woman}>Une femme</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btn_text}>Terminer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_top: {
    backgroundColor: Colors.main_green,
    height: normalize(70),
    paddingTop: normalize(31),
    paddingLeft: normalize(11),
  },
  wrapper_green_line: {
    paddingTop: normalize(10),
  },
  green_line: {
    backgroundColor: Colors.main_green,
    lineHeight: normalize(2),
  },
  wrapper_bottom: {
    marginHorizontal: normalize(15),
    height: hp("75%"),
    paddingTop: normalize(30),
    justifyContent: "space-between",
  },
  to_finish: {
    color: Colors.main_green,
    fontSize: normalize(16),
    // font-family: Open Sans Bold;
  },
  gender: {
    marginVertical: normalize(11),
    color: Colors.main_grey,
    fontSize: normalize(12),
    // font-family: Open Sans Regular;
  },
  wrapper_gender_man: {
    display: "flex",
    flexDirection: "row",
  },
  wrapper_gender_woman: {
    display: "flex",
    flexDirection: "row",
  },
  gender_man: {
    paddingLeft: normalize(7),
    justifyContent: "center",
  },
  gender_woman: {
    paddingLeft: normalize(7),
    justifyContent: "center",
  },
  man: {
    fontSize: normalize(12),
    // font-family: Open Sans Regular;
  },
  woman: {
    fontSize: normalize(12),
    // font-family: Open Sans Regular;
  },
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

export default AccountFinishScreen;
