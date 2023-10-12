import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaWraper from '../../../components/SafeAreaWraper';
import MainLayoutWrapperPy from '../../../components/MainLayoutWrapper/MainLayoutWrapperPy';
import { FlatList } from "react-native-gesture-handler";
import FavouriteList from "@app/components/FavouriteList";
import { COLORS } from "@app/constants/Theme";

const Favourite = () => {
    return (
        <SafeAreaWraper
         containerStyle={{
            paddingBottom: 20,
            marginBottom: 20
        }} barStyle={'light-content'}>
            <MainLayoutWrapperPy 
            isBackArrow={true}
            onFilter={()=>{}}
            title={'Favourite'}>

             <FlatList data={[1,2,3,4]}
             renderItem={({item})=><FavouriteList/>}/>
            </MainLayoutWrapperPy>
        </SafeAreaWraper>
    )
}

export default Favourite;
