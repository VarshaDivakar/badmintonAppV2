import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, FONTS } from '@app/constants/Theme'
import Dropdownarrow from '@app/assets/icons/downarrow.svg'
import Tick from '@app/assets/icons/Tick2.svg';
const Radiobutton = ({ btnLabel, visible, onPress, stlyeContainer }) => {
    const [isVerify, setIsVerify] = useState(false);
    return (
        <View style={[styles.container, stlyeContainer]}>
            <TouchableOpacity
                onPress={() => setIsVerify(!isVerify)}
                style={styles.verifiedWrap(isVerify)}>
                {isVerify && <Tick fill={COLORS.white} height={10} width={15}/>}
                {/* <View style={styles.buttonInner(visible)} /> */}
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
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        borderColor: '#8592B2',
        borderWidth: 1,
        marginRight: SIZES.baseX2,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 5,
        backgroundColor: COLORS.secondary,
    }),
    // buttonInner: visible => ({
    //     backgroundColor: visible ? COLORS.blue : COLORS.white,
    //     width: 14,
    //     height: 14,
    //     borderRadius: 14 / 2,
    // }),

    testStyle: {
        ...FONTS.medium,
        fontSize: 12,
        color: COLORS.black,
    },
    verifiedWrap: isVerify => ({
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        backgroundColor: isVerify ? COLORS.orange : COLORS.white,
        borderColor: COLORS.gray,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    }),

})