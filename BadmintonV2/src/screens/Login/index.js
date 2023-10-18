import { Image, ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import images from '@app/constants/images'
import { Dimensions } from 'react-native';
import { styles } from './styles';
import TextInputComponent from '@app/components/TextInputComponent';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Radiobutton from '@app/components/Radiobutton';
import Navigations from '@app/navigations/navigations';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '@app/constants/Theme';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import SelectDashBoard from './SelectDashBoard';
const Loginscreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [selectDashModalVisible, setSelectDashModal] = useState(false);
  return (
    <SafeAreaWraper barStyle={'dark-content'} statusbar={'#185461'} >
      <View style={{ 
        flex: 1, 
        height: windowHeight }}>
        <StatusBar translucent backgroundColor='transparent' barStyle={'light-content'} />
        <ImageBackground source={images.Loginbg}
          style={{ height: windowHeight, width: SIZES.width }}>
          <Image source={images.Dhignalogo}
            style={styles.logostyles} />
          <View style={styles.loginview}>
            <Text style={styles.Logintextstyles}>Email</Text>
            <TextInputComponent
              placeholder={'Enter email or Phone'} />
            <Text style={styles.Logintextstyles}>PIN</Text>
            <TextInputComponent
              placeholder={'Enter PIN number'} />
            <Text style={styles.forgotpinstyles}
              onPress={() => navigation.navigate(Navigations.resetPin)}>Forgot PIN ?</Text>
            <Rectanglebutton
             onPress={() => setSelectDashModal(true)}
              buttonStyle={{ width: '90%' }}
              label={'Login'} />
            <Rectanglebutton
              buttonStyle={{
                width: '90%',
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#202452',
                marginVertical: 0
              }}
              label={'Sign up'}
              textStyle={{ color: COLORS.primary }}
              onPress={() => navigation.navigate(Navigations.signupscreen)} />
          </View>
          <View style={styles.bottomstyles}>
            <Radiobutton />
            <Text style={styles.termstextstyle}>
              By signing up, you are agree with our <Text style={styles.policytextstyles}>Terms & Conditions & Privacy & Policy</Text>
            </Text>

          </View>
          <SelectDashBoard
            isModalVisible={selectDashModalVisible}
            onClose={() => setSelectDashModal(false)} />
        </ImageBackground>

      </View>
    </SafeAreaWraper>
  )
}

export default Loginscreen

