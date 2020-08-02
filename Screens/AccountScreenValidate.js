import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import ValidateIcon from "../assets/Icons/ValidateIcon/ValidateIcon";
import EyeIcon from "../assets/Icons/EyeIcon";
import ArrowIcon from "../assets/Icons/ArrowIcon";

import Input from "../Component/Input/input";
import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AccountScreenValidate() {
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
          <View style={styles.input_email}>
            <Text style={styles.welcome_text}>Bienvenue !</Text>
            <Text style={styles.question_email_address}>
              Tout d’abord, quelle est votre adresse email ?
            </Text>
            <View style={styles.Inputs}>
              <Input placeholder={"votre adresse email"} style={styles.input} />
              <View style={styles.Icons}>
                <EyeIcon />
                <View style={styles.ValidateIcon}>
                  <ValidateIcon />
                </View>
              </View>
            </View>
            <Text style={styles.sub_input}>
              Vous recevrez un email de confirmation
            </Text>
          </View>
          <View style={styles.input_password}>
            <Text style={styles.choose_password}>
              Ensuite choisissez un mot de passe
            </Text>
            <View style={styles.Inputs}>
              <Input
                placeholder={"votre mot de passe"}
                style={(fontSize = normalize(12))}
              />
              <View style={styles.Icons}>
                <View style={styles.ValidateIcon}>
                  <ValidateIcon />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.sub_input}>
            il doit contenir au moins 8 caracteres.
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btn_text}>Continuer</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    height: hp("82%"),
    justifyContent: "space-between",
  },
  welcome_text: {
    color: Colors.main_green,
    fontSize: normalize(16),
    // font-family: Open Sans Bold;
  },
  question_email_address: {
    marginVertical: normalize(12),
    color: Colors.main_grey,
    fontSize: normalize(12),
    // font-family: Open Sans Regular;
  },
  choose_password: {
    marginVertical: normalize(12),
    color: Colors.main_grey,
    fontSize: normalize(12),
    // font-family: Open Sans Regular;
  },
  title: {
    height: normalize(25, "height"),
    color: Colors.main_white,
    // font-family: Open Sans Bold;
    fontSize: normalize(18),
    letterSpacing: normalize(-0.2),
    lineHeight: normalize(25),
  },
  input_email: {
    paddingTop: normalize(30),
  },
  input_password: {
    paddingTop: normalize(24),
  },
  text: {
    height: normalize(20),
    color: "white",
    fontSize: normalize(16),
    letterSpacing: normalize(0),
    textAlign: "center",
    alignContent: "center",
    // font-family: Open Sans Regular;
  },
  sub_input: {
    height: normalize(20),
    width: normalize(200),
    color: Colors.main_grey,
    // font-family: Open Sans Regular;
    fontSize: normalize(10),
    letterSpacing: normalize(0),
    lineHeight: normalize(20),
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
  Inputs: {
    width: normalize(344, "width"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.main_white,
    borderWidth: 1,
    borderColor: Colors.main_input,
    height: normalize(42),
    borderRadius: normalize(1),
    paddingLeft: normalize(12),
  },
  Icons: {
    alignItems: "center",
    paddingRight: normalize(15),
    flexDirection: "row",
  },
  ValidateIcon: {
    paddingLeft: normalize(13),
  },
});

export default AccountScreenValidate;
