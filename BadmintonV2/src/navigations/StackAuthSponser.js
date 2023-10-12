// 
import React from "react";
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    TransitionSpecs,
} from '@react-navigation/stack';
import Navigations from '@app/navigations/navigations';
import SPersonalDetail from "@app/screens/AuthenticationScreens/SponsorRegisstration/SPersonalDetail";
import SPersonalAddressDetail from "@app/screens/AuthenticationScreens/SponsorRegisstration/SPersonalAddressDetail";
import SCompanyDetail from "@app/screens/AuthenticationScreens/SponsorRegisstration/SCompanyDetail";
import SCompanyAddressDetail from "@app/screens/AuthenticationScreens/SponsorRegisstration/SCompanyAddressDetail";
import SponserPreview from "@app/screens/AuthenticationScreens/SponsorRegisstration/Preview";
import EditSpersonaldetails from "@app/screens/AuthenticationScreens/SponsorRegisstration/EditSpersonaldetails";
import EditSCompanydetails from "@app/screens/AuthenticationScreens/SponsorRegisstration/EditSCompanydetails";
const StackAuthSponser = () => {
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
 <Stack.Screen name={Navigations.spersonDetail} component={SPersonalDetail} />
            <Stack.Screen name={Navigations.sPersonalAddressDetail} component={SPersonalAddressDetail} />
            <Stack.Screen name={Navigations.sCompanyDetail} component={SCompanyDetail} />
            <Stack.Screen name={Navigations.sCompanyAddressDetail} component={SCompanyAddressDetail} />
            <Stack.Screen name={Navigations.sponserPreview} component={SponserPreview} />
            <Stack.Screen name={Navigations.editSPersonalDetail} component={EditSpersonaldetails} />
            <Stack.Screen name={Navigations.editSCompanyDetail} component={EditSCompanydetails} />
                </Stack.Navigator>
    )
        }
        export default StackAuthSponser;