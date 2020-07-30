import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import normalize from "react-native-normalize";

import Colors from "../assets/Style/Colors";

import LoginScreenIcon from "../assets/Icons/LoginScreenIcon";

import Btn from "../Component/Btn/Btn";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function LogInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <ImageBackground
          source={require("../assets/Image_hands_LoginScreen.jpg")}
          style={styles.image_background}
        >
          <View style={styles.wrapper_login_screen_icon}>
            <LoginScreenIcon />
          </View>
          <View style={styles.wrapper_top_text}>
            <Text style={styles.title}>Bienvenue</Text>
            <Text style={styles.sub_title}>
              L’application éco-responsable et solidaire de troc d’objets et de
              services entre particuliers !
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.wrapper_bottom}>
        <TouchableOpacity>
          <Btn
            color="#6D7278"
            backgroundColor="#FFFFFF"
            text="Login avec Google"
            fontSize={normalize(16)}
            paddingLeft={wp("7.97%")}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingRight={wp("9.57%")}
            title="Google"
            // fontFamily='Open Sans Regular'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_facebook}>
          <Btn
            color="#FFFFFF"
            backgroundColor="#4B74FF"
            text="Login avec Facebook"
            fontSize={normalize(16)}
            paddingLeft={wp("9.04%")}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingRight={wp("4.78%")}
            title=""
            // fontFamily='Open Sans Regular'
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.btn_email}>
            <Text style={styles.mail_text}>Login avec mon mail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.log_in}>
          <TouchableOpacity>
            <Text style={styles.log_in_text}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper_top: {
    height: hp("48.76%"),
    width: wp("100%"),
  },
  image_background: {
    height: hp("48.76%"),
    width: wp("100%"),
  },
  wrapper_top_text: {
    marginHorizontal: normalize(20),
    marginVertical: normalize(30),
  },
  wrapper_login_screen_icon: {
    flex: 1,
    marginHorizontal: wp("2.4%"),
    marginVertical: hp("9.3%"),
  },
  wrapper_bottom: {
    backgroundColor: Colors.main_green,
    height: hp("51.24%"),
    width: wp("100%"),
    paddingHorizontal: wp("18.61%"),
    paddingVertical: hp("5.54%"),
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: normalize(20),
    // Font:Open Sans Bold
    marginVertical: hp("2.21%"),
  },
  sub_title: {
    color: "#FFFFFF",
    // Font:Open Sans Regular
    fontSize: normalize(15),
  },
  btn_facebook: {
    marginVertical: hp("3.05%"),
  },
  btn_email: {
    height: normalize(52),
    width: normalize(236),
    borderRadius: normalize(26),
    backgroundColor: Colors.main_green,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "white",
  },
  mail_text: {
    fontSize: normalize(16),
    color: "#FFFFFF",
    // Font:Open Sans Regular
  },
  log_in: {
    marginVertical: hp("2.92%"),
  },
  log_in_text: {
    textDecorationLine: "underline",
    color: "white",
    fontSize: normalize(16),
  },
});

export default LogInScreen;
