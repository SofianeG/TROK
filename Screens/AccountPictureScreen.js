import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import AccountPictureIcon from "../assets/Icons/AccountPictureIcon";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Btn from "../Component/Btn/Btn";
import Header from "../Component/Header/Header";

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
        <View>
          <Text style={styles.choose_picture}>choisir ma photo </Text>
          <Text style={styles.more_chance_picture}>
            Vous aurez plus de chance d’échanger avec votre photo !
          </Text>
          <View style={styles.icon}>
            <AccountPictureIcon />
            <Text style={styles.icon_name_person}>Marion_B</Text>
          </View>
        </View>
        <View>
          <View>
            <Btn
              text="Ajouter une photo"
              backgroundColor={Colors.btn_AccountScreenValidate}
              color={Colors.main_white}
              justifyContent="center"
              fontSize={normalize(16)}
            />
          </View>
          <View style={styles.move_on}>
            <Btn
              text="Passer"
              backgroundColor={Colors.main_white}
              color={Colors.btn_PictureScreen_move_on}
              borderColor={Colors.btn_PictureScreen_move_on}
              borderWidth={1}
              fontSize={normalize(16)}
            />
          </View>
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
    justifyContent: "space-between",
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
  icon_name_person: {
    paddingTop: normalize(11),
    color: Colors.main_grey,
  },
  move_on: {
    paddingTop: normalize(18),
  },
});

export default AccountPictureScreen;
