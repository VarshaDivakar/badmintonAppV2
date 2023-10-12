import React from 'react';
import {View,Text} from 'react-native';
// import Calendar from './src/screens/Calendar/Calendar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Home from './src/screens/Home';
// import UpcomingEvents from './src/screens/UpcomingEvents';
import { NavigationContainer } from '@react-navigation/native';
import MainController from '@app/navigations/MainController';
import {
  RecoilRoot
} from 'recoil';
import Toast from 'react-native-toast-message';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';

export default function App(){
  const toastConfig = {success : ({ text1, props }) => (
    <View style={{ 
      height: 60, 
    width: SIZES.width - 100,
     backgroundColor: COLORS.lightGreen2 ,
     borderRadius:30,
     justifyContent:'center',
     alignItems:'center'
     }}>
      <Text style={{
        color:'#F8F8F8',
        ...FONTS.regular,
        fontSize:16,
        textAlignVertical:'center'
      }}>{text1}</Text>
      {/* <Text>{props.uuid}</Text> */}
    </View>
  )
}
  return (
    <RecoilRoot>
    <SafeAreaProvider>
    <NavigationContainer>
      <MainController/>
      {/* <Calendar/> */}
      {/* <Home/> */}
      {/* <UpcomingEvents/> */}
       {/* <Text>Hll</Text> */}
    </NavigationContainer>
    <Toast config={toastConfig}/>
     </SafeAreaProvider>
     </RecoilRoot>
  )
}