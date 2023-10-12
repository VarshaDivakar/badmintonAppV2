import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {COLORS, FONTS, SIZES, height, width} from '@app/constants/Theme';
import {styles} from './styles';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import TextInputComponent from '@app/components/TextInputComponent';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import images from '@app/constants/images';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import Searchicon from '@app/assets/icons/search.svg';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';

const Data = [
  {
    id: '1',
    name: 'apple',
  },
  {
    id: '2',
    name: 'banana',
  },
  {
    id: '3',
    name: 'grapes',
  },
];
const ralationdata = [
  {
    id: '1',
    name: 'Father',
  },
  {
    id: '2',
    name: 'Mother',
  },
  {
    id: '3',
    name: 'Brother',
  },
];
const countrydata = [
  {
    id: '1',
    name: 'UK',
  },
  {
    id: '2',
    name: 'America',
  },
  {
    id: '1',
    name: 'England',
  },
];

const Renderedform = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your first name'}
      />
      <DropDownSelect
        label={'Select your relationship'}
        listDate={ralationdata}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{borderWidth: 0, width: SIZES.width * 0.3, paddingHorizontal: 7}}
          leftIcon={
            <Image source={images.londonFlag} style={{height: 20, width: 35}} />
          }
          placeholder={'+44'}
          inputStyle={{fontSize: 14, fontWeight: '600', color: '#100202'}}
          rightIcon={<Dropdownarrow height={25} width={30} />}
        />
        <TextInputComponent
          container={{
            borderWidth: 0,
            width: SIZES.width * 0.57,
            marginLeft: -SIZES.baseX2,
          }}
          placeholder={''}
        />
      </View>
    </View>
  );
};

const Addressrederform = () => {
  return (
    <View>
      <TextInputComponent
        inputStyle={{left: 8}}
        container={{borderWidth: 0}}
        placeholder={'Search By Postcode'}
        leftIcon={<Searchicon height={20} width={20} />}
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

const Addressrederform1 = () => {
  return (
    <View>
      <TextInputComponent
        inputStyle={{left: 8}}
        container={{borderWidth: 0}}
        placeholder={'Search By Postcode'}
        leftIcon={<Searchicon height={20} width={20} />}
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
        placeholder={'Enter your Country'}
      />

      
      <DropDownSelect label={'Select your Country'} listDate={countrydata} />
    </View>
  );
};

const Heading = ({label}) => {
  return (
    <View style={styles.headingContainer}>
      <View style={styles.headingLine} />
      <Text style={styles.headingText}>{label}</Text>
      <View style={styles.headingLine} />
    </View>
  );
};

Renderemergencyform = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your first name'}
      />
      <DropDownSelect
        label={'Select your relationship'}
       listDate={ralationdata}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{
            borderWidth: 0,
            width: SIZES.width * 0.3,
            paddingHorizontal: 7,
            // backgroundColor: '#FFFF',
          }}
          leftIcon={
            <Image source={images.londonFlag} style={{height: 20, width: 35}} />
          }
          placeholder={'+44'}
          inputStyle={{fontSize: 14, fontWeight: '600', color: '#100202'}}
          // rightIcon={<Dropdownarrow height={25} width={30} />}
        />
        <TextInputComponent
          container={{
            borderWidth: 0,
            width: SIZES.width * 0.57,
            marginLeft: -SIZES.baseX2,
          }}
          placeholder={''}
        />
      </View>
    </View>
  );
};

const Editemergencycontact = ({navigation}) => {
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <View>
          <Text style={[styles.headertextstyle]}>Player Registration</Text>
          <Text style={[styles.detailstyles]}>Emergency Contact Details</Text>
            <Heading label={'Guardian Details'} />
        </View>
        <Keyboardavoidwraper>
          {Renderedform()}

          <Text
            onPress={() => navigation.navigate(Navigations.playeradress)}
            style={styles.addaddress}>
            +ADD Address
          </Text>

          {Addressrederform()}
          <Heading label={'Emergency Contact'} />
          {Renderemergencyform()}
          <Text
            onPress={() => navigation.navigate(Navigations.playeradress)}
            style={styles.addaddress}>
            +ADD Address
          </Text>
          {Addressrederform1()}
          <Rectanglebutton
            onPress={() => navigation.navigate(Navigations.preview)}
            buttonStyle={{backgroundColor: COLORS.primary}}
            label={'Update'}
          />
        </Keyboardavoidwraper>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Editemergencycontact;
