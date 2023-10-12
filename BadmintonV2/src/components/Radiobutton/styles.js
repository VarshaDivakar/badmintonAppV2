import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '@app/constants/Theme'

const Radiobutton= ({btnLabel, visible, onPress, stlyeContainer}) => {
  return (
    <View style={[styles.container, stlyeContainer]}>
      <TouchableOpacity style={styles.buttonWrap(visible)} onPress={onPress}>
        <View style={styles.buttonInner(visible)} />
      </TouchableOpacity>
      <Text style={styles.testStyle}>{btnLabel}</Text>
    </View>
  )
}

export default Radiobutton 

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
        backgroundColor: visible ? COLORS.blue : COLORS.white,
        width: 14,
        height: 14,
        borderRadius: 14 / 2,
      }),
    
      testStyle: {
        ...FONTS.medium,
        fontSize: 12,
        color: COLORS.black,
      },

})