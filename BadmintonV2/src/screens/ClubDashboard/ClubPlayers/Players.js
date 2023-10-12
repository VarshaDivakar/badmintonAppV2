import MainLayoutWrapperPy from "@app/components/MainLayoutWrapper/MainLayoutWrapperPy";
import MainLayoutWrapperRe from "@app/components/MainLayoutWrapper/MainLayoutWrapperRe";
import PlayersCard from "@app/components/PlayersCard";
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import React from "react";
import { View, Text, FlatList } from 'react-native';

export default function Players() {
    return (
        <SafeAreaWraper>
            <MainLayoutWrapperPy
                title={'Players'}
                isFilter={false}
                searchStyle={{
                    width: SIZES.width * 0.8
                }}>
                <Text style={{
                    ...FONTS.semiBold,
                    color: COLORS.black4,
                    fontSize: 14,
                    marginLeft:20,
                    marginBottom:40,
                    
                }}>Buckingamshire Players</Text>
                <FlatList data={[0, 1, 2, 3]}
                    renderItem={({ item }) => <PlayersCard />} />
            </MainLayoutWrapperPy>
        </SafeAreaWraper>

    )
}