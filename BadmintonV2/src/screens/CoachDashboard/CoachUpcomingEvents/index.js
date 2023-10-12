import React from 'react';
import { View, Text, Image, FlatList, ImageBackground, Pressable } from 'react-native';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import Header from '@app/components/Header';
import Menu from '@app/assets/icons/menu.svg';
import images from '@app/constants/images';
import SearchHeader from '@app/components/SearchHeader';
import { upcomingEvents } from '../../../dummyData';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import CalenderIcon from '@app/assets/icons/Calendar.svg';
import MainLayoutWrapperPy from '@app/components/MainLayoutWrapper/MainLayoutWrapperPy';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import Location from '@app/assets/icons/location.svg';
import UpcomingEventCard from '@app/components/UpcomingEventCard';
import PlayerUpcomingEventCard from '@app/components/PlayerUpcomingEventCard';
export default function CoachUpcomingEvents() {
    const navigation = useNavigation();
    return (
        <>
            <SafeAreaWraper  barStyle={'light-content'} >
                <MainLayoutWrapperPy 
                title={'All Upcoming Events'}
                
                onFilter={()=>navigation.navigate(navigations.upcomingFilter)}
                >
                    <FlatList
                        data={upcomingEvents}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <Pressable 
                        onPress={()=> 
                            // navigation.navigate(navigations.upcomingEventTrack,
                            // {eventItem:item})
                            navigation.navigate(navigations.playerfindtournament1,{
                                title:'All Matches',
                                ListData:{
                                id: '1',
                                name: 'German Open 2022 (1000IE)',
                                location: `Badminton England - Performance | ${'\n'} Mulheim an der Ruhr, Germany`,
                                date:'14/03/2023 to 19/03/2023',
                              }})
                            }> 
                            <UpcomingEventCard item={item}/>
                            </Pressable>
                    } />

               
                
            </MainLayoutWrapperPy>
        </SafeAreaWraper>
        </>
    )
        
}