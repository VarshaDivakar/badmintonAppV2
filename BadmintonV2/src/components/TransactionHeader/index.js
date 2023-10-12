import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {COLORS, images, SIZES} from '@app/constants/Theme';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import Menu from '@app/assets/icons/menu.svg';

export default function TransactionHeader({title}) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Pressable
        // onPress={() => console.log('back pressed')}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={style.arrowContainer}>
          <Menu height={20} width={20} />
        {/* <Image style={style.indicators} source={images.menu} /> */}

      </Pressable>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    alignItems:'center'
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  indicators: {
    height: 30,
    width: 22,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.baseX4,
    alignSelf: 'center',
  },
});
