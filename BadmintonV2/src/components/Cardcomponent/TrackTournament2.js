import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VectorIcon from '@app/assets/icons/vector.svg';
import BookIcon from '@app/assets/icons/book.svg';
import {COLORS} from '@app/constants/Theme';
import RectangleButton from '../ButtonComponents/RectangleButton';

export default function TrackTournament2(props) {
  return (
    <View>

      {props.id !== '5' ? (
        <View style={styles.track}>
          <VectorIcon height={58} width={20} style={styles.VectorIcon} />
          <View>
            <Text style={styles.titlestyle}>{props.name}</Text>
            <Text style={styles.datestyle}>{props.date}</Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            height: 50,
            width: 240,
            backgroundColor: '#FF5C02',
            borderRadius: 18,
            paddingHorizontal: 22,
            paddingTop: 16,
            marginTop:-10
          }}>
          <View style={{flexDirection: 'row'}}>
            {<BookIcon height={17} width={15} fill={'blue'} />}
            <View style={{marginTop: -10, left: 10}}>
              <Text
                style={{color: COLORS.white, fontSize: 13, marginBottom: 5}}>
                {props.name}
              </Text>
              <Text style={{color: '#E5D9D9'}}>{props.date}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  titlestyle: {
    color: COLORS.black4,
    fontSize: 13,
    marginBottom: 5,
    // marginTop: -3,
  },
  datestyle: {
    color: COLORS.gray5,
    fontSize: 13,
  },
  VectorIcon: {
    marginRight: 10,
    marginBottom: 10,
  },
  track: {flexDirection: 'row', marginLeft: 20},
});
