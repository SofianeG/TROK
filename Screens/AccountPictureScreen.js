import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from "react-native";

export class CreateMyAccountPictureScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper_top}>
          <View style={{ display: "flex" }}>
            <Text style={styles.title}>Créer mon compte</Text>
          </View>
        </View>
        <View style={styles.wrapper_bottom}>
          <View style={styles.first_bloc}>
            <Text style={styles.title}>choisir ma photo </Text>
            <Text style={styles.text}>
              Vous aurez plus de chance d’échanger avec votre photo !
            </Text>
          </View>
          <View style={styles.second_bloc}>
            <Text style={styles.sub_picture}>Prenom_N</Text>
          </View>
          <View style={styles.third_bloc}>
            <View>
              <TouchableOpacity style={styles.btn_add_picture}>
                <Text style={styles.btn_first_text}>Ajouter une photo</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.btn_next}>
                <Text style={styles.btn_second_text}>Passer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  wrapper_top: {
    backgroundColor: "#40CE6A",
    height: 70,
  },
  wrapper_bottom: {
    marginHorizontal: 15,
  },
  first_bloc: {
    marginVertical: 44,
  },
  Title: {
    width: 133,
    color: "#40CE6A",
    // font-family: Avenir;
    fontSize: 16,
    fontWeight: "bold", // font-weight: 900;
    letterSpacing: 0,
    lineHeight: 20,
  },
  text: {
    marginVertical: 11,
    fontSize: 12,
  },
  second_bloc: {
    marginVertical: 62,
    alignItems: "center",
  },
  sub_picture: {},
  third_bloc: {
    marginVertical: 271,
    alignItems: "center",
  },
  btn_add_picture: {
    // box-sizing: border-box,
    height: 42,
    width: 236,
    // border:  "#0091FF",
    borderRadius: 26,
    backgroundColor: "#0091FF",
  },
  btn_first_text: {
    height: 20,
    color: "white",
    // font-family: Avenir; font payante
    fontSize: 16,
    fontWeight: "bold", // fontWeight: 300,
    letterSpacing: 0,
    alignSelf: "center",
  },
  btn_next: {
    // box-sizing: border-box;
    height: 42,
    width: 236,
    // border: 1px solid #0091FF;
    borderRadius: 26,
    borderColor: "#0091FF",
    backgroundColor: "white",
  },
  btn_second_text: {
    height: 20,
    width: 48,
    color: "#0091FF",
    // font-family: Avenir;
    fontSize: 16,
    fontWeight: "bold", // font-weight: 300;
    letterSpacing: 0,
    lineHeight: 20,
    textAlign: "center",
  },
});

export default CreateMyAccountPictureScreen;
