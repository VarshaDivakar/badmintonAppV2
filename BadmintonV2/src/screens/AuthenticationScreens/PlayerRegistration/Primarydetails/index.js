import {StyleSheet, Text, View, Image, Switch, ScrollView} from 'react-native';
import React, {useState} from 'react';
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
import Switchcomponent from '@app/components/Switchcomponent';
import Searchicon from '@app/assets/icons/search.svg';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';

const Data = [
  {
    id: '1',
    name: 'Male',
  },
  {
    id: '2',
    name: 'female',
  },
  {
    id: '3',
    name: 'Others',
  },
];

const Relation = [
  {
    id: '1',
    name: 'Mother',
  },
  {
    id: '2',
    name: 'Father',
  },
  {
    id: '1',
    name: 'Brother',
  },
];
const countrdata = [
  {
    id: '1',
    name: 'U.K',
  },
  {
    id: '2',
    name: 'U.S.A',
  },
  {
    id: '1',
    name: 'India',
  },
];


const underline = () => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        //marginVertical: 10,
      }}
    />
  );
};

const Addpartner = () => {
  return (
    <View style={{marginTop: 20}}>
      <TextInputComponent
        placeholder={'Enter your first name'}
        container={{borderWidth: 0}}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{borderWidth: 0,  width: SIZES.width * 0.3, paddingHorizontal: 7}}
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
        placeholder={'Enter your DOB'}
        rightIcon={<Calendar color={'#777171'}  />}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your Email'}
      />
      <DropDownSelect label={'Select your Gender'} listDate={Data} />
    </View>
  );
};

const Previousexprience = () => {
  return (
    <View style={{marginTop: 15}}>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your first name'}
      />
      <DropDownSelect label={'Select your relationship'} listDate={Relation} />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{borderWidth: 0,  width: SIZES.width * 0.3, paddingHorizontal: 7}}
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

const Addressform = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Search by post code'}
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
        placeholder={'Enter your county'}
      />
      <DropDownSelect label={'Select your Country'} listDate={countrdata} />
      {/* <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your name'}
      />
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Search your country'}
      /> */}
    </View>
  );
};

const Primarydetails = ({navigation}) => {
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <View>
          <Text style={[styles.headertextstyle]}>Player Registration</Text>
          <Text style={[styles.detailstyles]}>Primary Details</Text>
          {underline()}
          {/* <ScrollView> */}
          <Switchcomponent
            name={`Are you a current, registered member of ${'\n'} Badminton England?`}
            glow={true}>
            <TextInputComponent
              container={{
                borderWidth: 0,
              }}
              placeholder={'Enter Your Badminton ID'}
            />
          </Switchcomponent>
          {underline()}
          <View style={{height: 50, justifyContent: 'center', left: 20}}>
            <Text style={styles.labelText}>Club Details</Text>
          </View>
          {underline()}
          <Switchcomponent name={`Are you part of any Club ?`} glow={true}>
            <DropDownSelect label={'Select your Club'} listDate={Data} />
          </Switchcomponent>
          {underline()}
        </View>
        {/* <Keyboardavoidwraper> */}
          <View style={{height: 50, justifyContent: 'center'}}>
            <Text style={[styles.labelText, {left: 20}]}>Coach Details</Text>
          </View>
          {underline()}
          <TextInputComponent
            container={{marginTop: 20, borderWidth: 0}}
            placeholder={'Enter your number'}
          />
          {underline()}
          <View style={{height: 50, justifyContent: 'center'}}>
            <Text style={[styles.labelText, {left: 20}]}>Add Partner</Text>
          </View>
          {underline()}
          {Addpartner()}
          <Text
            //onPress={() => navigation.navigate(Navigations.playeradress)}
            style={styles.addaddress}>
            +Add partner
          </Text>
          {underline()}
          <View style={{height: 50, justifyContent: 'center'}}>
            <Text style={[styles.labelText, {left: 20}]}>
              Previous Experience
            </Text>
          </View>
          {underline()}
          {Previousexprience()}
          <Text
            //onPress={() => navigation.navigate(Navigations.playeradress)}
            style={styles.addaddress}>
            +Add Address
          </Text>
          {Addressform()}
          <View style={{}}>
            <Rectanglebutton
              onPress={() => navigation.navigate(Navigations.preview)}
              buttonStyle={{backgroundColor: COLORS.primary}}
              label={'Update'}
            />
          </View>
        {/* </Keyboardavoidwraper> */}
       
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Primarydetails;
