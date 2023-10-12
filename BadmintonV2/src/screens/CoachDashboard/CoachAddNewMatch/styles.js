const { COLORS, FONTS, SIZES } = require("@app/constants/Theme");
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 5,
        height: 32,
        width: 70,
    },
    cancelbutton: {
        borderRadius: 5,
        height: 32,
        width: 90,
        backgroundColor: COLORS.white,
        borderWidth: 1,
    },
    labelStyle: {
        color: COLORS.black12,
        fontWeight: '600',
    },
    SavebuttonStyle: {
        borderRadius: 5,
        //height: 32,
        //width: 70,
    },
})