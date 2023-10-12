// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';
import CoachAddmatch from "@app/screens/CoachDashboard/CoachAddmatch";
import CoachAddNewMatch from "@app/screens/CoachDashboard/CoachAddNewMatch";


const StackCoachAddMatch = () => {
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
            initialRouteName={Navigations.coachaddmatch}>
            <Stack.Screen name={Navigations.coachaddmatch} component={CoachAddmatch} />
            <Stack.Screen name={Navigations.coachaddnewmatch} component={CoachAddNewMatch} />
            
        </Stack.Navigator>
    )
}
export default StackCoachAddMatch;