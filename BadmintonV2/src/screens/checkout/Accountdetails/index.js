import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '@app/components/SafeAreaWraper';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapperIn';
import {styles} from './styles';
import RectangleButton from '@app/components/ButtonComponents/RectangleButton';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import OvelButton from '@app/components/ButtonComponents/OvelButton';

const DataPreview = ({label, value}) => {
  return (
    <View style={styles.reviewDetailWrap}>
      <Text style={styles.reviewDetailHead}>{label}</Text>
      <Text style={styles.reviewDetailValue}>{value}</Text>
    </View>
  );
};

const Accountdetails = () => {
  const navigation = useNavigation();

  const gotoLoginScreen = () => {
    navigation.navigate(Navigations.selectticket);
  };
  

  const Insidecheckout = () => {
    return (
      <View style={styles.subcontainerstyle}>
        <View style={styles.insideheaderstyle}>
          <Text style={styles.infotextstyle}>  Bank account details</Text>
        </View>
        <DataPreview label={'Payee name'} value={'Vishnu vardhan'} />
        <DataPreview label={'Ticket reference'} value={'1800400300456'} />
        <DataPreview label={'Amount to send'} value={'5 GBP'} />
        <DataPreview label={'Bank account name'} value={'vishnu account'} />
        <DataPreview label={'Bank account number'} value={'678901234'} />
        <DataPreview label={'Bank account sort code'} value={'043215'} />
      </View>
    );
  };

  return (
    <SafeAreaWrapper
      containerStyle={{paddingHorizontal: 0}}
      statusbar={COLORS.primary}
      barStyle="light-content"
      backgroundColor={'white'}>
      <MainLayoutWrapper
        containerStyle={{
          height: SIZES.height / 8,
        }}
        title={'Account Details'}>
        {Insidecheckout()}
        <OvelButton
          label="Continue"
          buttonStyle={{
            marginBottom: SIZES.base,
            marginHorizontal: SIZES.baseX5,
            backgroundColor: COLORS.primary,
            marginTop: 50,
          }}
          onPress={() => navigation.navigate(Navigations.successScreen)}
        />
        {/* <Text
        onPress={()=>navigation.navigate(Navigations.requestmoney)}
       >PRESS</Text> */}
      </MainLayoutWrapper>
    </SafeAreaWrapper>
  );
};

export default Accountdetails;
