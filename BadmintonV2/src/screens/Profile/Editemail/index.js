import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import TextInputComponent from '@app/components/TextInputComponent';
import KeyboardAvoidWrapper from '@app/components/Keyboardavoidwraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import OvelButton from '@app/components/ButtonComponents/OvelButton';
import Editprofileicon from '@app/assets/icons/Editprofileicon.svg';
import navigations from '@app/navigations/navigations';
const Editemail = () => {
  const navigation = useNavigation();
  const Editlist = () => {
    return (
      <View style={styles.maincontainer}>
        {/* <TextInputComponent
        style={{width:300}}
    
          placeholder="Enter your old Email Adress"
        />
         <TextInputComponent
        style={{width:300}}
    
          placeholder="Enter your New Email Adress"
        />
         <TextInputComponent
        style={{width:300}}
    
          placeholder="Re-Enter your New Email Adress"
        /> */}
      </View>
    );
  };

  const InsideLogin = () => {
    return (
      <View style={styles.subcontainerstyle}>
        <TextInputComponent
          borderColor="#8592B2"
          name="CVV"
          placeholder="Enter your old Email Adress"
          placeHolderColor={COLORS.blue4}
          container={{
            marginVertical: SIZES.baseX4,
            borderColor: '#C7CCD9',
          }}
        />
        <TextInputComponent
          borderColor="#8592B2"
          name="CVV"
          placeholder="Enter your new Email Adress"
          placeHolderColor={COLORS.blue4}
          container={{
            marginVertical: SIZES.baseX4,
            borderColor: '#C7CCD9',
          }}
        />
        <TextInputComponent
          borderColor="#8592B2"
          name="CVV"
          placeholder="Re-Enter your new Email Adress"
          placeHolderColor={COLORS.blue4}
          container={{
            marginVertical: SIZES.baseX4,
            borderColor: '#C7CCD9',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.primary}
      barStyle="light-content"
      backgroundColor={COLORS.gray3}>
      <MainLayoutWrapper
        containerStyle={{
          height: SIZES.height / 8,
        }}
        containbg={{backgroundColor: COLORS.white}}
        title={'Reset Email adress'}>
        <KeyboardAvoidWrapper>
          {InsideLogin()}

          <RectangleButton
            label="Submit"
            buttonStyle={{
              height: 48,
              width: 210,
              marginTop: 50,
              marginHorizontal: 46,
              borderRadius: 30,
              alignSelf: 'center',
            }}
            textStyle={{}}
            onPress={() => {
              navigation.navigate(navigations.editProfile)
              // navigation.navigate(Navigations.profileotp,{comeFrom:'EditMail'})
            }}
          />
        </KeyboardAvoidWrapper>
      </MainLayoutWrapper>
    </SafeAreaWrapper>
  );
};

export default Editemail;
