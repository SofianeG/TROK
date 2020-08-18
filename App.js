import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomepageScreen from "./Screens/HomepageScreen";

import HouseIcon from "./assets/Icons/HomepageIcon/HouseIcon";
import HouseIconFocused from "./assets/Icons/HomepageIcon/HouseIconFocused";
import HandshakeIcon from "./assets/Icons/HomepageIcon/HandshakeIcon";
import HandshakeIconFocused from "./assets/Icons/HomepageIcon/HandshakeIconFocused";
import AddIcon from "./assets/Icons/HomepageIcon/AddIcon";
import AddIconFocused from "./assets/Icons/HomepageIcon/AddIconFocused";
import EnvelopeIcon from "./assets/Icons/HomepageIcon/EnvelopeIcon";
import EnvelopeIconFocused from "./assets/Icons/HomepageIcon/EnvelopeIconFocused";
import UserIcon from "./assets/Icons/HomepageIcon/UserIcon";
import UserIconFocused from "./assets/Icons/HomepageIcon/UserIconFocused";

function HomeScreen() {
  return (
    <View>
      <HomepageScreen />
    </View>
  );
}

function HandScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MailScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function UserScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              return (iconName = focused ? (
                <HouseIconFocused />
              ) : (
                <HouseIcon />
              ));
            } else if (route.name === "HandScreen") {
              return (iconName = focused ? (
                <HandshakeIconFocused />
              ) : (
                <HandshakeIcon />
              ));
            } else if (route.name === "AddScreen") {
              return (iconName = focused ? <AddIconFocused /> : <AddIcon />);
            } else if (route.name === "MailScreen") {
              return (iconName = focused ? (
                <EnvelopeIconFocused />
              ) : (
                <EnvelopeIcon />
              ));
            } else if (route.name === "UserScreen") {
              return (iconName = focused ? <UserIconFocused /> : <UserIcon />);
            }
          },
        })}
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="HandScreen" component={HandScreen} />
        <Tab.Screen name="AddScreen" component={AddScreen} />
        <Tab.Screen name="MailScreen" component={MailScreen} />
        <Tab.Screen name="UserScreen" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Home") {
//               iconName = focused
//                 ? "ios-information-circle"
//                 : "ios-information-circle-outline";
//             } else if (route.name === "Settings") {
//               iconName = focused ? "ios-list-box" : "ios-list";
//             }

//             // You can return any component that you like here!
//             // return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "tomato",
//           inactiveTintColor: "gray",
//         }}
//       >
//         <Tab.Screen name="Home" component={HomepageScreen} />
//         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
