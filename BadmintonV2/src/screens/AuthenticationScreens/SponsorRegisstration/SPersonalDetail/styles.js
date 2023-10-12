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
    //    marginTop:SIZES.baseX5
    marginTop:10
    },
    detailstyles:{
        ...FONTS.bold,
        color:'#100101',
//  color:'green',
        alignSelf:'center',
        fontSize:SIZES.baseX3,
        marginBottom:SIZES.baseX5
        //...FONTS.regular,
        
    },
    phonecode:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    addaddress:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        //marginTop:-10

    },
    countrycode:{
        borderWidth: 0,
         width:SIZES.width * 0.3,
          paddingHorizontal: 7
        },
        phonefield:{
            borderWidth: 0,
            width: SIZES.width * 0.57,
            marginLeft: -SIZES.baseX2,
          }

})
