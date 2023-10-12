import MainLayoutWrapperPy from "@app/components/MainLayoutWrapper/MainLayoutWrapperPy";
import MainLayoutWrapperRe from "@app/components/MainLayoutWrapper/MainLayoutWrapperRe";
import PlayersCard from "@app/components/PlayersCard";
import SafeAreaWraper from "@app/components/SafeAreaWraper";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import navigations from "@app/navigations/navigations";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, Pressable } from 'react-native';
import { packagesData } from "../../../../dummyData";

export default function Packages() {
    const navigation = useNavigation();

    const _renderPackages = ({ item }) => {
        return (
            <Pressable style={{
                width: SIZES.width * 0.4,
                height: SIZES.width * 0.4,
                backgroundColor: item.backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: SIZES.width * 0.03,
                marginBottom: SIZES.width * 0.05,
            }}
                onPress={() => navigation.navigate(navigations.packagesDetail,{packagesDetail:item})}>
                <Text style={{
                    ...FONTS.semiBold,
                    fontSize: 16,
                    color: COLORS.black10
                }}>{item.title}</Text>
            </Pressable>
        )
    }
    return (
        <SafeAreaWraper>
            <MainLayoutWrapperPy
                title={'Packages'}
                isFilter={false}
                searchStyle={{
                    width: SIZES.width * 0.8
                }}>
                <Text style={{
                    ...FONTS.semiBold,
                    color: COLORS.black4,
                    fontSize: 14,
                    marginLeft: 20,
                    marginBottom: 40,

                }}></Text>
                <FlatList data={packagesData}
                    numColumns={2}
                    style={{
                        // justifyContent:'center',
                        marginHorizontal: SIZES.width * 0.04,
                        // backgroundColor:'green'
                    }}
                    renderItem={({ item }) => <_renderPackages item={item} />
                    } />
            </MainLayoutWrapperPy>
        </SafeAreaWraper>

    )
}