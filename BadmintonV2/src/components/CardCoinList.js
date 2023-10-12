import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
// import {color} from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';
import images from '@app/constants/images';
// import {images} from '@app/constants/images';
// import {height} from '@app/constants/Theme';
export default function CardCoinList({item}) {
  const temp = item.status;
  // const capitalizedTemp = temp.charAt(0).toUpperCase() + temp.slice(1);
  return (
    <View style={style.container}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              ...FONTS.regular,
              color: COLORS.balack8,
              fontSize: SIZES.baseX4,
              marginRight: SIZES.base,
            }}>
            {' '}
            {item.coinName}
          </Text>
          <Image source={images.GIcon} />
          {/* <View
            style={{
              backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              height: 25,
              width: 25,
              marginTop: -5,
            }}>
            <Text
              style={{
                ...FONTS.regular,
                color: COLORS.white,
                fontSize: SIZES.baseX4,
                textAlign: 'center',
                marginTop: 3,
                // marginRight: SIZES.base,
              }}>
              {item.symbol}
            </Text>
          </View> */}
        </View>
        <Text style={style.coinNum}> {item.coinNum} </Text>
      </View>
      <View style={style.activeView}>
        <Text style={item.isActive ? style.active : style.inActive}>
        {' '}
          Active{' '}
          {/* {capitalizedTemp} */}
        </Text>
        <Text style={style.timeView}>00:00</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: '90%',
    width: SIZES.width - 90,
    padding: 22,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  coinName: {
    fontSize: SIZES.baseX4,
    color: '#292A2A',
  },
  coinNum: {
    fontSize: SIZES.baseX3,
    color: '#9F9898',
  },
  active: {
    color: 'green',
    fontSize: SIZES.baseX3,
  },
  inActive: {
    color: 'red',
    fontSize: SIZES.baseX3,
  },
  timeView: {
    backgroundColor: '#E61818',
    color: 'white',
    padding: 1,
    fontSize: SIZES.baseX2,
    textTransform: 'capitalize',
  },
  activeView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
