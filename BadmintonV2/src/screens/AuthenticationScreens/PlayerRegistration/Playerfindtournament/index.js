import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import { COLORS, FONTS, SIZES, width } from '@app/constants/Theme';
import { styles } from './styles';
import Dropdownarrow from '@app/assets/icons/downarrow.svg';
import Calendar from '@app/assets/icons/Calendar.svg';
import TextInputComponent from '@app/components/TextInputComponent';
import DropDownSelect from '@app/components/DropDownSelect/DropDownSelect';
import Rectanglebutton from '@app/components/Rectanlebutton';
import Navigations from '@app/navigations/navigations';
import Searchicon from '@app/assets/icons/search.svg';
import Filter from '@app/assets/icons/filter.svg';
import Tick from '@app/assets/icons/Tick.svg';
import images from '@app/constants/images';
import Check from '@app/assets/icons/check.svg';
import Cardcomponent from '@app/components/Cardcomponent';
import FilterCompo from '@app/components/Filter';
import CenterModel from '@app/components/ModelComponents/CenterModel';
import Keyboardavoidwraper from '@app/components/Keyboardavoidwraper';
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

const Playerfindtournament = ({ navigation }) => {
  const [show, setShow] = useState(true)
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [filterShow, setFilterShow] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)
  const DATA = [
    {
      id: '1',
      name: 'German Open 2022 (1000IE)',
      location: `Badminton England - Performance | ${'\n'} Mulheim an der Ruhr, Germany`,
      date: '14/03/2023 to 19/03/2023',
      heading1: 'German Open 2022 (1000IE)',
      h1date: 'Fri 7 jan 2022 12:00 GMT',
      heading2: 'Closing Deadline',
      h2date: 'Fri 7 jan 2022 12:00 GMT',
      heading3: 'Withdraw Deadline',
      h3date: 'Fri 7 jan 2022 12:00 GMT',
      heading4: 'Start Tournament',
      h4date: 'Fri 7 jan 2022 12:00 GMT',
      Endtitle: 'End of tournament',
      enddate: 'Fri 7 jan 2022 12:00 GMT'
    },
    {
      id: '2',
      name: 'German Open 2022 (1000IE)',
      location: `Badminton England - Performance | ${'\n'} Mulheim an der Ruhr, Germany`,
      date: '14/03/2023 to 19/03/2023',
      heading1: 'German Open 2022 (1000IE)',
      h1date: 'Fri 7 jan 2022 12:00 GMT',
      heading2: 'Closing Deadline',
      h2date: 'Fri 7 jan 2022 12:00 GMT',
      heading3: 'Withdraw Deadline',
      h3date: 'Fri 7 jan 2022 12:00 GMT',
      heading4: 'Start Tournament',
      h4date: 'Fri 7 jan 2022 12:00 GMT',
      Endtitle: 'End of tournament',
      enddate: 'Fri 7 jan 2022 12:00 GMT'
    },
  ];

  const Categorydata = [
    {
      id: '1',
      name: 'Junior​',
    },
    
    {
      id: '2',
      name: 'Under 19',
    },
    {
      id: '3',
      name: 'Senior',
     
    },
    {
      id: '4',
      name: 'Master',
     
    },
  ];
  const Locationdata = [
    {
      id: '1',
      name: 'Queensland',
    },
    
    {
      id: '2',
      name: 'Ruephillipe',
    },
    {
      id: '3',
      name: 'Sothampton',
     
    },
    {
      id: '4',
      name: 'Wembley',
     
    },
  ];
  const Matchcategory = [
    {
      id: '1',
      name: 'Singles (Boys/Men)​',
    },
    
    {
      id: '2',
      name: 'Singles (Girls/Women)​',
    },
    {
      id: '3',
      name: 'Singles (Girls/Women)​',
     
    },
    {
      id: '4',
      name: 'Doubles (Girls/Women)​',
     
    },
  ];

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

  const Selectmodelcategory = ({ onPress}) => {
    return (
      <View style={{ flex: 1 }}>
        <Keyboardavoidwraper>
          <CenterModel
            modalVisible={modalVisible}
            onClose={() => setModalVisible(false)}>
            <View style={styles.container}>
              <Text style={styles.title}>Select by category</Text>
              {Underline()}
              <View style={{ marginTop: 25, }}>

                <DropDownSelect
                  selectListStyle={styles.dropdowncontainer}
                  labelStyle={styles.labelStyle}
                  label={'Select your age category'} listDate={Categorydata} />
    
                <DropDownSelect
                selectListStyle={styles.dropdowncontainer}
                  labelStyle={styles.labelStyle}
                  label={'Select your Club/Location'} listDate={Locationdata} />

                <DropDownSelect
              selectListStyle={styles.dropdowncontainer}
                  labelStyle={styles.labelStyle}
                  label={'Select your match category'} listDate={Matchcategory} />
                <TextInputComponent
                inputStyle={{color:COLORS.black12,fontWeight:'600'}}
      
                  container={{
                    borderWidth: 0,
                  }}
                  placeholder={'Fee'}
                />
              </View>
              <View style={styles.buttonscontainer}>
                <Rectanglebutton
                  onPress={()=>setModalVisible(!modalVisible)}
                  textStyle={{ color: COLORS.primary }}
                  label={'Cancel'}
                  buttonStyle={styles.cancelbutton}
                />
                <Rectanglebutton
                  onPress={onPress}
                  label={'Confirm'}
                  buttonStyle={styles.buttonStyle}
                />
              </View>
            </View>

          </CenterModel>
        </Keyboardavoidwraper>
      </View>
    )
  }

  const renderItem = ({ item }) => {

    return (
      <>
        <Cardcomponent
          name={item.name}
          description={item.location}
          date={item.date}
          //onPressfunction={() => navigation.navigate(Navigations.playerfindtournament1, { listData: item })}
          onPressfunction={() => setModalVisible(!modalVisible)}

          heading1={item.heading1}
          h1date={item.h1date}
          heading2={item.heading2}
          h2date={item.h2date}
          heading3={item.heading3}
          h3date={item.h3date}
          heading4={item.heading4}
          h4date={item.h4date}
          Endtitle={item.Endtitle}
          enddate={item.enddate}

        />
        {
          modalVisible ? (

            <Selectmodelcategory onPress={() => navigation.navigate(Navigations.playerfindtournament1, { ListData: item })} />
          ) :
            null
        }
      </>
    );
  };



  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <View>
          <Text style={[styles.headertextstyle]}>Player Registration</Text>
          <Text style={[styles.detailstyles]}>Find Tournament</Text>
          {underline()}
          {show &&
            <View style={styles.heading}>
              <TextInputComponent
                inputStyle={{ left: 7 }}
                container={{
                  marginBottom: 0,
                  backgroundColor: COLORS.white,
                  width: 250,
                }}
                placeholder={'Search'}
                leftIcon={
                  <Searchicon
                    height={20}
                    width={20}
                    style={{ transform: [{ rotate: '270deg' }] }}
                  />
                }
              />
              <Pressable onPress={() => setFilterShow(true)}>{<Filter height={25} width={25} style={{ color: '#45454d' }} />}</Pressable>
            </View>
          }
          {underline()}
          {filterShow ? <View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginBottom: 20,
              marginTop: 20
            }}>
              <Text style={{
                ...FONTS.bold,
                fontSize: 16,
                color: COLORS.black7
              }}>Filters</Text>
              <Pressable>
                <Text style={{
                  ...FONTS.bold,
                  fontSize: 16,
                  color: COLORS.orange
                }}>Reset Filters</Text>
              </Pressable>
            </View>
            <View style={{}}>
            <FilterCompo isDisciplineVisible={false} onBtnPress={() => setFilterShow(false)} />
        </View>
          </View> :
            <View>
              <Text style={styles.allmatches}>All Tournaments </Text>

              <View style={{ marginTop: 10 }}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
                {/* {
                  modalVisible ? (
                    <Selectmodelcategory />
                  ) :
                    null
                } */}
              </View>
              <Rectanglebutton
                onPress={() =>
                  navigation.navigate(Navigations.selectPayment,{
                    routeName:'tournament'
                  })
                  // Alert.alert('Payment screen is not done')
                }
                buttonStyle={{ width: 270, marginTop: 20 }}
                label={'Continue for Payment'}
              />
              <Rectanglebutton
                onPress={() =>
                  navigation.navigate(Navigations.home)
                }
                buttonStyle={{ width: 270, marginTop: 7 }}
                label={'Take me to dashboard'}
              />
            </View>
          }
        </View>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Playerfindtournament;
