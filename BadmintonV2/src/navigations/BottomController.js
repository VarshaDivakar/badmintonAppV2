// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { TabActions } from "@react-navigation/native";
// import React from "react";
// import {View,Text} from 'react-native';
// import WhiteCalendar from '../assets/icons/Calendar.svg'
// import Calendar from "../screens/Calendar/Calendar";
// export default function BottomController(){
//     const Tab = createBottomTabNavigator();
//     return (
//         <Tab.Navigator
//       initialRouteName={Navigations.transferlist}
//       screenOptions={{
//         tabBarActiveTintColor: '#1040BA',
//         tabBarInactiveTintColor: '#545F7A',
//         headerShown: false,
//         gestureEnabled: false,
//         gestureDirection: 'horizontal',
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//         transitionSpec: {
//           open: TransitionSpecs.TransitionIOSSpec,
//           close: TransitionSpecs.TransitionIOSSpec,
//         },
//         tabBarStyle: {height: 80, paddingBottom: 20},
//         // labelStyle: {paddingVertical: 50},
//       }}>

// <Tab.Screen
//         name={Navigations.calendar}
//         component={Calendar}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => (
//             <WhiteCalendar/>
//             // <Image
//             //   source={images.Transactions}
//             //   style={{
//             //     height: size - 10,
//             //     width: size - 10,
//             //     tintColor: color,
//             //   }}
//             // />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={Navigations.calendar}
//         component={Calendar}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => (
//             <Calendar/>
//             // <Image
//             //   source={images.Transactions}
//             //   style={{
//             //     height: size - 10,
//             //     width: size - 10,
//             //     tintColor: color,
//             //   }}
//             // />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={Navigations.calendar}
//         component={Calendar}
//         options={{
//           tabBarLabel: '',
//           tabBarIcon: ({color, size}) => (
//             <Calendar/>
//             // <Image
//             //   source={images.Transactions}
//             //   style={{
//             //     height: size - 10,
//             //     width: size - 10,
//             //     tintColor: color,
//             //   }}
//             // />
//           ),
//         }}
//       />

//        </Tab.Navigator>

//     )
// }