import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'

import SplashScreenIcon from '../assets/Icons/SplashScreenIcon'

function SplashScreen() {
        return (
           <View style={styles.container}>
                    <View>
                        <SplashScreenIcon/>
                    </View>
                        <Text style={styles.text}>Le troc participatif et solidaire</Text>  
                </View>
        )
}

const styles= StyleSheet.create({

    container:{
        backgroundColor:"#40CE6A",
        height:812,
        width:375,
        paddingHorizontal:54,
        paddingTop:242,
    },
    text:{
        fontSize:21.6,
        color:"#FFFFFF",
        paddingTop:41,
        letterSpacing: -0.24,
        lineHeight: 28,
}})

export default SplashScreen;
