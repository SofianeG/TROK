import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Trokeo from "../assets/Icons/HomepageIcon/TrokeoIcon";
import Notification from "../assets/Icons/HomepageIcon/NotificationIcon";
import Search from "../assets/Icons/HomepageIcon/SearchIcon";
import Map from "../assets/Icons/";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function HomepageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper_top}>
        <View>
          <Trokeo />
        </View>
        <View style={{ display: "flex" }}>
          <Search />
          <Notification />
        </View>
      </View>
      <View>
        <View>
          <Text>Biens</Text>
        </View>
        <View>
          <Text>Services</Text>
        </View>
      </View>
      <View>
        <Text>Trouvez des annonces près de chez vous </Text>
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
