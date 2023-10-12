import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';

export const styles = StyleSheet.create({
  maincontainer: {
    alignItems: 'center',
  },
  textinputstyle: {
    borderColor: '#8592B2',
    height: 56,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    paddingLeft: 20,
  },
  subcontainerstyle: {
    paddingHorizontal: SIZES.baseX4,
    marginVertical: SIZES.baseX4,
    //  backgroundColor: '#F5F5F5',
  },
});
