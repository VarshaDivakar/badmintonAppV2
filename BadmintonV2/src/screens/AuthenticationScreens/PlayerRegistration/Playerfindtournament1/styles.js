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
        flexDirection:'row'
    },
    addaddress:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:-10

    },
heading:{
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  allmatches:{
    ...FONTS.bold,
    fontSize: 14,
    color: COLORS.black4,
    left: 18,
    marginTop: 10,
  }

})