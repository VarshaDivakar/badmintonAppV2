import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import {COLORS, FONTS, SIZES, width} from '@app/constants/Theme';
// import {styles} from './styles';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import TextInputComponent from '@app/components/TextInputComponent';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import images from '@app/constants/images';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import MainLayoutWrapperCR from '@app/components/MainLayoutWrapper/MainlayoutwrapperCR';
import { styles } from './styles';
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
          container={styles.countrycode}
          leftIcon={
            <Image source={images.londonFlag} style={{height: 20, width: 35}} />
          }
          placeholder={'+44'}
          inputStyle={{fontSize: 14, fontWeight: '600', color: '#100202'}}
          rightIcon={<Dropdownarrow height={25} width={30} />}
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

const SPersonalDetail = ({navigation}) => {
  return (
    <SafeAreaWraper  barStyle={'light-content'} statusbar={'transparent'}> 
      <MainLayoutWrapperCR>
        <Keyboardavoidwraper>
          <View >
            <Text style={[styles.headertextstyle]}>Sponsor Registration</Text>
            <Text style={styles.detailstyles}>Personal Details</Text>
            {Renderedform()}
            <Text
              onPress={() => navigation.navigate(Navigations.sPersonalAddressDetail)}
              style={styles.addaddress}>
              +ADD Address
            </Text>
            <Rectanglebutton
              isDisable={true}
              onPress={() =>
                //navigation.navigate(Navigations.playerfindtournament)
                alert('Navigate through +ADD Address')
              }
              buttonStyle={{backgroundColor: '#797c98'}}
              label={'Continue'}
            />
          </View>
          </Keyboardavoidwraper>
      </MainLayoutWrapperCR>
    </SafeAreaWraper>
  );
};

export default SPersonalDetail;
