import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'

import SplashScreenIcon from '../assets/Icons/SplashScreenIcon'

export class SplashScreen extends Component {
    render() {
        return (
           <View style={styles.container}>
                <View style={styles.wrapper} >
                    <SplashScreenIcon/>
                    <Text style={styles.wrapper}>Le troc participatif et solidaire</Text>
                </View>
           </View>
        )
    } 
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#40CE6A",
        justifyContent:"center",
        alignItems:"center",
        height:830,
        width:375
    },
    wrapper:{
        marginVertical:41,
        fontSize:22,
        alignItems:"center",
        color:"white"
    },
   
})

export default SplashScreen;
