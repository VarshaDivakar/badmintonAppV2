import images from "@app/constants/images";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const MatchResult = ({ item, containerStyle }) => {
    return (
        <View style={[style.liveFlatView, containerStyle]}>
            <Text style={{
                ...FONTS.regular,
                fontSize: 12,
                color: 'rgba(255, 255, 255, 0.79)',
                marginBottom: 10
            }}>{item.type}</Text>
            <View style={style.teamView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={images.russiunFlag}
                        style={{ width: 20, height: 20, borderRadius: 25 }} />
                    <Text style={style.liveteamName}>
                        {item.team1.name}
                    </Text>
                </View>
                <Text style={style.liveteamName}>{item.team1.score}</Text>
            </View>

            <Text style={{
                ...FONTS.regular,
                fontSize: 10,
                color: COLORS.orange,
                //textAlign: 'center'
                marginLeft:SIZES.baseX5*2
            }}>Vs</Text>
            <View style={style.teamView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={images.londonFlag}
                        style={{ width: 20, height: 20, borderRadius: 25 }} />
                    <Text style={style.liveteamName}>
                        {item.team2.name}
                    </Text>
                </View>
                <Text style={style.liveteamName}>{item.team1.score}</Text>
            </View>
        </View>
    )
}
export default MatchResult;

const style = StyleSheet.create({
    liveResult: {
        color: COLORS.black,
        fontSize: 14,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10
    },
    liveFlatView: {
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 10

    },
    liveteamName: {
        ...FONTS.regular,
        color: COLORS.gray3,
        textAlign: 'center',
        fontSize: 12,
        marginLeft: 10
    },
    teamView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})