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
    addaddress:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:-10
    },
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
      },
    
      labelText: {
        //...FONTS.medium,
        fontSize: 15,
        color: 'black',
      },
      phonecode:{
        flexDirection:'row',
        justifyContent:'center'
    },
    addaddress:{
        ...FONTS.medium,
        color:COLORS.blue,
        //fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:0,
        marginVertical:15

    },

})