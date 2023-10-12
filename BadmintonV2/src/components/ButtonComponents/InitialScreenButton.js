import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '@app/constants/themes';

const InitialScreenButton = ({label, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default InitialScreenButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginVertical: SIZES.baseX3,
  },
  buttonText: {
    ...FONTS.regular,
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.white,
  },
});
