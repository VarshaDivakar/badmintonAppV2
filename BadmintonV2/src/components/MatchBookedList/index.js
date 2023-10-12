import images from "@app/constants/images";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import react from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MatchBookedList() {
    return (
        <View style={style.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                margin: 20
            }}>
                <View>
                    <Text style={style.matchTitle}>Womens Single</Text>
                    <Text style={style.court}>Court 1</Text>
                </View>
                <Text style={style.confirmBooking}>Booking confirmed</Text>
            </View>
            <View>
                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: -10,
                    justifyContent: 'center',
                    width: SIZES.width,
                    zIndex: 1,
                    alignItems: 'center'
                }}>
                    <Image source={images.londonFlag} style={style.flag} />
                    <Text style={style.setTxt}>Set 3</Text>
                    <Image source={images.russiunFlag} style={style.flag} />
                </View>
                <View style={{
                    backgroundColor: COLORS.black5,
                    width: '100%',
                    height: 60,
                    borderRadius: 20,
                    justifyContent: 'flex-end',
                    paddingBottom: 5
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                    }}>
                        <Text style={style.teamName}>Marcus Ellis (3)</Text>
                        <Text style={[style.teamName, { fontSize: 12 }]}>1-2</Text>
                        <Text style={style.teamName}>Victor Axieson (4)</Text>

                    </View>
                    <Text style={style.txt9}>93</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        margin: 10,
        borderRadius: 8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: SIZES.width - 20,
        marginVertical: 15,
        borderColor: '#00000029',
        borderWidth: 1,
        shadowColor: '#00000029',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2
    },
    matchTitle: {
        color: COLORS.black4,
        ...FONTS.regular,
        fontSize: 16
    },
    court: {
        color: COLORS.gray4,
        ...FONTS.regular,
        fontSize: 14
    },
    confirmBooking: {
        backgroundColor: COLORS.lightgreen,
        color: COLORS.green,
        ...FONTS.regular,
        fontSize: 12,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5
    },
    teamName: {

        color: COLORS.white2,
        ...FONTS.regular,
        fontSize: 14
    },
    flag: {
        height: 20,
        width: 20,
        borderRadius: 10
    },
    setTxt: {
        backgroundColor: '#E4E4E4',
        color: '#110202',
        paddingHorizontal: 12,
        borderRadius: 15,
        ...FONTS.regular,
        fontSize: 10,
        marginHorizontal: 10,
    },
    txt9: {
        ...FONTS.regular,
        fontSize: 10,
        width: '96%',
        textAlign: 'center',
        // backgroundColor:'red',
        paddingHorizontal: 20,
        color: '#C5BBBB',
        // marginRight:20
        // paddingRight:20
    }

})