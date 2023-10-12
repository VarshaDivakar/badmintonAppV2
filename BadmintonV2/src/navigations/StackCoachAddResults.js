// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';
import CoachUploadResults from "@app/screens/CoachDashboard/CoachUploadResults";
import CoachUploadNewResults from "@app/screens/CoachDashboard/CoachUploadNewResults";
import Result from "@app/screens/PlayerDashboard/Results";
import ResultCoach from "@app/screens/CoachDashboard/ResultsCoach";


const StackCoachAddResults = () => {
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
            initialRouteName={Navigations.results}>
                 <Stack.Screen name={Navigations.resultscoach} component={ResultCoach} />
            <Stack.Screen name={Navigations.coachuploadresults} component={CoachUploadResults} />
            <Stack.Screen name={Navigations.coachuploadnewresults} component={CoachUploadNewResults} />
            
        </Stack.Navigator>
    )
}
export default StackCoachAddResults;