import { COLORS, FONTS } from '@app/constants/Theme';
import {StyleSheet} from 'react-native';



export const styles =StyleSheet.create ({
    headertextstyle:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:22,
        fontWeight:'bold',
        marginTop:15
    },
    detailstyles:{
        color:COLORS.black,
        alignSelf:'center',
        fontSize:18,
        marginTop:5,
        marginBottom:15
        
    },
    linestyles:{
        borderStyle:'dotted',
        height:1,
        borderWidth:1
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