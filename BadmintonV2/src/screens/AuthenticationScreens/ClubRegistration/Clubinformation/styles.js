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
       marginTop:SIZES.baseX3
    },
    detailstyles:{
      color:COLORS.black,
      alignSelf:'center',
      fontSize:SIZES.baseX8,
      marginBottom:10
      //...FONTS.regular,
        
    },
    line:{
        borderWidth:0.5,
        height:1,
        borderStyle:'dotted',
        borderColor:COLORS.black
    },
    headings:{
        marginHorizontal: 20,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      ownerview:{
        alignItems:'center'
      },
      addadress:
      {marginHorizontal:20,
        //marginVertical:10,
        marginBottom:10,
        color:COLORS.blue1,fontWeight:'600'},
      detailstext:{
        fontSize:16,
        color:COLORS.black,
        fontWeight:'500'
      }
})