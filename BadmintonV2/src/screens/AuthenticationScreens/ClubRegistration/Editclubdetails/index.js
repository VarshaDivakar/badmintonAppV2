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
import MainLayoutWrapperClub from '@app/components/MainLayoutWrapper/MainLayoutWrapperClub'


const clubtype = [
  {
    id: '1',
    name: 'senior club',
  },
  {
    id: '2',
    name: 'junior club',
  },
  {
    id: '3',
    name: 'beginner club',
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
        placeholder={'Enter Your Club Name'}
      />
      <DropDownSelect
        label={'Select your club type'}
        listDate={clubtype}
      />
            <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Club Mobile number'}
      />
            <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Email'}
      />
            <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Password'}
      />
            <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Re-Enter your Password'}
      />
      
    </View>
  );
};

const Addressrederform = () => {
  return (
    <View>

      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter Number Of Coaches'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter Number Of Courts'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter Number of Parking'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Others'}
      />

    </View>
  );
};

const Addressrederform1 = () => {
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
      {/* <DropDownSelect label={'Select your County'} listDate={countrydata} />
       */}

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

const  Editclubdetails= ({navigation}) => {
  return (
    <SafeAreaWraper statusbar={'transparent'} barStyle={'light-content'}>
      <MainLayoutWrapperClub>
        <View>
          <Text style={[styles.headertextstyle]}>Club Registration</Text>
          <Text style={[styles.detailstyles]}>Club Details</Text>
           
        </View>
        <Keyboardavoidwraper>
        <Heading label={'Club Details'} />
          {Renderedform()}
          <Heading label={'Facilities'} />

          {Addressrederform()}
          <Heading label={'Club Address'} />
          {Addressrederform1()}
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

export default Editclubdetails;
