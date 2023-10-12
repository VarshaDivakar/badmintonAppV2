// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';
import Clubdetails from "@app/screens/AuthenticationScreens/ClubRegistration/Clubdetails";
import Clubadditionalinformation from "@app/screens/AuthenticationScreens/ClubRegistration/Clubinformation";
import Clubterms from "@app/screens/AuthenticationScreens/ClubRegistration/Clubtermsandconditions";
import Clubpreview from "@app/screens/AuthenticationScreens/ClubRegistration/Clubpreview";
import Editclubadditionalinfo from "@app/screens/AuthenticationScreens/ClubRegistration/Editclubadditionaalinfo";
import Editclubdetails from "@app/screens/AuthenticationScreens/ClubRegistration/Editclubdetails";

const StackAuthClub = () => {
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
            initialRouteName={Navigations.clubdetails}>
            <Stack.Screen name={Navigations.clubdetails} component={Clubdetails} />
            <Stack.Screen name={Navigations.clubadditionalinformation} component={Clubadditionalinformation} />
            <Stack.Screen name={Navigations.clubterms} component={Clubterms} />
            <Stack.Screen name={Navigations.clubpreview} component={Clubpreview} />
            <Stack.Screen name={Navigations.editclubadditionalinfo} component={Editclubadditionalinfo} />
            <Stack.Screen name={Navigations.editclubdetails} component={Editclubdetails} />
        </Stack.Navigator>
    )
}
export default StackAuthClub;