import React from "react";
import { View, Text, FlatList, Image, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Header from "@app/components/Header";
import StripCalendar from "@app/components/StripCalendar";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import images from '@app/constants/images';
import Menu from '@app/assets/icons/menu.svg';
import { UpcomingMatched, liveResult, clubDashboardUpcomingMatch } from "../../../dummyData";
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import MainLayoutWrapperIn from "@app/components/MainLayoutWrapper/MainLayoutWrapperWl";
import MatchResult from "@app/components/MatchResult";
import Wallet from '@app/assets/icons/wallet.svg'
import { useNavigation } from "@react-navigation/native";
import navigations from "@app/navigations/navigations";
const ClubDashboard=()=> {
    const navigation = useNavigation();
    const _upcomingMatch = ({ item }) => {
        return <View style={{ margin: 10 }}>
            <ImageBackground
                source={images.bgMatches}
                imageStyle={{ borderRadius: 15 }}
                style={style.bgImage}>
                <View style={style.flatView}>
                    <Text style={{ color: COLORS.white }}>{item.type}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{ width: '35%', alignItems: 'center' }}>
                            <Image
                                source={images.londonFlag}
                                style={style.flag} />
                            <Text style={style.teamName}>{item.team1.name}</Text>
                        </View>
                        <View style={{ width: '35%', alignItems: 'center' }}>
                            <Image
                                source={images.russiunFlag}
                                style={style.flag} />
                            <Text style={style.teamName}>{item.team1.name}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    }
    return (
        <SafeAreaWraper barStyle={'light-content'}>
            <MainLayoutWrapperIn title={'Dashboard'} 
            rightIcon={ <Pressable 
                onPress={()=> navigation.navigate(navigations.transaction)}
                > 
                <Wallet style={{color:COLORS.white}}
                />
                </Pressable>
                }
            containerStyle={{
                backgroundColor: COLORS.primary,
                height: 40,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                marginBottom: 0,
                flexDirection: 'row',
                // justifyContent: 'space-between',
                padding:0,
                paddingTop: 10,
                paddingHorizontal:25,
                alignItems:'center'

            }}>
            {/* <Header title='Dashboard'
                leftIcon={<Menu height={20} width={20} />}
            /> */}
            <Pressable style={style.profileView} 
            onPress={() => navigation.navigate(navigations.basicProfile)}>
                <Image source={images.men}
                    style={style.profile} />
                <Text style={{ color: COLORS.white, marginLeft: 10 }}>John Smith</Text>
            </Pressable>
            <StripCalendar onBtnPress={()=>{}}/>
            {/* <View style={{
                height: 180
            }}>
                <Text style={style.upcomingMatch}>Upcoming Matches</Text>
                <FlatList horizontal
                    data={UpcomingMatched}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        position: 'absolute',
                        top: 30
                    }}
                    renderItem={_upcomingMatch} />
            </View> */}

            {/* <View> */}
                <Text style={style.liveResult}>Buckinghamshire Upcoming Matches</Text>
                <FlatList data={clubDashboardUpcomingMatch} showsVerticalScrollIndicator={false}
                    renderItem={MatchResult} />
            {/* </View> */}
            </MainLayoutWrapperIn>
        </SafeAreaWraper>
        
    )
}

export default ClubDashboard

const style = StyleSheet.create({
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    profile: {
        height: 35,
        width: 35,
        borderRadius: 25
    },
    upcomingMatch: {
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        height: 110,
        paddingHorizontal: 20,
        fontSize: 16
    },
    flatView: {
        backgroundColor: 'rgba(10, 0, 0, 0.39)',
        height: '100%',
        width: '100%',
        borderRadius: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    flag: { width: 35, height: 35, borderRadius: 25 },
    teamName: { color: COLORS.white, textAlign: 'center', fontSize: 12 },
    bgImage: {
        height: 140,
        width: 170,
        borderRadius: 20,
        backgroundColor: COLORS.white,
    },
    liveResult: {
        color: COLORS.black,
        ...FONTS.semiBold,
        fontSize: 14,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    },
    liveFlatView: {
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 10

    },
    liveteamName: {
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 12,
        marginLeft: 10
    },
    teamView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})