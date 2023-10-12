import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWraper from '@app/components/SafeAreaWraper'
import TextInputComponent from '@app/components/TextInputComponent'
import { SIZES } from '@app/constants/Theme'
import images from '@app/constants/images'
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import AddIcon from '@app/assets/icons/addicon.svg';
import MinusIcon from '@app/assets/icons/minusicon.svg';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect'
import Calendar from '@app/assets/icons/Calendar.svg';
import SearchIcon from '@app/assets/icons/search.svg';
import { styles } from './styles'
import Navigations from '@app/navigations/navigations';
import MainLayoutWrapperClub from '@app/components/MainLayoutWrapper/MainLayoutWrapperClub'
import RectangleButton from '@app/components/ButtonComponents/RectangleButton'


const Data=[
  {
  Id:"1",
  name:'junior'},
  {
    Id:"2",
    name:'Senior'},
    {
      Id:"3",
      name:'Both'},    
]

const CountryData=[
  {id:'1',name:'India'},
  {id:'2',name:'UK'},
  {id:'3',name:'US'},
]
const Underline = () => {
  return (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
       // marginVertical: 4,
      }}
    />
  );
};
const Clubimformation = () => {

  return (
    <View>
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your club name'}
      />
      <DropDownSelect
      listDate={Data}
      label={'Select your club type'}
      />

      <View style={{ flexDirection: 'row' }}>
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
          placeholder={'Enter your club number'}
        />
      </View>
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your Email'}
        rightIcon={<Calendar />}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your password'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Re-Enter your password'}
      />
      {/* <DropDownSelect label={'Select your Gender'} listDate={Genderdata} /> */}
    </View>
  );
};

const Facilities = () => {
  return (
    <View>
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter Number of coaches'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter Number of Courts'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter Number of parking'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Others'}
      />
    </View>
  )

}
const Clubadress = () => {
  return (
    <View>
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your Address'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your street'}
      />

      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Search by Postcode'}
        leftIcon={<SearchIcon height={22} width={22} />} />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your City'}
      />
      <TextInputComponent
        container={{ borderWidth: 0 }}
        placeholder={'Enter your County'}
      />
      <DropDownSelect
       label={'Select your country'}
       listDate={CountryData}/>
    </View>
  )

}

const Clubdetails = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <SafeAreaWraper statusbar='transparent'>
      <MainLayoutWrapperClub>
        <Text style={styles.headertextstyle}>Club Registration</Text>
        <Text style={styles.detailstyles}>Club Details</Text>
        {Underline()}
        <Keyboardavoidwraper>
          <View style={styles.headings}>
            <Text style={styles.title}>Club Details</Text>
            <Pressable
            style={{padding:6}}
              onPress={() =>
                setSelectedItem(selectedItem === 'club' ? null : 'club')
              }>
              {selectedItem === 'club' ? <MinusIcon /> : <AddIcon />}
            </Pressable>
          </View>
          {
            selectedItem === 'club' && <View>
              {Clubimformation()}
            </View>
          }
          {Underline()}
          <View style={styles.headings}>
            <Text style={styles.title}>Facilities</Text>
            <Pressable
            style={{padding:6}}
              onPress={() =>
                setSelectedItem(selectedItem === 'facility' ? null : 'facility')
              }>
              {selectedItem === 'facility' ? <MinusIcon /> : <AddIcon />}
            </Pressable>
          </View>
          {
            selectedItem === 'facility' && <View>
              {Facilities()}
            </View>
          }
          {Underline()}
          <View style={styles.headings}>
            <Text style={styles.title}>Club Address</Text>

            <Pressable
            style={{padding:6}}
              onPress={() =>
                setSelectedItem(selectedItem === 'clubadress' ? null : 'clubadress')
              }>
              {selectedItem === 'clubadress' ? <MinusIcon /> : <AddIcon />}
            </Pressable>
          </View>
          {
            selectedItem === 'clubadress' && <View>
              {Clubadress()}
            </View>
          }
          {Underline()}

          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <RectangleButton
              buttonStyle={styles.continuebutton}
              onPress={() => navigation.navigate(Navigations.clubadditionalinformation)}
              label={'Continue'} />
          </View>
        </Keyboardavoidwraper>
      </MainLayoutWrapperClub>
    </SafeAreaWraper>
  )
}

export default Clubdetails

