import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';

const OvelButton = ({
  label,
  onPress,
  txtStyle,
  btnStyle,
  isDisable = false,
  icon = false,
  component,
  ...props
}) => {
  return (
    <Pressable
      style={{...styles.buttonWrap, ...props.buttonStyle}}
      disabled={isDisable}
      onPress={() => onPress()}
      {...props}>
      {icon ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {component}
          <Text style={{...styles.buttonLabel, ...props.textStyle}}>
            {label}
          </Text>
        </View>
      ) : (
        <>
        {props.leftIcon && props.leftIcon}
          <Text style={{...styles.buttonLabel, ...props.textStyle}}>
            {label}
          </Text>
        </>
      )}
      {/* {props.leftIcon && props.leftIcon}
      <Text style={{...styles.buttonLabel, ...props.labelStyle}}>
        {label}
      </Text> */}
    </Pressable>
  );
};

export default OvelButton;

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: COLORS.orange2,
    paddingHorizontal: SIZES.baseX5 * 2,
    paddingVertical: SIZES.baseX2,
    borderRadius: 30,
    marginTop: SIZES.baseX2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  buttonLabel: {
    ...FONTS.regular,
    fontSize: 16,
    color: COLORS.white,
    lineHeight: 17,
  },
});
