import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import MainLayoutWrapperVerification from '@app/components/MainLayoutWrapper/MainLayoutWrapperVerification';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import images from '@app/constants/images';
import { styles } from './styles';
import { COLORS } from '@app/constants/Theme';
import OtpComponent from '@app/components/OTPcomponent/OTPcomponent';
import TextInputComponent from '@app/components/TextInputComponent';
import Edit from '@app/assets/icons/Edit.svg';
import Navigations from '@app/navigations/navigations';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';

const Playeremaileotp = ({ navigation, route }) => {
  const [changeEmail, setChangeEmail] = useState(false);
   const navigateToNext=route?.params?.navigateToNext
  //  const navigateTo2=route?.params?.navigateTo2
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
          placeholder={'Enter your email'}
          inputStyle={{ paddingVertical: 4 }}
          //onSelectList={(value)=>formik.handleChange('phonenumber')}
          onTextChange={value => setChangeEmail('phone', value)}
          //value={formik.values.phonenumber}
          //value={phonenumber}
          value={changeEmail}
        //maxLength={10}
        //validError={formik.touched && formik.errors.phonenumber}
        />
        <Pressable
          style={styles.update}
          onPress={() => setChangeEmail(!changeEmail)}>
          <Text style={{ color: COLORS.white }}>Update</Text>
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
            <Text style={styles.titlestyle}>Verify your Email</Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: COLORS.black3,
                lineHeight: 30,
              }}>
              We have sent you the one time password {'\n'} to registered email
              address
            </Text>
            <View style={styles.changeWrap}>
              {changeEmail ? (
                renderChangeNumber()
              ) : (
                <Text style={styles.numberStyle}>Johnson@mail.com </Text>
              )}

              <Pressable
                onPress={() => {
                  setChangeEmail(!changeEmail);
                  //setPhonenumber
                }}
                style={styles.changeBtnStyle}>
                {changeEmail ? <Edit fill="#CECDCD" /> : <Edit />}
              </Pressable>
            </View>
            <View style={{ marginTop: -10 }}>
              <OtpComponent
                onPress={value => {
                  console.log('on email ==>',navigateToNext);
                    navigateToNext ? navigation.navigate(navigateToNext):
                    null
                  console.log('This is the email OTP is==>', value);
                }}
                label={'Continue'}
                buttonstyle={{ borderRadius: 15 }}
              />
            </View>
          </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapperVerification>
    </SafeAreaWraper>
  );
};

export default Playeremaileotp;
