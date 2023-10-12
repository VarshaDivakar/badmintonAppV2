import Filter from "@app/components/Filter";
import react from "react";
import {View,Text, Pressable, ScrollView} from 'react-native';
import SafeAreaWraper from '../../../components/SafeAreaWraper';
import MainLayoutWrapperPy from '../../../components/MainLayoutWrapper/MainLayoutWrapperPy';
import { COLORS, FONTS } from "@app/constants/Theme";
import { useNavigation } from "@react-navigation/native";
export default function UpcomingFilter(){
    const navigation = useNavigation();
    return (
        <SafeAreaWraper  barStyle={'light-content'}>
            <MainLayoutWrapperPy 
            isBackArrow={true}
            isProfile={false}
            onFilter={()=>{}}
            title={'All Upcoming Events'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginHorizontal:20,
                        marginBottom:20
                    }}>
                        <Text style={{
                            ...FONTS.bold,
                            fontSize:16,
                            color:COLORS.black7
                        }}>Filters</Text>
                        <Pressable>
                            <Text style={{
                            ...FONTS.bold,
                            fontSize:16,
                            color:COLORS.orange
                        }}>Reset Filters</Text>
                        </Pressable>
                    </View>
                <Filter onBtnPress={()=> navigation.goBack()}/>
                </ScrollView>
               
                </MainLayoutWrapperPy>
                </SafeAreaWraper>
    )
}