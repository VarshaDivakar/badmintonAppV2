import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper'
import { styles } from './styles'
import Radiobutton from '@app/components/Radiobutton'
import Rectanglebutton from '@app/components/Rectanlebutton'
import Navigations from '@app/navigations/navigations';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@app/constants/Theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Relaibility = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
        <MainLayoutWrapper>
           <View>
            <Text style={styles.headertextstyle}>Player Registration</Text>
            <Text style={styles.detailstyles}>Waiver and Release of Liability</Text>
            <View style={styles.linestyles}>
               </View>
              </View>
              <View style={{
                alignItems:'center'
              }}>
            <View style={styles.centralview}>
              <Radiobutton/>
              <Text style={styles.textstyle}>I acknowledge that participating inthe 2023 London Badminton league involves physical activity that change to risk of injury</Text>
            </View>
            <View style={styles.centralview}>
              <Radiobutton/>
              <Text style={styles.textstyle}>I agree to assume all risk associated with participating in the tournament and release the tournament organizers and their affiliates from any and all liability for any injury or damage that may occur.</Text>
            </View>
            <View style={styles.centralview}>
              <Radiobutton/>
              <Text style={styles.textstyle}>I certify that I am physically fit to participate in the tournament and have not been advised otherwise by a physician.</Text>
            </View>
            <View style={styles.centralview}>
              <Radiobutton/>
              <Text style={styles.textstyle}>I agree with all the above mentioned Terms and Conditions & Privacy policy</Text>
            </View>
            </View>
            
           <Rectanglebutton 
           label={'Continue'}
           onPress={() => navigation.navigate(Navigations.preview)}/>

        </MainLayoutWrapper>
    </SafeAreaWraper>
  )
}

export default Relaibility

 