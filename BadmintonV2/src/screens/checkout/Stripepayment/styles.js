import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '@app/constants/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // jcustifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: SIZES.baseX5,
  },
  reviewDetailWrap: {
    // flexDirection: 'row',
    width: SIZES.width,
    marginVertical: SIZES.base,
  },
  reviewDetailHead: {
    ...FONTS.regular,
    fontSize: 12,
    color: COLORS.gray4,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  reviewDetailValue: {
    ...FONTS.medium,
    fontSize: 13,
    color: COLORS.blue,
    // flex: 0.5,
    lineHeight: 20,
    marginLeft: 8,
  },
  renderImageWrap: {
    flex: 0.5,
  },
  subcontainerstyle: {
    flex:1,
//marginHorizontal: SIZES.baseX4,
    //height: SIZES.height * 0.7,
    // backgroundColor:'red'
    //  backgroundColor: '#F5F5F5',
  },
  insideheaderstyle: {
    backgroundColor: '#E4E4E4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infotextstyle: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#202452',
  },
  dropdowncontainer: {
    borderColor: COLORS.blue5,
    height: SIZES.baseX5 + 25,
    borderWidth: .2
  },
  labelStyle: {
    ...FONTS.regular,
    color: COLORS.blue4,
    marginTop: SIZES.base - 15,
    paddingHorizontal: SIZES.base,
    fontSize: 14
  },
  notelabel: {
    ...FONTS.regular,
    color: COLORS.blue4,
    marginTop: SIZES.base - 8,
    paddingHorizontal: SIZES.base,
  },
  textinputstyles: {
    borderColor: COLORS.blue5,
    marginTop: SIZES.baseX3,
    height: SIZES.baseX5 + 26
  },
  beneficiaryinput: {
    borderColor: COLORS.blue5,
    marginTop: SIZES.baseX5 - 8,
    width: SIZES.baseX5 * 13,
    //marginLeft:-SIZES.base,
    height: SIZES.baseX5 + 26
  },
  beneficiaryinput1: {
    borderWidth: 1,
    borderColor: COLORS.blue5,
    borderRadius: 5,
    marginTop: SIZES.baseX5 - 8,
    marginLeft: SIZES.base,
    height: SIZES.baseX5 + 26,
    width: SIZES.baseX5 * 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  balanceinput: {
    borderColor: COLORS.blue5,
    marginTop: SIZES.baseX3,
    backgroundColor: COLORS.gray8,
    height: SIZES.baseX5 + 26,
    borderWidth: 0
  },
  mobileinput: {
    //borderColor: COLORS.gray3,
    marginTop: SIZES.baseX3,
    backgroundColor: COLORS.gray8,
    height: SIZES.baseX5 + 26,
    borderWidth: 0,
    width: SIZES.baseX5 * 2.8
  },

  mobileinput1: {
    borderColor: COLORS.blue5,
    marginTop: SIZES.baseX3,
    width: SIZES.baseX5 * 12.5,
    backgroundColor: COLORS.gray8,
    height: SIZES.baseX5 + 26,
    borderWidth: 0,

  },
  attchmentinput: {
    marginTop: SIZES.baseX3,
    borderStyle: 'dotted',
    borderColor: COLORS.blue5,
    paddingHorizontal: SIZES.baseX5 * 4.4,
    height: SIZES.baseX5 + 26


  },
title:{
  
    ...FONTS.regular,
    fontSize:SIZES.baseX3,
    color: COLORS.blue4,
    marginBottom: SIZES.baseX3,
    marginHorizontal: SIZES.baseX4,
  
},
buttonstyle:{
    height: 48,
    borderRadius: 30,
    width: '39%',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
    marginRight: 5,
  },
  buttonstyle1:{
    height: 48,
    borderRadius: 30,
    width: '58%',
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
  },
  bottomcontainer:{
    flexDirection: 'row',
    //position: 'absolute',
    // bottom:0,
    //bottom: 15,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  titlecontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SIZES.baseX3 * 2,
    marginHorizontal:SIZES.baseX4
  },
  heading:{
    ...FONTS.semiBold, 
    color: COLORS.black
}



  // header: {
  //   height: SIZES.height / 2.6,
  //   width: SIZES.width,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // backgroundColor: COLORS.primary,
  // },
  // rotation: {
  //   position: 'absolute',
  //   //transform: [{rotate: '-35deg'}],
  //   // borderRadius: 85,
  //   height: SIZES.height / 4,
  //   width: SIZES.width,
  //   backgroundColor: COLORS.primary,
  //   // top: -110,
  //   // borderLeftWidth: 10,
  //   // borderLeftColor: COLORS.gray,
  // },

  // // header: {
  // //   height: SIZES.height / 3,
  // //   // transform: [{rotate: '-25deg'}, {translateX: 28}, {translateY: -0}],
  // //   width: SIZES.width,
  // //   // backgroundColor: COLORS.primary,
  // //   // borderRadius: 40,
  // //   borderLeftWidth: 10,
  // //   alignItems: 'center',
  // //   justifyContent: 'center',
  // //   // paddingVertical: SIZES.baseX5,
  // //   // paddingHorizontal: SIZES.baseX5,
  // //   // borderLeftColor: COLORS.gray3,
  // // },
  // headerbox: {
  //   height: 200,
  //   width: SIZES.width - 25,
  //   backgroundColor: '#fff',
  //   borderRadius: 20,

  //   // transform: [{rotate: '25deg'}, {translateX: 25}, {translateY: 110}],
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },

  // headerTitle: {
  //   ...FONTS.medium,
  //   fontSize: 18,
  //   color: '#fff',
  //   marginTop: SIZES.base,
  //   textAlign: 'center',
  // },
  // innerContainer: {
  //   alignItems: 'center',
  //   paddingHorizontal: SIZES.baseX5 * 2,
  //   marginVertical: SIZES.baseX4 * 2,
  // },
  // headerSubText: {
  //   ...FONTS.regular,
  //   fontSize: 12,
  //   color: '#fff',
  //   marginTop: SIZES.base,
  //   textAlign: 'center',
  // },
});
