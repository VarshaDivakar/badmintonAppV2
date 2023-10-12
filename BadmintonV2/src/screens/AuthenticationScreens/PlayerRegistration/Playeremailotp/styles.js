import { COLORS, FONTS,SIZES } from '@app/constants/Theme';
import {StyleSheet} from 'react-native';



export const styles =StyleSheet.create ({
container:{
    flex:1,
    alignItems:'center',
},
imagestyle:{
    height:235,
    width:326,
    marginTop:-15
},
titlestyle:{
    color:COLORS.black3,
    fontSize:22,
    fontWeight:'bold',
    marginTop:30,
    marginBottom:10
   // ...FONTS.bold
},
changeWrap: {
    flexDirection: 'row',
    marginVertical: SIZES.baseX3,
    justifyContent: 'center',
    alignItems: 'center',
    color:COLORS.white
  },
  phonenumber:{
    borderColor: COLORS.orange1,
    height: 25,
    backgroundColor: COLORS.white,
    width: SIZES.width / 1.8,
    paddingHorizontal:4,
    marginTop:4,
    borderRadius:2,
    right:-10
  },
  update:{
    height:25,
    width: SIZES.baseX8*3,
    backgroundColor: COLORS.orange1,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:-7,
    left:-13,
    marginTop:4,
     borderTopRightRadius:5,
     borderBottomRightRadius:5
  },
  numberStyle: {
    //...FONTS.regular,
    fontSize: 14,
    color: COLORS.black3,
  },
  changeBtnStyle:{ 
    //...FONTS.semiBold,
    fontSize: 12,
    color: COLORS.orange,
    marginTop:-2,
},

})