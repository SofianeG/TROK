import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import normalize from "react-native-normalize";

import GoogleIcon from "../assets/Icons/googleIcon/GoogleIcon";
import FacebookIcon from "../assets/Icons/facebookIcon/FacebookIcon";

import LoginScreenIcon from "../assets/Icons/LoginScreenIcon";

import { useNavigation } from "@react-navigation/native";
import CustomButton from "../Component/CustomButton/CustomButton";

function LogInScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <ImageBackground
          source={require("../assets/image_loginScreen.jpg")}
          style={{ height: 396 }}
        >
          <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 35 }}>
            <LoginScreenIcon width={266} height={101} />
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
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
          <CustomButton
            color="#6D7278"
            backgroundColor="#FFFFFF"
            text="Login avec Google"
            fontSize={16}
            paddingLeft={30}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingRight={36}
            title="Google"
            // fontFamily='Open Sans Regular'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_facebook}>
          <CustomButton
            color="#FFFFFF"
            backgroundColor="#4B74FF"
            text="Login avec Facebook"
            fontSize={16}
            paddingLeft={34}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            paddingRight={18}
            title=""
            // fontFamily='Open Sans Regular'
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.btn_email}>
            <Text style={styles.mail_text}>Login avec mon mail</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 40 }}>
          <TouchableOpacity onPress={() => navigation.navigate("AccountS")}>
            <Text
              style={{
                textDecorationLine: "underline",
                color: "white",
                fontSize: 16,
              }}
            >
              Se connecter
            </Text>
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
    height: 396,
    width: 376,
  },
  wrapper_bottom: {
    backgroundColor: "#40CE6A",
    height: 416,
    width: 376,
    paddingHorizontal: 70,
    paddingVertical: 45,
    alignItems: "center",
    alignSelf: "center",
  },
  title: {
    height: 20,
    width: 319,
    color: "#FFFFFF",
    fontSize: 20,
    // Font:Open Sans Bold
    letterSpacing: 0,
    lineHeight: 20,
    marginVertical: 18,
  },
  sub_title: {
    height: 40,
    color: "#FFFFFF",
    // Font:Open Sans Regular
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 20,
  },
  btn_facebook: {
    marginVertical: 25,
  },
  btn_email: {
    height: 52,
    width: 236,
    borderRadius: 26,
    backgroundColor: "#40CE6A",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "white",
  },
  mail_text: {
    fontSize: 16,
    color: "#FFFFFF",
    // Font:Open Sans Regular
  },
});

export default LogInScreen;
