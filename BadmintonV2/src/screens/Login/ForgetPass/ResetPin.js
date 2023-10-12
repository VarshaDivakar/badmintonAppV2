import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import MainLayoutWrapperVerification from '@app/components/MainLayoutWrapper/MainLayoutWrapperVerification';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import images from '@app/constants/images';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
import OtpComponent from '@app/components/OTPcomponent/OTPcomponent';
import TextInputComponent from '@app/components/TextInputComponent';
import Edit from '@app/assets/icons/Edit.svg';
import Navigations from '@app/navigations/navigations';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import {useNavigation} from '@react-navigation/native';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import navigations from '@app/navigations/navigations';
const ResetPin = props => {
  const navigation = useNavigation();
  console.log('props ==>', props);

  return (
    <SafeAreaWraper statusbar={COLORS.white}>
      <MainLayoutWrapperVerification>
        <Keyboardavoidwraper>
          <View style={styles.container}>
            <Image source={images.Verification} style={styles.imagestyle} />
            <Text style={styles.titlestyle}>Reset PIN</Text>
            <Text
              style={{
                textAlign: 'center',
                ...FONTS.regular,
                fontSize: 12,
                color: COLORS.black4,
                lineHeight: 20,
              }}>
             You will receive an email to your registered {'\n'}email address to create new 6 digit PIN
            </Text>
           <TextInputComponent
           container={{
            width:SIZES.width - 40,
            backgroundColor:COLORS.white,
            borderColor:'#8592B2',
            marginTop:44,
            marginBottom:30
           }}
            placeholder={'Email address'}
            placeHolderColor={COLORS.gray6}
            />

            <RectangleButton 
            onPress={()=> navigation.navigate(navigations.checkMailScreen)}
            buttonStyle={{
                backgroundColor:COLORS.orange,
                width:SIZES.width -40,
                height:50
            }}
            textStyle={{
                ...FONTS.medium,
                fontSize:14
            }}
            label={'Submit'}/>
          </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapperVerification>
    </SafeAreaWraper>
  );
};

export default ResetPin;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    imagestyle:{
        height:235,
        width:326,
        // marginTop:-15
    },
    titlestyle:{
        color:COLORS.black3,
        ...FONTS.medium,
        fontSize:24,
        lineHeight:25,
        fontWeight:'bold',
        marginTop:30,
        marginBottom:10
       // ...FONTS.bold
    }, 
   
})
