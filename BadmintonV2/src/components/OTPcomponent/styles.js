import { StyleSheet } from "react-native";
import { COLORS,FONTS,SIZES } from "@app/constants/Theme";



export const styles=StyleSheet.create({
    textinputstyles:{
        height: 38,
        width: 37,
        borderWidth: 1,
        borderColor: '#8592B2',
        // paddingLeft: 17,
        marginLeft: 8,
        borderRadius: 5,
        backgroundColor:'#fff',
        // ...FONTS.semiBold,
         color:COLORS.orange,
        //fontSize:24,
        color:'#333333',
        fontSize:14,
        // fontWeight:'600',
        marginTop:20,
        textAlignVertical:'center',
        textAlign:'center'
      },
      buttonstyle: {
        width: 150,
        height: 45,
        borderRadius: 5,
        backgroundColor:COLORS.primary,
        //marginTop: SIZES.baseX5 * 2,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        margin:20

    },
    OTPview:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      marginTop:20
    },
    submittext:{ 
      color: COLORS.white, 
      //fontSize: 14 ,
      ...FONTS.regular
    },
    countstyle:{
      color:COLORS.white,
      fontSize:15,
      marginLeft:10
    }
})