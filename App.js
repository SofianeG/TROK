import React from "react";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./ScreenTest/LoginScreen";
import LoadingScreen from "./ScreenTest/LoadingScreen";
import DashboardScreen from "./ScreenTest/DashboardScreen";

import firebase from "@react-native-firebase/app";
import { firebaseConfig } from "./config";
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

// import React from "react";
// import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createSwitchNavigator } from "react-navigation";

// import HomepageScreen from "./Screens/HomepageScreen";

// import HouseIcon from "./assets/Icons/HomepageIcon/HouseIcon";
// import HouseIconFocused from "./assets/Icons/HomepageIcon/HouseIconFocused";
// import HandshakeIcon from "./assets/Icons/HomepageIcon/HandshakeIcon";
// import HandshakeIconFocused from "./assets/Icons/HomepageIcon/HandshakeIconFocused";
// import AddIcon from "./assets/Icons/HomepageIcon/AddIcon";
// import AddIconFocused from "./assets/Icons/HomepageIcon/AddIconFocused";
// import EnvelopeIcon from "./assets/Icons/HomepageIcon/EnvelopeIcon";
// import EnvelopeIconFocused from "./assets/Icons/HomepageIcon/EnvelopeIconFocused";
// import UserIcon from "./assets/Icons/HomepageIcon/UserIcon";
// import UserIconFocused from "./assets/Icons/HomepageIcon/UserIconFocused";

// function HomeScreen() {
//   return (
//     <View>
//       <HomepageScreen />
//     </View>
//   );
// }

// function HandScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function AddScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function MailScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// function UserScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused }) => {
//             let iconName;

//             if (route.name === "Home") {
//               return (iconName = focused ? (
//                 <HouseIconFocused />
//               ) : (
//                 <HouseIcon />
//               ));
//             } else if (route.name === "HandScreen") {
//               return (iconName = focused ? (
//                 <HandshakeIconFocused />
//               ) : (
//                 <HandshakeIcon />
//               ));
//             } else if (route.name === "AddScreen") {
//               return (iconName = focused ? <AddIconFocused /> : <AddIcon />);
//             } else if (route.name === "MailScreen") {
//               return (iconName = focused ? (
//                 <EnvelopeIconFocused />
//               ) : (
//                 <EnvelopeIcon />
//               ));
//             } else if (route.name === "UserScreen") {
//               return (iconName = focused ? <UserIconFocused /> : <UserIcon />);
//             }
//           },
//         })}
//         tabBarOptions={{
//           showLabel: false,
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="HandScreen" component={HandScreen} />
//         <Tab.Screen name="AddScreen" component={AddScreen} />
//         <Tab.Screen name="MailScreen" component={MailScreen} />
//         <Tab.Screen name="UserScreen" component={UserScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const AppSwitchNavigator = createSwitchNavigator({
//   LoadingScreen: LoginScreen,
//   LoginScreen: LoginScreen,
//   DashboardScreen,
// });
