import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

import { Card, Paragraph } from "react-native-paper";

import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Trokeo from "../assets/Icons/HomepageIcon/TrokeoIcon";
import Search from "../assets/Icons/HomepageIcon/SearchIcon";
import Notification from "../assets/Icons/HomepageIcon/NotificationIcon";
// import Marker from "../assets/Icons/HomepageIcon/MarkerIcon";
import HouseIcon from "../assets/Icons/HomepageIcon/HouseIcon";
import HandshakeIcon from "../assets/Icons/HomepageIcon/HandshakeIcon";
import AddIcon from "../assets/Icons/HomepageIcon/AddIcon";
import EnvelopeIcon from "../assets/Icons/HomepageIcon/EnvelopeIcon";

function HomepageCardGoodsScreen() {
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
      <ScrollView>
        <View style={{ paddingTop: normalize(22), paddingLeft: normalize(21) }}>
          <Card>
            <Card.Cover
              style={{
                width: normalize(159),
                height: normalize(128),
                borderRadius: 4,
              }}
              source={{
                uri:
                  "https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg",
              }}
            />
            <Card.Content>
              <Paragraph style={{ fontSize: normalize(11) }}>
                Kit de rasage pour homme
              </Paragraph>
              <Marker />
            </Card.Content>
          </Card>
          <Card>
            <Card.Cover
              style={{
                width: normalize(159),
                height: normalize(128),
                borderRadius: 4,
              }}
              source={{
                uri:
                  "https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg",
              }}
            />
            <Card.Content>
              <Paragraph style={{ fontSize: normalize(11) }}>
                Kit de rasage pour homme
              </Paragraph>
              <Marker />
            </Card.Content>
          </Card>
          <Card>
            <Card.Cover
              style={{
                width: normalize(159),
                height: normalize(128),
                borderRadius: 4,
              }}
              source={{
                uri:
                  "https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg",
              }}
            />
            <Card.Content>
              <Paragraph style={{ fontSize: normalize(11) }}>
                Kit de rasage pour homme
              </Paragraph>
              <Marker />
            </Card.Content>
          </Card>
          <Card>
            <Card.Cover
              style={{
                width: normalize(159),
                height: normalize(128),
                borderRadius: 4,
              }}
              source={{
                uri:
                  "https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg",
              }}
            />
            <Card.Content>
              <Paragraph style={{ fontSize: normalize(11) }}>
                Kit de rasage pour homme
              </Paragraph>
              <Marker />
            </Card.Content>
          </Card>
          <Card>
            <Card.Cover
              style={{
                width: normalize(159),
                height: normalize(128),
                borderRadius: 4,
              }}
              source={{
                uri:
                  "https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg",
              }}
            />
            <Card.Content>
              <Paragraph style={{ fontSize: normalize(11) }}>
                Kit de rasage pour homme
              </Paragraph>
              <Marker />
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
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

export default HomepageCardGoodsScreen;
