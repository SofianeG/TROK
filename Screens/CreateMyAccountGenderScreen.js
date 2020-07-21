import React, { Component } from 'react'
import {View,StyleSheet, TouchableOpacity,Text,Image, TextInput} from 'react-native'


export class CreateMyAccountGenderScreen extends Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.wrapper_top}>
                        <View style={{display:"flex"}}>
                            <Text style={styles.title}>Créer mon compte</Text>
                        </View>
                    </View>
                    <View style={styles.wrapper_bottom}>
                        <View style={styles.first_bloc}>
                            <Text style={styles.title}>Pour finir ! </Text>
                            <Text style={styles.text}>Vous êtes</Text>
                        </View>
                        <View style={styles.second_bloc}>
                            <Text>SVG</Text>
                            <Text style={styles.sub_picture}>Prenom_N</Text>
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
    first_bloc:{
            flex:1,
    },
    title:{
        width: 133,
        color: "#40CE6A",
        // font-family: Avenir;
        fontSize: 16,
        fontWeight:"bold",// font-weight: 900;
        letterSpacing: 0,
        lineHeight: 20,
        marginVertical:44,
    },
    text:{
        marginVertical:11,
    },
    second_bloc:{
        flex:2,
    },
    
})

export default CreateMyAccountGenderScreen
