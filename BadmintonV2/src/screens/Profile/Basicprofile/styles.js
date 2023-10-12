import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';

export const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  subcontainerstyles: {
    flex: 0.5,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    // justifyContent:'center',
    marginTop: SIZES.height * 0.05,
    width: SIZES.width,
  },
  textstyle: {
    color: '#333333',
    alignSelf: 'center',
  },
  bottomviewstyles: {
    height: 64,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: SIZES.width,
    paddingHorizontal:20,
    backgroundColor: COLORS.white,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  rowSecond:{
    flexDirection:'row',
    alignItems:'center'
  },
  arrowstyle: {
    height: 28,
    width: 15,
    marginLeft: 30,
    opacity: 1,
    tintColor: '#000',
  },
  edittextstyles: {
    color: COLORS.black,
    fontSize: 15,
    // width: 200,
  },
  iconstyles: {
    marginLeft: 10,
    marginRight: 10,
    color: '#1040ba',
  },
  arrowContainer: {
    position: 'relative',
    alignSelf: 'flex-start',
    left: 10,
    backgroundColor: '#f8f8f8',
    opacity: 0.6,
  },
  imagestyles: {
    height: 100,
    width: 100,
  },
  imagetextstyles: {color: '#000', marginTop: 5, ...FONTS.semiBold},
});
