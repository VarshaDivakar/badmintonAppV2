import TrackTournament from "@app/components/Cardcomponent/TrackTournament";
import MainLayoutWrapperPy from "@app/components/MainLayoutWrapper/MainLayoutWrapperPy";
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import UpcomingEventCard from "@app/components/UpcomingEventCard";
import navigations from "@app/navigations/navigations";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View,Text} from 'react-native';

export default function UpcomingEventTrack(props){
    const item = props.route.params.eventItem;
    const navigation = useNavigation()
    return(
        <SafeAreaWraper barStyle={'light-content'}>
            <MainLayoutWrapperPy 
            isBackArrow={true}
            isProfile={true}
            onFilter = {()=> navigation.navigate(navigations.upcomingFilter)}
            title={'All Upcoming Events'}>
                  <UpcomingEventCard item={item}/>
                  <View style={{marginLeft:20}}> 
                    <TrackTournament />
                  </View>
            </MainLayoutWrapperPy>
            </SafeAreaWraper>
    )
}