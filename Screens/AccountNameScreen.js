import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../Component/Input/Input";

function AccountNameScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}></View>
      <View style={{ paddingTop: 10 }}>
        <Text style={{ lineHeight: 2, backgroundColor: "#40CE6A" }}>-</Text>
      </View>
      <View style={styles.wrapper_bottom}>
        <View style={styles.wrapper_bottom_top_text}>
          <Text style={styles.title}> Quel est votre nom ? </Text>
          <Text style={styles.sub_title}>
            {" "}
            Vous apparaitrez sous la forme Prénom.N sur la plateforme.
          </Text>
        </View>
        <View>
          <Input style={styles.input} value={"Prénom"} />
          <Input style={styles.input} value={"Nom"} style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_top: {
    backgroundColor: "#40CE6A",
    height: 70,
  },
  wrapper_bottom: {
    paddingTop: 30,
    paddingLeft: 15,
    // marginHorizontal:15,
    // backgroundColor:'pink'
  },
  title: {
    color: "#40CE6A",
    // font-family: Open Sans Bold;
    fontSize: 16,
    fontWeight: "bold", // font-weight: 900;
    letterSpacing: 0,
    lineHeight: 20,
  },
  sub_title: {
    fontSize: 12,
    lineHeight: 20,
    paddingVertical: 12,
    color: "#3A3A3A",
  },
  input: {
    height: 42,
    width: 344,
    borderWidth: 1,
    borderRadius: 1,
    backgroundColor: "blue",
    // fontFamily:Open Sans Bold
  },
});

export default AccountNameScreen;
