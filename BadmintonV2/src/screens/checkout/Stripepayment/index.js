import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import MainLayoutWrapperIn from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import {styles} from './styles';
import images from '@app/constants/images';
import Navigations from '@app/navigations/navigations';
import {useNavigation} from '@react-navigation/native';
import TextInputComponent from '@app/components/TextInputComponent';
import Rectanglebutton from '@app/components/Rectanlebutton';
import MasterCard from '@app/assets/icons/mastercard.svg';

const Stripepayment = () => {
  const navigation = useNavigation();

  const Insidecheckout = () => {
    return (
      <View style={styles.subcontainerstyle}>
        <View
          style={styles.titlecontainer}>
          <Text style={styles.heading}>
            Total Amount
          </Text>
          <Text style={styles.heading}>
            ₹ 5005.20
          </Text>
        </View>
        <Text style={styles.title}>Card Holder </Text>
        <TextInputComponent
          name="Card Holder"
          placeHolderColor={COLORS.blue4}
          placeholder="Card Holder"
          container={{backgroundColor: COLORS.white, borderRadius: 5}}
        />

        <Text style={styles.title}>Card Details </Text>
        <TextInputComponent
          name="Card Detail"
          placeHolderColor={COLORS.blue4}
          container={{backgroundColor: COLORS.white, borderRadius: 5}}
          placeholder="**** **** **** ****"
          leftIcon={<MasterCard margin={8} />}
          keyboardtype="numeric"
          maxLength={16}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '65%'}}>
            <Text style={styles.title}>Month/Year </Text>
            <TextInputComponent
              name="Month/Year"
              placeHolderColor={COLORS.blue4}
              placeholder="MM/YY"
              container={{
                backgroundColor: COLORS.white,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.title}>CVV </Text>
            <TextInputComponent
              name="CVV"
              placeholder="***"
              placeHolderColor={COLORS.blue4}
              container={{
                backgroundColor: COLORS.white,
                borderRadius: 5,
              }}
              keyboardtype={'numeric'}
              maxLength={3}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.primary}
      backgroundColor="#fff"
      barStyle="light-content">
      <MainLayoutWrapperIn
        containerStyle={{
          height: SIZES.height / 10,
        }}
        title={'Payment'}>
        <Keyboardavoidwraper>
          {Insidecheckout()}
          <View
            style={styles.bottomcontainer}>
            <Rectanglebutton
              onPress={() => navigation.goBack()}
              label="Previous"
              buttonStyle={styles.buttonstyle}
              textStyle={{color: 'black'}}
            />
            <Rectanglebutton
              label="Submit"
              buttonStyle={styles.buttonstyle1}
              textStyle={{}}
              onPress={() => navigation.navigate(Navigations.successScreen)}
              //onPress={formik.handleSubmit}
            />
          </View>
          {/* </ScrollView> */}
        </Keyboardavoidwraper>
      </MainLayoutWrapperIn>
    </SafeAreaWrapper>
  );
};
export default Stripepayment;
