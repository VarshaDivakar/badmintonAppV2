// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';
import Playerpersonaldetails from "@app/screens/AuthenticationScreens/PlayerRegistration/Playerpersonaldetails";
import Primaryinformation from "@app/screens/AuthenticationScreens/PlayerRegistration/Primaryinformation";
import Playeradress from "@app/screens/AuthenticationScreens/PlayerRegistration/playeradress";
import Relaibility from "@app/screens/AuthenticationScreens/PlayerRegistration/Releaseandrelaibility";
import Playermobileotp from "@app/screens/AuthenticationScreens/PlayerRegistration/Playermobileotp";
import Playeremailotp from "@app/screens/AuthenticationScreens/PlayerRegistration/Playeremailotp";
import Preview from "@app/screens/AuthenticationScreens/PlayerRegistration/Preview";
import Editplayerpersonaldetails from "@app/screens/AuthenticationScreens/PlayerRegistration/Editplayerpersonaldetails";
import Editemergencycontact from "@app/screens/AuthenticationScreens/PlayerRegistration/Editemergencycontact";
import Primarydetails from "@app/screens/AuthenticationScreens/PlayerRegistration/Primarydetails";
import Playerfindtournament from "@app/screens/AuthenticationScreens/PlayerRegistration/Playerfindtournament";
import Signupscreen from "@app/screens/AuthenticationScreens/Signupscreen";
import Emergencycontactdetails from "@app/screens/AuthenticationScreens/PlayerRegistration/Emergencycontactdetails";

const StackAuthPlayer = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: false,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                transitionSpec: {
                    open: TransitionSpecs.TransitionIOSSpec,
                    close: TransitionSpecs.TransitionIOSSpec,
                },
            }}
            initialRouteName={Navigations.playerpersonaldetails}>
                 <Stack.Screen name={Navigations.playerpersonaldetails} component={Playerpersonaldetails}/>
                <Stack.Screen name={Navigations.primaryinformation} component={Primaryinformation}/>
                <Stack.Screen name={Navigations.playermobileotp} component ={Playermobileotp}/>
                <Stack.Screen name={Navigations.playeremailotp} component ={Playeremailotp}/>
                <Stack.Screen name={Navigations.primarydetails} component={Primarydetails}/>
                <Stack.Screen name={Navigations.playerfindtournament} component={Playerfindtournament}/>
                <Stack.Screen name= {Navigations.signupscreen} component={Signupscreen}/>
                <Stack.Screen name= {Navigations.emergencycontactdetails} component={Emergencycontactdetails}/>
                <Stack.Screen name={Navigations.preview} component ={Preview}/>
                <Stack.Screen name={Navigations.editplayerpersonaldetails} component ={Editplayerpersonaldetails}/>
                <Stack.Screen name={Navigations.editemergencycontact} component ={Editemergencycontact}/>
                <Stack.Screen name={Navigations.relaibility} component ={Relaibility}/>
                <Stack.Screen name={Navigations.playeradress} component={Playeradress}/>
                </Stack.Navigator>
    )
        }
        export default StackAuthPlayer;