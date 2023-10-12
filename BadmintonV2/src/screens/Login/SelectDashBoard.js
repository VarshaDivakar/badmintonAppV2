import TextInputComponent from '@app/components/TextInputComponent';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import React, { useState } from 'react';
import {View,Text, StyleSheet, Switch, StatusBar} from 'react-native';
import Calendar from '@app/assets/icons/Calendar.svg';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import Modal from "react-native-modal";
import Rectanglebutton from '@app/components/Rectanlebutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import { useRecoilState } from 'recoil';
import { type } from '../../dummyData/recoil';
export default function SelectDashBoard({isModalVisible = true,onClose}){
    const [isEnabled,setIsEnabled] = useState(true);
    const [dashboardtype,setdashboardType] = useRecoilState(type);
    const navigation = useNavigation();
    return (
        <Modal  
        onBackdropPress={()=>onClose()}
        isVisible={isModalVisible}>
            
        <View style={{
             paddingTop:38,
             paddingBottom:65,
             backgroundColor:'white',
             borderRadius:10
        }}>
        <Text style={style.heading}>Select Dashboard</Text>
        <Rectanglebutton 
                onPress={() => {
                    setdashboardType('player')
                    navigation.navigate(navigations.home)
                    onClose()
                }}
                buttonStyle={style.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Player Dashboard'}
                />
                  <Rectanglebutton 
                   onPress={() => {
                    setdashboardType('coach')
                    navigation.navigate(navigations.home)
                    onClose()
                }}
                buttonStyle={style.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Coach Dashboard'}
                />
                 <Rectanglebutton 
                buttonStyle={style.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Club Dashboard'}
                onPress={() => {
                    setdashboardType('club')
                    navigation.navigate(navigations.home)
                    onClose()
                }}
                />
                 <Rectanglebutton 
                buttonStyle={style.signupbutton}
                textStyle={{fontSize:16,fontWeight:'700'}}
                label={'Sponsor Dashboard'}
                onPress={() => {
                    setdashboardType('sponser')
                    navigation.navigate(navigations.home)
                    onClose()
                }}
                />
        </View>
        </Modal>
    )
}
const style = StyleSheet.create({
    heading:{
        ...FONTS.semiBold,
        fontSize:25,
        color:COLORS.black9,
        alignSelf:'center',
        lineHeight:28,
        marginBottom:32
    },
    signupbutton:{
        backgroundColor:'#fe771e',
        height:48,
        width:320,
        marginBottom:5

    },
})