import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';

export const styles = StyleSheet.create({
  maincontainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginTop: 30,
    // justifyContent:'center'
  },
  labelStyle: {
    color: COLORS.gray12,
    ...FONTS.regular,
    marginBottom: SIZES.base,
    marginBottom: 0,
  },
  subcontainer: {
    height: SIZES.baseX5 + 40,
    // height: SIZES.baseX5 + 26,
    width: SIZES.width * 0.85,
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 8,
    // marginTop:10,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.baseX4,
    padding: SIZES.base,
    marginBottom: SIZES.baseX2,
    justifyContent: 'center',
  },
  inputOuterContainer: {
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    // height: SIZES.baseX5 + 30,
    height: SIZES.baseX5 + 40,
    marginBottom: SIZES.baseX2,
    width: SIZES.width * 0.85,
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.baseX4,
    borderRadius: SIZES.base,
    // backgroundColor:'red'
  },
  inputContainer: {
    height: 59,
    // paddingHorizontal: 0,
    borderColor: COLORS.gray7,
    borderWidth: 1,
    paddingTop:SIZES.base - 2,
   backgroundColor:COLORS.white
    // paddingVertical: SIZES.base,
    // backgroundColor:'yellow'
  },
  inputStyle: {
    width: SIZES.width - 80,
    flex:1,
    fontSize:14,
    
    // height: SIZES.baseX8 ,
     color:COLORS.black,
    // backgroundColor:'red'
  },

  firstcontainer: {
    height: 56,
    width: 300,
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
  },
  bottomviewstyles: {
    flexDirection: 'row',
    justifyContent:'space-between',
    //  backgroundColor:'red',
     width:SIZES.width
    // height: SIZES.baseX5 + 26,
    // width: SIZES.width * 0.85,
    // justifyContent:'space-between',
    // marginTop:SIZES.baseX2,
    // alignItems:'center'
  },
  smallviewstyles: {
    height: 56,
    width: 80,
    borderColor: '#8592B2',
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobilenumberview: {
    width: 208,
    height: 56,
    borderColor: '#8592B2',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 10,
  },
  innertextstyles: {
    ...FONTS.semiBold,
    ...COLORS.black,
    marginLeft: 5,
  },
  countryviewstyles: {
    height: SIZES.baseX5 + 40,
    // height:56,
    width: SIZES.width * 0.85,
    borderColor: '#8592B2',
    borderWidth: 1,
    borderRadius: 8,
    // marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.baseX4,
    marginBottom: SIZES.baseX2,
  },
  countryflag: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 15,
    //  margin:10
  },
  secondCountryFlag: {
    width: 25,
    height: 25,
    borderRadius: 15,
    marginRight: 5,
  },
  arrowstyle: {
    height: 28,
    width: 15,
    marginLeft: 80,
  },
  upperLabelStyle:{  
    ...FONTS.regular,
    fontSize: 13,
    color:'#777777',}
});
