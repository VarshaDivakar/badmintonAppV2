import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
// import KeyboardAvoidWrapper from '@app/components/KeyboardAvoidWrapper';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import EmailCheckIcon from '@app/assets/icons/emailChecking.svg';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import images from '@app/constants/images';
import MainLayoutWrapperVerification from '@app/components/MainLayoutWrapper/MainLayoutWrapperVerification';
import navigations from '@app/navigations/navigations';


const CheckMailScreen = () => {
  const navigation = useNavigation();

  const gotoLoginScreen = () => {
    navigation.navigate(navigations.loginscreen);
  };

  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.secondary}>
      <MainLayoutWrapperVerification backArrow={false}>
        <View style={styles.container}>
        {/* <Image source={images.Verification} style={styles.imagestyle} /> */}
          <EmailCheckIcon />
          <View style={styles.innerContainer}>
            <Text style={styles.headerTitle}>Check your email</Text>
            <Text style={styles.headerSubText}>
              We've sent you instructions on how to reset the 6 digit PIN (also
              check the Spam folder).
            </Text>
          </View>
          <RectangleButton
            label="Go back to Login"
            buttonStyle={{
              height: 48,
              width:SIZES.width - 40,
              // paddingHorizontal: SIZES.baseX5 * 2,
              backgroundColor: COLORS.orange,
            }}
            textStyle={{}}
            onPress={gotoLoginScreen}
          />
        </View>
      </MainLayoutWrapperVerification>
    </SafeAreaWrapper>
  );
};

export default CheckMailScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent:'center',
        // backgroundColor:'green',
        paddingVertical: SIZES.height/15,
      },
      imagestyle:{
        height:235,
        width:326,
        // marginTop:-15
    },
      headerTitle: {
        ...FONTS.medium,
        fontSize: 24,
        lineHeight:25,
        color: '#130202',
        marginTop: SIZES.base,
        textAlign: 'center',
        
      },
      innerContainer: {
        alignItems: 'center',
        paddingHorizontal: SIZES.baseX5 * 2,
        marginVertical: SIZES.baseX4 * 2,
      },
      headerSubText: {
        ...FONTS.regular,
        fontSize: 12,
        color: '#130202',
        marginTop: 15,
      //  marginBottom:20,
        textAlign: 'center',
      },
})
