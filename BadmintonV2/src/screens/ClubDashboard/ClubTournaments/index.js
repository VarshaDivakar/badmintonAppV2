import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import SafeAreaWraper from '../../../components/SafeAreaWraper';
import MainLayoutWrapperPy from '../../../components/MainLayoutWrapper/MainLayoutWrapperPy';
import { useNavigation } from "@react-navigation/native";
import navigations from "@app/navigations/navigations";
import { tournamentSlider } from "../../../dummyData";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import MatchBookedList from "@app/components/MatchBookedList";
import Tournamentcard from "@app/components/Tournamentcard";
import UpcomingMatchList from "@app/components/UpcomingMatchList";
const ClubTournament = () => {
    const navigation = useNavigation();
    const [selectedView, setSelectedView] = useState('Tournaments')
    return (
        <SafeAreaWraper  barStyle={'light-content'}>
            <MainLayoutWrapperPy
                isBackArrow={false}
                title={'Tournaments'}
                containerStyle={{
                    marginBottom: 0,
                    paddingVertical: SIZES.baseX4,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    paddingBottom: 25
                    // backgroundColor:'orange'
                }}
                onFilter={() => { navigation.navigate(navigations.tournamentFilter) }}>
            
                   
                        <FlatList data={[1, 2, 3, 4,5]}
                        showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <Tournamentcard />} />
            </MainLayoutWrapperPy>
        </SafeAreaWraper>
    )
}

export default ClubTournament;
