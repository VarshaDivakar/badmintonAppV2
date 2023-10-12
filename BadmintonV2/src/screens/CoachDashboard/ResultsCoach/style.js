const { COLORS, FONTS, SIZES } = require("@app/constants/Theme");
import { StyleSheet } from "react-native";
export const style = StyleSheet.create({
    resultFlatListView: {
        backgroundColor: COLORS.primary,
        marginHorizontal: 3,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: SIZES.width - 10,
        alignSelf:'center'
    },
    resultTxt: {
        ...FONTS.semiBold,
        color: COLORS.black2,
        marginLeft: 10,
        marginVertical: 15
    },
    score: {
        flex: 1,
        ...FONTS.regular,
        color: COLORS.black3,
        fontSize: 12
    },
    locationname:{
        ...FONTS.regular,
        color: COLORS.black3,
        fontSize: 12
    },
    scoreHeading: {
        ...FONTS.regular,
        fontSize: 12,
        flex:.9,
        color: COLORS.white
    },
    scoreFlatView:{
            flexDirection: 'row',
            flex: 1,
            // alignSelf: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            height: 40
    },
    scoreFlatViewHeader:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        height: 40
    },
    cancelbutton: {
        borderRadius: 5,
        height: 32,
        width: 115,
        backgroundColor: COLORS.white,
        borderWidth: 1,
    },
    buttonStyle:{
        borderRadius: 5,
        height: 32,
        width: 115,
        backgroundColor: COLORS.primary
    }
})