import { COLORS,FONTS,SIZES } from '@app/constants/Theme';
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
        borderStyle:'dotted',
        height:1,
        borderWidth:1
    },
    middleviewstyle:{
        alignItems:'center',
        marginHorizontal:15
    },
    headings:{
        marginHorizontal: 20,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      title:{
        color:COLORS.blue,
        fontSize:14,
        marginLeft:20
    },
    phonecode:{
        flexDirection:'row',
        justifyContent:'center'
    },
    addnew:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:3,
        marginBottom:10

    },
      container:{
        height: SIZES.baseX5*2,
        backgroundColor: COLORS.gray1,
        //borderWidth: 1,
        borderColor: COLORS.gray3,
        overflow: 'hidden',
        borderRadius: SIZES.radius+3,
        marginBottom: SIZES.baseX4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: SIZES.base,
        marginHorizontal:20,
        // backgroundColor:'green',
        //justifyContent:'center',
        
      }

})