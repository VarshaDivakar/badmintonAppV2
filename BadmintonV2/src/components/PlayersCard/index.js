import images from "@app/constants/images";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import React from "react";
import {View,Text,Image, StyleSheet} from 'react-native';

export default function PlayersCard(){
    return(
        <View style={styles.container}>
           <View style={{
            flexDirection:'row',
           alignItems:'center',
           marginBottom:10}}>
            <Image source={images.men} style={{height:30,width:30,marginRight:10}}/>
            <Text style={styles.name}>Gail Emms</Text>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.name}>Birthdate:</Text>
                <Text style={styles.value}>April 27,1998</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.name}>Birthplace:</Text>
                <Text style={styles.value}>Leicester,England</Text>
            </View>
           </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:SIZES.width-40,
        // backgroundColor:COLORS.white,
        // elevation:1,
        paddingVertical:10,
        paddingHorizontal:10,
        borderColor: '#00000029',
        borderWidth: 1,
        shadowColor: '#00000029',
        shadowOffset: { width: -2, height: 2 },
         shadowOpacity: 0.2,
         shadowRadius: 5,
        alignSelf:'center',
        borderRadius:10,
        marginBottom:10

    },
    name:{
        ...FONTS.semiBold,
        color:COLORS.black4,
        fontSize:12
    },
    value:{
        ...FONTS.regular,
        color:COLORS.black4,
        marginLeft:5,
        fontSize:12
    }
})