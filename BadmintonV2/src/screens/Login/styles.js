import { COLORS, SIZES } from '@app/constants/Theme';
import {StyleSheet} from 'react-native';


export const styles =StyleSheet.create ({
logostyles:{
width:200,
height:60,
position:'absolute',
alignSelf:'center',
marginVertical:55
},
loginview:{
    // height:400,
    width:SIZES.width - 40,
    opacity:0.9,
    backgroundColor:COLORS.white,
    alignSelf:'center',
    marginTop:170,
    borderRadius:20,
    paddingTop:24,
    paddingBottom:35,
    justifyContent:'center'
    
},
Logintextstyles:{
    color:'#ACB1C0',
    marginLeft:23,
    fontSize:16,
    marginVertical:2
},
forgotpinstyles:{
    color:'#202452',
    fontWeight:'bold',
    fontSize:14,
    alignSelf:'flex-end',
    marginRight:20
    // position:'absolute',
    // right:10
    // right:-220
},
bottomstyles:{
    flexDirection:'row',
    // marginTop:130,
    marginHorizontal:10,
    position:'absolute',
    bottom:55,
    width:SIZES.width- 20,
    
    alignItems:'center'

},
termstextstyle:{
    marginHorizontal:10,
    color:COLORS.white
},
policytextstyles:{
    color:"#fe771e"
}

})