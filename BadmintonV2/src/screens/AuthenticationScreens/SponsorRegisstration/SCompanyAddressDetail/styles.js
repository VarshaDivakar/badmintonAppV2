import { COLORS,FONTS,SIZES } from '@app/constants/Theme';
import {StyleSheet} from 'react-native';



export const styles =StyleSheet.create ({
    headertextstyle:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:SIZES.baseX8,
        //...FONTS.regular,
        //...FONTS.semiBold,
       fontWeight:'bold',
       marginTop:SIZES.baseX5
    },
    bottomtext:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        //marginTop:-10
    },
    detailstyles:{
        ...FONTS.semiBold,
        color:'#100101',
        alignSelf:'center',
        fontSize:SIZES.baseX3,
        marginBottom:SIZES.baseX5
        //...FONTS.regular,
        
    },
})