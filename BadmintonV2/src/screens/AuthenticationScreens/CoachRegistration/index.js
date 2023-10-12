import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import MainLayoutWrapperCR from '@app/components/MainLayoutWrapper/MainlayoutwrapperCR';

const Coachdetails = () => {
  return (
    <SafeAreaWraper barStyle='light-content'>
      <MainLayoutWrapperCR></MainLayoutWrapperCR>
    </SafeAreaWraper>
  );
};

export default Coachdetails;

const styles = StyleSheet.create({});
