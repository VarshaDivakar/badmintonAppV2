import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {styles} from './styles';
import {COLORS, FONTS, SIZES} from '@app/constants/Theme';

export default function RenderList({item, onListPress}) {
  return (
    <Pressable
      // onPress={() => navigation.navigate(Navigations.transfersearch)}
      onPress={() => onListPress(item)}
      style={{
        flexDirection: 'row',
        paddingHorizontal: SIZES.baseX2,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.gray3,
        width: '100%',
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          backgroundColor: '#000',
          borderRadius: 20,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item?.meta?.beneficiary_avatar,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingVertical: SIZES.baseX2,
          marginHorizontal: SIZES.baseX4,
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <View
        //onPress={() => navigation.navigate(Navigations.transfersearch)}
        >
          <Text style={styles.addAddressListLabel}>
          {item.name}
          </Text>
          <Text
            style={{
              position: 'absolute',
              right: 20,
              color: item.type === 'debit' ? COLORS.red : COLORS.green,
              ...FONTS.medium,
              fontSize: SIZES.baseX3,
            }}>
            £1419.59
            {/* {item.instructed_currency} {parseFloat(item.amount).toFixed(2)} */}
          </Text>
        </View>
        <View>
          <Text style={[styles.subheader, {color: COLORS.blue4}]}>
          Transaction
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
