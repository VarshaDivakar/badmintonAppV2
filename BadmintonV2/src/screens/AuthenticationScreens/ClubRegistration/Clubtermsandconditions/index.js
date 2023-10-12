import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import MainLayoutWrapperIn from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn'
import RectangleButton from '@app/components/ButtonComponents/RectangleButton'
import Navigations from '@app/navigations/navigations'
import { COLORS, FONTS, SIZES } from '@app/constants/Theme'

const Clubterms = ({navigation}) => {
  return (
    <SafeAreaWraper>
        <MainLayoutWrapperIn 
        containerStyle={{height:100}}
        title={'Terms and Conditions'}>

      <ScrollView style={{marginHorizontal:20,marginTop:20}}>
        <Text style={{...FONTS.medium, fontSize:13,color:COLORS.black,lineHeight:24}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </Text>
        <Text  style={{...FONTS.regular,fontSize:13,color:COLORS.black,lineHeight:24,marginTop:12}}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Text>
        <Text  style={{...FONTS.regular,fontSize:13,color:COLORS.black,marginTop:12,lineHeight:24}}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </Text>
        <RectangleButton
        onPress={()=>navigation.navigate(Navigations.clubpreview)}
        buttonStyle={{height:45,width:SIZES.width*0.4,alignSelf:'center'}}
        textStyle={{...FONTS.regular, fontSize:16,lineHeight:20}}
        label={'Continue'}/>
      </ScrollView>
        </MainLayoutWrapperIn>
    </SafeAreaWraper>
  )
}

export default Clubterms

const styles = StyleSheet.create({})