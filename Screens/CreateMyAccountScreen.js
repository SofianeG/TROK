import React, { Component } from 'react'
import {View,StyleSheet,Text, TextInput} from 'react-native'

import RedCrossIcon from '../assets/Icons/redCrossIcon/RedCrossIcon'
import EyeIcon from '../assets/Icons/EyeIcon'

export class CreateMyAccountScreen extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.wrapper_top}>
                        <View style={{display:"flex", alignItems:"center"}}>
                            <Text style={styles.title}>Créer mon compte</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper_bottom}>
                        <View style={styles.first_bloc}>
                            <Text style={{color:"#40CE6A",height:16}}>Bienvenue ! </Text>
                            <Text style={{marginVertical:12}}>Tout d’abord, quelle est votre adresse email ?</Text>
                            <TextInput style={styles.input} placeholder="Votre adresse email" />
                            <View>
                            <EyeIcon/>
                            <RedCrossIcon/>
                            </View>
                            <Text style={styles.sub_input}>Vous recevrez un email de confirmation</Text>
                            
                        </View>
                        <View style={styles.second_bloc}>
                            <Text style={{marginVertical:12}}>Ensuite choisissez un mot de passe</Text>
                            <TextInput style={styles.input}  placeholder="Votre mot de passe"/>
                            <Text style={styles.sub_input}>il doit contenir au moins 8 caracteres.</Text>
                        </View>
                    </View>
                </View>

        )
    }
}

const styles= StyleSheet.create({

    container:{
      
    },
    wrapper_top: {
        backgroundColor:"#40CE6A",
        height:70, 
      },
    wrapper_bottom: {
        marginHorizontal:15
    },
    title:{
        height: 25,
        width: 156,
        color: "#FFFFFF",
        // font-family: Avenir;
        fontSize: 18,
        fontWeight:"bold", // font-weight: 900;
        letterSpacing: -0.2,
        lineHeight: 25,
       
    },
    first_bloc:{
        marginVertical:44,
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
        borderRadius: 1,
        backgroundColor: "#FFFFFF",
    },
    sub_input:{
        height: 20,
        width: 200,
        color: "#3A3A3A",
        // font-family: Avenir
        fontSize: 10,
        letterSpacing: 0,
        lineHeight: 20,
    }
    
   
})

export default CreateMyAccountScreen;
