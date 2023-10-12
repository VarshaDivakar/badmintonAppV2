import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
export const styles=StyleSheet.create({

  Paymentoptionviewstyle: {
      flexDirection: 'row',
      // height: 56,
      alignItems: 'center',
      // paddingHorizontal: 30,
      marginBottom: 10,
      width:SIZES.width - 40,
      alignSelf:'center',
      
      // marginBottom:30
    },
    paydetailstyles: {
      flexDirection: 'column',
      marginLeft: 30,
    },
    view1styles: {
      alignItems: 'center',
    },
    reviewDetailHead: {
      ...FONTS.regular,
      fontSize: 12,
      color: '#333333',
      // flex: 0.5,
      lineHeight: 20,
      marginLeft: 8,
    },
    reviewDetailValue: {
      ...FONTS.medium,
      fontSize: 13,
      color: '#1040BA',
      // flex: 0.5,
      lineHeight: 20,
      marginLeft: 8,
    },
    iconviewstyle: {
      height: 30,
      width: 30,
    },
    paymentoptiontextstyle: {
      // fontSize: 17,
      color: '#545F7A',
      ...FONTS.regular,
      paddingHorizontal: 30,
      marginBottom: 30,
    },
    textviewstyle: {
      alignSelf: 'center',
      // width: 200,
      marginLeft: 20,
    },
    buttonviewstyle: {
      position:'absolute',
    },
    amounttextstyle: {
      fontSize: 19,
      lineHeight: 19,
      fontFamily: 'Rubik-SemiBold',
  
      // ...FONTS.medium,
      color: '#000000',
    },
    verifiedWrap: isVerify => ({
      width: 24,
      height: 24,
      borderRadius: 24 / 2,
      backgroundColor: isVerify ? COLORS.primary : COLORS.white,
      borderColor: '#8592B2',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 5,
    }),
})