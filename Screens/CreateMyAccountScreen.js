import React, { Component } from 'react'
import {View,StyleSheet,Text, TextInput} from 'react-native'

import RedCrossIcon from '../assets/Icons/redCrossIcon/RedCrossIcon'
import EyeIcon from '../assets/Icons/EyeIcon'
import ArrowIcon from '../assets/Icons/arrowIcon/ArrowIcon'



function CreateMyAccountScreen()  {
        return (
                <View style={styles.container}>
                    <View style={styles.wrapper_top}>
                        <ArrowIcon/>
                    </View>
                    <View style={{paddingTop:10, }}>
                        <Text style={{backgroundColor:"green"}}></Text>
                    </View>
                    <View style={styles.wrapper_bottom}>
                        <View style={styles.first_bloc}>
                            <Text style={{color:"#40CE6A",height:20,fontSize:16,}}>Bienvenue ! </Text>
                            <Text style={{marginVertical:12,color:"#3A3A3A",}}>Tout d’abord, quelle est votre adresse email ?</Text>
                            <View style={styles.InputContainer}>
                                <TextInput style={styles.input} placeholder="Votre adresse email" />
                                <View style={{display:"flex",flexDirection:"row",position:"absolute",left:305,}}>
                                <View style={{marginHorizontal:13}}>
                                    <RedCrossIcon />
                                </View>
                                </View>
                                </View>
                            <Text style={styles.sub_input}>Vous recevrez un email de confirmation</Text>
                        </View>
                        <View style={styles.second_bloc}>
                            <Text style={{marginVertical:12,color:"#3A3A3A"}}>Ensuite choisissez un mot de passe</Text>
                        <View style={styles.InputContainer}>
                            <TextInput style={styles.input}  placeholder="Votre mot de passe"/>
                            <View style={{display:"flex",flexDirection:"row",position:"absolute",left:280,}}>
                                <EyeIcon/>
                                <View style={{marginHorizontal:13}}>
                                    <RedCrossIcon />
                                </View>
                            </View>
                        </View>
                            <Text style={styles.sub_input}>il doit contenir au moins 8 caracteres.</Text>
                        </View>
                    </View>
                </View>

        )
}

const styles= StyleSheet.create({

    // container:{
      
    // },
    wrapper_top: {
        backgroundColor:"#40CE6A",
        height:70,
        paddingTop:31,
        paddingLeft:11
        
      },
    wrapper_bottom: {
        marginHorizontal:15
    },
    title:{
        height: 25,
        color: "#FFFFFF",
        // font-family: Open Sans Bold;
        fontSize: 18,
        fontWeight:"bold", // font-weight: 900;
        letterSpacing: -0.2,
        lineHeight: 25,
       
    },
    first_bloc:{
        paddingTop:30,
    },
    second_bloc:{
        paddingTop:24,
    },
    InputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"center",
    },
    text:{
        height: 20,
        color: "white",
        // font-family: Avenir; font payante
        fontSize: 16,
        fontWeight: "bold", // fontWeight: 300,
        letterSpacing:0,
        textAlign:"center",
        alignContent:"center"
    },
    input:{
        height: 42,
        width: 344,
        borderWidth:1,
        borderColor:"#BFBDBD",
        borderRadius: 1,
        backgroundColor: "#FFFFFF",
        paddingLeft:12,
        // fontFamily: "Open Sans",
    },
    sub_input:{
        height: 20,
        width: 200,
        color: "#3A3A3A",
         // fontFamily: "Open Sans";
        fontSize: 10,
        letterSpacing: 0,
        lineHeight: 20,
    }
    
   
})

export default CreateMyAccountScreen;
