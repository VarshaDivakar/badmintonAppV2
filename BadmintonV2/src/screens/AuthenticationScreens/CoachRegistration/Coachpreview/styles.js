import { COLORS, FONTS,SIZES } from '@app/constants/Theme';
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
    linestyles:{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        
    },
    title:{
     // fontStyle:FONTS.bold,
      fontSize:14,
      color:COLORS.black4,
      ...FONTS.bold,
    },
    editlable:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,
      }

})