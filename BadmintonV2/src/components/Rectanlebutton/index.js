import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '@app/constants/Theme'

const Rectanglebutton = (
   {label,
    onPress,
    isDisable=false,
    ...props} 
) => {
    return (
        <Pressable
            disabled={isDisable}
            style={{ ...styles.buttonContainer, ...props.buttonStyle }}
            //disabled={isDisable}
            onPress={() => onPress()}>
           
                <Text style={{ ...styles.buttonLabel, ...props.textStyle }}>
                    {label}
                </Text>
          

        </Pressable>
    )
}

export default Rectanglebutton

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        width:156,
        backgroundColor: COLORS.blue2,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: SIZES.baseX3,
        marginHorizontal: 5,
        alignSelf:'center',
        
    },
    buttonLabel: {
        ...FONTS.regular,
        fontSize: 14,
        lineHeight: 17,
        color: COLORS.white,
    },
})