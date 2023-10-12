import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
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
import Searchicon from '@app/assets/icons/search.svg';
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

const countrdata = [
  {
    id: '1',
    name: 'UK',
  },
  {
    id: '2',
    name: 'USA',
  },
  {
    id: '3',
    name: 'UAE',
  },
];

const Renderedform = () => {
  return (
    <View>
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
          container={{
            borderWidth: 0, 
            width: SIZES.width * 0.3, paddingHorizontal: 7}}
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
        placeholder={'Enter your Password'}
      />

      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Re-Enter your Password'}
      />
      <DropDownSelect label={'Select your gender'} listDate={Data} />

     
    </View>
  );
};

const Addressrederform=()=>{
  return(
    <View>
    <TextInputComponent
      container={{borderWidth: 0}}
      placeholder={'Search by Postcode'}
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
      placeholder={'Enter your county'} 
    />

   <DropDownSelect label={'Select your Country'} listDate={countrdata} />

  </View>
  )
}

const EditSCompanydetails = ({navigation}) => {
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
      <Keyboardavoidwraper>
        <View>
          <Text style={[styles.headertextstyle]}>Sponser Registration</Text>
          <Text style={[styles.detailstyles]}>Business/company Details</Text>
          {Renderedform()}
          <Text
            onPress={() => navigation.navigate(Navigations.playeradress)}
            style={styles.addaddress}>
            +ADD Address
          </Text>
            {Addressrederform()}
          <Rectanglebutton
            onPress={() => navigation.navigate(Navigations.sponserPreview)}
            buttonStyle={{backgroundColor: COLORS.primary}}
            label={'Update'}
          />
        </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default EditSCompanydetails;
