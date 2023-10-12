import { COLORS, FONTS, SIZES } from '@app/constants/Theme';
import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    headertextstyle: {
        color: COLORS.black,
        alignSelf: 'center',
        fontSize: SIZES.baseX8,
        //...FONTS.regular,
        //...FONTS.semiBold,
        fontWeight: 'bold',
        marginTop: SIZES.baseX3
    },
    detailstyles: {
        color: COLORS.black,
        alignSelf: 'center',
        fontSize: SIZES.baseX8,
        marginBottom: 10
        //...FONTS.regular,

    },
    phonecode: {
        flexDirection: 'row'
    },
    addaddress: {
        ...FONTS.medium,
        color: COLORS.blue,
        fontSize: SIZES.baseX4,
        marginHorizontal: SIZES.baseX8 + 4,
        marginTop: -10

    },
    heading: {
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    allmatches: {
        ...FONTS.bold,
        fontSize: 14,
        color: COLORS.black4,
        left: 18,
        marginTop: 10,
    },
    container: {
        //paddingHorizontal: SIZES.baseX5,
        paddingVertical: SIZES.baseX5,
        height: SIZES.baseX5 * 18,
        borderRadius: 5,

    },
    labelStyle: {
        color: COLORS.black12,
        fontWeight: '600',
    },
    title: {
        textAlign: 'center',
        color: COLORS.black12,
        fontWeight: '600',
        marginBottom: 15
    },
    buttonscontainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
        right: 16
    },
    buttonStyle: {
        borderRadius: 5,
        height: 32,
        width: 106,
    },
    cancelbutton: {
        borderRadius: 5,
        height: 32,
        width: 106,
        backgroundColor: COLORS.white,
        borderWidth: 1,
    },
    dropdowncontainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: 50,
        zIndex: 1,
        width: '87%'
    }

})