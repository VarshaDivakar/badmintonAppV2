import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';

const RectangleButton = ({
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
      style={{...styles.buttonContainer, ...props.buttonStyle}}
      disabled={isDisable}
      onPress={()=>onPress()}
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
          <Text style={{...styles.buttonLabel, ...props.textStyle}}>
            {label}
          </Text>
        </>
      )}
      {/* <Text style={{...styles.buttonLabel, ...props.textStyle}}>
        {props.label}
      </Text> */}
    </Pressable>
  );
};

export default RectangleButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 65,
    backgroundColor: COLORS.primary,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.baseX3,
    marginHorizontal: 5,
  },
  buttonLabel: {
    ...FONTS.bold,
    fontSize: 16,
    lineHeight: 17,
    color: COLORS.white,
  },
});
