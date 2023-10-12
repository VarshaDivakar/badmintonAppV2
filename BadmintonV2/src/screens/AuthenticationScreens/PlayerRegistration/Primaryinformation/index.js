import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import { styles } from './styles';
import Rectanglebutton from '@app/components/Rectanlebutton';
import { useNavigation } from '@react-navigation/native';
import Switchcomponent from '@app/components/Switchcomponent';
import { COLORS, SIZES } from '@app/constants/Theme';
import images from '@app/constants/images';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import TextInputComponent from '@app/components/TextInputComponent';
import AddIcon from '@app/assets/icons/addicon.svg';
import MinusIcon from '@app/assets/icons/minusicon.svg';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import Navigations from '@app/navigations/navigations';

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

const Data = [
  {
    id: '1',
    name: 'dhign club',
  },
  {
    id: '2',
    name: 'kanexy club',
  },
];

const Genderdata = [
  {
    id: '1',
    name: 'male',
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

const Experiencefrom = () => {
  return (
    <>
      <TextInputComponent
        container={{
          borderWidth: 0,
        }}
        placeholder={'Enter your Tournament name'}
      />
      <TextInputComponent
        container={{
          borderWidth: 0,
        }}
        placeholder={'Enter your Club'}
      />
      <TextInputComponent
        container={{
          borderWidth: 0,
        }}
        placeholder={'Enter your League'}
      />
      <TextInputComponent
        container={{
          borderWidth: 0,
        }}
        placeholder={'Enter your Achievements'}
      />
    </>
  );
};

const Addparternerfrom = () => {
  return (
    <View>
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter first name'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter last name'}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{
            borderWidth: 0,
            width: SIZES.width * 0.3,
            paddingHorizontal: 7,
          }}
          leftIcon={
            <Image source={images.londonFlag} style={{ height: 20, width: 35 }} />
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
        container={{ borderWidth: 0 }}
        placeholder={'Enter DOB'}
        rightIcon={<Calendar color={'#777171'} />}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter email'}
      />
      <DropDownSelect label={'Select gender'} listDate={Genderdata} />
    </View>
  );
};
const Addparternerfrom2 = () => {
  console.log('hello vishnu')
  return (
    <View>
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter first name'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter last name'}
      />
      <View style={styles.phonecode}>
        <TextInputComponent
          container={{
            borderWidth: 0,
            width: SIZES.width * 0.3,
            paddingHorizontal: 7,
          }}
          leftIcon={
            <Image source={images.londonFlag} style={{ height: 20, width: 35 }} />
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
        container={{ borderWidth: 0 }}
        placeholder={'Enter DOB'}
        rightIcon={<Calendar />}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter Email'}
      />
      <DropDownSelect label={'Select Gender'} listDate={Genderdata} />
    </View>
  );
};

const Primaryinformation = ({ navigation }) => {
  //onst navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [openpatrner, setopenpartner] = useState(null);

  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.headertextstyle}>Player Registration</Text>
            <Text style={styles.detailstyles}>Primary information</Text>
            {/* <View style={styles.linestyles}></View> */}
          </View>
          {Underline()}
          <Switchcomponent
            name={`Are you a current, registered member of ${'\n'}Badminton England?`}
            glow={true}>
            <TextInputComponent
              container={{
                borderWidth: 0,
              }}
              placeholder={'Enter Your Badminton ID'}
            />
          </Switchcomponent>
          {Underline()}
          <Keyboardavoidwraper>
            <View style={styles.headings}>
              <Text style={styles.title}>Club Details</Text>
              <Pressable
              style={{padding: 7}}

                onPress={() =>
                  setSelectedItem(selectedItem === 'club' ? null : 'club')
                }>
                {selectedItem === 'club' ? <MinusIcon /> : <AddIcon />}
              </Pressable>
            </View>
            {Underline()}
            {selectedItem === 'club' ? (

              <Switchcomponent name={`Are you part of any Club ?`} glow={true}>
                <DropDownSelect label={'Select your club name'} listDate={Data} />

              </Switchcomponent>

            ) : null}
            {Underline()}
            <View style={styles.headings}>
              <Text style={styles.title}>Coach Details</Text>
              <Pressable
              style={{padding: 7}}

                onPress={() => {
                  setSelectedItem(selectedItem === 'coach' ? null : 'coach');
                }}>
                {selectedItem === 'coach' ? <MinusIcon /> : <AddIcon />}
              </Pressable>
            </View>
            {Underline()}
            {selectedItem === 'coach' ? (
              <>
                <TextInputComponent
                  container={{
                    borderWidth: 0,
                    marginTop: 15,
                  }}
                  placeholder={'Enter your coach name'}
                />
                {Underline()}
              </>
            ) : null}
            <View style={styles.headings}>
              <Text style={styles.title}>Add Partner</Text>
              <Pressable
              style={{padding: 7}}
                onPress={() => {
                  setSelectedItem(selectedItem === 'partner' ? null : 'partner');
                }}>
                {selectedItem === 'partner' ? <MinusIcon /> : <AddIcon />}
              </Pressable>
            </View>
            {Underline()}
            {selectedItem === 'partner' ? (
              <Keyboardavoidwraper>
                <View style={{ marginTop: 15 }}>{Addparternerfrom()}</View>
                <Text
                  onPress={() => {
                    console.log('hii')
                    setopenpartner(openpatrner === 'Addparternerfrom2' ? null : 'Addparternerfrom2');
                  }}
                  style={styles.addpartner}>
                  +Add partner
                </Text>
                <View>
                  {
                    openpatrner === 'Addparternerfrom2' ?
                      (
                        Addparternerfrom2()
                      ) : <Text></Text>
                  }
                </View>

              </Keyboardavoidwraper>
            ) : null}


            {Underline()}

            <View style={styles.headings}>
              <Text style={styles.title}>Previous Experience</Text>
              <Pressable 
              style={{padding: 7}}
              onPress={() => {
                //setOpenPrevious(!openPrivious)
                setSelectedItem(selectedItem === 'experience' ? null : 'experience')
              }}>
                {selectedItem === 'experience' ? <MinusIcon /> : <AddIcon />}
              </Pressable>
            </View>
            {Underline()}
            {selectedItem === 'experience' ? (
              <View style={{}}>
                <Switchcomponent
                switchstyle={{right:7}}
                  name={`Previous Experience(enter the${'\n'}name of the tournament you ${'\n'}participated in, club, league you ${'\n'}participated in, and what you have achieved) ?`}
                  glow={true}>
                  {Experiencefrom()}

                </Switchcomponent>
              </View>
            ) : null}

            {/* {Underline()} */}
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 'auto', right: 20 }}>
              <Rectanglebutton
                label={'Continue'}
                onPress={() =>
                  navigation.navigate(Navigations.emergencycontactdetails)} />
            </View>
          </Keyboardavoidwraper>
        </View>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Primaryinformation;
