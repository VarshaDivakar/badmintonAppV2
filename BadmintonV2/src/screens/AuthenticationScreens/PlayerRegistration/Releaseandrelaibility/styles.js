import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    headertextstyle: {
        color:COLORS.black,
        alignSelf:'center',
        fontSize:SIZES.baseX8,
        //...FONTS.regular,
        //...FONTS.semiBold,
       fontWeight:'bold',
       marginTop:SIZES.baseX3
    },
    detailstyles: {
        color:COLORS.black,
        alignSelf:'center',
        fontSize:SIZES.baseX8,
        marginBottom:10
        //...FONTS.regular,

    },
    linestyles: {
        borderStyle: 'dotted',
        height: 1,
        borderWidth: 0.5
    },
    centralview: { 
        flexDirection: 'row',
         alignItems: 'center',
        //   marginHorizontal: 35, 
          paddingVertical: 10 ,
          width:SIZES.width - 40,
        //    backgroundColor:'red',
          alignSelf:'center'
        },
        textstyle:{
            ...FONTS.medium,
            fontSize:12,
            // fontWeight:'bold',
            color:COLORS.black,
            textAlign:'left',
            width:SIZES.width - 90,
        
        }
})