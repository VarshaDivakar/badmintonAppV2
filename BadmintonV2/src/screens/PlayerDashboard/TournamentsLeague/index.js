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
const TournamentsLeague = () => {
    const navigation = useNavigation();
    const [selectedView, setSelectedView] = useState('Tournaments')
    return (
        <SafeAreaWraper  barStyle={'light-content'}>
            <MainLayoutWrapperPy
                isBackArrow={false}
                title={'Tournaments/League'}
                containerStyle={{
                    marginBottom: 0,
                    paddingVertical: SIZES.baseX4,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    paddingBottom: 25
                    // backgroundColor:'orange'
                }}
                onFilter={() => { navigation.navigate(navigations.tournamentFilter) }}>
                <>
                    <View style={{
                        backgroundColor: COLORS.primary,
                        height: 30,
                        marginBottom: 10
                    }}>
                        <FlatList data={tournamentSlider}
                            horizontal
                            renderItem={({ item }) => {
                                return <View style={{
                                    marginHorizontal: 10
                                }}>
                                    <Pressable onPress={() => setSelectedView(item.type)}>
                                        <Text style={{
                                            color: (selectedView == item.type) ? COLORS.orange : COLORS.gray5,
                                            ...FONTS.semiBold,
                                            fontSize: 12
                                        }}>{item.type}</Text>
                                    </Pressable>
                                </View>
                            }} />
                    </View>
                    {/* <View style={{}}> */}
                    {
                        (selectedView == 'Tournaments') &&
                        <FlatList data={[1, 2, 3, 4,5]}
                        showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <Tournamentcard />} />

                    }
                    {
                        (selectedView == 'This Week') &&
                        <FlatList data={[1, 2, 3, 4]}
                        showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <MatchBookedList />} />

                    }
                    {
                        (selectedView == 'Upcoming Matches') &&
                        <FlatList data={[1, 2, 3, 4,5]}
                        showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <UpcomingMatchList />} />

                    }
                    {
                        (selectedView == 'Open Entry') &&
                        <FlatList data={[1, 2, 3, 4]}
                        showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <Tournamentcard isFavourite={false} />} />

                    }
                    {
                        (selectedView == 'Recently Visited') &&
                        <FlatList data={[1, 2, 3, 4]}
                        showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <Tournamentcard isFavourite={false} />} />

                    }
                    {/* </View> */}

                </>
            </MainLayoutWrapperPy>
        </SafeAreaWraper>
    )
}

export default TournamentsLeague;
