import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Heart from "../assets/Icons/HomepageIcon/HeartIcon";
import Arrow from "../assets/Icons/HomepageIcon/ArrowIcon";
import Notification from "../assets/Icons/HomepageIcon/NotificationIcon";

import Btn from "../Component/Btn//Btn";

function GoodCardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <Header />
      </View>
      <View>
        <Text
          style={{
            fontSize: normalize(20),
            alignItems: "center",
            backgroundColor: "pink",
          }}
        >
          Kit de rasage pour Homme
        </Text>
        <View>
          <Text>Etat</Text>
          <Text>Neuf</Text>
        </View>
        <View>
          <Text>Catégorie</Text>
          <Text>Beauté & bien être > soin du visage</Text>
        </View>
        <View>
          <Text>
            Description Tout est là : les produits, les outils, le résultat..
            Tout! Ce Kit de rasage shavette de la marque Bluebeards Revenge
            rallie magistralement tradition.
          </Text>
        </View>
        <View>
          <Text>Localisation</Text>
        </View>
        <Btn
          text="Contacter le trokeur"
          backgroundColor={Colors.btn_AccountScreenValidate}
          color={Colors.main_white}
          height={normalize(42)}
        />
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16.78,
  },
});

export default GoodCardScreen;
