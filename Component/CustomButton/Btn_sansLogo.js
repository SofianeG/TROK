import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Btn = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.btn}>
        <Text style={{ marginHorizontal: 70, color: "#FFFFFF", fontSize: 16 }}>
          Continuer
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 236,
    borderRadius: 26,
    height: 52,
    paddingVertical: 16,
  },
});

export default Btn;
