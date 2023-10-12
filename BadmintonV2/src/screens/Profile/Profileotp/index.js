import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import SafeAreaWrapper from '@app/components/SafeAreaWrapper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {COLORS, SIZES} from '@app/constants/themes';
import OtpComponent from '@app/components/OtpComponent/OtpComponent';
import OvelButton from '@app/components/ButtonComponents/OvelButton';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import TextInputComponent from '@app/components/TextInputComponent/TextInputComponent';

const Profileotp = (props) => {
  const comeFrom = props?.route?.params?.comeFrom;
  console.log('comeFrom==>',props);
  const [codeValue, setCodeValue] = useState('');
  const navigation = useNavigation();
  const [changeEmail, setChangeEmail] = useState(false);
  const gotoLoginScreen = () => {
    navigation.navigate(Navigations.WithdrawOTPSuccessScreen);
  };

  const renderBottomButton = () => {
    return (
      <View style={styles.bottomWrap}>
        <OvelButton
          label="Verify OTP"
          buttonStyle={{
            width: 220,

            marginBottom: SIZES.base,
            marginHorizontal: SIZES.baseX,
          }}
          onPress={() => {
            comeFrom == 'EditMail' ? navigation.navigate(Navigations.editprofile) :
            navigation.navigate(Navigations.profilesuccess)}
          }
        />
        <Text style={styles.resendStyle}>Resend OTP</Text>
      </View>
    );
  };

  const renderEmailNumber = () => {
    return (
      <View
        style={{
          // flexDirection: 'row',
          height: 34,
        }}>
        <TextInputComponent
          container={{
            borderColor: '#00000029',
            height: 34,
            backgroundColor: '#F5F5F5',
            width: SIZES.width / 2.5,
          }}
          placeHolderColor="#8592B2"
          // inputStyle={{flex: 1}}
        />
      </View>
    );
  };

  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.secondary}>
      <MainLayoutWrapper containerStyle={{}}>
        <View style={styles.container}>
          <View style={styles.otpWrap}>
            <View style={{paddingHorizontal: SIZES.baseX5}}>
              <Text style={styles.headerTitle}>Enter OTP</Text>
              <Text style={styles.headerSubText}>
                We have sent an one time password
              </Text>
              <Text style={styles.headerSubText}>
                to your registered mobile
              </Text>
              <View style={styles.changeWrap}>
                {changeEmail ? (
                  renderEmailNumber()
                ) : (
                  <Text style={styles.numberStyle}>+44 7720037700</Text>
                )}
              </View>
            </View>
            <OtpComponent
              codeValue={codeValue}
              setCodeValue={setCodeValue}
              setOtpValue={code => {}}
            />
            {renderBottomButton()}
          </View>
        </View>
      </MainLayoutWrapper>
    </SafeAreaWrapper>
  );
};

export default Profileotp;
