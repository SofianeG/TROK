import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import RedCrossIcon from "../assets/Icons/redCrossIcon/RedCrossIcon";
import EyeIcon from "../assets/Icons/EyeIcon";
import ArrowIcon from "../assets/Icons/ArrowIcon/ArrowIcon";

import Input from "../Component/Input/Input";

import { useNavigation } from "@react-navigation/native";

import normalize from "react-native-normalize";
import CustomButton from "../Component/CustomButton/CustomButton";

function AccountScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <ArrowIcon />
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text style={{ backgroundColor: "#40CE6A", lineHeight: 2 }}>-</Text>
      </View>
      <View style={{ justifyContent: "space-between", height: 640 }}>
        <View style={styles.wrapper_bottom}>
          <View style={styles.first_bloc}>
            <Text
              style={{
                color: "#40CE6A",
                height: normalize(20, "height"),
                fontSize: normalize(16),
              }}
            >
              Bienvenue !{" "}
            </Text>
            <Text style={{ marginVertical: normalize(12), color: "#3A3A3A" }}>
              Tout d’abord, quelle est votre adresse email ?
            </Text>
            <View
              style={{
                backgroundColor: "pink",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                paddingRight: 30,
              }}
            >
              <Input value={"votre adresse email"} />
              <View style={{ paddingRight: normalize(15) }}>
                <RedCrossIcon />
              </View>
            </View>

            <Text style={styles.sub_input}>
              Vous recevrez un email de confirmation
            </Text>
          </View>
          <View style={styles.second_bloc}>
            <Text style={{ marginVertical: normalize(12), color: "#3A3A3A" }}>
              Ensuite choisissez un mot de passe
            </Text>
            <View style={styles.InputContainer2}>
              <View style={{ paddingLeft: 1 }}>
                <Input style={styles.input} value={"votre mot de passe"} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <View>
                  <EyeIcon />
                </View>
                <View style={{ marginHorizontal: normalize(14) }}>
                  <RedCrossIcon />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.sub_input}>
            il doit contenir au moins 8 caracteres.
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("AccountNS")}>
        <View style={styles.btn}>
          <Text
            style={{ marginHorizontal: 70, color: "#FFFFFF", fontSize: 16 }}
          >
            Continuer
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_top: {
    backgroundColor: "#40CE6A",
    height: normalize(70, "height"),
    paddingTop: normalize(31),
    paddingLeft: normalize(11),
  },
  wrapper_bottom: {
    marginHorizontal: normalize(15),
  },
  title: {
    height: normalize(25, "height"),
    color: "#FFFFFF",
    // font-family: Open Sans Bold;
    fontSize: normalize(18),
    // font-weight: 900;
    letterSpacing: normalize(-0.2),
    lineHeight: normalize(25),
  },
  first_bloc: {
    paddingTop: normalize(30),
  },
  second_bloc: {
    paddingTop: normalize(24),
  },
  InputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: normalize(1),
    borderColor: "#BFBDBD",
    height: normalize(42, "height"),
    borderRadius: normalize(1),
    paddingLeft: normalize(12),
    width: normalize(344, "width"),
  },
  InputContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: normalize(1),
    borderColor: "#BFBDBD",
    height: normalize(42, "height"),
    borderRadius: normalize(1),
    paddingLeft: normalize(12),
    width: normalize(344),
  },
  text: {
    height: normalize(20),
    color: "white",
    // font-family: Avenir; font payante
    fontSize: normalize(16),
    // fontWeight: 300,
    letterSpacing: normalize(0),
    textAlign: "center",
    alignContent: "center",
  },
  input: {
    fontSize: normalize(12),
    lineHeight: normalize(20),
    // fontFamily: "Open Sans",
  },
  input2: {
    fontSize: normalize(12),
    lineHeight: normalize(20),
    height: normalize(20),
    width: normalize(166),
    // fontFamily: "Open Sans",
  },
  sub_input: {
    height: normalize(20),
    width: normalize(200),
    color: "#3A3A3A",
    // fontFamily: "Open Sans";
    fontSize: normalize(10),
    letterSpacing: normalize(0),
    lineHeight: normalize(20),
  },
  btn: {
    height: 42,
    borderRadius: 26,
    opacity: 37,
    backgroundColor: "rgba(0, 145, 255, 0.37)",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 70,
  },
});

export default AccountScreen;
