import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Verifiedicon from '@app/assets/icons/verifiedicon.svg';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';
import { styles } from './styles';
const SuccessScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(function () {
      gotoLoginScreen();
    }, 1000);
  }, [gotoLoginScreen]);
  const gotoLoginScreen = () => {
    navigation.navigate(Navigations.home);
  };

  return (
    <View style={styles.maincontainerstyles}>
      <Verifiedicon />
      <Text style={{color: '#000', marginTop: 10}}>processing the payment</Text>
      <Text style={{color: '#000'}}>it may take a while</Text>
    </View>
  );
};

export default SuccessScreen;


