import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingTop: SIZES.baseX5,
  },

  renderViewMiddle: {
    width: '75%',

    marginLeft: '2%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  amounttxt: {
    color: '#ED2330',
    ...FONTS.light,
  },
  nametxt: {
    color: '#0F1B2D',
    ...FONTS.regular,
  },
  tractsactionTxt: {
    color: '#0F1B2D',
    ...FONTS.regular,
    fontSize: SIZES.baseX4,
    marginLeft: '2%',
  },
  sectionHeading: {
    ...FONTS.regular,
    color: '#545F7A',
    marginBottom: 5,
    marginTop: 16,
  },
  transactionListiew: {
    paddingHorizontal: SIZES.baseX4,
    backgroundColor: COLORS.white,
    width: SIZES.width,
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 19,
  },
  transactionTopView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: SIZES.baseX4,
  },
  tracsactionSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewalltxt: {
    color: '#1040BA',
    ...FONTS.regular,
  },
});
