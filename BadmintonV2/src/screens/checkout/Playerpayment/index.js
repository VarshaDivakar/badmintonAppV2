import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import { COLORS, FONTS, SIZES, height } from '@app/constants/Theme'
import Location from '@app/assets/icons/location.svg'
import images from '@app/constants/images'
import Clock from "@app/assets/icons/clock.svg"
import RectangleButton from '@app/components/ButtonComponents/RectangleButton'
import { useNavigation, useRoute } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';


const Matchcard = () => {
    return (
        <View style={styles.mainview}>
            <Text style={styles.headtext}>German Open 2023 (1000iDE)</Text>
            <View style={styles.secodview}>
                <Location height={15} width={15} style={{ color: '#0d0101' }} />
                <Text style={styles.middletext}>Badminton England-performance | {'\n'}Berliner Str. 55, Hilden, 40721, DE</Text>
            </View>
            <View style={styles.lastview} >
                <Image source={images.Calendericon} style={styles.calender} />
                <Text style={styles.lasttext}>14/6/23 To 14/7/23</Text>
            </View>
            <View style={styles.lastview}>
                <Clock style={styles.calender} />
                <Text style={styles.lasttext}>U.K 3:30 PM</Text>
            </View>
        </View>
    )
}
const Paymentpreview = ({ label, Value }) => {
    return (
        <View style={{ 
            flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'space-between',
         marginHorizontal: 20
         }} >
            <Text style={styles.amounttextstyle}>{label}</Text>
            <Text style={styles.amounttextstyle}>  {Value}</Text>

        </View>
    )
}
const Dottedline = () => {
    return (
        <View style={{ 
            height: 1, 
            width:SIZES.width - 40, 
            borderWidth: 0.7, 
            borderBottomColor: '#000', 
            borderStyle: 'dashed', 
            alignSelf: 'center',
             marginVertical: 10 }}/>
    )
}

const Playerpayment = (props) => {
    const nextScreen = props?.route?.params?.nextScreen;
    const type=props?.route?.params?.type;
    console.log('playerPayment nexScreen ==>',props);
    const navigation = useNavigation();
    return (
        <SafeAreaWraper barStyle='light-content'>
            <MainLayoutWrapper containerStyle={{
      height: SIZES.height / 9,
      marginBottom: 40,
      alignItems: 'center',
    }}
    title={'Payment'} >
                <Text style={styles.matchname}>Match Name</Text>
                <Matchcard />
                <Dottedline />
                <Paymentpreview label={"Sub total"} />
                <Paymentpreview label={"Match fee"} Value={'£25,000'} />
                <Paymentpreview label={"Membership fee"} Value={'£25,000'} />
                <Dottedline />
                <Paymentpreview label={"Payment Type"} Value={type} />
                <Dottedline />
                <Paymentpreview label={"Total"} Value={'£50,000'} />
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:100,
                    width:SIZES.width - 40,
                    alignSelf:'center',
                    position:'absolute',
                    bottom:10
                    }}>
                    <RectangleButton 
                     buttonStyle={styles.previousbutton}
                     textStyle={{color:COLORS.blue2}}
                     label={'Previous'}
                     onPress={()=> navigation.goBack()}
                     />
                    <RectangleButton 
                    buttonStyle={styles.nextbutton}
                    onPress={()=> navigation.navigate(navigations.playermobileotp,{navigateTo: nextScreen})}
                    label={'Submit'}/>
                </View>


            </MainLayoutWrapper>
        </SafeAreaWraper>
    )
}

export default Playerpayment

const styles = StyleSheet.create({
    mainview: {
        margin: 10,
        borderRadius: 8,
        width: SIZES.width - 20,
        marginVertical: 15,
        borderColor: '#707070',
        borderWidth: 1,
        shadowColor: '#00000029',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        padding: 10

    },
    secodview: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        marginHorizontal: 10
    },
    middletext: {
        color: '#0D0101',
        ...FONTS.regular,
        fontSize: 14,
        marginLeft: 10,
        lineHeight: 20
    },
    locationstyle: {
        height: 15,
        width: 15
    },
    placetext: {
        marginHorizontal: 15,
        color: COLORS.black,
        marginLeft: 35,
        fontWeight: '500'

    },
    calender: {
        height: 15,
        width: 15,
        resizeMode:'center'
    },
    lasttext: {
        color: '#0D0101',
        // fontWeight: '600',
        // marginLeft: 15

        // color: COLORS.white,
        ...FONTS.regular,
        fontSize: 14,
        marginLeft: 10,
        lineHeight: 20
    },
    lastview: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 10
    },
    headtext: {
        color: "#501DC9",
        // marginLeft: 10,
        // color: COLORS.white,
        ...FONTS.regular,
        fontSize: 14,
        marginLeft: 10,
        lineHeight: 20,
        textDecorationLine: 'underline'
        // fontWeight: '700'
    },
    amounttextstyle: {
        ...FONTS.bold,
        fontSize: 14,
        // lineHeight: 19,
        color: COLORS.black7,

    },


    amountstyle: {
        fontSize: 17,
        lineHeight: 19,

        color: '#000000',
        fontWeight: '500'

    },
    matchname: {
        ...FONTS.bold,
        fontSize: 14,
        // fontFamily: 'Rubik-SemiBold',
        color: COLORS.black7,
        left: 10,

    },
    previousbutton:{height:48,
        width:SIZES.width * 0.3,
        borderRadius:24,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:COLORS.gray4
        },
        nextbutton:{
           height:48,
           width:SIZES.width * 0.5,
           borderRadius:24 ,
           marginHorizontal:10
        }

})