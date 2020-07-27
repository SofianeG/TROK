import React from 'react'
import { View ,TextInput,StyleSheet} from 'react-native'

import normalize from 'react-native-normalize'

const Input= ({value}) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder={value} 
        style={value}
        autoCapitalize={"none"}
        autoCorrect={false} 
        underlineColorAndroid="transparent"
        />
        </View>

    )
}

export default Input


const styles=StyleSheet.create({

    inputContainer:{
    borderWidth: normalize(1),
    borderColor:"#BFBDBD",
    height:normalize(42,'height'),
    borderRadius: normalize(1),
    paddingLeft:normalize(12),
    width:normalize(344,'width'),
}})
