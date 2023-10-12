import { COLORS, FONTS ,SIZES} from '@app/constants/Theme';
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
        //borderStyle:'dotted',
        height:1,
        borderWidth:1,
        borderWidth:StyleSheet.hairlineWidth,
        marginVertical:9
    },
    title:{
     // fontStyle:FONTS.bold,
      fontSize:14,
      color:COLORS.black7,
     // ...FONTS.bold,
    },
    editlable:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,
      }

})