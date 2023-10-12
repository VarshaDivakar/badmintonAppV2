import images from "@app/constants/images";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import react from "react";
import {View,Text, StyleSheet,ImageBackground,Image} from 'react-native';

export default function UpcomingMatchList(){
    return ( 
        <>
        <Text style={{
            marginLeft:10,
            color:'#090101',
            ...FONTS.regular,
            fontSize:12,
            marginTop:15
            }}>Today, 04 may 2023</Text>
        <View style={{
            backgroundColor:COLORS.primary,
            width:SIZES.width - 25,
            borderRadius:8,
            height: 95,
            marginVertical:10,
            alignSelf:'center',
            padding:10
            }}>
        {/* <ImageBackground
            source={images.bgMatches}
            imageStyle={{ borderRadius: 15 }}
            style={style.bgImage}> */}
            {/* <View style={style.flatView}> */}
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{ color: COLORS.white }}>Mens Single Queensland</Text>
                <Text style={{ color: COLORS.orange }}>Starting in: 7:30 PM</Text>
                </View>
                
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop:25
                }}>
                    <View style={{ width: '35%', alignItems: 'center',flexDirection:'row' }}>
                        <Image
                            source={images.londonFlag}
                            style={style.flag} />
                        <Text style={style.teamName}>Marcus Ellis</Text>
                    </View>
                    <Text style={{color:COLORS.orange}}>Vs</Text>
                    <View style={{ width: '35%', alignItems: 'center',flexDirection:'row' }}>
                        <Image
                            source={images.russiunFlag}
                            style={style.flag} />
                        <Text style={style.teamName}>Victor Axioson</Text>
                    </View>
                </View>
            {/* </View> */}
        {/* </ImageBackground> */}
    </View>
    </>
    )
}
const style = StyleSheet.create({
    flag: { width: 25, height: 25, borderRadius: 25 },
    teamName: { 
        color: COLORS.white, 
        textAlign: 'center', 
        fontSize: 12,
        marginLeft:10
     },
    bgImage: {
        height: 140,
        width: 170,
        borderRadius: 20,
        backgroundColor: COLORS.white,
    },
    flatView: {
        backgroundColor: 'rgba(10, 0, 0, 0.39)',
        height: '100%',
        width: '100%',
        borderRadius: 20,
        justifyContent: 'space-between',
        padding: 10
    },
})