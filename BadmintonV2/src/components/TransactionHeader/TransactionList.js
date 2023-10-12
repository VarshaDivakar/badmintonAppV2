import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS, SIZES, FONTS} from '@app/constants/Theme';

export default function TransactionList({item}) {
  return (
    <View style={styles.renderItemView}>
      <View style={styles.profileImg}>
        {/* <Image style={styles.profileImg}   source={{uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'}} resizeMode={'cover'}/> */}
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.img,
          }}
        />
        {/* <Image style={styles.img} resizeMode={'cover'} source={item.img} /> */}
      </View>
      <View style={styles.rightView}>
        <View style={styles.renderViewMiddle}>
          <Text style={styles.nametxt}>{item.name}</Text>
          <Text style={styles.amounttxt}>{item.amount}</Text>
        </View>
        <Text style={styles.tractsactionTxt}>Ticket amount request sent</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  renderItemView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    height: 72,
  },
  rightView: {
    width: '88%',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    // borderColor: 'gray',
    //borderWidth: 1,
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  renderViewMiddle: {
    paddingHorizontal: SIZES.baseX2,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  amounttxt: {
    color: '#ED2330',
    ...FONTS.light,
    paddingVertical: 4,
  },
  nametxt: {
    color: '#0F1B2D',
    ...FONTS.regular,
  },
  tractsactionTxt: {
    color: '#545F7A',
    ...FONTS.regular,
    marginLeft: '2%',
  },
  tinyLogo: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
