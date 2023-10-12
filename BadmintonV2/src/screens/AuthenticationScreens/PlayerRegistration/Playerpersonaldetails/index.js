import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useState } from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {COLORS, FONTS, SIZES, width} from '@app/constants/Theme';
import {styles} from './styles';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import TextInputComponent from '@app/components/TextInputComponent';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import images from '@app/constants/images';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';

const Data = [
  {
    id: '1',
    name: 'Male',
  },
  {
    id: '2',
    name: 'Female',
  },
  {
    id: '3',
    name: 'Others',
  },
];

const Renderedform = () => {
  return (
    <View >
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your first name'}
      
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your last name'}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={styles.countrycode}
          leftIcon={
            <Image source={images.londonFlag} style={{height: 20, width: 35}} />
          }
          placeholder={'+44'}
          inputStyle={{fontSize: 14, fontWeight: '600', color: '#100202'}}
          rightIcon={<Dropdownarrow height={25} width={25} />}
        />
        <TextInputComponent
          container={styles.phonefield}
          placeholder={''}
        />
      </View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Email'}
        
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your DOB'}
        rightIcon={<Calendar color={'#777171'} />}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your password'}
      />

      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Re-Enter your password'}
      />
      <DropDownSelect label={'Select your gender'} listDate={Data} />
    </View>
  );
};

const Playerpersonaldetails = ({navigation}) => {
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <Keyboardavoidwraper>
          <View >
            <Text style={[styles.headertextstyle]}>Player Registration</Text>
            <Text style={[styles.detailstyles]}>Personal Details</Text>
            {Renderedform()}
            <Text
              onPress={() => navigation.navigate(Navigations.playeradress)}
              style={styles.addaddress}>
              +ADD Address
            </Text>
            <Rectanglebutton
              onPress={() =>
                //navigation.navigate(Navigations.playerfindtournament)
                alert('Navigate through +ADD Address')
              }
              buttonStyle={{backgroundColor: '#797c98'}}
              label={'Continue'}
            />
          </View>
          </Keyboardavoidwraper>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Playerpersonaldetails;
