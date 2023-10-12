import React from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from "../constants/Theme";
import ExpandIcon from '@app/assets/icons/ExpandIcon.svg'

export default function TextInputComponent({
    leftIcon = false,
    rightIcon = false,
    isDropIcon = false,
    placeHolderColor = COLORS.black,
    upperLabel,
    insideLabel,
    container,
    placeholder,
    onTextChange=()=>{},
    ...props
}) {
    const { inputRef } = props;
    return (
        <View style={{ ...props.outerContainer }}>
            {upperLabel && (
                <Text
                    style={{
                        ...styles.upperLabelStyle,
                        ...props.upperLabelStyle,
                    }}>
                    {upperLabel}
                </Text>
            )}

            <View
                style={{
                    ...styles.container(),
                    ...container,
                }}>
                {leftIcon && leftIcon}
                <View style={{ flex: 1,justifyContent:'center' }}>
                    {/* {upperLabel && <Text style={styles.upperLabelStyle}>{upperLabel}</Text>} */}
                    {/* {leftIcon && leftIcon} */}

                    {insideLabel && (
                        <Text
                            style={{
                                ...styles.insideLabelStyle,
                                ...props.upperLabelStyle,
                            }}>
                            {insideLabel}
                        </Text>
                    )}
                    <TextInput
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        // selectionColor={'red'}
                        placeholderTextColor={placeHolderColor}
                        style={{ ...styles.inputStyle, ...props.inputStyle }}
                        // style={{height:20,backgroundColor:'red',padding:0}}
                        placeholder={placeholder}
                        {...props}
                        selectionColor="blue"
                        ref={inputRef}
                        onChangeText={text =>onTextChange(text)}
                    />
                </View>

                {rightIcon && rightIcon}
                {isDropIcon && (
                    <Pressable onPress={() => console.log('pressed')}>
                        <ExpandIcon />
                    </Pressable>
                )}
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: () => ({
        height: SIZES.baseX5*2,
        backgroundColor: COLORS.gray1,
        borderWidth: 1,
        borderColor: COLORS.gray3,
        overflow: 'hidden',
        borderRadius: SIZES.radius+3,
        marginBottom: SIZES.baseX4,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: SIZES.baseX4,
        marginHorizontal:20,
        // backgroundColor:'green'
    }),
    inputStyle: {
        flex: 1,
        //   ...FONTS.regular,
        color: COLORS.black1,
        fontSize: 14,
        // backgroundColor:'green',
        // height:10,
        // width:20
    },
    upperLabelStyle: {
        color: '#8592B2',
        //   ...FONTS.medium,
        fontSize: 14,
        marginBottom: SIZES.base,
        lineHeight: 17,
    },
    insideLabelStyle: {
        color: '#8592B2',
        //   ...FONTS.regular,
        fontSize: 14,
        //marginBottom: SIZES.base,
        lineHeight: 17,
        textAlignVertical:'center'
    },
});