import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import {StyleSheet} from 'react-native';



export const styles =StyleSheet.create ({
    headertextstyle:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:SIZES.baseX8,
        //...FONTS.regular,
        //...FONTS.semiBold,
       fontWeight:'bold',
       marginTop:SIZES.baseX3
    },
    detailstyles:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:14,
        marginBottom:10,
        marginTop:6
        //...FONTS.regular,
        
    },
    phonecode:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    addaddress:{
        ...FONTS.medium,
        color:COLORS.blue,
        //fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:0,
        marginVertical:15

    },
    underline: {
        alignSelf: 'center',
        color: COLORS.gray2,
      },
      Underline: {
        width: '100%',
        height: 1,
        backgroundColor: '#FFFFFF14',
        marginTop: 18,
      },
      headingContainer: {
        marginVertical: 10,
      },
      headingLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        borderTopWidth:StyleSheet.hairlineWidth,
        marginBottom:5
      },
      headingText: {
        marginVertical: 15,
        fontSize: 14,
        color: COLORS.black7,
        left: 25,
      },
 

})