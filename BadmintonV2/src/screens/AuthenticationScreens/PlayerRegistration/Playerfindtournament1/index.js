import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWraper from '@app/components/SafeAreaWraper';
import MainLayoutWrapper from '@app/components/MainLayoutWrapper/MainLayoutWrapper';
import {COLORS, FONTS, SIZES, width} from '@app/constants/Theme';
import {styles} from './styles';
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
import TrackTournament from '@app/components/Cardcomponent/TrackTournament';
import {useNavigation} from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import TrackTournament2 from '@app/components/Cardcomponent/TrackTournament2';
import VectorIcon from '@app/assets/icons/vector.svg';
import BookIcon from '@app/assets/icons/book.svg';

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

const Playerfindtournament1 = props => {
  const [show, setShow] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const navigation = useNavigation();
 const {ListData }= props?.route?.params;

  console.log('selected Data ==>', ListData);

   const DATA = [
    {
      id: '1',
      name: 'German Open 2022 (1000IE)',
      date: '14/03/2023 to 19/03/2023',
    },
    {
      id: '2',
      name: 'Closing Deadline',
      date: 'Fri 7 jan 2022 12:00 GMT',
    },
    {
      id: '3',
      name: 'Withdraw Deadline',
      date: 'Fri 7 jan 2022 12:00 GMT',
    },
 
    {
      id: '4',
      name: 'Start Tournament',
      date: 'Fri 7 jan 2022 12:00 GMT',
    },
    {
      id: '5',
      name: 'End Tournament',
      date: 'Fri 7 jan 2022 12:00 GMT',
    },  
  ];


  return (
    <SafeAreaWraper statusbar={COLORS.black} barStyle={'light-content'}>
      <MainLayoutWrapper>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.headertextstyle]}>Player Registration</Text>
          <Text style={[styles.detailstyles]}>Find Tournament</Text>

          {underline()}

          <Text style={styles.allmatches}>
            All Matches </Text>

          <View style={{marginTop: 10}}>
            <Cardcomponent
               DATA={ListData}
               name={ListData?.name}
               description={ListData?.location}
               date={ListData?.date}
            />
  
            <View style={{marginHorizontal: 20}}>
              <FlatList
                data={DATA}
                renderItem={({item}) => (
                  <TrackTournament2 name={item.name} date={item.date} id={item.id}/>
                )}
                keyExtractor={item => item.id}
              />

              <View
                style={{
                  flexDirection: 'row',marginRight:'auto',left:-3
                }}>
                <Rectanglebutton
                  onPress={() => navigation.navigate(navigations.selectPayment,{
                    routeName:'tournament'
                  })}
                  label={'Checkout'}
                />
                <Rectanglebutton
                  onPress={() => navigation.navigate(navigations.home)}
                  label={'Pay later'}
                />
              </View>
            </View>
          </View>

        </ScrollView>
      </MainLayoutWrapper>
    </SafeAreaWraper>
  );
};

export default Playerfindtournament1;


