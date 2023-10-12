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
    linestyles:{
        borderStyle:'dotted',
        height:1,
        borderWidth:0.5,
        borderColor:COLORS.black
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
        color:COLORS.black4,
        fontSize:14,
    },
    phonecode:{
        flexDirection:'row',
        justifyContent:'center'
    },
    addgender:{
        ...FONTS.medium,
        color:COLORS.blue,
        fontSize:SIZES.baseX4,
        marginHorizontal:SIZES.baseX8+4,
        marginTop:-10,
        marginBottom:10

    },
    continuebutton:{
        height:50,
        width:180,
        marginLeft:'auto',
        right:10
    }

})