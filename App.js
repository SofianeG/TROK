import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SplashScreen from './Screens/SplashScreen'
import LoginScreen from './Screens/LogInScreen'
import AccountScreen from './Screens/AccountScreen'
import AccountNameScreen from './Screens/AccountNameScreen'
import AccountPictureScreen from './Screens/AccountPictureScreen'

import CustomButton from './Component/CustomButton/CustomButton'
import { NavigationContainer } from '@react-navigation/native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



function LogInScreen(){
  return(
    <LogInScreen/>
  )
}
function AccountS(){
  return(
    <AccountScreen/>
  )
}
function AccountNS(){
  return(
    <AccountNameScreen/>
  )
}

function App(){

    return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen  name="AccountS"  component={AccountS} />
          <Stack.Screen  name="AccountNS"  component={AccountNS} />
          </Stack.Navigator>
      </NavigationContainer>
      
     
    )
}


export default App;

// <NavigationContainer>
      //    <Stack.Navigator initialRouteName="Home" headerMode="none">
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen  name="AccountS"  component={AccountS} />
      //     <Stack.Screen  name="AccountNS"  component={AccountNS} />
      //   </Stack.Navigator>
      // </NavigationContainer>  

