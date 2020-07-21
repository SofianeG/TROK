import React, { Component } from 'react'
import {View,StyleSheet, TouchableOpacity,Text,ImageBackground} from 'react-native'

import GoogleIcon from '../assets/Icons/googleIcon/GoogleIcon'
import FacebookIcon from '../assets/Icons/facebookIcon/FacebookIcon'

import LoginScreenIcon from '../assets/Icons/LoginScreenIcon'



export class LogInScreen extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.wrapper_top}>
                    <ImageBackground source={require("../assets/image_loginScreen.jpg")} style={{height:"100%"}}>
                        <View style={{height:"100%"}}>
                            <View style={{height:"75%",justifyContent:"center",}}>
                                <LoginScreenIcon/>
                            </View>
                            <View style={{alignContent:"flex-end",height:"25%"}}>
                                <Text style={styles.title}>Bienvenue</Text>
                                <Text style={styles.sub_title}>L’application éco-responsable et solidaire de troc d’objets et de services entre particuliers !</Text>
                            </View>
                        </View>
                    </ImageBackground>    
                       </View>
                    <View style={styles.wrapper_bottom}>
                                <View>
                                    <TouchableOpacity style={styles.btn_google}>
                                        <View style={{width:"5%",justifyContent:"flex-end"}}>
                                            <GoogleIcon/>
                                        </View>
                                        <View style={{justifyContent:"space-around",width:"65%"}}>
                                            <Text style={styles.google_text}>Login avec Google</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn_facebook}>
                                    <View style={{width:"5%",justifyContent:"flex-end"}}>
                                        <FacebookIcon/>
                                    </View>
                                    <View style={{justifyContent:"space-around",width:"65%"}}>
                                        <Text style={styles.facebook_text}>Login avec Facebook</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.btn_email}>
                                    <Text style={styles.mail_text}>Login avec mon mail</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{textDecorationLine:"underline", color:"white",fontSize:16}}>Se connecter</Text>
                    </View>
                </View>

        )
    }
}

const styles= StyleSheet.create({

    wrapper_top: {
        height:"45%",
      },
    wrapper_bottom: {
        backgroundColor:"#40CE6A",
        height:"55%",
        width:376,
        justifyContent:"space-evenly",
        alignItems:"center",
        alignSelf:"center",
      },
    btn_google:{
        height: 52,
        borderRadius: 26,
        backgroundColor: "#FFFFFF",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        width:"65%",
    },
    btn_facebook:{
        height: 52,
        borderRadius: 26,
        backgroundColor: "#4B74FF",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        width:"65%",
        
    },
    btn_email:{
        height: 52,
        width: 236,
        borderRadius: 26,
        backgroundColor: "#40CE6A",
        alignItems:"center",
        justifyContent:"space-evenly",
        borderWidth:1,
        borderColor:"white"
    },
    google_text:{
        fontSize:16,
        color:"#6D7278"
    },
    facebook_text:{
        fontSize:16,
        color:"#FFFFFF"
    },
    mail_text:{
        fontSize:16,
        color:"#FFFFFF"
    },
    title:{
        height: 20,
        width: 319,
        color: "#FFFFFF",
        // font-family: Avenir; font payante
        fontSize: 20,
        fontWeight:"bold",// fontWeight: 900,
        letterSpacing: 0,
        lineHeight: 20,
        marginHorizontal:18,
    },
    sub_title: {
        height: 40,
        width: 319,
        color: "#FFFFFF",
        // font-family: Avenir;
        fontSize: 14,
        fontWeight:"bold",// fontWeight: 500,
        letterSpacing: 0,
        lineHeight: 20,
        marginVertical:25,
        marginHorizontal:18,
    }
    
})

export default LogInScreen;
