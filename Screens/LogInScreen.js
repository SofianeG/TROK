
import React, { Component } from 'react'
import {View,StyleSheet, TouchableOpacity,Text,ImageBackground} from 'react-native'
import normalize from 'react-native-normalize';

import GoogleIcon from '../assets/Icons/googleIcon/GoogleIcon'
import FacebookIcon from '../assets/Icons/facebookIcon/FacebookIcon'

import LoginScreenIcon from '../assets/Icons/LoginScreenIcon'

function LogInScreen () {
        return (
                <View style={styles.container}> 
                    <View style={styles.wrapper_top}>
                        <ImageBackground source={require("../assets/image_loginScreen.jpg")} style={{height:396,}}>
                                <View style={{flex:1,marginHorizontal:20, marginVertical:35,}}>
                                    <LoginScreenIcon width={266} height={101}/>
                                </View>
                                <View style={{marginHorizontal: 20,marginVertical: 30}}>
                                    <Text style={styles.title}>Bienvenue</Text>
                                    <Text style={styles.sub_title}>L’application éco-responsable et solidaire de troc d’objets et de services entre particuliers !</Text>
                                </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.wrapper_bottom}>
                                <View >
                                    <TouchableOpacity style={styles.btn_google}>
                                            <GoogleIcon/>
                                            <Text style={styles.google_text}>Login avec Google</Text>
                                    </TouchableOpacity>
                                </View>
                                <View >
                                    <TouchableOpacity style={styles.btn_facebook}>
                                            <FacebookIcon/>
                                            <Text style={styles.facebook_text}>Login avec Facebook</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn_email}>
                                        <Text style={styles.mail_text}>Login avec mon mail</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginVertical:40,}}>
                                <TouchableOpacity >
                                    <Text style={{textDecorationLine:"underline", color:"white",fontSize:16}}>Se connecter</Text>
                                </TouchableOpacity>
                                </View>
                    </View>
                </View>
        )
}

const styles= StyleSheet.create({
    container:{
    flex:1,
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
      title:{
        height: 20,
        width: 319,
        color: "#FFFFFF",
        // font-family: Avenir; font payante
        fontSize: 20,
        // fontWeight:"bold",// fontWeight: 900,
        letterSpacing: 0,
        lineHeight: 20,
        marginVertical: 18,
    },
    sub_title: {
        height: 40,
        color: "#FFFFFF",
        // font-family: Avenir;
        fontSize:15,
        // fontWeight: 500,
        letterSpacing: 0,
        lineHeight:20,
    },
    btn_google:{
        height:52,
        borderRadius:26,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal:33,
        width:236,
    },
    btn_facebook:{
        height:52,
        borderRadius:26,
        backgroundColor: "#4B74FF",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 34,
        width: 236,
        marginVertical: 25,
        
    },
    btn_email:{
        height: 52,
        width: 236,
        borderRadius: 26,
        backgroundColor: "#40CE6A",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderWidth: 1,
        borderColor: "white"
    },
    google_text:{
        fontSize: 16,
        color: "#6D7278",
        // width:normalize(136,"width"),
        height: 20,
        marginHorizontal: 14,
        // fontFamily:"open..."
    },
    facebook_text:{
        fontSize: 16,
        color: "#FFFFFF",
        width: 155,
        height: 20,
        marginHorizontal: 18,
    },
    mail_text:{
        fontSize: 16,
        color: "#FFFFFF"
    },
})

export default LogInScreen;



