import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import SafeAreaWraper from '../../../components/SafeAreaWraper';
import MainLayoutWrapperPy from '../../../components/MainLayoutWrapper/MainLayoutWrapperPy';
import { liveResult } from "../../../dummyData";
import MatchResult from "@app/components/MatchResult";
import { COLORS, FONTS, SIZES } from "@app/constants/Theme";
import images from "@app/constants/images";
import Rectanglebutton from '@app/components/Rectanlebutton';
import MainLayoutWrapperRe from "@app/components/MainLayoutWrapper/MainLayoutWrapperRe";
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';


export default function ResultCoach() {
    const navigation=useNavigation()
    return (
        <SafeAreaWraper backgroundColor={COLORS.white} barStyle={COLORS.white}>
            <MainLayoutWrapperRe isBackArrow={false} title={'Results'}

            >
                {/* <ResultHeader title={'Results'}/> */}
                <View style={{ flexDirection: 'row',alignItems:'center'}}>
                    <Text style={style.resultTxt}>Results</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 'auto', right: 10 }}>     
                    <Rectanglebutton
                           // onPress={() => navigation.navigate(Navigations.coachaddnewmatch)}
                            textStyle={{ color: COLORS.primary }}
                            label={'Download PDF'}
                            buttonStyle={style.cancelbutton}
                        />
                        <Rectanglebutton
                            onPress={() => navigation.navigate(Navigations.coachuploadresults)}
                            label={'Upload results'}
                            buttonStyle={style.buttonStyle}
                        />      
                    </View>
                </View>
                <FlatList data={liveResult}
                    pagingEnabled={true}
                    horizontal
                    // style={{alignSelf:'center',alignContent:'center'}}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <MatchResult item={item} containerStyle={style.resultFlatListView} />}
                />
                <FlatList data={liveResult}
                    style={{
                        borderBottomColor: '#00000029',
                        borderBottomWidth: 2,
                        marginTop: 45
                    }}
                    ListHeaderComponent={<View style={style.scoreFlatViewHeader}>
                        <Text style={{
                            ...style.scoreHeading,
                            flex: 3,
                        }}>Club/Location</Text>
                        <Text style={{
                            ...style.scoreHeading,
                            flex: 4
                        }}>Name</Text>
                        <Text style={style.scoreHeading}>W</Text>
                        <Text style={style.scoreHeading}>L</Text>
                        <Text style={style.scoreHeading}>D</Text>
                        <Text style={style.scoreHeading}>P</Text>
                    </View>}
                    renderItem={({ item }) => {
                        return (
                            <View style={style.scoreFlatView}>
                                <View style={{ flex: 3 }}>
                                    {/* <Image source={images.londonFlag} style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 20
                                    }} /> */}
                                    <Text style={style.locationname} >Avon </Text>
                                </View>
                                <Text style={{ ...style.score, flex: 5 }}>Marcus Eills</Text>
                                <Text style={style.score}>1</Text>
                                <Text style={style.score}>1</Text>
                                <Text style={style.score}>1</Text>
                                <Text style={style.score}>5</Text>
                            </View>
                        )
                    }} />
            </MainLayoutWrapperRe>
        </SafeAreaWraper>
    )
}
