import Filter from "@app/components/Filter";
import react,{useState} from "react";
import {View,Text, Pressable, ScrollView} from 'react-native';
import SafeAreaWraper from '../../../components/SafeAreaWraper';
import MainLayoutWrapperPy from '../../../components/MainLayoutWrapper/MainLayoutWrapperPy';
import { COLORS, FONTS } from "@app/constants/Theme";
import AnimatedButton from "@app/components/Filter/AnimatedButtons";
import { useNavigation } from "@react-navigation/native";
export default function TournamentFilter(){
    const [activeBtn,setActiveBtn] = useState('Tournaments');
    const navigation = useNavigation();
    return (
        <SafeAreaWraper  barStyle={'light-content'}>
            <MainLayoutWrapperPy 
            isBackArrow={true}
            isProfile={false}
            title={'Tournaments/League'}>
                <ScrollView showsVerticalScrollIndicator={false}
                 style={{
                    marginTop:20
                }}> 
                   <AnimatedButton  
                   setActiveBtn={setActiveBtn}
            leftBtn={'Tournaments'}
            rightBtn={'League'}
            activeBtn={activeBtn}/>
                <Filter onBtnPress={()=> navigation.goBack()}/>
                </ScrollView>
               
                </MainLayoutWrapperPy>
                </SafeAreaWraper>
    )
}