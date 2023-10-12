import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import MainLayoutWrapperIn from '@app/components/MainLayoutWrapper/MainLayoutWrapperWl'
import MainLayoutWrapperWi from '@app/components/MainLayoutWrapper/MainLayoutWrapperWl'
import ToggleButton from '@app/components/Togglebutton'
import { COLORS } from '@app/constants/Theme'

const Tournaments = () => {
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
       <MainLayoutWrapperWi 
       title={'Tournaments /League '}>
        <ToggleButton/>

       </MainLayoutWrapperWi>
    </SafeAreaWraper>
  )
}

export default Tournaments

const styles = StyleSheet.create({})