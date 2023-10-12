import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import {styles} from './styles';
import {COLORS, FONTS, SIZES, height, width} from '@app/constants/Theme';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import TextInputComponent from '@app/components/TextInputComponent';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import images from '@app/constants/images';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import Searchicon from '@app/assets/icons/search.svg';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import MainLayoutWrapperClub from '@app/components/MainLayoutWrapper/MainLayoutWrapperClub';

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
    id: '3',
    name: 'England',
  },
];

const Renderedform = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Name'}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{
            borderWidth: 0,
            width: SIZES.width * 0.3,
            paddingHorizontal: 7,
          }}
          leftIcon={
            <Image source={images.londonFlag} style={{height: 20, width: 35}} />
          }
          placeholder={'+44'}
          inputStyle={{
            fontSize: 14,
            fontWeight: '600',
            color: '#100202',
          }}
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
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Email'}
      />
    </View>
  );
};

const Addressrederform = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Address'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Street'}
      />
      <TextInputComponent
        inputStyle={{left: 8}}
        container={{borderWidth: 0}}
        placeholder={'Search By Postcode'}
        leftIcon={<Searchicon height={20} width={20} />}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your city'}
      />
       <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your county'}
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



const Editclubadditionalinfo = ({navigation}) => {
  return (
    <SafeAreaWraper statusbar={'transparent'} barStyle={'light-content'}>
      <MainLayoutWrapperClub>
        <View>
          <Text style={[styles.headertextstyle]}>Club Registration</Text>
          <Text style={[styles.detailstyles]}>Club Details</Text>
        </View>
        <Heading label={'Owner Details'} />
        <Keyboardavoidwraper>
          {Renderedform()}
          <Text
            style={styles.bottomtext}
            onPress={() =>
              navigation.navigate(Navigations.playerpersonaldetails)
            }>
            Address
          </Text>

          {Addressrederform()}
          <Heading label={'Manager / Care Taker (optional)'} />
          {Renderedform()}
          <Text
            style={styles.bottomtext}
            onPress={() =>
              navigation.navigate(Navigations.playerpersonaldetails)
            }>
            Address
          </Text>

          {Addressrederform()}
          <Rectanglebutton
            onPress={() => navigation.navigate(Navigations.clubpreview)}
            buttonStyle={{backgroundColor: COLORS.primary}}
            label={'Update'}
          />
        </Keyboardavoidwraper>
      </MainLayoutWrapperClub>
    </SafeAreaWraper>
  );
};

export default Editclubadditionalinfo;
