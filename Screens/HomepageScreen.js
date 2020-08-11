import React, { createRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Trokeo from "../assets/Icons/HomepageIcon/TrokeoIcon";
import Notification from "../assets/Icons/HomepageIcon/NotificationIcon";
import Search from "../assets/Icons/HomepageIcon/SearchIcon";
import Map from "../assets/Icons/HomepageIcon/MapIcon";
import HouseIcon from "../assets/Icons/HomepageIcon/HouseIcon";
import HandshakeIcon from "../assets/Icons/HomepageIcon/HandshakeIcon";
import AddIcon from "../assets/Icons/HomepageIcon/AddIcon";
import EnvelopeIcon from "../assets/Icons/HomepageIcon/EnvelopeIcon";

import Btn from "../Component/Btn/Btn";

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

function HomepageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <View>
          <Trokeo />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Search />
          <Notification />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "50%",
            paddingLeft: normalize(72),
            marginVertical: normalize(19),
          }}
        >
          <Text
            style={{
              color: Colors.main_green,
              fontSize: normalize(16),
            }}
          >
            Biens
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            marginVertical: normalize(19),
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.homepage_section_services,
              fontSize: normalize(16),
            }}
          >
            Services
          </Text>
        </View>
      </View>
      <Text
        style={{
          backgroundColor: Colors.main_green,
          height: normalize(2),
          width: normalize(188),
        }}
      >
        -
      </Text>
      <View>
        <View style={{ alignItems: "center", paddingTop: normalize(111) }}>
          <Text style={{ color: Colors.main_grey, fontSize: normalize(14) }}>
            Trouvez des annonces près de chez vous
          </Text>
        </View>
        <View style={{ alignItems: "center", marginVertical: 31 }}>
          <Map />
        </View>
        <Btn
          text="Activer la géolocalisation"
          backgroundColor={Colors.btn_AccountScreenValidate}
          color={Colors.main_white}
          fontSize={normalize(16)}
        />

        <View style={{ alignItems: "center", paddingTop: 26 }}>
          <Text
            style={{
              textDecorationLine: "underline",
              color: Colors.btn_AccountScreenValidate,
            }}
          >
            Saisir une ville
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: normalize(189),
        }}
      >
        <HouseIcon />
        <HandshakeIcon />
        <AddIcon />
        <EnvelopeIcon />
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

export default HomepageScreen;
