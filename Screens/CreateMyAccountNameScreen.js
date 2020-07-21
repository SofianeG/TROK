import React, { Component } from 'react'
import {View,StyleSheet, TouchableOpacity,Text,Image, TextInput} from 'react-native'


export class CreateMyAccountNameScreen extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.wrapper_top}>
                        <View style={{display:"flex"}}>
                            <Text style={styles.title}>Créer mon compte</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper_bottom}>
                            <Text style={{color:"#40CE6A",height:16,fontSize:16,marginVertical:44}}>Quel est votre nom ?  </Text>
                            <Text style={{marginVertical:12,fontSize:12}}>Vous apparaitrez sous la forme Prénom.N sur la plateforme.</Text>
                            <TextInput style={styles.input} placeholder="Prenom"/>
                            <TextInput style={styles.input}  placeholder="Nom"/>
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
    
   
    
})

export default CreateMyAccountNameScreen
