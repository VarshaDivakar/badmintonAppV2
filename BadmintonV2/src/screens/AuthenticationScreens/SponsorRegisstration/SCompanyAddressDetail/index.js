import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapperCR from '@app/components/MainLayoutWrapper/MainlayoutwrapperCR';
import {COLORS} from '@app/constants/Theme';
import {styles} from './styles';
import TextInputComponent from '@app/components/TextInputComponent';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import {useNavigation} from '@react-navigation/native';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import SearchIcon from '@app/assets/icons/search.svg';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import navigations from '@app/navigations/navigations';


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
        placeholder={'Search By Postcode'}
        inputStyle={{left:7}}
        leftIcon={<SearchIcon height={22} width={22}/>}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your house number'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Street'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Address'}
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

const SCompanyAddressDetail = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaWraper barStyle={'light-content'} statusbar={'transparent'}>
      <MainLayoutWrapperCR>
        <Keyboardavoidwraper>
          <View>
            <Text style={styles.headertextstyle}>Sponsor Registration</Text>
            <Text style={[styles.detailstyles]}>Business/company Details</Text>
            {renderForm()}

            <Text
              style={styles.bottomtext}
              onPress={() => navigation.navigate(Navigations.spersonDetail)}>
              + Personal Details
            </Text>
            <Rectanglebutton
              label={'Continue'}
              onPress={() =>
                navigation.navigate(Navigations.playermobileotp,{navigateToNext:Navigations.sponserPreview})
              }
            />
          </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapperCR>
    </SafeAreaWraper>
  );
};

export default SCompanyAddressDetail;
