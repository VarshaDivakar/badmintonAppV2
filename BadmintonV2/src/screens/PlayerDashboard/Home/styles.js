import {StyleSheet} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants/Theme';


export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // jcustifyContent: 'space-between',
    // alignItems: 'center',
    // paddingVertical: SIZES.baseX5,
  },
  editProfileBtn : {
    borderColor:COLORS.primary,
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:15,
    paddingVertical:3,
    },
    logoutBtn:{
        backgroundColor:COLORS.primary,
        borderRadius:8,
        paddingHorizontal:15,
        paddingVertical:3,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
        },
  header: {
    height: SIZES.height / 2.8,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.primary,
  },
  rotation: {
    position: 'absolute',
    transform: [{rotate: '-28deg'}],
    //  borderBottomRightRadius: 250,
    height: SIZES.height /2.4,
    width: SIZES.width*1.2,
    backgroundColor: COLORS.primary,
     top: -120,
     borderLeftWidth: 15,
     borderBottomWidth:0,
    //  borderBottomRightWidth:0,
     borderLeftColor: COLORS.gray,
     borderBottomColor:COLORS.gray,
     borderBottomLeftRadius:180,
     left:-25
  },

  headerbox: {
    // height: 130,
    width: SIZES.width - 30,
    backgroundColor: '#fff',
    borderRadius: 20,

    // transform: [{rotate: '25deg'}, {translateX: 25}, {translateY: 110}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flatList: {
    alignItems: 'center',
  },
  heading: {
    paddingHorizontal: SIZES.baseX4,
    paddingVertical: SIZES.baseX5,
  },
  indicators: {
    height: 30,
    width: 22,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },
  balance: {
    // ...FONTS.regular,
    color: COLORS.black,
    fontSize: 16,
    lineHeight: 16,
  },
  balanceAmount: {
    // ...FONTS.medium,
    color: COLORS.black,
    fontSize: 25,
    lineHeight: 26,
    marginVertical: 10,
  },

  headProfileName: {
    // ...FONTS.regular,
    color: COLORS.black,
  },
  headewelcome: {
    // ...FONTS.bold,
    color: COLORS.black,
  },
  headerTitle: {
    //  ...FONTS.medium,
    fontSize: 18,
    color: '#000',
    marginBottom: SIZES.base,
    marginLeft: SIZES.baseX2,
    // textAlign: 'right',
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: SIZES.baseX5 * 2,
    marginVertical: SIZES.baseX4 * 2,
  },
  headerSubText: {
    // ...FONTS.regular,
    fontSize: 12,
    color: '#fff',
    marginTop: SIZES.base,
    textAlign: 'center',
  },
});
