import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Pressable,
    Image,
    Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import { COLORS, SIZES } from '@app/constants/Theme';
import images from '@app/constants/images';
import Menu from '@app/assets/icons/menu.svg';
import Logout from '@app/assets/icons/logout.svg';
import Notification from '@app/assets/icons/notification.svg';
import Marketplace from '@app/assets/icons/marketplace.svg';
import CardHome from '@app/components/CardPlayerHome';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import Dashboard from '@app/assets/icons/dashboard.svg';
import UpcomingEvents from '@app/assets/icons/upcomingEvents.svg';
import Tournaments from '@app/assets/icons/tournament.svg';
import Result from '@app/assets/icons/result.svg';
import AddMatch from '@app/assets/icons/addmatch.svg';
import Heart from '@app/assets/icons/heart.svg';
import BookMatch from '@app/assets/icons/bookMatch.svg';
import Wallet from '@app/assets/icons/wallet.svg';
import Players from '@app/assets/icons/players.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import { type } from '../../../dummyData/recoil';
const PlayerData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Dashboard',
        icon: <Dashboard height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'All Upcoming Events',
        icon: <UpcomingEvents height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Tournaments/League',
        icon: <Tournaments height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        title: 'Results',
        icon: <Result height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        title: 'Booked Matches',
        icon: <BookMatch height={35} width={35} />
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: 'Favourite',
        icon: <Heart height={35} width={35} />
    },
];

const coachData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Dashboard',
        icon: <Dashboard height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'All Upcoming Events',
        icon: <UpcomingEvents height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        title: 'Results',
        icon: <Result height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2',
        title: 'Add Match',
        icon: <AddMatch height={35} width={35} fill={COLORS.primary} />
    },
]

const clubData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Dashboard',
        icon: <Dashboard height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Tournaments',
        icon: <Tournaments height={35} width={35} fill={COLORS.primary} />
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        title: 'Players',
        icon: <Players height={35} width={35} fill={COLORS.primary} />
    },
]

const sponserData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Our Packages',
        icon: <Dashboard height={35} width={35} fill={COLORS.primary} />
    },
]

const Home = (props) => {
    const navigation = useNavigation();
    const [dashboardtype, setdashboardType] = useRecoilState(type);
    // const dashboardType = props?.route?.params?.dashboardType;
    console.log('props ==>', props);
    let DATA;
    if (dashboardtype == 'player')
        DATA = PlayerData;
    else if (dashboardtype == 'coach')
        DATA = coachData;
    else if (dashboardtype == 'club')
        DATA = clubData;
    else if (dashboardtype == 'sponser')
        DATA = sponserData;
    console.log('data ==>', DATA);


    const gotoLoginScreen = item => {
        if (item.title === 'Dashboard') {
            if (dashboardtype == 'player')
                navigation.navigate('tabPlayerDash', {
                    screen: navigations.calendar
                });
            else if (dashboardtype == 'coach')
                navigation.navigate('tabCoachDash', {
                    screen: navigations.coachDashboard
                });
            else if (dashboardtype == 'club')
                navigation.navigate('tabClubDash', {
                    screen: navigations.calendar
                });
        }
        else if (item.title === 'All Upcoming Events') {
            if (dashboardtype == 'player')
                navigation.navigate('tabPlayerDash', {
                    screen: navigations.upcomingEvents,
                });
            else if (dashboardtype == 'coach') {
                navigation.navigate('tabCoachDash', {
                    screen: navigations.coachUpcomingEvent,
                });
            } 
        }
        // else if (item.title == 'Results'){
        //     if (dashboardtype == 'player')
        //     navigation.navigate('tabPlayerDash', {
        //         screen: navigations.results,
        //     });
        // else if(dashboardtype == 'coach') {
        //     navigation.navigate('tabCoachDash', {
        //         screen: navigations.resultscoach,
        //     });
        // } 
        // }
    
        // navigation.navigate('tabCoachDash', {
        //     screen: navigations.stackcoachaddresults,
        // })


        // if (item.title === 'Tournaments/League') {
        //     navigation.navigate('tabPlayerDash', {
        //         screen: navigations.tournamentsLeague,
        //     });
        // }
        else if (item.title === 'Tournaments/League') {
            navigation.navigate('tabPlayerDash', {
                screen: navigations.tournamentsLeague,
            });
        }
        else if (item.title == 'Tournaments') {
            navigation.navigate('tabClubDash', {
                screen: navigations.clubTournament
            });
        } else if (item.title === 'Results') {
            if (dashboardtype == 'player')
                navigation.navigate('tabPlayerDash', {
                    screen: navigations.results,
                });
            else if (dashboardtype == 'coach')
                navigation.navigate('tabCoachDash', {
                    screen: navigations.stackcoachaddresults,
                });

        } else if (item.title === 'Booked Matches') {
            navigation.navigate('tabPlayerDash', {
                screen: navigations.matchBooked,
            });
        } else if (item.title === 'Favourite') {
            navigation.navigate(navigations.favourite);
        }
        else if (item.title == 'Players')
            navigation.navigate('tabClubDash', {
                screen: navigations.players
            });
        else if (item.title == 'Our Packages')
        {
            navigation.navigate('packages');

    }
    else if (item.title == 'Add Match')
        navigation.navigate('tabCoachDash', {
            screen: navigations.stackcoachaddmatch,
        })
        setSelectedId(item.id);
    };


    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        console.log('DATA item ==>', item);
        const backgroundColor =
            item.id === selectedId ? 'rgba(43,84,170,0.5)' : COLORS.blue;
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <CardHome
                icon={item.icon}
                item={item}
                onPress={() => gotoLoginScreen(item)}
            />
        );
    };

    const headerCard = () => {
        return (
            <View style={styles.headerbox}>
                <View style={styles.heading}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.navigate(navigations.basicProfile)}>
                            <Image source={images.men} style={{ height: 35, width: 35, marginRight: 10 }} />
                        </Pressable>
                        <View>
                            <Text style={styles.headProfileName}>Hello Syam Puli</Text>
                            <Text style={styles.headewelcome}>Welcome Back!</Text>
                        </View>
                    </View>


                    <View
                        style={{
                            position: 'absolute',
                            right: 20,
                            top: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Pressable
                            style={{ padding: 2, marginTop: 5 }}>
                            <Notification />
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate(navigations.transaction)}
                            style={{ padding: 2 }}>
                            <Wallet style={{ color: COLORS.primary }} />
                        </Pressable>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.baseX4,
                    marginBottom: SIZES.baseX5,
                    alignItems: 'center',
                    // backgroundColor:'green'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate(navigations.basicProfile)}
                        style={styles.editProfileBtn}>
                        <Text style={{
                            color: COLORS.primary,
                            fontSize: 15
                        }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate(navigations.loginscreen)}>
                        <Logout color={COLORS.white} height={15} width={15} />
                        <Text style={{
                            color: COLORS.white,
                            fontSize: 15,
                            marginLeft: 10
                        }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaWraper
            containerStyle={{ paddingHorizontal: 0 }}
            statusbar={COLORS.primary}
            backgroundColor="#fff"
            barStyle="light-content">
            <View style={styles.container}>
                <View style={styles.rotation}></View>
                <View style={styles.header}>{headerCard()}</View>

                <FlatList
                    data={DATA}
                    // contentContainerStyle={styles.flatList}
                    horizontal={false}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={[selectedId, DATA]}
                />
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 25,
                        left: 20,
                        height: 40,
                        width: 40,
                    }}
                // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                >
                   
                </TouchableOpacity>
            </View>
        </SafeAreaWraper>
    );
};

export default Home;
