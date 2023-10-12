import React from "react";
import {View,Text, StyleSheet, Pressable} from 'react-native';
import { COLORS, SIZES } from "../../constants/Theme";
import Menu from '../../assets/icons/menu.svg';
export default function CardHome({item,onPress,icon}){
    return (
        <Pressable style={styles.container} onPress={onPress}>
     <View style={styles.subcontainer}>
        {icon}
        {/* <Menu height={30} width={30}/> */}
        </View>
        <Text style={styles.title}>{item.title}</Text>
     {/* </View> */}
     </Pressable>
    )
}
const styles = StyleSheet.create({
    subcontainer:{
        backgroundColor: 'rgba(31, 35, 81, 0.3)',
        borderRadius:25,
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center'
       
    },
    container:{
        marginHorizontal:SIZES.width/7.5,
        // marginBottom:,
        height:150,
        width:100,
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow'
    },
    title:{
        textAlign:'center',
        color:COLORS.gray2,
        fontSize:15,
        // backgroundColor:'red',
        width:'100%'
    }
})


