import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // top: -20,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.baseX5,
  },
  otpWrap: {
    paddingHorizontal: SIZES.baseX5,
  },
  headerTitle: {
    ...FONTS.medium,
    fontSize: 18,
    color: '#fff',
    marginTop: SIZES.base,
    textAlign: 'center',
    marginBottom:SIZES.base
  },
  headerSubText: {
    ...FONTS.regular,
    fontSize: 12,
    color: '#fff',
    
    textAlign: 'center',
  },
  changeWrap: {
    flexDirection: 'row',
    marginVertical: SIZES.baseX3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberStyle: {
    ...FONTS.semiBold,
    fontSize: 13,
    color: '#fff',
  },
  changeBtnStyle: {
    ...FONTS.semiBold,
    fontSize: 13,
    color: COLORS.orange,
    marginLeft: SIZES.baseX2,
  },
  bottomWrap: {
    paddingHorizontal: SIZES.baseX5 * 2,
    marginVertical: SIZES.baseX4,
    alignItems:'center',
  },
  resendStyle: {
    ...FONTS.semiBold,
    fontSize: 13,
    color: COLORS.orange,
    textAlign: 'center',
    marginVertical: SIZES.baseX4,
  },
});
