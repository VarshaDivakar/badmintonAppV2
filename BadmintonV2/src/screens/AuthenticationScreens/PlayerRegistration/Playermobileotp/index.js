import {StyleSheet, Text, View, Image, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import MainLayoutWrapperVerification from '@app/components/MainLayoutWrapper/MainLayoutWrapperVerification';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import images from '@app/constants/images';
import {styles} from './styles';
import {COLORS, SIZES} from '@app/constants/Theme';
import OtpComponent from '@app/components/OTPcomponent/OTPcomponent';
import TextInputComponent from '@app/components/TextInputComponent';
import Edit from '@app/assets/icons/Edit.svg';
import Navigations from '@app/navigations/navigations';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import {useNavigation} from '@react-navigation/native';
const Playermobileotp = props => {
  const [changeNumber, setChangeNumber] = useState(false);
  const navigation = useNavigation();
  
  const navigateTo = props?.route?.params?.navigateTo;
  // const navigateTo1 = props?.route?.params?.navigateTo1;
  const navigateToNext = props?.route?.params?.navigateToNext;
  const nextScreen = props?.route?.params?.nextScreen
  console.log('props ==>', navigateTo);
  const renderChangeNumber = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 34,
          //justifyContent:'space-evenly'
        }}>
        <TextInputComponent
          container={styles.phonenumber}
          placeHolderColor="#8592B2"
          placeholder={'Enter your mobile number'}
          inputStyle={{paddingVertical: 4}}
          // container={{width:SIZES.width}}
          //onSelectList={(value)=>formik.handleChange('phonenumber')}
          onTextChange={value => setChangeNumber('phone', value)}
          //value={formik.values.phonenumber}
          //value={phonenumber}
          value={changeNumber}
          //maxLength={10}
          //validError={formik.touched && formik.errors.phonenumber}
          
        />
        <Pressable
          style={styles.update}
          onPress={() => setChangeNumber(!changeNumber)}>
          <Text style={{color: COLORS.white}}>Update</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaWraper statusbar={COLORS.white}>
      <MainLayoutWrapperVerification>
        <Keyboardavoidwraper>
          <View style={styles.container}>
            <Image source={images.Verification} style={styles.imagestyle} />
            <Text style={styles.titlestyle}>Verify your Phone</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: COLORS.black3,
                lineHeight: 30,
              }}>
              We have sent you the one time password {'\n'}to the registered
              mobile number
            </Text>
            <View style={styles.changeWrap}>
              {changeNumber ? (
                renderChangeNumber()
              ) : (
                <Text style={styles.numberStyle}>+44 787987955 </Text>
              )}

              <Pressable
                onPress={() => {
                  setChangeNumber(!changeNumber);
                  //setPhonenumber
                }}
                style={styles.changeBtnStyle}>
                {changeNumber ? <Edit fill="#CECDCD" /> : <Edit />}
              </Pressable>
            </View>
            <View style={{marginTop: -10}}>
              <OtpComponent
                // onPresfunction={navigation.navigate(Navigations.playeradress)}
                onPress={value => {
                  console.log('onPress')
                  navigateTo ? navigation.navigate(navigateTo): nextScreen ?navigation.navigate(nextScreen):
                  navigation.navigate(Navigations.playeremailotp, {
                         navigateToNext:navigateToNext
                  }

                  )
                  // navigateTo1
                  //   ? navigation.navigate(Navigations.playeremailotp, {
                  //       navigateTo1:navigateTo1,navigateTo2:navigateTo2
                  //     })
                  //   :
                  //   navigateTo2 ? navigation.navigate(Navigations.playeremailotp, {
                  //     navigateTo1: navigateTo1,navigateTo2:navigateTo2
                  //   }) :
                  //    null;
                  // console.log('This is the mobile OTP is==>', value);
                }}
                label={'Continue'}
                buttonstyle={{borderRadius: 15}}
              />
            </View>
          </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapperVerification>
    </SafeAreaWraper>
  );
};

export default Playermobileotp;
