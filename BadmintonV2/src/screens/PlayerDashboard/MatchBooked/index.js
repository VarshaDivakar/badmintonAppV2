import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaWraper from '../../../components/SafeAreaWraper';
import MainLayoutWrapperPy from '../../../components/MainLayoutWrapper/MainLayoutWrapperPy';
import MatchBookedList from "@app/components/MatchBookedList";
import { FlatList } from "react-native-gesture-handler";
import { COLORS } from "@app/constants/Theme";
import { useNavigation } from "@react-navigation/native";

const MatchBooked = () => {
    const  navigation = useNavigation();
    return (
        <SafeAreaWraper
        barStyle={'light-content'}>
            <MainLayoutWrapperPy 
            isBackArrow={false}
            isFilter={false}
            isHeart={true}
            onFilter={()=>{}}
            title={'Booked Matches'}>

             <FlatList data={[1,2,3,4,5]}
             showsVerticalScrollIndicator={false}
             renderItem={({item})=><MatchBookedList/>}/>
            </MainLayoutWrapperPy>
        </SafeAreaWraper>
    )
}

export default MatchBooked;
