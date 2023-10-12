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
        fontSize:SIZES.baseX8,
        marginBottom:10
        //...FONTS.regular,
        
    },
    phonecode:{
        flexDirection:'row',
        justifyContent:'center'
    },
    addaddress:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX3,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:0,
        marginVertical:15

    }

})