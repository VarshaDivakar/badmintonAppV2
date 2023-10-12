import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import {StyleSheet} from 'react-native';



export const styles =StyleSheet.create ({
    headertextstyle:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:SIZES.baseX8,
       fontWeight:'bold',
       marginTop:10
    },
    detailstyles:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:SIZES.baseX8,
        marginBottom:10,
      
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
