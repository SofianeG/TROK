import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Header from "../Component/Header/Header";
import Btn from "../Component/Btn/Btn";
import { Checkbox } from "react-native-paper";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AccountFinishScreen() {
  return (
    <View style={styles.container}>
      <Header />
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
        <Btn
          text="Terminer"
          backgroundColor={Colors.btn_AccountScreenValidate}
        />
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
});

export default AccountFinishScreen;
