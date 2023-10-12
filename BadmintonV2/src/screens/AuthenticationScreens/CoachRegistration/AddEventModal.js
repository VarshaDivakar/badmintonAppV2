import TextInputComponent from '@app/components/TextInputComponent';
import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import React, { useState } from 'react';
import {View,Text, StyleSheet, Switch} from 'react-native';
import Calendar from '@app/assets/icons/Calendar.svg';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import Modal from "react-native-modal";
import Toast from 'react-native-toast-message';
export default function AddEventModal({isModalVisible = true,onClose}){
    const [isEnabled,setIsEnabled] = useState(true);
    return (
        <Modal  
        onBackdropPress={()=>onClose()}
        isVisible={isModalVisible}>
        <View style={{
             paddingTop:18,
             paddingBottom:25,
             backgroundColor:'white',
             borderRadius:10
        }}>
        <Text style={style.heading}>ADD EVENT</Text>
        <TextInputComponent
        container={{
            borderWidth:0,
            marginTop:20
        }}
         placeholder={'Enter your event name'}
         placeHolderColor={COLORS.gray4}
       
         />
         <View style={{
            flexDirection:'row',
            alignItems:'center',
            marginVertical:20,
            justifyContent:'space-between',
            marginHorizontal:20
         }}>
            <Text style={{
                ...style.heading,
                alignSelf:'flex-start',
                // marginLeft:20
                }}>ALL DAY</Text>
                 <Switch
          style={{}}
          trackColor={{false: '#767577', true: COLORS.green}}
          thumbColor={isEnabled ? COLORS.white : '#f4f3f4'}
          onValueChange={() => setIsEnabled(previousState => !previousState)}
          value={isEnabled}
        />
         </View>

         <TextInputComponent
        container={{
            borderWidth:0
        }}
         placeholder={'From'}
         placeHolderColor={COLORS.gray4}
         rightIcon={<Calendar color={COLORS.black} height={20} width={20}/>}
         />
           <TextInputComponent
        container={{
            borderWidth:0
        }}
         placeholder={'To'}
         placeHolderColor={COLORS.gray4}
         rightIcon={<Calendar color={COLORS.black} height={20} width={20}/>}
         />
           <TextInputComponent
        container={{
            borderWidth:0
        }}
         placeholder={'Select Reminder'}
         placeHolderColor={COLORS.gray4}
         rightIcon={<Calendar color={COLORS.black} height={20} width={20}/>}
         />
           <TextInputComponent
        container={{
            borderWidth:0,
            height:150
        }}
         placeholder={'Description'}
         inputStyle={{textAlignVertical:'top'}}
         placeHolderColor={COLORS.gray4}
         />
         <RectangleButton 
         label={'Save'}
         onPress={()=> {
            Toast.show({
                type: 'success',
                text1: 'Event Added Successfully'
              });
            onClose()}}
         buttonStyle={{
            width:SIZES.width * 0.3,
            height:45,
            alignSelf:'center',
        }}
        textStyle={{
            ...FONTS.regular
        }}
         />
        </View>
        </Modal>
    )
}
const style = StyleSheet.create({
    heading:{
        ...FONTS.medium,
        fontSize:14,
        color:COLORS.black8,
        alignSelf:'center'
    }
})