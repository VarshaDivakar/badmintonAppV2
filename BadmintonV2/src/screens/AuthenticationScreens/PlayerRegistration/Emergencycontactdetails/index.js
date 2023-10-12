import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {styles} from './styles';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import {useNavigation} from '@react-navigation/native';
import Switchcomponent from '@app/components/Switchcomponent';
import {COLORS, SIZES} from '@app/constants/Theme';
import images from '@app/constants/images';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import TextInputComponent from '@app/components/TextInputComponent';
import AddIcon from '@app/assets/icons/addicon.svg';
import MinusIcon from '@app/assets/icons/minusicon.svg';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import SearchIcon from '@app/assets/icons/search.svg';

const Underline = () => {
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

const Relatiodata = [
  {
    id: '1',
    name: 'father',
  },
  {
    id: '2',
    name: 'mother',
  },
  {
    id: '3',
    name: 'brother',
  },
];

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

const Guardiandetailform = () => {
  return (
    <View style={{marginTop:15}}> 
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Enter your first name'}
      />
      <DropDownSelect
        label={'Select your relationship'}
        listDate={Relatiodata}
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
    </View>
  );
};
const Addparternerfrom = () => {
  return (
    <View>
      <TextInputComponent
        container={{borderWidth: 0}}
        placeholder={'Search By Postcode'}
        leftIcon={<SearchIcon height={22} width={22} />}
        inputStyle={{left: 10}}
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

const Emergencycontactdetails = ({navigation}) => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openemeregencyadd, setOpenEmergencyadd] = useState(false);
  const[selectedItem,setSelectedItem] = useState()
  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        {/* <Keyboardavoidwraper> */}
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.headertextstyle}>Player Registration</Text>
            <Text style={styles.detailstyles}>Emergency Contact Details</Text>
            {/* <View style={styles.linestyles}></View> */}
          </View>
          {Underline()}
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headings}>
            <Text style={styles.title}>Guardian Details</Text>
            <Pressable
            style={{padding:7}}
             onPress={() =>{
               setSelectedItem(selectedItem === 'guardian' ? null:'guardian')
                setOpenEmergencyadd(false);
             }}>
              {selectedItem === 'guardian' ? <MinusIcon /> : <AddIcon />}
            </Pressable>
          </View>
          {Underline()}
          {selectedItem === 'guardian' ? (
            <>
              {Guardiandetailform()}
              <Text
                onPress={() => setOpenAdd(!openAdd)}
                style={styles.addaddress}>
                +Add Address
              </Text>
              {Underline()}
            </>
          ):null}
          {openAdd && (
            <Keyboardavoidwraper>
              <View style={{marginTop: 15}}>{Addparternerfrom()}</View>
            </Keyboardavoidwraper>
          )}
          {Underline()}
          <View style={styles.headings}>
            <Text style={styles.title}>Emergency Contact</Text>
            <Pressable 
            style={{padding:7}}
            onPress={() => {
              setSelectedItem(selectedItem === 'emergency' ? null :'emergency')
              setOpenAdd(false);
            // setOpenEmergencyadd(!openemeregencyadd)
            }}>
              {selectedItem === 'emergency' ? <MinusIcon /> : <AddIcon />}
            </Pressable>
          </View>
          {Underline()}
          {selectedItem === 'emergency' ?(
            <>
              {Guardiandetailform()}
              <Text
                onPress={() => 
                  setOpenEmergencyadd(!openemeregencyadd)}
                style={styles.addaddress}>
                +Add Address
              </Text>
            </>
          ):null}
          {openemeregencyadd && (
            <ScrollView>
              <View style={{marginTop: 15}}>{Addparternerfrom()}</View>
              {/* <View
                  style={styles.buttonstyle}>
                  <Rectanglebutton
                    label={'Continue'}
                    onPress={() =>
                      navigation.navigate(Navigations.relaibility)
                    }
                  />
                </View> */}
            </ScrollView>
          )}
          <View style={{flexDirection:'row',alignItems:'flex-end',marginLeft:'auto',right:20}}>
            <Rectanglebutton
            label={'Continue'}
            onPress={() =>
              navigation.navigate(Navigations.relaibility)}/>
          </View>
          </ScrollView>
        </View>
        
        
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Emergencycontactdetails;
