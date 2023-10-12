// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';

import Coachpersonaldetails from "@app/screens/AuthenticationScreens/CoachRegistration/Coachpersonaldetails";
import Coachaddress from "@app/screens/AuthenticationScreens/CoachRegistration/Coachaddress";
import Coachprofessionalexeperience from "@app/screens/AuthenticationScreens/CoachRegistration/Coachprofessionalexperience";
import Coachpreview from "@app/screens/AuthenticationScreens/CoachRegistration/Coachpreview";
import Coachededitpersonaldetails from "@app/screens/AuthenticationScreens/CoachRegistration/Coacheditpersonaldetails";
import CoachAddmatch from "@app/screens/CoachDashboard/CoachAddmatch";
import CoachAddNewMatch from "@app/screens/CoachDashboard/CoachAddNewMatch";


const StackAuthCoach = () => {
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
            initialRouteName={Navigations.coachpersonaldetails}>
            <Stack.Screen name={Navigations.coachpersonaldetails} component={Coachpersonaldetails} />
            <Stack.Screen name={Navigations.coachaddress} component={Coachaddress} />
            <Stack.Screen name={Navigations.coachprofessionalexperience} component={Coachprofessionalexeperience} />
            <Stack.Screen name={Navigations.coachpreview} component={Coachpreview} />
            <Stack.Screen name={Navigations.coacheditpersonaldetails} component={Coachededitpersonaldetails} />
            <Stack.Screen name={Navigations.coachaddmatch} component={CoachAddmatch} />
            
           
        </Stack.Navigator>
    )
}
export default StackAuthCoach;