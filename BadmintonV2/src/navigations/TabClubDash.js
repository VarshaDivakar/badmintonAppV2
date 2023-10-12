import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigations from '@app/navigations/navigations';
import { COLORS, SIZES } from '@app/constants/Theme';
import images from '@app/constants/images';
import Players from '@app/screens/ClubDashboard/ClubPlayers/Players';
import ClubDashboard from '@app/screens/ClubDashboard/ClubDashboard';
import ClubTournament from '@app/screens/ClubDashboard/ClubTournaments';

export default function TabClubDash(){
    const Tab = createBottomTabNavigator();
    return  <Tab.Navigator
    // initialRouteName={Navigations.transferlist}
    screenOptions={{
      tabBarActiveTintColor: COLORS.orange,
      tabBarInactiveTintColor: COLORS.gray2,
      headerShown: false,
      gestureEnabled: false,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
      },
      tabBarStyle: { height: 50, 
        paddingBottom: 0,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width:SIZES.width,
        alignSelf:'center',
        elevation:10,
        backgroundColor: COLORS.white,},
      // labelStyle: {paddingVertical: 50},
    }}>
    <Tab.Screen
      name={Navigations.clubDashboard}
      component={ClubDashboard}
      options={{
        tabBarShowLabel:false,
        // tabBarLabel: 'Transactions',
        tabBarIcon: ({focused, color, size}) => (
            <>
          <Image
            source={images.dashboard}
            style={{
              height: size - 10,
              width: size - 10,
              tintColor: color,
            }}
          />
         {focused &&  <Image source={images.tabMark} style={style.bottomIcon} tintColor={color}/>}
          </>
        ),
      }}
    />
     <Tab.Screen
      name={Navigations.clubTournament}
      component={ClubTournament}
      options={{
        tabBarShowLabel:false,
        tabBarIcon: ({focused, color, size}) => (
            <>
          <Image
            source={images.tournament}
            style={{
              height: size - 10,
              width: size - 10,
              tintColor: color,
            }}
          />
          {focused &&  <Image source={images.tabMark} style={style.bottomIcon} tintColor={color}/>}
          </>
        ),
      }}
    />
    
     <Tab.Screen
      name={Navigations.players}
      component={Players}
      options={{
        tabBarShowLabel:false,
        tabBarIcon: ({focused, color, size}) => (
        <>  
        <Image
            source={images.players}
            style={{
              height: size - 10,
              width: size - 10,
              tintColor: color,
            }}
          />
          {focused &&   <Image source={images.tabMark} style={style.bottomIcon} tintColor={color}/>}
          </>
        ),
      }}
    />
    </Tab.Navigator>

}

const style = StyleSheet.create({
    bottomIcon:{
        height:15,
        width:15,
        // backgroundColor:COLORS.orange,
        position:'absolute',
        bottom:0,
        marginTop:10,
        // color:COLORS.orange

        }
})