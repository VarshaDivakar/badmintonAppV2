import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {COLORS} from '@app/constants/Theme';
import {styles} from './styles';
import TextInputComponent from '@app/components/TextInputComponent';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import {useNavigation} from '@react-navigation/native';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import SearchIcon from '@app/assets/icons/search.svg';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';


const countrydata = [
  {
    id: '1',
    name: 'USA',
  },
  {
    id: '2',
    name: 'UK',
  },
  {
    id: '3',
    name: 'India',
  },
];


const renderForm = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={' Search by postcode'}
        leftIcon={<SearchIcon height={22} width={22}/>}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your house number'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your street'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your address'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your city'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your County'}
      />
       <DropDownSelect label={'Select your Country'} listDate={countrydata} />
    </View>
  );
};

const Playeradress = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <Keyboardavoidwraper>
          <View>
            <Text style={styles.headertextstyle}>Player Registration</Text>
            <Text style={styles.detailstyles}>Personal Details</Text>
            {renderForm()}

            <Text
              style={styles.bottomtext}
              onPress={() => navigation.navigate(Navigations.playerpersonaldetails)}>
              + Personal Details
            </Text>
            <Rectanglebutton
              label={'Continue'}
              onPress={() =>
               navigation.navigate(Navigations.playermobileotp,{navigateToNext:Navigations.primaryinformation})
            
              }
            />
          </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Playeradress;
