import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Verifiedicon from '@app/assets/icons/general/verifiedicon.svg';
import {useNavigation} from '@react-navigation/native';
import Navigations from '@app/navigations/navigations';

const ProfileSuccess = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(function () {
      gotoLoginScreen();
    }, 1000);
  }, [gotoLoginScreen]);
  const gotoLoginScreen = () => {
    navigation.navigate(Navigations.editemail);
  };

  return (
    <View style={styles.maincontainerstyles}>
      <Verifiedicon />
      <Text style={{color: '#000', marginTop: 10}}>processing the payment</Text>
      <Text style={{color: '#000'}}>it may take a while</Text>
    </View>
  );
};

export default ProfileSuccess;

const styles = StyleSheet.create({
  maincontainerstyles: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textstyle: {
    color: '#333333',
    alignSelf: 'center',
  },
});
