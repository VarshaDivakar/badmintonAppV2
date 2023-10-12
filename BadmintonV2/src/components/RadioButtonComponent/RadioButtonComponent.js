import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  COLORS,
  SIZES,
  FONTS,
  icons,
  languages,
  constantData,
} from '@app/constants/Theme';
const RadioButtonComponent = ({btnLabel, visible, onPress, stlyeContainer}) => {
  return (
    <View style={[styles.container, stlyeContainer]}>
      <TouchableOpacity style={styles.buttonWrap(visible)} onPress={onPress}>
        <View style={styles.buttonInner(visible)} />
      </TouchableOpacity>
      <Text style={styles.testStyle}>{btnLabel}</Text>
    </View>
  );
};

export default RadioButtonComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrap: visible => ({
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    borderColor: '#8592B2',
    borderWidth: 1,
    marginRight: SIZES.baseX2,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 5,
    // backgroundColor: COLORS.secondary,
  }),
  buttonInner: visible => ({
    backgroundColor: visible ? COLORS.primary : COLORS.white,
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
  }),

  testStyle: {
    ...FONTS.medium,
    fontSize: 12,
    color: COLORS.black,
  },
});
