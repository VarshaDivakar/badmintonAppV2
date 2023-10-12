import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, FONTS, SIZES, width } from '@app/constants/Theme';
import images from '@app/constants/images';
import Check from '@app/assets/icons/check.svg';
import Calendaricons from '@app/assets/icons/Calendarblack.svg';
import Heartoutline from '@app/assets/icons/heartoutline.svg';
import LocationIcon from '@app/assets/icons/location1.svg';
import VectorIcon from '@app/assets/icons/vector.svg';
import BookIcon from '@app/assets/icons/book.svg';
import Rectanglebutton from '@app/components/Rectanlebutton';
import { useNavigation } from '@react-navigation/native';
import navigations from '@app/navigations/navigations';
import TrackTournament from './TrackTournament';

const Cardcomponent = ({ name, description, date, onPressfunction  }) => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={images.Cock}
              style={{ height: 25, width: 25, borderRadius: width / 2 }}
            />
            <Text
              onPress={onPressfunction}
              style={{
                marginHorizontal: 5,
                color: COLORS.blue1,
                textDecorationLine: 'underline',
              }}>
              {name}
            </Text>
            {<Heartoutline width={15} height={10} style={{ marginTop: 5 }} />}
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => setChecked(!checked)}>
                {checked && (
                  <View style={styles.checked}>
                    {<Check fill={COLORS.primary} height={20} width={20} />}
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.description}>
            {<LocationIcon height={13} width={13} style={{ marginTop: -10 }} />}
            <Text style={{ color: COLORS.black4, left: 5 }}>{description}</Text>
          </View>
          <View style={styles.date}>
            {<Calendaricons width={15} height={13} />}
            <Text style={{ color: COLORS.black4, left: 5 }}>{date}</Text>
          </View>
        </View>
      </View>
      {/* <TrackTournament/> */}
      {/* {data && (
        <View style={{}}>
          <View style={styles.detailscontainer}> */}
          
            {/* <View style={{ flexDirection: 'row', height: 60 }}>
              {<VectorIcon height={60} width={20} style={styles.VectorIcon} />}
              <View>
                <Text style={styles.titlestyle}>{heading1}</Text>
                <Text style={styles.datestyle}>{h1date}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 60 }}>
              {<VectorIcon height={60} width={20} style={styles.VectorIcon} />}
              <View>
                <Text style={styles.titlestyle}>{heading2}</Text>
                <Text style={styles.datestyle}>{h2date}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 60 }}>
              {<VectorIcon height={60} width={20} style={styles.VectorIcon} />}
              <View>
                <Text style={styles.titlestyle}>{heading3}</Text>
                <Text style={styles.datestyle}>{h3date}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 60 }}>
              {<VectorIcon height={60} width={20} style={styles.VectorIcon} />}
              <View>
                <Text style={styles.titlestyle}>{heading4}</Text>
                <Text style={styles.datestyle}>{h4date}</Text>
              </View>
            </View>
            <View
              style={{
                height: 50,
                width: 240,
                backgroundColor: '#FF5C02',
                borderRadius: 18,
                // marginTop: -20,
                // marginLeft: -20,
                paddingHorizontal: 22,
                paddingTop: 16,
                // alignItems:'center'
                //justifyContent:'center'
              }}>
              <View style={{ flexDirection: 'row' }}>
                {<BookIcon height={17} width={15} fill={'blue'} />}
                <View style={{ marginTop: -10, left: 10 }}>
                  <Text style={{ color: COLORS.white, fontSize: 13 }}>{Endtitle}</Text>
                  <Text style={{ color: '#E5D9D9' }}>{enddate}</Text>
                </View>
              </View>
            </View> */}
            {/* <View style={{
              flexDirection: 'row'
              , marginLeft: -20,
              marginTop: 20
            }}>
              <Rectanglebutton
                onPress={() =>
                  navigation.navigate(navigations.selectPayment)
                  // alert('Payment screen is not done')
                }
                // buttonStyle={{}}
                label={'Checkout'}
              />
              <Rectanglebutton
                onPress={() =>
                  navigation.navigate(navigations.home, { dashboardType: 'player' })
                  // alert('Payment screen is not done')
                }
                // buttonStyle={{}}
                label={'Pay later'}
              />
            </View> */}
          {/* </View>
        </View>
      )} */}
    </View>
  );
};

export default Cardcomponent;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: COLORS.white,
    marginHorizontal: 27,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    //shadowRadius: 11.95,
    elevation: 10,
    padding: 10,

    //flex: 1,
  },
  heartimage: {
    height: 14,
    width: 14,
    //marginTop: -10,
    marginHorizontal: 5,
  },
  description: {
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    //marginTop: -5,
  },
  date: {
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    //marginTop: -5,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  checked: {
    width: 20,
    height: 20,
    //backgroundColor:COLORS.primary,
  },
  detailscontainer: {
    flex: 1,
    marginHorizontal: 27,
    padding: 10,
    left: 3,
  },
});
