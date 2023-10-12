import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../constants/Theme';

export default function Header({title,leftIcon,rightIcon} = props){
    return (
        <View style={style.container}>
            {leftIcon && leftIcon}
            <Text style={style.title}>{title}</Text>
            {rightIcon ? rightIcon:<View/>}
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:COLORS.primary,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        // paddingHorizontal:20
    },
    title:{
        ...FONTS.semiBold,
        color:COLORS.white2,
        fontSize:16
    }
})