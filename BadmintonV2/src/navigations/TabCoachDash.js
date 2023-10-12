import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigations from '@app/navigations/navigations';
import UpcomingEvents from '@app/screens/PlayerDashboard/UpcomingEvents';
import Result from "@app/screens/PlayerDashboard/Results";
import { COLORS, SIZES } from '@app/constants/Theme';
import images from '@app/constants/images';
import CoachDashboard from '@app/screens/CoachDashboard/CoachDashboard/CoachDashboard';
import CoachUpcomingEvents from '@app/screens/CoachDashboard/CoachUpcomingEvents';
import StackCoachAddMatch from './StackCoachAddMatch';
import StackCoachAddResults from './StackCoachAddResults';

export default function TabCoachDash(){
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
      tabBarStyle: {
        height: 50, 
        paddingBottom: 0,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        width:SIZES.width,
        alignSelf:'center',
        elevation:10,
        backgroundColor:COLORS.white,
       
      },
      // labelStyle: {paddingVertical: 50},
    }}>
    <Tab.Screen
      name={Navigations.coachDashboard}
      component={CoachDashboard}
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
      name={Navigations.coachUpcomingEvent}
      component={CoachUpcomingEvents}
      options={{
        tabBarShowLabel:false,
        tabBarIcon: ({focused, color, size}) => (
            <>
          <Image
            source={images.upcomingEvent}
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
      name={Navigations.stackcoachaddmatch}
      component={StackCoachAddMatch}
      options={{
        tabBarShowLabel:false,
        tabBarIcon: ({focused, color, size}) => (
            <>
          <Image
            source={images.Addmatchtab}
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
      name={Navigations.stackcoachaddresults}
      component={StackCoachAddResults}
      options={{
        tabBarShowLabel:false,
        tabBarIcon: ({focused, color, size}) => (
        <>  
        <Image
            source={images.result}
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